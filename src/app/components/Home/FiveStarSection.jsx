"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import phoneadsdata from "@/data/phoneadsdata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FiveStarCard from "@/app/utils/FiveStarCard";
import Link from "next/link";
import Iridescence from "@/app/utils/Iridescence";
import getRequest from "@/app/utils/api/getRequest";
// const CARD_WIDTH = 28; // vw
// const GAP_PX = 48; // Tailwind gap-12 = 3rem
import backgroundVariants from "@/app/components/backgroundVariants"


const FiveStarSection = () => {
  const [instant, setInstant] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);
  const [page, setPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(16); // default for base
  const [gapPx, setGapPx] = useState( 40);
    const [itemsPerPage, setItemsPerPage] = useState(1);

  // Clone эхний 3 картыг төгсгөлд нэмнэ
  const extendedData = [...datas, ...datas.slice(0, 4)];

  useEffect(() => {
    if(isLoading){
      getRequest({route: '/fivestarcompany', setValue: setDatas, setIsLoading: setIsLoading})
    }
  }, [isLoading])
  // console.log(datas)
 
  
  // const nextSlide = () => {
  //   setPage((prev) => prev + 1);
  // };

  // const prevSlide = () => {
  //   setPage((prev) => (prev === 0 ? datas.length - 1 : prev - 1));
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
        setCardWidth(16);
        setGapPx( 40);
      } else {
        setCardWidth(42);
        setGapPx(16);
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
  const maxPage = Math.ceil(datas.length) - 1;

  const prevSlide = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

const nextSlide = () => {
// alert(page)
  if (page < maxPage) {
    setPage((prev) => prev + 1);
  }
};


  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(intervalRef.current);
  // }, []);

  // useEffect(() => {
  //   if (page === datas.length) {
  //     setTimeout(() => {
  //       setInstant(true);
  //       setPage(0);
  //       setTimeout(() => setInstant(false), 50);
  //     }, 300);
  //   }
  // }, [page]);

const randomizedBackgrounds = useMemo(() => {
  return datas.map((_, index) => {
    return backgroundVariants[index % backgroundVariants.length];
  });
}, [datas]);

  return (
    <div className="flex flex-col gap-5 lg:gap-10 py-[1vw]">
            {/* <Iridescence
  color={[1, 1, 1]}
  mouseReact={false}
  amplitude={0.1}
  speed={1.0}
/> */}
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
          5 одтой{" "}
          <span className="lg:text-3xl text-[#008ecc]">Байгууллага</span>
        </h1>
        {/* <div id="realstar">
          <div class="star-container1">
            <div class="star-shape1">
              <div class="star-container2">
                <div class="star-shape2"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative flex gap-10">
          <div className="hidden lg:flex gap-4">
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
             disabled={page === maxPage}
              onClick={nextSlide}
              className={`bg-white shadow-md rounded-full px-4 hover:bg-gray-100 ${
                page === maxPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight size={20} className="text-black z-50" />
            </button>
          </div>
          <Link
            href={"/business-category"}
            className="flex items-center lg:text-xl gap-1 lg:gap-2 bg-white rounded-full shadow-md hover:bg-gray-100 pl-2 lg:pl-4 lg:pr-3 cursor-pointer"
          >
            view all
            <MdKeyboardArrowRight className="lg:size-5 text-[#008ecc]" />
          </Link>
        </div>
      </div>

      {/* <div id="star">
        <div className="card ">
          <div className="inner">
            <h1>Animate Border</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae accusamus provident, iste quam cum laudantium quaerat?
              In vero mollitia quos!
            </p>
          </div>
        </div>
      </div> */}
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex w-full gap-4 lg:gap-10"
            animate={{
              x: `calc(-${page * cardWidth}vw - ${page * gapPx}px)`,
            }}
            transition={
              instant
                ? { duration: 0 }
                : { type: "spring", stiffness: 100, damping: 15 }
            }
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {extendedData.map((el, index) => (
              <motion.div
                key={index}
                className="w-[42vw] lg:w-[16vw] h-20 lg:h-auto flex-shrink-0"
              >
                <FiveStarCard
                  name={el.name}
                  logo={el.logo}
                  image={el.image}
                  bgcolor={el.bgcolor}
                  labelcolor={el.labelcolor}
                  background={randomizedBackgrounds[index % randomizedBackgrounds.length]} // loop protection
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

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {datas.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === page % datas.length
                ? "w-6 bg-[#008ecc]"
                : "w-2 bg-[#f5f5f5]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FiveStarSection;
