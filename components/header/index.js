import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Router from "next/router";

export default function Header(props) {
  const [width, setWidth] = useState("0");
  const [show, setShow] = useState(false);
  const [showSubmenuService, setShowSubmenuService] = useState(false);
  const [showSubmenuIndustry, setShowSubmenuIndustry] = useState(false);
  const [submenumebileService, setSubmenumobileService] = useState(false);
  const [submenumebileIndustry, setSubmenumobileIndustry] = useState(false);
  // console.log('header'+props.color)
  const mobileMenu = useRef(null);
  const submenuService = useRef(null);
  const submenuIndustry = useRef(null);
  const industryMobile = useRef(null);
  const serviceMobile = useRef(null);
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
      if (
        submenuService.current &&
        submenuService.current.contains(event.target)
      ) {
        setShowSubmenuService(false);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
    };
  }, []);
  useEffect(() => {
    const handler = (event) => {
      if (
        submenuIndustry.current &&
        submenuIndustry.current.contains(event.target)
      ) {
        setShowSubmenuIndustry(false);
      }
    };
    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
    };
  }, []);
  // useEffect(() => {
  //   const handlerIndustry = (event) => {
  //     if (
  //       industryMobile.current &&
  //       !industryMobile.current.contains(event.target)
  //     ) {
  //       setShowSubmenuIndustry(false);
  //     }
  //   };
  //   const handlerService = (event) => {
  //     if (
  //       serviceMobile.current &&
  //       !serviceMobile.current.contains(event.target)
  //     ) {
  //       setSubmenumobileService(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handlerService);
  //   document.addEventListener("mousedown", handlerIndustry);
  //   return () => {
  //     document.removeEventListener("mousedown", handlerService);
  //     document.removeEventListener("mousedown", handlerIndustry);
  //   };
  // }, []);
  Router.events.on("routeChangeStart", () => {
    setShow(false);
    setShowSubmenuService(false);
    setShowSubmenuIndustry(false);
    setSubmenumobileIndustry(false);
    setSubmenumobileService(false);
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
                  className={`font-poppins text-[18px] font-medium relative text-${
                    props.color
                  } cursor-pointer h-full flex items-center has-submenu ${
                    showSubmenuService && "active"
                  }`}
                  onMouseOver={() => setShowSubmenuService(true)}
                  onMouseOut={() => setShowSubmenuService(false)}
                >
                  Services
                  {showSubmenuService && (
                    <div
                      // onMouseOver={() => setShowSubmenu(true)}
                      ref={submenuService}
                      className="bg-white absolute flex flex-col w-max gap-5 text-left -right-full top-full transform translate-x-[20%] p-5 z-[99] shadow-custom3"
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

                <div
                  className={`font-poppins text-[18px] font-medium relative text-${
                    props.color
                  } cursor-pointer h-full flex items-center has-submenu ${
                    showSubmenuIndustry && "active"
                  }`}
                  onMouseOver={() => setShowSubmenuIndustry(true)}
                  onMouseOut={() => setShowSubmenuIndustry(false)}
                >
                  Industries
                  {showSubmenuIndustry && (
                    <div
                      // onMouseOver={() => setShowSubmenu(true)}
                      ref={submenuIndustry}
                      className="bg-white absolute flex flex-col w-max gap-5 text-left -right-full top-full transform translate-x-[20%] p-5 z-[99] shadow-custom3"
                    >
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Aerospace And Defense
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Automotive
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Banking And Capital Markets
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Consumer Products
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Consumer Products
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Healthcare
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          High-Tech
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Hospitality And Travel
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Insurance
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Life Sciences
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Manufacturing
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Media And Entertainment
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Public Sector
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Retail
                        </a>
                      </Link>
                      <Link href="">
                        <a
                          className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                        >
                          Telecoms
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
                    className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-left p-5  font-medium text-[#000000]`}
                  >
                    About
                  </a>
                </Link>
                <div
                  className={`font-poppins text-[18px] p-5 font-medium relative w-full text-${
                    props.color
                  } cursor-pointer has-submenu ${submenumebileService && "active"}`}
                  onClick={() =>{ setSubmenumobileService(!submenumebileService);setSubmenumobileIndustry(false);}}
                >
                  Services
                </div>
                {submenumebileService && (
                  <div
                    ref={serviceMobile}
                    className="bg-white flex flex-col gap-5 text-left w-full p-5 shadow-custom3"
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
                <div
                  className={`font-poppins text-[18px] p-5 font-medium relative w-full text-${
                    props.color
                  } cursor-pointer has-submenu ${submenumebileIndustry && "active"}`}
                  onClick={() => {setSubmenumobileIndustry(!submenumebileIndustry);setSubmenumobileService(false)}}
                >
                  Industries 
                </div>
                {submenumebileIndustry && (
                  <div
                    // onMouseOver={() => setShowSubmenu(true)}
                    ref={industryMobile}
                    className="bg-white flex flex-col gap-5 text-left w-full p-5 shadow-custom3"
                  >
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Aerospace And Defense
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Automotive
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Banking And Capital Markets
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Consumer Products
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Consumer Products
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Healthcare
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        High-Tech
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Hospitality And Travel
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Insurance
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Life Sciences
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Manufacturing
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Media And Entertainment
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Public Sector
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Retail
                      </a>
                    </Link>
                    <Link href="">
                      <a
                        className={`font-poppins capitalize text-[18px] font-medium text-${props.color}`}
                      >
                        Telecoms
                      </a>
                    </Link>
                  </div>
                )}

                <Link href="/contact">
                  <a
                    className={`font-poppins text-[18px] hover:bg-slate-300 w-full text-left p-5  font-medium text-[#000000]`}
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
