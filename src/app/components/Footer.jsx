import React from "react";
import footerdata from "@/data/footerdata";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#008ecc] px-[8vw] overflow-hidden">
      {/* Main Footer */}
      <div className="w-full min-h-[60vh] flex flex-col lg:flex-row lg:justify-around py-5 lg:py-10 gap-5 lg:gap-10 relative">
        {/* Left Section */}
        <div className="flex flex-col gap-5 lg:gap-10 text-white z-20">
          <h1 className="text-2xl lg:text-3xl">Uilchilgee.mn</h1>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold">Contact Us</p>

            {/* WhatsApp */}
            <div className="flex gap-3 items-start">
              <FaWhatsapp size={25} />
              <div className="flex flex-col gap-1 text-sm">
                <h3 className="font-semibold">WhatsApp</h3>
                <p>341094032</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <BiPhoneCall size={25} />
              <div className="flex flex-col gap-1 text-sm">
                <h3 className="font-semibold">Phone</h3>
                <p>341094032</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-10 text-white z-20">
          {footerdata.map((el, index) => (
            <div key={index} className="flex flex-col gap-3 min-w-[150px]">
              <h1 className="text-xl border-b border-white pb-1">{el.title}</h1>
              {el.subitems.map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm cursor-pointer hover:underline"
                >
                  {"• "}{item.title}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Decorative Circle */}
        <div className="hidden lg:block absolute size-140 border-4 border-[#0c9bda] p-5 bg-[#008ecc] -top-60 -right-30 rounded-full z-10">
          <div className="w-full h-full border-4 border-[#0c9bda] p-10 bg-[#0c9bda] rounded-full"></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex w-full py-6 justify-center border-t border-[#0c9bda]">
        <p className="text-center text-sm lg:text-2xl flex items-center gap-2 text-white flex-wrap">
          <LuCopyright />
          2025 All rights reserved. Ogtorgui AI Tech LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
