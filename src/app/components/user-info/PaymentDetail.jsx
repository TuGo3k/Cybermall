import React from "react";
const userInfos = [
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Хүлээгдэж" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилтгүй" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Хүлээгдэж" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилтгүй" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Хүлээгдэж" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилттай" },
  { date: "8 May 2024", amount: "13474984", status: "Амжилтгүй" },
];

const PaymentDetails = () => {
  return (
    <div className="w-full h-fit sm:min-h-[666px] flex gap-[70px] flex-col p-[32px] sm:p-[64px] rounded-[10px] border border-[#e6ebf1]">
      <h1 className="font-semibold text-2xl text-[#1A3353]">
        Төлбөрийн мэдээлэл
      </h1>
      <div className="w-full h-fit flex flex-col">
        <h1 className="font-medium text-[#1A3353] text-[18px] mb-5">
          Гүйлгээний мэдээлэл
        </h1>
        <div className="w-full h-fit flex flex-col uppercase font-bold text-[10px] text-[#1A3353]">
          <div className="w-full h-fit flex flex-row items-center py-2 border-b border-[#d3d3d3]">
            <p className="w-[30%]">Он сар өдөр</p>
            <p className="w-[40%]">мөнгөн дүн</p>
            <p className="w-[30%] text-end">төлөв</p>
          </div>
        </div>
        <div className="w-full h-[200px] flex flex-col overflow-y-scroll">
          {userInfos.map((info, index) => (
            <div
              className="w-full h-fit text-[12px] text-[#455560] font-normal flex flex-row items-center  py-4 border-b border-[#d3d3d3]"
              key={index}
            >
              <p className="w-[30%]">{info.date}</p>
              <p className="w-[40%]">{Number(info.amount).toLocaleString()}₮</p>
              <div className="w-[30%] h-fit flex justify-end items-center">
                <span
                  className="flex items-center justify-center px-2 w-fit font-medium min-w-[80px] h-fit py-[1px] rounded-[2px]"
                  style={{
                    backgroundColor:
                      info.status === "Амжилттай"
                        ? "#04D1821A"
                        : info.status === "Хүлээгдэж"
                        ? "#3E79F71A"
                        : "#DE44361A",
                    color:
                      info.status === "Амжилттай"
                        ? "#04D182"
                        : info.status === "Хүлээгдэж"
                        ? "#3E79F7"
                        : "#DE4436",
                  }}
                >
                  <p className="">{info.status}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-fit flex justify-end items-center">
        <button className="w-fit h-fit py-3 px-8 sm:px-12  bg-[#008ECC] text-white rounded-[4px] font-semibold ">
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
