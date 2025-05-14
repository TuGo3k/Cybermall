"use client";
import { useEffect, useState } from "react";
import MultiImageUpload from "../create-ads/UploadImage";
import axios from "axios";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { useAuth } from "@/context/AuthProvider";
import apiData from "@/data/apidata";
import PaymentModal from "./PaymentModal";
import getRequest from "@/app/utils/api/getRequest";

export default function CreateItem({ setOpenLocation, map }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    address: '',
    type: "",
    file: "",
    subCategory: "",
    category: "",
  });
  const [images, setImages] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (fetchLoading) {
      Promise.all([
        getRequest({ route: '/category', setValue: setCategories }),
        getRequest({ route: '/subcategory', setValue: setSubCategory }),
      ]).finally(() => setFetchLoading(false));
    }
  }, [fetchLoading])

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (images.length === 0) {
      toast.error("Зураг заавал оруулна уу");
      return;
    }
    for (const image of images) {
      if (image.file.size > 100 * 1024 * 1024) {
        toast.error("Файл 100MB-ээс их хэмжээтэй байна.");
        return;
      }
    }

    const formData = new FormData();
    formData.append("title", content.title);
    formData.append("description", content.description);
    formData.append("price", content.price);
    formData.append("location", content.location);
    formData.append("address", content.address);
    formData.append("map", JSON.stringify(map));
    formData.append("user_id", user._id);
    formData.append("user_name", user.name);
    formData.append('type', content.type || 'normal')
    formData.append("subCategory", content.subCategory);
    formData.append("category", content.category);

    images.forEach((image) => {
      formData.append("file", image.file);
    });
    setIsLoading(true);
    try {
      const res = await axios.post(apiData.api_url + "/api/v1/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Амжилттай хадгалагдлаа!");
      console.log(res.data);
      setContent({ title: "", description: "", price: "", location: "", address: "", file: "" });
      setImages([]);
    } catch (err) {
      toast.error("Алдаа гарлаа");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 pt-4 pb-10 bg-gray-50 h-full px-[8vw] relative">
      {/* Left Section */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full md:w-2/3">
        <div className="bg-gray-400 text-lg md:text-2xl text-white px-4 py-4 rounded-t-md font-semibold">
          Зар нэмэх
        </div>
        <div className="p-4 md:p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Зарын Нэр </label>
                <input name="title" onChange={handleChange} value={content.title} className="w-full border rounded px-3 py-2" type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Үнэ</label>
                <input name="price" onChange={handleChange} value={content.price} className="w-full border rounded px-3 py-2" type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">  Тайлбар </label>
                <input name="description" onChange={handleChange} value={content.description} className="w-full border rounded px-3 py-2" type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Байршил Оруулах
                </label>
                <input
                  name="location"
                  onChange={handleChange}
                  value={content.location}
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Хаяг</label>
              <input name="address" onChange={handleChange} value={content.address || ""} className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Зарын төрөл
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={content.type}
                name="type"
                onChange={handleChange}
              >

                <option value="normal">энгийн</option>
                <option value="special">онцгой</option>
                <option value="vip">VIP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Зарын ангилал
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={content.subCategory}
                name="subCategory"
                onChange={handleChange}
              >

                <option value="normal">энгийн</option>
                {subCategory.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Зарын дэд ангилал
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={content.category}
                name="category"
                onChange={handleChange}
              >

                <option value="normal">энгийн</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <button
                value={content.maptolocation}
                onClick={() => setOpenLocation(true)}
                className="bg-blue-500 text-white  py-2 px-4 rounded-full"
              >
                Байршил оруулах
              </button>
              <button
                onClick={() => {
                  if (content.type === "special" || content.type === "vip") {
                    setOpen(true);
                  } else {
                    handleSubmit();
                  }
                }}
                type="submit"
                disabled={isLoading}
                className={`w-full md:w-auto mt-4 font-semibold px-6 py-2 rounded-full transition ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800 text-white'
                  }`}
              >
                {isLoading ? <BiLoaderCircle className="animate-spin" /> : 'Зар оруулах'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="bg-gray-100 border border-gray-300 rounded-lg w-full md:w-1/3 h-48 md:h-[240px]"> */}

      <MultiImageUpload images={images} setImages={setImages} />
      <PaymentModal setImages={setImages} setContent={setContent} handleSubmit={handleSubmit} open={open} handleClose={handleClose} />
      {/* </div> */}
    </div>
  );
}
