"use client"
import React, { useState } from "react";
import CreateForm from "./CreateForm";
import MultiImageUpload from "./UploadImage";
import axios from "axios";
import toast from "react-hot-toast";

const CreateAds = () => {

  const [isLoading , setIsLoading ] = useState(false)
  const [datas , setDatas] = useState([])
  const [content , setContent] = useState({
    title: "",
    description: "",
    contents: "",
    file: "",
    type: ""
  })

  const handleUpload = async () => {
    const e = new FormData()
    e.append('title' , content.title)
    e.append('description' , content.description)
    e.append('content' , content.contents)
    e.append('type', content.type || 'normal');
    e.append('file' , content.file)

    setIsLoading(true)
    try{
        const response = await axios.post('http://localhost:4000/api/v1/product' ,e, {
            headers: { 'Content-Type': 'multipart/form-data' }  
        });
        toast.success("Амжилттай орууллаа")
        setDatas((prevDatas) => [response.data.data , ...prevDatas]);
        setIsLoading(false);
    } catch (error) {
        toast.error("Алдаа гарлаа: " + error)
    }
}

  return (
    <div className="w-full h-fit gap-[43px] lg:flex-row px-[5vw] lg:px-[10vw]  gap flex flex-col">
      <CreateForm handleUpload={handleUpload} value={content} setValue={setContent}/>
      <MultiImageUpload />
    </div>
  );
};

export default CreateAds;
