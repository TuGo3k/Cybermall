import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductIntro = () => {
  return (
    <div className="w-full h-fit flex md:flex-row flex-col px-[10vw] bg-[#666666] gap-[10vw] items-start py-[195px]">
      <div className="flex flex-col gap-8">
        <h1 className="vip_header !text-white">
          Have a Look at Our Unique Selling Proportions
        </h1>
        <button className="w-fit h-fit px-6 py-3 duration-300 rounded-full bg-[#282828] text-white font-medium text-[20px] flex items-center gap-4">
          See Our Products <MdKeyboardArrowRight size={24} />
        </button>
      </div>
      <div className="w-full h-fit gap-8 flex flex-col">
        <p className="vip_description !text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex gap-6 w-full h-fit">
          <div className="flex flex-col gap-2 w-full h-fit">
            <h1 className="vip_header !text-white">99%</h1>
            <p className="vip_description !text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full h-fit">
            <h1 className="vip_header !text-white">100%</h1>
            <p className="vip_description !text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
