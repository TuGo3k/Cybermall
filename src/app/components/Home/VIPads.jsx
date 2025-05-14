"use client"
import React from "react";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VIPads = () => {
  const router = useRouter()

  return (
    <div className="bg-[#01b4ad] flex flex-col md:flex-row justify-between items-center rounded-md px-6 py-6 lg:px-[5vw] lg:py-0 md:pl-20 lg:gap-6 md:gap-0">
      <h1 className="text-2xl lg:text-4xl text-white font-bold text-center md:text-left">
        VIP үйлчилгээ
      </h1>

      <FaCrown
        
        className="size-40 text-[#d0a425] hidden md:block" 
      />

      <div className="flex flex-col gap-1 text-white text-center md:text-left">
        <h4 className="text-sm md:text-base">Илүү тав тухтай</h4>
        <h2 className="text-2xl md:text-4xl font-bold">VIP зар-луу үсрэх</h2>
      </div>

      <div onClick={() => router.push('/vip-advertising')} className="mt-4 md:mt-0 cursor-pointer">
        <span className="px-4 py-2 bg-white text-black rounded-md text-sm lg:text-2xl hover:bg-gray-200">
          Дэлгэрэнгүй
        </span>
      </div>
    </div>
  );
};

export default VIPads;
