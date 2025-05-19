"use client"
import { useState } from "react";
import MainContainer from "./utils/MainContainer";
import MainHeader from "./components/Home/MainHeader";
import CustomSwiper from "./utils/CustomSwiper";
import CategoryTitles from "./components/Home/CategoryTitles";
import VIPSection from "./components/Home/VIPSection";
import VipAds from "./components/Home/VIPads";
import CategorySection from "./components/Home/CategorySection";
import FiveStarSection from "./components/Home/FiveStarSection";
import TotalServices from "./components/Home/TotalServices";
import Footer from "./components/Footer";
import Iridescence from "./utils/Iridescence";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("")
  return (
 <>
     <MainContainer>
          <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <MainHeader mobileMenuOpen={mobileMenuOpen}  setMobileMenuOpen={setMobileMenuOpen} hoveredMenu={hoveredMenu}  setHoveredMenu={setHoveredMenu}/>
      <CategoryTitles  />
      <CustomSwiper />
      {/* <VipAds /> */}
      <VIPSection />
      <CategorySection/>
      <FiveStarSection/>
      <TotalServices/>
      {/* <CategorySection /> */}
    </MainContainer>
      <Footer/>
 </>
  );
}
