"use client";
import CategoryCards from "@/app/utils/CategoryCards";
import React from "react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import categoriesdata from "@/data/categoriesdata";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import getRequest from "@/app/utils/api/getRequest";
const CategorySection = () => {
  const [page, setPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(10); // default for base
  const [gapPx, setGapPx] = useState(60);
  const [itemsPerPage, setItemsPerPage] = useState(1);
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if(isLoading){
        getRequest({route: '/subcategory', setValue: setDatas, setIsLoading: setIsLoading})
      }
    }, [isLoading])
    // console.log("category ", datas)
  // const nextSlide = () => {
  //   setPage((prev) => (prev + 1) % categoriesdata.length);
  // };

  // const prevSlide = () => {
  //   setPage(
  //     (prev) => (prev - 1 + categoriesdata.length) % categoriesdata.length
  //   );
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
        setGapPx(20);
      } else {
        setCardWidth(20);
        setGapPx(12);
      }
    };
    updateSizes(); // Set initially
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

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

  // const CARD_WIDTH = 12; // Must match w-[16vw]
  // const GAP_PX = 20; // Tailwind's gap-10 = 2.5rem = 40px
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPage((prev) => (prev === categoriesdata.length - 1 ? 0 : prev + 1));
  //   }, 3000); // scroll every 3 seconds

  //   return () => clearInterval(interval); // cleanup
  // }, [categoriesdata.length]);

  return (
    <div className="flex flex-col lg:gap-10 gap-5 py-[1vw]">
      <div className="flex justify-between">
        {" "}
        <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
          Ангилал
        </h1>
        <div className="relative lg:flex gap-10 hidden">
          <div className="flex gap-4">
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
        </div>
        {/* <div className="relative lg:flex gap-10 hidden">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="  bg-white shadow-md rounded-full px-4 hover:bg-gray-100 "
            >
              <ChevronLeft size={20} className="text-black z-50" />
            </button>
            <button
              onClick={nextSlide}
              className=" bg-white shadow-md rounded-full px-4 hover:bg-gray-100"
            >
              <ChevronRight size={20} className="text-black z-50" />
            </button>
          </div>
        </div> */}
      </div>
      <div className="relative">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex  w-full  justify-start gap-3 lg:gap-15 "
            animate={{
              x: `calc(-${page * cardWidth}vw - ${page * gapPx}px)`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {datas.map((el, index) => (
              <motion.div
                key={index}
                className={`lg:w-[10vw] w-[20vw]  flex-shrink-0  `}
              >
                <CategoryCards
                  title={el.title}
                  image={el.image}
                  // width={CARD_WIDTH}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={prevSlide}
          disabled={page === 0}
          className={`absolute top-1/2 -left-5 lg:hidden bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100 ${
            page === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={20} className="text-black z-50" />
        </button>

        <button
          onClick={nextSlide}
          disabled={page === maxPage}
          className={`absolute top-1/2 -right-5 lg:hidden bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100 ${
            page === maxPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight size={20} className="text-black z-50" />
        </button>

        {/* <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -left-5 lg:hidden  bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100 "
                >
                  <ChevronLeft size={20} className="text-black z-50" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -right-5 lg:hidden bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100"
                >
                  <ChevronRight size={20} className="text-black z-50" />
                </button> */}
      </div>
    </div>
  );
};

export default CategorySection;
