import React from "react";
import Link from "next/dist/client/link";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
export default function footer() {
  return (
    <div className="bg-[#323232] md:pt-24 pt-10 pb-5  px-4 md:px-0">
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-12 gap-4 md:gap-y-4 gap-y-10">
          <div className="col-span-2 md:col-span-3 relative">
          <div className="devider lg:hidden block h-[1px] w-full bg-[#FFFFFF] opacity-20 absolute -bottom-5 left-0"></div>
            <Link href="/">
              <a>
                <h2 className="text-[40px] font-inter font-bold text-[#ffffff] leading-10 mb-4">
                  Wekrypt
                </h2>
              </a>
            </Link>
            <p className="font-poppins font-light text-[10px] my-4 text-[#ffffff] leading-4 mr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet pellentesque orci. Phasellus quis massa scelerisque, pulvinar
              justo mollis, fringilla urna. Suspendisse elementum turpis quis
              facilisis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi sit amet pellentesque orci. PhaLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi sit amet pellentesque
            </p>
            <div className="flex md:hidden items-center gap-5 py-3">
              <Link href="/">
                <a className="font-poppins font-normal text-[20px] text-[#ffffff] opacity-90 hover:text-[black]">
                  <FaFacebookF />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[20px] text-[#ffffff] opacity-90 hover:text-[black]">
                  <FaYoutube />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[20px] text-[#ffffff] opacity-90 hover:text-[black]">
                  <FaWhatsapp />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[20px] text-[#ffffff] opacity-90 hover:text-[black]">
                  <FaInstagram />
                </a>
              </Link>
            </div>
          </div>
         
          <div className="md:col-span-3">
            <h2 className="text-[18px] capitalize font-inter font-semibold text-[#ffffff] mb-3">
              Industries we serve
            </h2>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Web Development
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  E-Commerce
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  FinTech
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  EdTech
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Health Tech
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Digital Marketing
                </a>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-[18px] capitalize font-inter font-semibold text-[#ffffff] mb-3">
              Tech Stack
            </h2>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  PHP
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Python
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Swift
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Android
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  NextJS
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  React
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-2 relative">
          <div className="devider lg:hidden block h-[1px] w-full bg-[#FFFFFF] opacity-20 absolute -top-5 left-0"></div>
          <div className="devider lg:hidden block h-[1px] w-full bg-[#FFFFFF] opacity-20 absolute -bottom-5 left-0"></div>
            <h2 className="text-[18px] capitalize font-inter font-semibold text-[#ffffff] mb-3">
              Global Presence
            </h2>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  India
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  USA
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  Nidarlend
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-[18px] capitalize font-inter text-center md:text-left font-semibold text-[#ffffff] mb-3">
              Contact
            </h2>
            <div className="flex md:flex-col gap-x-8 gap-2 justify-center flex-wrap md:gap-2">
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf] flex gap-2 items-center">
                  <BsEnvelopeFill /> WeCode@gmail.com
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf] flex gap-2 items-center">
                  <BsFillTelephoneFill /> +917373737373
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[14px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf] flex gap-2 items-center">
                  <BsFillTelephoneFill /> +917373737373
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 mt-5">
          <div className="col-span-8">
            <div className="hidden md:flex items-center gap-5">
              <Link href="/">
                <a className="font-poppins font-normal text-[16px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  <FaFacebookF />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[16px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  <FaYoutube />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[16px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  <FaWhatsapp />
                </a>
              </Link>
              <Link href="/">
                <a className="font-poppins font-normal text-[16px] text-[#ffffff] opacity-90 hover:text-[#cfcfcf]">
                  <FaInstagram />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-4">
            <p className="font-poppins font-normal text-[12px] text-right text-[#ffffff] opacity-90 opacity-80">
              Copyright © 2021 Wekrypt. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
