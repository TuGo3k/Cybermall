"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import RelativeItem from "../components/Category-detail/RelativeItem";
import DescriptionSection from "../components/Category-detail/DescriptionSection";
import DetailSection from "../components/Category-detail/DetailSection";
import Footer from "../components/Footer";
import PaymentCard from "../components/Category-detail/PaymentCard";

const Page = () => {
  const [payOpen, setPayOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white relative">
      <Header />
      <div
        className={`w-screen h-screen ${
          payOpen ? "fixed" : "hidden"
        } top-0 left-0 z-50`}
      >
        {/* <PaymentCard setPayOpen={setPayOpen} /> */}
      </div>
      <DetailSection setPayOpen={setPayOpen} />
      <DescriptionSection />
      <RelativeItem />

   
      <Footer />
    </div>
  );
};

export default Page;
