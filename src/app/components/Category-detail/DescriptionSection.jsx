"use client"
export default function DescriptionSection({data}) {
  return (
    <div className="px-4 md:px-[8vw] mx-auto py-10 md:py-20">
      {/* Title with Divider */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <h2 className="text-xl md:text-2xl font-bold">Тайлбар</h2>
        <div className="w-8 md:w-10 h-[2px] bg-gray-400"></div>
      </div>

      {/* Paragraph */}
      <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
        {data?.description}
      </p>

      {/* Bullet Points */}
      <ul className="mt-8 md:mt-10 text-sm md:text-base text-gray-600 space-y-2 list-disc pl-4">
        <li>
         {data?.description}
        </li>
        {/* <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </li> */}
      </ul>
    </div>
  );
}
