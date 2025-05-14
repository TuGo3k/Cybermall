"use client";
import DescriptionSection from "@/app/components/Category-detail/DescriptionSection";
import DetailSection from "@/app/components/Category-detail/DetailSection";
import RelativeItem from "@/app/components/Category-detail/RelativeItem";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import getRequest from "@/app/utils/api/getRequest";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [payOpen, setPayOpen] = useState(false);
  const { id } = useParams()
  const [product , setProduct] = useState({})
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
      if(isLoading) {
        getRequest({route: '/product/'+id , setValue: setProduct , setIsLoading: setIsLoading})
      }
  },[isLoading])

  if(isLoading) {
    return <div className="loader"></div>
  }

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
      {id}
      <DetailSection setPayOpen={setPayOpen} data={product} />
      <DescriptionSection data={product}/>
      {/* <RelativeItem data={product} /> */}
      <Footer />
    </div>
  );
};

export default Page;
