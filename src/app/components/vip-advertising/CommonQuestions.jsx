"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const commonQuestionData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea",
  },
];

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-fit flex md:flex-row flex-col gap-8 px-[10vw] py-[109px]">
      <div className="flex flex-col gap-3.5 w-[55vw] h-fit">
        <h1 className="vip_header">Нийтлэг асуултууд</h1>
        <p className="vip_description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        {commonQuestionData.map((data, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full overflow-hidden border gap-4 border-[#A6A6A6] rounded-[4px] cursor-pointer transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div className="w-full h-fit flex items-center gap-2.5 justify-between p-6 ">
                <h1 className="font-light text-[20px] text-[#222222]">
                  {data.question}
                </h1>
                {isOpen ? (
                  <IoIosArrowUp className="transition-transform duration-300" />
                ) : (
                  <IoIosArrowDown className="transition-transform duration-300" />
                )}
              </div>
              <div
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <p className="vip_description">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonQuestions;
