import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

export default function Header(props) {
  const [width, setWidth] = useState("0");
  const [show, setShow] = useState(false);
  // console.log('header'+props.color)
  const mobileMenu = useRef(null)
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);
  

  useEffect(() => {
    const handler = (event) => {
      if (mobileMenu.current && !mobileMenu.current.contains(event.target) || mobileMenu.current.contains(event.target)) {
        setShow(false)
      };
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])
  
  const toggleMenu = () => {
   setShow(true)
  }
  return (
    <div className="absolute w-full left-0 top-[17px] px-4 md:px-0 h-auto bg-white z-50">
      <div className="container mx-auto relative">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Link href="/">
            <a>
              <h2 className={`text-[50px] font-inter font-bold transition-all ease-in-out duration-200 text-[#323232] z-30`}>
              WeKrypt
              </h2>
            </a>
          </Link>
        </div>
        <div className="col-span-9">
          {width > 767 && (
            <div className="flex flex-row gap-10 capitalize h-full items-center justify-end">
              <Link href="/about">
                <a
                  className={`font-poppins text-[18px] font-medium text-${props.color}`}
                >
                  About
                </a>
              </Link>
              {/* <Link href="/our-work">
                <a
                  className={`font-poppins text-[18px] font-medium text-${props.color}`}
                >
                  Our Work
                </a>
              </Link> */}
              <Link href="/contact">
                <a
                  className={`font-poppins text-[18px] font-medium text-${props.color}`}
                >
                  Contact us
                </a>
              </Link>
            </div>
          )}
         {width < 700 && ( show ? <div
              className={`w-fit h-full ml-auto flex items-center text-[30px] text-black`}
              onClick={()=> setShow(false)}
            >
                <GrClose/>
            </div>  : <div
            className={`w-fit h-full ml-auto flex items-center text-[30px] text-black`}
            onClick={toggleMenu}
          >
            <HiMenuAlt3 />
          </div>)}
          {/* mobile menu */}

         
            <div
            ref={mobileMenu}
              className={`${show ? 'h-auto': 'h-0'} flex flex-col items-center shadow-md transition-all ease-in-out duration-150 justify-end absolute bg-white w-full left-0 overflow-hidden -z-10`}
            >
              <Link href="/about">
                <a
                  className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-center p-5  font-medium text-[#000000]`}
                >
                  About
                </a>
              </Link>
              {/* <Link href="/our-work">
                <a
                  className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-center p-5  font-medium text-[#000000]`}
                >
                  Our Work
                </a>
              </Link> */}
              <Link href="/contact">
                <a
                  className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-center p-5  font-medium text-[#000000]`}
                >
                  Contact us
                </a>
              </Link>
            </div>
        
        </div>
      </div>
    </div>
    </div>
    
  );
}
