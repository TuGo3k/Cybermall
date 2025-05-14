import Image from "next/image";
import Iridescence from "@/app/utils/Iridescence";
export default function FiveStarCard({
  name,
  logo,
  image,
  bgcolor,
  labelcolor,
  background,
}) {
  const Star = () => (
    <div className="star-container1 w-full justify-center items-center flex   size-4 md:size-6 lg:size-12 overflow-hidden h-full ">
      <div className="star-shape1">
        {/*size-4 md:size-6 lg:size-12  */}
        <div className="star-container2 p-5 w-full overflow-hidden">
          <div className="star-shape2 p-2"></div>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={`rounded-md lg:rounded-xl cursor-pointer  lg:p-3 p-2 flex justify-between  relative overflow-hidden border backdrop-blur-sm`}
    >
      <div className="absolute inset-0 z-0 h-full w-full">{background}</div>
   <div className=" flex backdrop-blur-sm rounded-xl bg-white/60 p-2 w-full">
       <div className="flex flex-col  w-full items-center gap-2">
    
      <div className="w-full flex  justify-center lg:mt-0 h-24  lg:h-22 z-22">
        <img src={`/assets/testlogo.png`} alt={`${name} product`} className="object-cover h-full" />
      </div>
          <div
          className="md:text-xl text-[11px]  font-medium lg:px-4 px-1 z-21 py-1 rounded-md w-fit flex text-center justify-center items-center"
          // style={{ backgroundColor: labelcolor }}
        >
          {name.toUpperCase()}
        </div>
      </div>
   </div>
      {/* <div
        // style={{ borderColor: labelcolor }}
        className={`block absolute size-40 lg:size-72 border-4 p-2 lg:p-5 -top-10 lg:-top-20 -right-15 lg:-right-10 rounded-full z-10`}
      >
        <div
          // style={{ background: labelcolor }}
          className={`w-full h-full  p-10 rounded-full`}
        ></div>
      </div> */}
    </div>
  );
}
