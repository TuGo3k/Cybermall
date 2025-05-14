"use client";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import getRequest from "@/app/utils/api/getRequest";

const CategoryTitles = () => {
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      Promise.all([
        getRequest({ route: "/category", setValue: setCategories }),
        getRequest({ route: "/subcategory", setValue: setSubCategories }),
      ]).finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <div className="hidden md:flex gap-10 text-black relative items-center">
      {categories.map((el, index) => (
        <div
          key={index}
          className="relative px-2"
          onMouseEnter={() => setHoveredMenu(el._id)}
          onMouseLeave={() => setHoveredMenu("")}
        >
          <button
            className={`rounded-full p-2 cursor-pointer flex items-center gap-1 
          ${el._id === hoveredMenu ? "bg-[#008ecc] text-white" : "text-black"}`}
          >
            {el.title}
            <IoIosArrowDown
              className={`${el._id === hoveredMenu ? "text-white" : "text-black"}`}
            />
          </button>

          {/* Dropdown */}
          {hoveredMenu === el._id && (
            <div
              className="absolute top-full left-0 shadow-md p-2 w-auto bg-white z-10"
              onMouseEnter={() => setHoveredMenu(el._id)}
              onMouseLeave={() => setHoveredMenu("")}
            >
              {subCategories
                .filter((e) => hoveredMenu === e.category)
                .map((item, i) => (
                  <Link key={i} href={item.link || "#"}>
                    <button className="block text-nowrap w-full min-w-30 text-left p-2 hover:bg-gray-200 bg-white">
                      {item.title || "Untitled"}
                    </button>
                  </Link>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryTitles;