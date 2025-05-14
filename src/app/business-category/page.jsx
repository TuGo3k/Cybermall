"use client";
import React from "react";
import Header from ".././components/Header";
import Footer from "../components/Footer";
import BusinessContent from "../components/business-category/BusinessContent";
export default function BusinessCategory() {
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <div className="px-[5vw] lg:px-[8vw] py-8 w-full h-full flex flex-col lg:flex-row">
        <div className="content w-full px-4 sm:px-6 lg:px-10 pt-5">
          <BusinessContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
