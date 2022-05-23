import React from "react";
import Link from "next/link";
export default function Button(props) {
    const Dark = () => (
        <Link href={props.url}>
        <a className={`font-bold font-quicksand text-[20px] mx-auto md:m-0 leading-normal text-[#323232] border-[1px] border-[#323232] py-[12px] px-[44px]  block w-fit duration-150 hover:bg-[#323232] hover:text-[#ffffff]`}>
          {props.name}
        </a>
      </Link>
    );
    const Light = () => (
        <Link href={props.url}>
        <a className={`font-bold font-quicksand mx-auto md:m-0 text-[20px] leading-normal text-[#ffffff] border-[1px] border-[#ffffff] py-[12px] px-[44px]  block w-fit duration-150 hover:bg-[#ffffff] hover:text-[#343434]`}>
          {props.name}
        </a>
      </Link>
    );
    console.log(props.name+props.url+props.type);
  //  if (props.type === "light") return <Light/>; 
  //  if (props.type === "dark") return <Dark/>;
  switch (props.type) {
    case "dark":
      return <Dark/>;
      break;
    case "light":
      return <Light/>;
      break;
    default:
      return null;
  }
}

