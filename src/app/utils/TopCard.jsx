"use client";
import React from "react";

const TopCard = ({ title, price, imageUrl }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
    {/* TOP Label */}
    <div className="absolute top-0 right-0 bg-[#008ecc] text-white text-xs font-semibold px-2 lg:px-4 py-2 lg:py-4 sm:py-6 rounded-bl-xl">
      TOP
    </div>

    {/* Image Placeholder */}
    <div className="bg-gray-100 h-36 lg:h-80 w-full">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full object-center" />
    </div>

    {/* Content */}
    <div className="p-2 lg:p-3">
      <h3 className="text-md lg:text-lg font-medium text-black line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center gap-2 mt-1">
        <p className="text-black font-semibold text-base sm:text-lg">
          ₹{price}
        </p>
        {/* <p className="text-gray-500 line-through text-sm sm:text-base">
          ₹{originalPrice}
        </p> */}
      </div>

      <hr className="my-2 border-gray-200 lg:flex hidden" />
    </div>
  </div>
  );
};

export default TopCard;
