"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import phoneadsdata from "@/data/phoneadsdata";
import FiveStarCard from "@/app/utils/FiveStarCard";

const BusinessContent = () => {
  const [search, setSearch] = useState("");
  const extendedData = [...phoneadsdata, ...phoneadsdata.slice(0, 3)];
  const [isLoading , setIsLoading ]= useState(true)
    const [datas , setDatas] = useState([])
  
    useEffect(() => {
      if(isLoading){
        getRequest({route: '/fivestarcompany', setValue: setDatas, setIsLoading: setIsLoading})
      }
    }, [isLoading])
    console.log(datas)


  return (
    <div className="flex flex-col gap-10 justify-between">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">
        5 одтой <span className="text-[#008ecc]">Байгууллага</span>
      </h1>

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
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {extendedData.map((el, index) => (
          <FiveStarCard
            key={index}
            name={el.name}
            logo={el.logo}
            image={el.image}
            bgColor={el.bgColor}
            labelColor={el.labelColor}
          />
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-5 py-10">
        <h3 className="text-center">Showing 1-12 of 24 item(s)</h3>
        <button className="text-base sm:text-lg text-white bg-black px-4 py-2 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};
export default BusinessContent;
