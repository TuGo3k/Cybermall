import React from "react";
import VipSection from "./VipSection";
import VipDetails from "./VipDetail";
import MainVipAds from "./MainVipAds";
import ProductIntro from "./ProductIntro";
import CommonQuestions from "./CommonQuestions";

const VipMainSection = ( { product } ) => {
  return (
    <VipSection>
      <VipDetails />
      <MainVipAds product={product} />
      <ProductIntro />
      <CommonQuestions />
    </VipSection>
  );
};

export default VipMainSection;
