// components/CategoryCards.tsx

import apiData from "@/data/apidata";
import Image from "next/image";

export default function CategoryCards({ title, image }) {
  console.log(image);
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="size-20 lg:size-48 rounded-full bg-[#f5f5f5] hover:border hover:border-blue-500 transform-all shadow-sm flex items-center justify-center overflow-hidden p-4 lg:p-7 ">
        <img
          src={apiData.file_api_url + image}
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="mt-2 text-center text-sm lg:text-xl">{title}</p>
    </div>
  );
}
