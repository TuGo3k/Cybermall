"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../../utils/ProductCard";
import Link from "next/link";

export const VipCategory = ({ datas }) => {
  const [search, setSearch] = useState("");

  const filteredData = datas.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 justify-between">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Үйлчилгээ</h1>
      
      <div className="relative hidden lg:flex w-full">
        <input
          type="text"
          placeholder="Search An Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full p-4 pl-6 text-lg sm:text-xl border border-gray-300 focus:outline-none"
        />
        <FaSearch
          size={30}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white"
        />
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredData.map((el, index) => (
          <Link key={index} href={`/category/${el._id}`}>
            <ProductCard product={el} />
          </Link>
        ))}
      </div>

      <div className="w-full flex flex-col items-center gap-5 py-10">
        <h3 className="text-center">Showing {filteredData.length} item(s)</h3>
        <button className="text-base sm:text-lg text-white bg-black px-4 py-2 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};
