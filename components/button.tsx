import React from "react";
import Link from "next/link";
export default function Button(props:{name:string,url:string,type:string}) {
  
    const Dark = () => {
    return (
        <Link href={props.url}>
        <a className={`font-bold font-quicksand text-[20px] leading-normal text-[#323232] border-[1px] border-[#323232] py-[12px] px-[44px]  block w-fit duration-150 hover:bg-[#323232] hover:text-[#ffffff]`}>
          {props.name}
        </a>
      </Link>
    )};
    const Light = () => {
      return (
        <Link href={props.url}>
        <a className={`font-bold font-quicksand text-[20px] leading-normal text-[#ffffff] border-[1px] border-[#ffffff] py-[12px] px-[44px]  block w-fit duration-150 hover:bg-[#ffffff] hover:text-[#343434]`}>
          {props.name}
        </a>
      </Link>
    )};
    console.log(props.name+props.url+props.type);
   if (props.type === "light") return <Light/>; 
   if (props.type === "dark") return <Dark/>;
}

