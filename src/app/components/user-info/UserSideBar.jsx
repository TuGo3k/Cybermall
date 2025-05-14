"use client";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
const sideBarButtons = [
  { label: "Хувийн мэдээлэл", url: "/user-info" },
  { label: "Төлбөрийн мэдээлэл", url: "/user-info/payment" },
  { label: "Миний зар", url: "/user-info/my-ads" },
  { label: "Нууц үг", url: "/user-info/change-password" },
];

const UserSideBar = () => {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  if (loading) {
    return <div className="loader"></div>
  }

  return (
    <div className="h-fit  w-full lg:w-[40vw] flex flex-col relative px-[32px] sm:px-[58px] rounded-[10px] bg-white border border-[#E6EBF1]">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center rounded-[10px]  p-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/0276/f9db/b44b48e206e55ed28769145e2315c42f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z0oe5wKNPgm3mp5u~oZtI4S5orvvT6jCnIup7fLQD7gX3zJDHUn-DU7hy3uyulqHKyFRXA9BuqirePfrlJYWj8BJvHbL4mGSrff6Cz3rWe~XJ86ioNDEUCYIAXJPWrEUoNvoP7EZd48zFzQV7re7aFk1aWRYuHpwr2Dk~42W0UMyArTz64ph9jD7Dr64Tp0MoWZEocwKi~Weu7gcmzLleleYCkt2U8d~a~pHCaCbJJ~yAiloIwGk64yOe-tT40GGwukauro1f0-8~ocYuwKN646yNnr4aP7Kbj~CJKRcTWyZZtpG1ZZgt3rYUoD-YdfC0vRNrDDxY6cypi-kKZlvHg__"
          alt="logo"
          className="w-[85px] h-[85px] rounded-full"
        />
        <h1 className="font-semibold text-[17px]">{user.name}</h1>
      </div>
      <div className="w-full h-fit flex text-[12px] font-normal flex-col gap-5 items-start justify-start mb-7">
        {sideBarButtons.map((button, index) => (
          <Link href={button.url} key={index} className="w-full h-fit">
            <div className="w-full h-fit flex flex-row items-center cursor-pointer justify-between">
              {button.label}
              {pathname === button.url && <MdKeyboardArrowRight size={16} />}
            </div>
          </Link>
        ))}
      </div>
      <span className="w-full h-[1px] bg-[#DEDFE1]"></span>
      <Link href={"/login"}>
        <div className="w-full h-fit flex flex-row text-[12px] font-normal items-center justify-between mt-7">
          <p className="text-[#FF0000] cursor-pointer">Системээс гарах</p>
        </div>
      </Link>
      <p className="text-[12px] font-normal text-[#d3d3d3] text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
        Ogtorgui AI Tech LLC
      </p>
    </div>
  );
};

export default UserSideBar;
