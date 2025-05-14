import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import apiData from '@/data/apidata';
import { BiLoaderCircle } from 'react-icons/bi';
import { useAuth } from '@/context/AuthProvider';
import QRCode from 'react-qr-code';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PaymentModal({ open, handleClose, type, handleSubmit, setContent, setImages }) {
    const [createdInvoice, setCreatedInvoice] = React.useState(false);
    const [invoiceId, setInvoiceId] = React.useState('');
    const [invoiceLoader, setInvoiceLoader] = React.useState(false);
    const [checkLoader, setCheckLoader] = React.useState(false);
    const [qpayValue, setQpayValue] = React.useState('');
    const [urls, setUrls] = React.useState([]);
    const { user, loading } = useAuth();

    if (loading) {
        return <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <BiLoaderCircle className="animate-spin" />
        </Modal>

    }

    const checkPayment = () => {
        setCheckLoader(true);
        axios.get(apiData.api_url + '/qpay/callback/' + invoiceId)
            .then((res) => {
                handleSubmit().then(() => {
                    handleClose();
                    setCheckLoader(false);
                    setCreatedInvoice(false);
                    setContent({ title: "", description: "", price: "", location: "", address: "", file: "" });
                    setImages([]);
                    toast.success('Таны зар амжилттай нэмэгдлээ');
                });
            })
            .catch((err) => {
                setCheckLoader(false);
                toast.error('Төлбөр хийгдээгүй байна');
                console.log(err);
            });
    }

    const createInvoice = () => {
        setInvoiceLoader(true);
        axios.post(apiData.api_url + '/invoice', {
            price: type === 'vip' ? 2 : 1,
        })
            .then((res) => {
                // console.log(res.data.data);
                axios.post(apiData.api_url + '/qpay/' + res.data.data._id, {
                    userId: user._id,
                }).then((e) => {
                    setInvoiceId(e.data.invoice.sender_invoice_id);
                    setUrls(e.data.data.urls);
                    setQpayValue(e.data.data.qr_text);
                    setCreatedInvoice(true);
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Төлбөрийн хэсэг
                    </Typography>
                    {!createdInvoice && urls.length === 0 ? <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {type === 'vip' ? <p>2₮</p> : <p>1₮</p>}
                        <button
                            onClick={() => {
                                if (invoiceLoader) {
                                    return toast.warn('Төлбөр шалгаж байна');
                                } else {
                                    createInvoice()
                                }
                            }}
                            className={`w-full md:w-auto mt-4 font-semibold px-6 py-2 rounded-full transition
                                 ${invoiceLoader ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 text-white'
                                }`}
                        >
                            {invoiceLoader ? <BiLoaderCircle className="animate-spin" /> : 'Төлбөр төлөх'}
                        </button>
                    </Typography>
                        :
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {type === 'vip' ? <p>2₮</p> : <p>1₮</p>}
                            <QRCode value={qpayValue} className='w-[50%] h-[50%]' />
                            <div className='grid grid-cols-5 gap-2 mt-4'>
                                {urls && urls.map((e) => (
                                    <a className='h-10 w-10' href={e.link}>
                                        <img src={e.logo} alt="" />
                                    </a>
                                ))}
                            </div>
                            <button
                                onClick={() => {
                                    if (checkLoader) {
                                        return toast.error('Төлбөр шалгаж байна');
                                    } else {
                                        checkPayment()
                                    }
                                }}
                                className={`w-full md:w-auto mt-4 font-semibold px-6 py-2 rounded-full transition
                                 ${checkLoader ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 text-white'
                                    }`}
                            >
                                {checkLoader ? <BiLoaderCircle className="animate-spin" /> : 'Төлбөр шалгах'}
                            </button>
                        </Typography>}
                </Box>
            </Modal>
        </div>
    );
}
