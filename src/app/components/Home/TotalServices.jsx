"use client"
import React from 'react'
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import totalservicesdata from '@/data/totalservicesdata';
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TotalServicesCard from '@/app/utils/TotalServicesCard';
import getRequest from "@/app/utils/api/getRequest";
const TotalServices = () => {
    const [page, setPage] = useState(0);
      const [cardWidth, setCardWidth] = useState(12); // default for base
      const [gapPx, setGapPx] = useState(64);
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      const [itemsPerPage, setItemsPerPage] = useState(1);
    useEffect(() => {
      const handleResize = () => {
        const vw = window.innerWidth;
        if (vw >= 1024) {
          // Desktop: lg:w-[12vw]
          setItemsPerPage(Math.floor(100 / 12)); // ≈8
        } else {
          // Mobile: w-[20vw]
          setItemsPerPage(Math.floor(100 / 20)); // ≈5
        }
      };
  
      handleResize(); // Run once on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  const maxPage = Math.ceil(datas.length / itemsPerPage) - 1;

  const prevSlide = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (page < maxPage) setPage((prev) => prev + 1);
  };

    useEffect(() => {
      if(isLoading){
        getRequest({route: '/product?type=normal', setValue: setDatas, setIsLoading: setIsLoading})
      }
    }, [isLoading])


  // const nextSlide = () => {
  //   setPage((prev) => (prev + 1) % datas.length);
  // };

  // const prevSlide = () => {
  //   setPage((prev) => (prev - 1 + datas.length) % datas.length);
  // };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };

      useEffect(() => {
        const updateSizes = () => {
          if (window.innerWidth >= 1024) {
            // Tailwind 'lg' is 1024px+
            setCardWidth(12);
            setGapPx(64);
          } else {
            setCardWidth(12);
            setGapPx(16);
          }
        };
        updateSizes(); // Set initially
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes);
      }, []);
  // const CARD_WIDTH = 12; // <-- таарсан утга
  // const GAP_PX = 64;     // Tailwind gap-12 = 3rem = 48px
  
  //  useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPage((prev) =>
  //       prev === datas.length - 1 ? 0 : prev + 1
  //     );
  //   }, 3000); // scroll every 3 seconds

  //   return () => clearInterval(interval); // cleanup
  // }, [datas.length]);
  return (
    <div className="flex flex-col gap-5 lg:gap-10 py-[2vw]">
    <div className="flex justify-between">
      {" "}
      <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
        Нийт үйлчилгээ
      </h1>
      <div className="relative flex gap-10">
        <div className=" gap-4 lg:flex hidden">
          <button
            onClick={prevSlide}
            disabled={page === 0}
            className={`bg-white shadow-md rounded-full px-4 hover:bg-gray-100 ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={20} className="text-black z-50" />
          </button>
          <button
            onClick={nextSlide}
            disabled={page === maxPage}
            className={`bg-white shadow-md rounded-full px-4 hover:bg-gray-100 ${
              page === maxPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={20} className="text-black z-50" />
          </button>
        </div>
       <p className="flex items-center lg:text-xl gap-1 lg:gap-2 bg-white rounded-full shadow-md hover:bg-gray-100 pl-2 lg:pl-4 lg:pr-3 cursor-pointer">
                   view all{" "}
                   <MdKeyboardArrowRight className="lg:size-5 text-[#008ecc]" />
                 </p>
      </div>
    </div>
    <div className="overflow-hidden w-full ">
    <motion.div
className="flex w-full  gap-4 lg:gap-16"
animate={{
  x: `calc(-${page * cardWidth}vw - ${page * gapPx}px)`
}}
transition={{ type: "spring", stiffness: 100, damping: 15 }}
drag="x"
dragConstraints={{ left: 0, right: 0 }}
onDragEnd={handleDragEnd}
>
{datas.map((el, index) => (
  <motion.div
    key={index}
    className="lg:w-[12vw] w-[20vw] flex-shrink-0"
  >
    <TotalServicesCard
        category={el.category}
        title={el.title}
        covers={el.covers[0]}
    />
  </motion.div>
))}
</motion.div>

    </div>
  </div>
  )
}

export default TotalServices