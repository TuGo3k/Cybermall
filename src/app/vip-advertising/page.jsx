"use client"
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VipMainSection from "../components/vip-advertising/VipMainSection";
import getRequest from "../utils/api/getRequest";

const page = () => {
  const [isLoading ,setIsLoading ] = useState(true)
  const [products , setProducts] = useState([])

  useEffect(() => {
    if(isLoading){
      getRequest({route: '/product?sort=-createdAt&type=vip', setValue: setProducts , setIsLoading: setIsLoading})
    }
  },[isLoading])

  return (
    <section className="w-full h-fit flex flex-col bg-white">
      <Header />
      <VipMainSection product={products} />
      <Footer />
    </section>
  );
};

export default page;
