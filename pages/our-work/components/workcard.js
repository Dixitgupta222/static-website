import React from "react";
import Image from "next/dist/client/image";
export default function WorkCard(props) {
  return (
    
      <div className=" px-11 py-20 md:py-24 odd:bg-[#F3F3F3]  md:h-[450px] flex flex-col justify-center hover:bg-[#00000038] cursor-pointer">
        <div className="h-[90px] w-[230px]">
          <Image
            src={props.image}
            objectFit="contain"
            width={230}
            height={90}
          />
        </div>
        <p className="font=poppins font-normal text-[#000000] text-[18px] leading-7 mt-3">
         {props.dec}
        </p>
      </div>
   
  ); 
}
