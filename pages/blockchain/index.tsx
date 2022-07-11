import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
export default function Blockchain() {
  return (
    <>
      <div className="bg-[url('/images/blockchain-banner.png')] md:bg-[url('/images/blockchain-banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[350px]">
            <h2 className="font-poppins font-bold capitalize text-[20px] md:text-[50px] text-white">
              What is blockchain?
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="col-auto">
              <div className="w-full rounded-[15px] relative h-[200px] md:h-[450px] overflow-hidden">
                <Image
                  src="/images/blockchain.png"
                  layout="fill"
                  objectFit="cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto pt-10 ">
              <h2 className="font-poppins font-semibold pb-4 capitalize text-left text-[20px] md:text-[30px] text-[#323232]">
                What is blockchain?
              </h2>
              <div className="first:p-0">
                <h3 className="font-poppins font-semibold normal-case text-[18px] text-left md:text-[18px] text-[#323232] break-words">
                  What is blockchain?
                </h3>
                <p className="font-poppins font-normal normal-case text-[18px] text-left md:text-[18px] leading-8 text-[#323232] break-words md:pr-10">
                  Intelligent automation, like robotic process automation (RPA),
                  natural language processing and virtual agents, can help you
                  improve efficiency and productivity in many ways.Self-learning
                  processes can help you empower employees, strengthen customer
                  .
                </p>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-semibold normal-case text-[18px] text-left md:text-[18px] text-[#323232] break-words">
                  Why It Matters
                </h3>
                <p className="font-poppins font-normal normal-case text-[18px] text-left md:text-[18px] leading-8 text-[#323232] break-words md:pr-10">
                  This capability creates whole new ways of thinking about how
                  to transform processes, drive resiliency across complex
                  networks like supply chains, facilitate trust, verify the
                  digital identity of people and objects, and build new revenue
                  models.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="font-poppins font-semibold normal-case text-[18px] text-left md:text-[18px] text-[#323232] break-words">
                  Where It&apos;s Going
                </h3>
                <p className="font-poppins font-normal normal-case text-[18px] text-left md:text-[18px] leading-8 text-[#323232] break-words md:pr-10">
                  Through a combination of blockchain, biometrics and identity,
                  tokenization, confidential compute and a variety of other
                  technologies also in use today, we are connecting networks of
                  collaborative ecosystems that increase transparency and
                  nimbleness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-10 overflow-hidden ">
        <div className="container px-4 md:px-0">
          <div className="grid lg:gap-x-10 gap-5 md:grid-cols-3 bg-[#F6F6F6] p-16">
            <div className="flex flex-col flex-wrap justify-center col-span-3">
            <h2 className="font-poppins font-semibold pb-4 capitalize text-left text-[20px] md:text-[30px] text-[#323232] break-words">
            WeKrypt – Industries – Separate header/Page
              </h2>
            </div> 
            <div className="flex flex-col flex-wrap justify-center col-span-3 gap-8 md:col-auto">
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Aerospace and defense
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Automotive
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Banking and capital markets
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Consumer products
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Consumer products
                </a>
              </Link>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-span-3 gap-8 md:col-auto">
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Healthcare
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>High-tech
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Hospitality and travel
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Insurance
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Life sciences
                </a>
              </Link>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-span-3 gap-8 md:col-auto">
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Manufacturing
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Media and entertainment
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Public sector
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Retail
                </a>
              </Link>
              <Link href="#">
                <a className="font-poppins font-normal capitalize text-left text-[20px] text-[#000000] opacity-70 flex gap-3 items-center">
                <Image src="/images/polygon.png" layout="fixed" width={15} height={15}/>Telecoms
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Blockchain.PageLayout = Layout;
