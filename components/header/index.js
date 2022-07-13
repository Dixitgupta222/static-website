import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Router from "next/router";

export default function Header(props) {
  const [width, setWidth] = useState("0");
  const [show, setShow] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenumebile, setSubmenumobile] = useState(false);
  // console.log('header'+props.color)
  const mobileMenu = useRef(null);
  const submenu = useRef(null);
  const mobilesubmenu = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    const handler = (event) => {
      if (mobileMenu.current && !mobileMenu.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler); 
    };
  }, []);
  useEffect(() => {
    const handler = (event) => {
      if (submenu.current && submenu.current.contains(event.target)) {
        setShowSubmenu(false);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
    };
  }, []);
  // useEffect(() => {
  //   const handler = (event) => {
  //     if (
  //       mobilesubmenu.current &&
  //       !mobilesubmenu.current.contains(event.target)
  //     ) {
  //       setSubmenumobile(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);
  Router.events.on("routeChangeStart", () => {
    setShow(false);
    setShowSubmenu(false);
  });

  const toggleMenu = () => {
    setShow(true);
  };
  return (
    <div className="absolute w-full left-0 top-[17px] px-4 md:px-0 h-auto bg-white z-50">
      <div className="container static mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Link href="/">
              <a>
                <h2
                  className={`text-[50px] font-inter font-bold transition-all ease-in-out duration-200 text-[#323232] z-30`}
                >
                  WeKrypt
                </h2>
              </a>
            </Link>
          </div>
          <div className="col-span-9">
            {width > 767 && (
              <div className="flex flex-row items-center justify-end h-full gap-10 capitalize">
                <Link href="/about">
                  <a
                    className={`font-poppins text-[18px] font-medium h-full flex items-center text-${props.color}`}
                  >
                    About
                  </a>
                </Link>

                <div
                  className={`font-poppins text-[18px] font-medium relative text-${props.color} cursor-pointer h-full flex items-center has-submenu ${showSubmenu && "active"}`}
                  onMouseOver={() => setShowSubmenu(true)} 
                  onMouseOut={() => setShowSubmenu(false)}
                >
                  Services
                  {showSubmenu && (
                    <div
                    // onMouseOver={() => setShowSubmenu(true)}
                      ref={submenu}
                      className="bg-white absolute flex flex-col w-[400px] gap-5 text-center -right-full top-full transform translate-x-[20%] p-5 z-[99] shadow-custom3"
                    >
                      <Link href="/data-and-artifical-intelligence">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Data and Artifical Intelligence
                        </a>
                      </Link>
                      <Link href="/quality-delivery">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Quality Delivery
                        </a>
                      </Link>
                      <Link href="/cloud-services">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Cloud Services
                        </a>
                      </Link>
                      <Link href="/cybersecurity">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Cybersecurity & DevSecOps
                        </a>
                      </Link>
                      <Link href="/automation-services">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Automation Services
                        </a>
                      </Link>
                      <Link href="/blockchain">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Blockchain
                        </a>
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/contact">
                  <a
                    className={`font-poppins text-[18px] font-medium h-full flex items-center text-${props.color}`}
                  >
                    Contact us
                  </a>
                </Link>
              </div>
            )}
            {width < 700 &&
              (show ? (
                <div
                  className={`w-fit h-full ml-auto flex items-center text-[30px] text-black`}
                  onClick={() => setShow(false)}
                >
                  <GrClose />
                </div>
              ) : (
                <div
                  className={`w-fit h-full ml-auto flex items-center text-[30px] text-black`}
                  onClick={toggleMenu}
                >
                  <HiMenuAlt3 />
                </div>
              ))}
            {/* mobile menu */}

            <div
              className="absolute left-0 z-0 w-full h-screen"
              ref={mobileMenu}
            >
              <div
                className={`${
                  show ? "h-auto" : "h-0"
                } flex flex-col items-center shadow-md transition-all ease-in-out duration-150 justify-end absolute bg-white w-full left-0 overflow-hidden -z-10`}
              >
                <Link href="/about">
                  <a
                    className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-center p-5  font-medium text-[#000000]`}
                  >
                    About
                  </a>
                </Link>
                <div
                  className={`font-poppins text-[18px] p-5 font-medium relative text-${props.color} cursor-pointer has-submenu ${submenumebile && "active"}`}
                  onClick={() => setSubmenumobile(!submenumebile)}
                >
                  Services
                </div>
                {submenumebile && (
                  <div
                    ref={mobilesubmenu}
                    className="bg-white flex flex-col w-[400px] gap-5 text-center p-5 shadow-custom"
                  >
                    <Link href="/data-and-artifical-intelligence">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Data and Artifical Intelligence
                      </a>
                    </Link>
                    <Link href="/quality-delivery">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Quality Delivery
                      </a>
                    </Link>
                    <Link href="/cloud-services">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Cloud Services
                      </a>
                    </Link>
                    <Link href="/cybersecurity">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Cybersecurity & DevSecOps
                      </a>
                    </Link>
                    <Link href="/automation-services">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Automation Services
                      </a>
                    </Link>
                    <Link href="/blockchain">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Blockchain
                      </a>
                    </Link>
                  </div>
                )}
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
    </div>
  );
}
