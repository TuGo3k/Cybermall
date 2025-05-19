
import React from 'react';
import Iridescence from '@/app/utils/Iridescence';
export default function TotalServicesCard({ category, title, covers }) {
  return (
   <div className="p-1 transition-all transform hover:scale-105 rounded-lg  overflow duration-300 relative ">
   <div className='absolute top-0 left-0 w-full h-full  rounded '>
      <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={1.0} />
   </div>
     <div className="flex flex-col items-center   shadow-md hover:shadow-xl group  cursor-pointer  animate-gradient rounded-lg"
   
    >
   

  <div className="relative size-24 lg:w-full flex items-center justify-center transition-all duration-300  animate-gradient h-[23vh]">
        <img
          src={covers || "/assets/Home/product.jpg"}
          alt={title || "Product"}
          className="rounded-t-lg object-cover size-20 lg:w-full h-full border-white "
        />
 

    {/* Your content goes here */}
  </div>
      {/* Image Container with hover border gradient */}
    

      {/* Category */}
    <div className='w-full h-full z-10 flex bg-white/60 backdrop-blur-sm flex-col items-center justify-center p-2 rounded-b-lg'>
        <p className="mt-4 text-sm lg:text-base text-gray-400 font-medium uppercase tracking-wide z-10">
        {category || "This is category"}
      </p>

      {/* Title */}
      <h3 className="text-center mt-1 text-base lg:text-xl font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 z-10">
        {title || "This is title"}
      </h3>
    </div>
    </div>
   </div>
  );
}
