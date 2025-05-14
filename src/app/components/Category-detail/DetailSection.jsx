"use client";
import apiData from "@/data/apidata";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const DetailSection = ({ setPayOpen, data }) => {
  const [selectedTime, setSelectedTime] = useState("13:00 - 14:00");

  if (!data) return <p>Loading...</p>;

  return (
    <div className="px-4 md:px-[8vw] w-full h-full flex flex-col lg:flex-row py-10 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4 h-auto lg:h-[35vw]">
        <div className="flex lg:flex-col gap-4 w-full lg:w-1/3">
          {data.covers?.map((cover, i) => (
            <div key={i} className="flex-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={apiData.file_api_url + cover}
                className="w-full h-full object-cover"
                alt={`thumb-${i}`}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-3/4 rounded-lg overflow-hidden">
          <img
            src={data.covers?.[0] ? apiData.file_api_url + data.covers[0] : ""}
            alt="main"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6 p-6 bg-white flex flex-col rounded-lg justify-between">
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <div className="flex items-center text-gray-700">
              <span className="text-2xl font-semibold">${data.price}</span>
              <span className="mx-2 text-gray-500">|</span>
              <div className="flex items-center text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="w-4 h-4" />
                  ))}
                <span className="ml-2 text-gray-500">(32 сэтгэгдэл)</span>
              </div>
            </div>
          </div>

          <div className="max-h-[30vh] border border-amber-300 rounded p-3 overflow-y-scroll">
            <p className="text-gray-600 whitespace-pre-line">
              {data.description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0">
            <button className="w-full sm:w-auto px-4 py-2 border rounded-full text-gray-700">
              {selectedTime}
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-black text-white font-semibold rounded-full">
              Цаг сонгох
            </button>
          </div>
          <button
            onClick={() => setPayOpen(true)}
            className="w-full py-3 border rounded-full text-black font-bold"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
