"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import getRequest from "./api/getRequest";
import apiData from "@/data/apidata";

const CustomSwiper = ({ darkmode = false }) => {
  const [page, setPage] = useState(0);
  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [bgcolor, setBgcolor] = useState([])
 console.log(datas)
  useEffect(() => {
    if(isLoading){
      getRequest({route: '/fivestarcompany', setValue: setDatas, setIsLoading: setIsLoading})
      setBgcolor(datas.bgcolor)
    }
  }, [isLoading])
  useEffect(() => {
    if (isLoading) {
      getRequest({ route: '/slider', setValue: setSliders, setLoading: setIsLoading })
    }
  }, [isLoading])
console.log(sliders)
  const nextSlide = () => {
    setPage((prev) => (prev + 1) % sliders.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute -left-5  lg:-left-10 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md rounded-full p-2 lg:p-7 hover:bg-gray-100 "
      >
        <ChevronLeft size={25} className="text-black z-50" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-5  lg:-right-10 top-1/2 -translate-y-1/2 z-30 bg-white shadow-md rounded-full p-2 lg:p-7 hover:bg-gray-100"
      >
        <ChevronRight size={25} className="text-black z-50" />
      </button>

      <div className=" lg:w-full overflow-hidden relative">
        {/* Arrows */}
     
        <motion.div
          className="flex w-full relative min-h-100 "
          animate={{ x: `-${page * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}

        >
          {sliders.map((testimonial, idx) => (
            <motion.div key={idx} className="w-full flex-shrink-0 max-h-100 h-full z-20 relative">
              <div
                className={`p-6 rounded-lg text-center w-full transition-all duration-500 min-h-100  ${darkmode
                  ? "bg-[#170f2f] text-white"
                  : "bg-blue-400 text-black"
                  } hover:bg-gradient-to-r hover:from-[#6f94e5] hover:to-[#f580a9] hover:text-black
                  flex justify-around items-center z-20`}
                  style={{ backgroundColor: bgcolor }}
              >
                <div>
                  <p className="text-5xl font-bold text-white italic text-left">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-white/80 text-left mt-4">
                    {testimonial.content}
                  </p>
                </div>
                <img src={apiData.file_api_url + testimonial.image} alt="" className="size-72 z-20" />
                <div className="hidden lg:block absolute size-120 border-4 border-[#0c9bda] p-5 bg-[#008ecc] -top-80 -right-0 rounded-full z-10">
          <div className="w-full h-full border-4 border-[#0c9bda] p-10 bg-[#0c9bda] rounded-full"></div>
        </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
     
      </div>
      <div className="flex justify-center  gap-2 z-50 absolute bottom-5 lg:bottom-20 left-1/2 lg:left-1/10 transform  -translate-x-1/2">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`h-2 rounded-full transition-all cursor-pointer duration-300 ${index === page ? "w-6 bg-white" : "w-2 bg-white"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
