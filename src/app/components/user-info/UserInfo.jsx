"use client"
import { useAuth } from "@/context/AuthProvider";
import React, { useEffect, useState } from "react";

const userInfos = ["Нэр", "Утасны дугаар", "И-мэйл"];

const UserInfo = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        phone: user.phone,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return (
    <div className="w-full h-fit sm:min-h-[666px] flex gap-[70px] flex-col p-[32px] sm:p-[64px] rounded-[10px] border border-[#e6ebf1]">
      <h1 className="font-semibold text-2xl text-[#1A3353]">Хувийн мэдээлэл</h1>
      <div className="w-full h-fit flex flex-col gap-7">
        {userInfos.map((info, index) => {
          const field = ["name", "phone", "email"][index];
          return (
            <input
              type="text"
              placeholder={info}
              className="sm:py-4 py-3 px-4 sm:px-5 w-full h-fit border border-[#008ECC] rounded-[10px] text-[15px] font-normal"
              key={index}
              value={formData[field]}
              onChange={(e) => handleChange(e, field)}
            />
          );
        })}
      </div>
      <div className="w-full h-fit flex justify-end items-center">
        <button className="w-fit h-fit py-3 px-8 sm:px-12 sm:py-4 bg-[#008ECC] text-white rounded-2xl font-semibold ">
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default UserInfo;