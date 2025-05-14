import apiData from "@/data/apidata";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const imageUrl = product?.covers?.[0]
    ? apiData.file_api_url + product.covers[0]
    : "https://via.placeholder.com/300";
    
  return (
    <div className="rounded-lg shadow-md bg-white hover:scale-105 duration-150">
      <div className="relative bg-gray-300 w-full h-[20vh] lg:h-[45vh] rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={product.title}
          className="object-cover object-center w-full h-full"
        />
        <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
          ${product.price}
        </span>
      </div>

      <div className="mt-3 w-full flex flex-col items-start justify-start px-4 pb-4">
        <h2 className="text-md font-medium text-gray-800">{product.title}</h2>

        <div className="flex w-full items-center justify-between mt-1">
          <span className="text-black font-semibold text-sm">
            ${product.price}
          </span>
          <FiPlusCircle className="text-gray-500 text-2xl cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
