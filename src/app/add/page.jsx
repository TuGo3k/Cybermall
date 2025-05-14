"use client";
import React from "react";
import Header from "@/app/components/Header";
import CreateItem from "../components/add/CreateItem";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import { useState } from "react";
const LocationSelector = dynamic(() => import("@/app/utils/LocationSelector"), {
  ssr: false,
});
const page = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState({
    latitude: 47.918873,
    longitude: 106.917297,
  });

  const open = () => {
    setOpenLocation(true);
  };
  const close = () => {
    setOpenLocation(false);
  };

  return (
    <div className="bg-white relative">
      <Header />
      <CreateItem map={location} setOpenLocation={setOpenLocation} open={open} />
      <div
        className={`w-full h-full bg-black/50 backdrop-blur-md bg- ${openLocation
          ? "fixed  inset-0 flex items-center justify-center"
          : "hidden"
          } z-50`}
      >
        <LocationSelector
          location={location}
          setLocation={setLocation}
          close={() => setOpenLocation(false)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default page;
