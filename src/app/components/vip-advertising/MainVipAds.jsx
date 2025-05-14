"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import VipAds from "./VipAds";
import getRequest from "@/app/utils/api/getRequest";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [datas , setDatas] = useState([]);
  const [isLoading , setIsLoading ] = useState(true)

  const handleOptionClick = (option) => {
    console.log("Selected:", option);
    setOpen(false);
  };

  useEffect(() =>   {
    if(isLoading){
      getRequest({route: '/category' , setValue: setDatas , setIsLoading: setIsLoading})
    }
  },[isLoading])

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => setOpen(!open)}
        className="min-w-[245px] text-[20px] font-medium rounded-full px-6 py-3 text-white bg-[#282828] border border-black flex justify-between items-center gap-3 cursor-pointer"
      >
        {selectValue ? selectValue : "Ангилал сонгох"}
        <IoIosArrowDown size={24} />
      </button>
      {open && (
        <ul className="absolute left-0 overflow-hidden mt-2 w-full bg-[#282828] text-white shadow-lg rounded-lg z-10">
          {datas.map((option, index) => (
            <li
              key={index}
              className="px-6 py-2 hover:bg-white text-white hover:text-[#282828] cursor-pointer"
              onClick={() => {
                handleOptionClick(option);
                setSelectValue(option);
              }}
            >
              {option.title}  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MainVipAds = ({product}) => {
  return (
    <section className="w-full px-[10vw] h-fit flex flex-col gap-[60px]">
      <div className="flex sm:flex-row flex-col gap-5 justify-between items-center">
        <div className="sm:max-w-[37vw] w-full sm:text-start text-center h-fit flex flex-col gap-5">
          <h1 className="vip_header">VIP зар</h1>
          <p className="vip_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina.
          </p>
        </div>
        <Dropdown />
      </div>
      <VipAds product={product} />
    </section>
  );
};

export default MainVipAds;
