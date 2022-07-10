import React from "react";
import Image from "next/image";
import Button from '../components/button'
export default function ImageBox(props) {
  return (
    <div className="flex quality-delivery flex-wrap even:bg-[#909090] even:text-[#fff] odd:text-[#323232] odd:bg-[#D6D6D6]">
      {/* <div className="col-auto"> */}
      <div className="lg:w-[360px] lg:h-[360px] md:w-1/2 relative w-full img overflow-hidden">
        <Image
          src={`/images/${props.img}`}
          layout="responsive"
          objectFit="cover"
          width="100%"
          height="100%"
          className=" transform scale-105"
        />
      </div>
      {/* </div> */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="xl:px-16 lg:px-14 px-8 py-8 md:py-0">
          <h2 className="font-poppins font-semibold capitalize text-left text-[25px] ">
            {props.title}
          </h2>
          <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 leading-7 break-words">
          {props.dec}
          </p>
         {props.btnType != null &&  <Button url={props.btnLink} name="Read More" type={props.btnType}/>}
        </div>
      </div>
    </div>
  );
}
