import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineLocationOn } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";
import Image from "next/image";

export default function AddressCard(props) {
  return (
    <div className="col-auto relative  group">
      {/* <div
        className="devider group-last:hidden absolute 
      lg:w-[1px] lg:h-full h-[1px] w-full bg-[#000000] 
      opacity-20 lg:top-2/4 transform lg:-translate-y-2/4 lg:right-5 -bottom-10"
      ></div> */}
      <h2 className="font-inter font-bold mb-5 uppercase text-[25px] md:text-[25px] lg:text-[25px] text-[#000000]">
        {/* {props.country} */}
      </h2>
      <div className="flex flex-col flex-wrap gap-5">
        <div className="flex flex-wrap gap-3 items-center">
          <div className=" w-fit mb-auto">
            <div className=" w-14 h-14 flex items-center justify-center rounded-full bg-[#DEDEDE] text-[18px] text-[#323232]">
              {/* <MdOutlineLocationOn /> */}
              <Image
                src="/images/locationicon.png"
                width={22}
                height={22}
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" w-4/6">
            <h2 className="font-poppins font-medium uppercase text-[18px] mb-3 text-[#323232]">
              Address
            </h2>
            <p className="font-poppins font-normal uppercase text-[12px] md:text-[12px] lg:text-[12px] text-[#323232]">
              {props.address}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className=" w-fit mb-auto">
            <div className=" w-14 h-14 flex items-center justify-center rounded-full bg-[#DEDEDE] text-[18px] text-[#323232]">
              {/* <MdOutlinePhoneInTalk /> */}
              <Image
                src="/images/phoneicon.png"
                width={22}
                height={22}
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" w-4/6">
            <h2 className="font-poppins font-medium uppercase text-[18px] mb-3 text-[#323232]">
              Phone
            </h2>
            <p className="font-poppins font-normal uppercase text-[14px] text-[#323232]">
              {props.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className=" w-fit mb-auto">
            <div className=" w-14 h-14 flex items-center justify-center rounded-full bg-[#DEDEDE] text-[18px] text-[#323232]">
              {/* <BsEnvelopeOpen /> */}
              <Image
                src="/images/mailicon.png"
                width={22}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
          <div className=" w-4/6">
            <h2 className="font-poppins font-medium uppercase text-[18px] mb-3 text-[#323232]">
              Email
            </h2>
            <p className="font-poppins font-normal uppercase text-[14px] text-[#323232]">
              {props.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
