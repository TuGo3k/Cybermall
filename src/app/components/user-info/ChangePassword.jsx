import React from "react";
const userInfos = ["Шинэ нууц үг оруулах", "Шинэ нууц үгээ дахин оруулах"];

const ChangePassword = () => {
  return (
    <div className="w-full h-fit flex sm:min-h-[666px] gap-[70px] flex-col p-[32px] sm:p-[64px] rounded-[10px] border border-[#e6ebf1]">
      <h1 className="font-semibold text-2xl text-[#1A3353]">
        Нууц үг шинэчлэх
      </h1>
      <div className="w-full h-fit flex flex-col gap-7">
        {userInfos.map((info, index) => (
          <input
            type="text"
            placeholder={info}
            className="sm:py-4 py-3 px-4 sm:px-5 w-full h-fit border border-[#008ECC] rounded-[10px] text-[15px] font-normal"
            key={index}
          ></input>
        ))}
      </div>
      <div className="w-full h-fit flex justify-end items-center">
        <button className="w-fit h-fit sm:py-4 py-3 px-8 sm:px-12 bg-[#008ECC] text-white rounded-[4px] font-semibold ">
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
