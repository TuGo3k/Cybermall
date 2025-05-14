import React from "react";
import CreateAds from "../components/create-ads/CreateAds";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <section className="gap-5 w-full h-fit flex flex-col bg-white">
      <Header />
      <CreateAds />
      <Footer />
    </section>
  );
};

export default page;
