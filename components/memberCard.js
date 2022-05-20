import React from 'react'
import Image from 'next/image'
export default function MemberCard(props) {
  return (
    <div className="flex flex-wrap flex-col p-5 gap-0 even:bg-[#E8E8E8] transform duration-150 hover:scale-105">
         <div className="w-[70px] h-[70px] md:w-[130px] md:h-[130px] mx-auto">
          <Image
            objectFit="contain"
            src={props.img}
            layout="responsive"
            width={50}
            height={50}
          />
         </div>
          <p className="font-poppins mt-3 font-medium text-[18px] text-[#000000] capitalize text-center">
            {props.name}
          </p>
          <p className="font-poppins font-bold text-[18px] text-[#343434] capitalize text-center">
            {props.designation}
          </p>
        </div>
  )
}
