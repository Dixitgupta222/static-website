import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import Experience from "../../components/experience";
import Team from "../../components/team";
export default function DataIntelligence() {
  return (
    <>
      <div className="bg-[url('/images/data-and-artifical-intelligence_banner.png')] md:bg-[url('/images/data-and-artifical-intelligence_banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[500px]">
            <h2 className="font-poppins font-bold uppercase text-[20px] md:text-[50px] text-white">
            DATA AND ARTIFICIAL INTELLIGENCE
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden ">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold uppercase text-center text-[20px] md:text-[40px] lg:text-[40px] text-[#323232]">
              Master your data and empower<br></br> your business
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-center py-4 md:text-[18px] leading-7 text-[#323232] break-words">
              At WeKrypt, we trust that AI can have a great impact on the achievement of a sustainable world.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-center py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                Because we believe that the transformative power of Data & AI to build positive futures for humans and society, we partner with you to leverage Data & AI in an ethics by design and human-centered way. We work with your teams closely to develop the right data and AI-powered leadership, mindset, culture and ways of working that fit your organization’s vision.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-center py-4 md:text-[18px] leading-7 text-[#323232] break-words">
To achieve this, all players, governments and industries, researchers, and citizens, will need to be part of the same journey, leveraging a common toolbox
              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-10 overflow-hidden md:py-20 mb-20 bg-[#d9d9d91a]">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col flex-wrap justify-center col-auto">
            <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] lg:text-[40px] text-[#323232]">
            WeKrypt Approach:
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words md:pr-20">
              We’ve developed a production-ready AI approach. Hands on working with you to extend from a Proof of Concept, to working prototypes and on to continuous improvement/ production WeKrypt work in a city-centric model that understands the differences and knows what will work in a specific context for your organization.<br></br>
                We work tightly and giving our clients access to the full range of services. <br></br> 
                We do Best :<br></br>
                In a number of areas, our focus has delivered wide views at AI. We’re always at the forefront of how technology can deliver value – to businesses and to Society – in this space.

              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
            <div className="col-auto">
              <div className="w-full">
                <Image
                  src="/images/approch.png"
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
    </>
  );
}
DataIntelligence.PageLayout = Layout;
