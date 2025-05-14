"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopCard from "@/app/utils/TopCard";
import data from "@/data/services";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const VIPSection = () => {
  const [page, setPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(16);
  const [gapPx, setGapPx] = useState(40);
  const [isLoading, setIsLoading] = useState(false)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    if (isLoading) {
      getRequest({ route: '/product?sort=-createdAt&type=vip', setValue: setDatas, setIsLoading })
    }
  }, [isLoading]);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + data.length) % data.length);
  };

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
        setCardWidth(16);
        setGapPx(40);
      } else {
        setCardWidth(28);
        setGapPx(8);
      }
    };
    updateSizes(); // Set initially
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);
  // const CARD_WIDTH = 16; // Must match w-[16vw]
  // const GAP_PX = 40; // Tailwind's gap-10 = 2.5rem = 40px

  return (
    <div className="flex flex-col lg:gap-10 gap-5 py-[1vw]">
      <div className="flex justify-between">
        {" "}
        <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
          Онцгой зар
        </h1>
        <div className="relative flex gap-10">
          <div className="lg:flex hidden gap-4 ">
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

          <p className="flex items-center lg:text-xl gap-1 lg:gap-2 bg-white rounded-full shadow-md hover:bg-gray-100 pl-2 lg:pl-4 lg:pr-3 cursor-pointer">
            view all{" "}
            <MdKeyboardArrowRight className="lg:size-5 text-[#008ecc]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden w-full flex-">
          <motion.div
            className="flex gap-2  lg:gap-10 px-2 lg:px-6 "
            animate={{
              x: `calc(-${page * cardWidth}vw - ${page * gapPx}px)`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {datas.map((el, index) => (
              <motion.div key={index} className=" w-[28vw] lg:w-[16vw] flex-shrink-0">
                <TopCard
                  title={el.title}
                  price={el.price}
                  imageUrl={`http://localhost:4000/uploads/${el.covers[0]}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <button
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
        </button>
      </div>

      <div className="bg-red-100 rounded-xl p-4 flex items-center justify-evenly ">
        <div className="lg:size-48 size-24 relative">
          <img
            src="/assets/Home/location.png"
            alt="Service Map"
            fill="true"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative  flex flex-col  justify-between ">
          <p className="text-s text-red-700 mb-1">Илүү тав тухтай</p>
          <h2 className="lg:text-4xl text-lg font-bold text-red-900 leading-tight text-wrap">
            Үйлчилгээ газрын
            <br />
            зурагаас
          </h2>
          <p className="text-s mt-2 lg:mt-1 lg:text-black lg:bg-transparent bg-[#c10007] w-fit rounded-xl px-3  text-white lg:absolute bottom-0 right-0 cursor-pointer hover:text-[#fff]">
            дэлгэрэнгүй
          </p>
        </div>
      </div>
    </div>
  );
};

export default VIPSection;
