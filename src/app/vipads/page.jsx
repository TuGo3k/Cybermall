"use client"
import getRequest from "@/app/utils/api/getRequest";
import vipdata from "@/data/vipdata";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const page = () => {
    const [isLoading ,setIsLoading ] = useState(true)
    const [datas , setDatas] = useState([])

    useEffect(() => {
      if(isLoading){
        getRequest({route: '/product?sort=-createdAt&type=vip', setValue: setDatas , setIsLoading: setIsLoading})
      }
    },[isLoading])

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-7 md:gap-y-[109px] gap-y-[50px] w-full h-fit pb-[10px]">
      {vipdata.map((data, index) => (
        <div
          className="md:gap-8 gap-3 flex flex-col ads_card group cursor-pointer"
          key={index}
        >
          {/* Container for the image with a fixed height */}
          <div className="relative w-full md:h-[200px] lg:h-[275px] h-[150px] rounded-[20px] overflow-hidden">
            <Image
              src={data.image}
              fill
              alt="image"
              className="group-hover:scale-110 transition-all duration-300"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Your text content below the image */}
          <div className="w-full h-fit flex flex-col gap-2 md:gap-5">
            <div className="flex items-center gap-1 text-[10px] md:text-[16px] md:gap-2.5">
              <Image
                src={data.profile}
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <p>{data.author}</p>
              <GoDotFill />
              <p>{data.date}</p>
            </div>
            <p className="md:!text-[20px] text-[12px]">
              Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
