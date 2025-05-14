"use client"
import apiData from "@/data/apidata";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

const VipAds = ({product}) => {

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2  gap-x-7 md:gap-y-[109px] gap-y-[50px] w-full h-fit pb-[10px]">
      {product.map((data, index) => (
        <div
          className="md:gap-8 gap-3 flex flex-col ads_card group cursor-pointer"
          key={index}
        >
          <Link href={`/vip-adertising/${data._id}`}>
          {/* Container for the image with a fixed height */}
          <div className="relative w-full md:h-[200px] lg:h-[275px] h-[150px] rounded-[20px] overflow-hidden">
            <img
              src={data.covers && apiData.file_api_url + data.covers[0]}
              fill
              alt="image"
              className="group-hover:scale-110 transition-all duration-300 w-full object-center object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Your text content below the image */}
          <div className="w-full h-fit flex flex-col gap-2 md:gap-5">
            <div className="flex items-center gap-1 text-[10px] md:text-[16px] md:gap-2.5">
              <img
                src={data.covers && apiData.file_api_url + data.covers[0]}
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <p>{data.title}</p>
              <GoDotFill />
              <p>{data.date}</p>
            </div>
            <p className="md:!text-[20px] text-[12px]">
              {data.description}
            </p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VipAds;
