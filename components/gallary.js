import React from "react";

import Link from "next/link";
function gallary() {
  return (
    <>
    <div className="grid md:grid-cols-3 gap-5">
      <div className="row-span-2">
        <div className="bg-[url('/images/work1.png')] flex h-full bg-no-repeat bg-cover bg-center duration-150  rounded-2xl overflow-hidden group">
          <div className="bg-gradient-to-b from-[#C4C4C400] to-[#4A4A4A] h-full invisible w-full flex-col p-5 lg:p-10 justify-end  flex flex-nowrap group-hover:visible ">
            <p className="font-poppins text-[16px] font-bold text-white">
              Development
            </p>
            <h3 className="font-poppins text-[30px] lg:text-[35px] font-semibold text-white leading-10 py-3 truncate whitespace-normal">
              Reporting development
            </h3>
            <Link href="/">
              <a className="font-bold text-[20px] text-white border-[1px] border-white py-[12px] px-[20px]  block w-fit duration-150 hover:bg-white hover:text-[#323232]">
                View Detail
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[url('/images/work2.png')] flex md:h-[270px] bg-no-repeat bg-cover bg-center duration-150  rounded-2xl overflow-hidden group">
          <div className="bg-gradient-to-b from-[#C4C4C400] to-[#4A4A4A] h-full invisible w-full flex-col p-5 lg:p-10 justify-end flex flex-wrap group-hover:visible ">
            <p className="font-poppins text-[16px] font-bold text-white">
              Development
            </p>
            <h3 className="font-poppins text-[30px] lg:text-[35px] font-semibold text-white leading-10 py-3 truncate whitespace-normal">
              Reporting development
            </h3>
            <Link href="/">
              <a className="font-bold text-[20px] text-white border-[1px] border-white py-[12px] px-[20px]  block w-fit duration-150 hover:bg-white hover:text-[#323232]">
                View Detail
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <div className="bg-[url('/images/work4.png')] flex h-full bg-no-repeat bg-cover bg-center duration-150  rounded-2xl overflow-hidden group">
          <div className="bg-gradient-to-b from-[#C4C4C400] to-[#4A4A4A] h-full invisible w-full flex-col p-5 lg:p-10 justify-end flex flex-wrap group-hover:visible ">
            <p className="font-poppins text-[16px] font-bold text-white">
              Development
            </p>
            <h3 className="font-poppins text-[30px] lg:text-[35px] font-semibold text-white leading-10 py-3 truncate whitespace-normal">
              Reporting development
            </h3>
            <Link href="/">
              <a className="font-bold text-[20px] text-white border-[1px] border-white py-[12px] px-[20px]  block w-fit duration-150 hover:bg-white hover:text-[#323232]">
                View Detail
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[url('/images/work3.png')] flex md:h-[270px] bg-no-repeat bg-cover bg-center duration-150  rounded-2xl overflow-hidden group">
          <div className="bg-gradient-to-b from-[#C4C4C400] to-[#4A4A4A] h-full invisible w-full flex-col p-5 lg:p-10 justify-end flex flex-wrap group-hover:visible ">
            <p className="font-poppins text-[16px] font-bold text-white">
              Development
            </p>
            <h3 className="font-poppins text-[30px] lg:text-[35px] font-semibold text-white leading-10 py-3 truncate whitespace-normal">
              Reporting development
            </h3>
            <Link href="/">
              <a className="font-bold text-[20px] text-white border-[1px] border-white py-[12px] px-[20px]  block w-fit duration-150 hover:bg-white hover:text-[#323232]">
                View Detail
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 mx-auto w-fit">
    <Link href="/">
              <a className="font-bold text-[20px] text-[#343434] border-[1px] border-[#343434] py-[12px] px-[20px]  block w-fit duration-150 hover:bg-[#343434] hover:text-white">
                View More
              </a>
            </Link>
    </div>
    </>
  );
}

export default gallary;
