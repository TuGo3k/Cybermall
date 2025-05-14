const personal_data_fields = [
  { label: "Зарын Нэр", name: "title" },
  { label: "Үнэ", name: "price" },
  { label: "Тайлбар", name: "description" },
  { label: "Байршил оруулах", name: "location" },
  { label: "Хаяг", name: "address" },
  { label: "VIP Зар Болгох", name: "vip" },
  { label: "Онцгой Зар Болгох", name: "special" },
  { label: "Postcode / ZIP*", name: "zip" },
];

const CreateForm = ({ handleUpload, value, setValue }) => {
  return (
    <form className="w-full lg:w-[100vw] h-fit rounded-[10px] overflow-hidden border border-[#DEDFE1]">
      <div className="bg-[#A6A6A6] px-[50px] py-[25px] text-white">
        <h1 className="font-semibold text-[20px]">Personal</h1>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-[46px] gap-y-[25px] p-[25px]">
        {personal_data_fields.map((field, index) => (
          <div
            key={field.name}
            className={`flex flex-col gap-2.5 ${
              index < 4 ? "col-span-1" : "col-span-2"
            }`}
          >
            <p className="vip_description h-[43px] flex items-center !text-[#3D3D3D]">
              {field.label}
            </p>
            <input
              type="text"
              name={field.name}
              value={value[field.name] || ""}
              onChange={(e) =>
                setValue((prev) => ({ ...prev, [field.name]: e.target.value }))
              }
              className="border border-[#DEDFE1] rounded-[10px] w-full h-[43px] p-2"
            />
          </div>
        ))}

        <button onClick={handleUpload} className="w-fit h-fit px-4 py-2 rounded-full bg-[#282828] text-white col-span-2 font-medium text-[20px] flex items-center gap-4">
          Proceed to Next Step
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
