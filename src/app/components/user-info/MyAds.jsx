"use client"
import getRequest from "@/app/utils/api/getRequest";
import { useAuth } from "@/context/AuthProvider";
import apiData from "@/data/apidata";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const MyAds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ads, setAds] = useState([]);
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      if (isLoading) {
        getRequest({
          route: "/product?user_id=" + user._id,
          setValue: setAds,
          setIsLoading: setIsLoading,
          errorFunction: () => console.error("Failed to fetch ads"),
        });
      }
    }
  }, [user, isLoading]);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (ads.length === 0) {
    return <div className="w-full h-fit text-center">Танд нийтэлсэн зар байхгүй байна.</div>;
  }

  return (
    <div className="w-full h-fit min-h-[666px] flex gap-[35px] flex-col p-[32px] sm:p-[64px] rounded-[10px] border border-[#e6ebf1]">
      <h1 className="font-semibold text-2xl text-[#1A3353]">Миний зарууд</h1>
      <div className="w-full h-[370px] grid grid-cols-2 md:grid-cols-3 p-0 sm:p-4 overflow-y-scroll gap-5">
        {ads.map((ad, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col gap-3 relative"
          >
            <span className="w-fit h-fit flex justify-center items-center absolute top-3 left-3 bg-[#3D3D3D] text-white rounded-[8px] font-normal text-[12px] py-1 px-3">
              <p>{ad.discount}</p>
            </span>
            <div className="w-full h-fit flex flex-col gap-3">
              <img
                src={ad.covers && apiData.file_api_url + ad.covers[0]}
                alt="image"
                className="w-full h-[120px] md:h-[170px] lg:h-[290px] object-cover rounded-[10px]"
              />
              <div className="w-full h-fit flex flex-col">
                <h1 className="font-normal text-[#404040] text-[16px] ">
                  {ad.title}
                </h1>

                <div className="w-full h-fit flex flex-row justify-between items-center">
                  <div className="w-fit h-fit flex flex-row gap-1">
                    <p className="text-[#404040] text-[12px] font-normal line-through">
                      {ad.price}₮
                    </p>
                    <p className="text-[#000] text-[12px] font-semibold ">
                      {Math.round(
                        Number(ad.price) -
                        (Number(ad.price) * parseFloat(ad.discount)) / 100
                      )}
                      ₮
                    </p>
                  </div>
                  <div className="group">
                    <span className="w-6 h-6 rounded-full group-hover:bg-red-600 border border-red-600 flex transition-all duration-300 ease-in-out justify-center items-center cursor-pointer">
                      <FaTrash
                        size={12}
                        className="text-red-600 group-hover:text-white transition-all duration-300 ease-in-out"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-fit flex justify-end items-center">
        <button className="w-fit h-fit py-3 px-12 bg-[#008ECC] text-white rounded-[4px] font-semibold ">
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default MyAds;