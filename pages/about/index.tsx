import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import Experience from "../../components/experience";
import Team from "../../components/team";
export default function About() {
  return (
    <>
      <div className="bg-[url('/images/mobile-aboutbanner.png')] md:bg-[url('/images/aboutbanner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[500px]">
            <h2 className="font-poppins font-bold uppercase text-[20px] md:text-[50px] text-white">
              About US
            </h2>
          </div>
        </div>
      </div>
      <div className="md:py-36 py-10 md:my-12 relative overflow-hidden">
        <div className="container px-4 md:px-0">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="col-auto flex flex-wrap flex-col justify-center">
              <div className="absolute  w-[250px] h-[225px] md:w-[660px] md:h-[600px] z-[-1] -left-[8%]">
                <Image
                  src="/images/aboutbg.png"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="font-poppins font-bold uppercase text-left text-[20px] md:text-[45px] lg:text-[60px] text-[#000000] opacity-20">
                About US
              </h2>
              <h2 className="font-poppins font-bold capitalize text-left text-[30px] md:text-[45px] lg:text-[60px] text-[#323232]">
                Who We Are...?
              </h2>
              <p className="font-poppins font-normal normal-case text-[15px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words md:pr-24">
                WeKrypt capitalizes on the strength of our numerous combined
                synergies and core capabilities including: deep domain and
                delivery expertise, focus on micro-verticals, suites of IP-led
                solutions, methodologies and frameworks, technology alliances
                and service partnerships secure & scalable delivery
                infrastructure across geographies.
            </p>
            <p className="font-poppins font-normal normal-case text-[15px] text-left md:text-[18px] leading-7 text-[#323232] break-words md:pr-24">
                Our customer footprint spans
                across verticals like banking & financial services, insurance &
                healthcare, life sciences, manufacturing, retail, distribution &
                logistics; media, entertainment, leisure & travel,
                communication, energy & utilities, federal government, and
                independent software vendors
                </p>
              <p className="font-poppins font-normal normal-case text-[15px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words md:pr-24">
                Our comprehensive portfolio of
                services includes application development and management,
                verification & validation, enterprise application solutions,
                infrastructure management, customer interaction services &
                business process outsourcing, product & engineering solutions,
                and business & technology consulting.
              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
            <div className="col-auto">
              <div className="lg:absolute right-0 w-full lg:w-[650px] top-[50%] md:translate-y-32 lg:-translate-y-[50%]">
                <Image
                  src="/images/image38.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience bg="#323232" />
      <div className="py-10 lg:py-24">
        <h2 className="font-poppins font-bold hidden md:block uppercase text-[60px] text-center text-[#323232] mb-10">
          Our Core team
        </h2>
        <div className="container">
          <Team />
          {/* <Link href="/about">
            <a className=" md:block hidden font-bold text-[20px] mx-auto text-[#323232] border-[1px] border-[#323232] py-[12px] px-[40px] mt-10  w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
              View All
            </a>
          </Link> */}
        </div>
      </div>
    </>
  );
}
About.PageLayout = Layout;
