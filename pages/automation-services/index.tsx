import React from "react";
import Layout from "../../components/layout/index";
import Image from "next/dist/client/image";
export default function AutomationServices() {
 
  return (
    <>
      <div className="bg-[url('/images/automation-banner.png')] md:bg-[url('/images/automation-banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[500px]">
            <h2 className="font-poppins font-bold capitalize text-[20px] md:text-[50px] text-white">
              Automation Services
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="col-auto">
              <div className="w-full rounded-[15px] overflow-hidden">
                <Image
                  src="/images/automation.png"
                  layout="responsive"
                  objectFit="cover"
                  width={100}
                  height={50}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto pt-10 ">
              <h2 className="font-poppins font-semibold pb-4 capitalize text-left text-[20px] md:text-[30px] text-[#323232]">
                Automation Services
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left md:text-[18px] leading-7 text-[#323232] break-words md:pr-10">
                Intelligent automation, like robotic process automation (RPA),
                natural language processing and virtual agents, can help you
                improve efficiency and productivity in many ways.Self-learning
                processes can help you empower employees, strengthen customer .
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left md:text-[18px] leading-7 text-[#323232] break-words md:pr-10">
                Enterprise-wide approach help customer to succeed, This means
                improving processes with AI and designing new learning processes
                around it. Supported through organizational change and continual
                reskilling. Most AI and automation conversations focus on
                technology—that&apos;s the easy part. We work holistically across
                people, processes and business functions to ensure your
                initiatives are deployed and scaled for maximum ROI.
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
      <div className="relative py-10 overflow-hidden md:py-20 bg-[#F6F6F6]">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 pt-5 first:pt-0 md:pt-0 md:gap-16 md:grid-cols-2">
            <div className="col-auto">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/images/plan.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto lg:px-10">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] text-[#323232]">
                Plan
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-6 text-[#323232] break-words mx-auto lg:pr-20">
                We start with a maturity assessment and a strategic road map
                that align to your business priorities.
              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
          </div>
          <div className="grid gap-5 pt-5 md:pt-0 md:gap-16 md:grid-cols-2">
            <div className="col-auto md:order-2">
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/implement.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto lg:px-10">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] text-[#323232]">
                Implement
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-6 text-[#323232] break-words mx-auto lg:pr-20">
                We have extensive deployment experience across a variety of
                business, IT and industrial settings.
              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
          </div>
          <div className="grid gap-5 pt-5 md:pt-0 md:gap-16 md:grid-cols-2">
            <div className="col-auto">
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/plan.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto lg:px-10">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] text-[#323232]">
                Manage
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-6 text-[#323232] break-words mx-auto lg:pr-20">
                Make cybersecurity your catalyst for transformation. There are
                two ways to see cybersecurity: as a source of vulnerability,
                risk, and expense – or as a driver of transformation. The
                difference is the confidence you have in the resilience of your
                approach.
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
      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <h2 className="font-poppins font-semibold capitalize text-center text-[20px] md:text-[40px] text-[#323232]">
            What we Do
          </h2>
          <div className="grid pt-16 gap-14 lg:grid-cols-2">
            <div className="col-auto">
              <div className="bg-[#F7F7F7] h-full">
                <div className="w-full relative h-[380px]">
                  <Image
                    src="/images/roadmap.png"
                    layout="fill"
                    objectFit="cover"
                    // width={100}
                    // height={100}
                  />
                </div>
                <div className="flex flex-col flex-wrap justify-center px-5 py-6">
                  <h2 className="font-poppins font-semibold capitalize text-left text-[25px] text-[#323232]">
                    Define your Road Map
                  </h2>
                  <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                    We’ll help you understand where you are today and how to get
                    to where you want to be in future. WeKrypty portfolio of
                    services included bothe advisory services and strategic
                    services, assessement and Testing services
                  </p>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="bg-[#F7F7F7] h-full">
                <div className="w-full relative h-[380px]">
                  <Image
                    src="/images/protectdata.png"
                    layout="fill"
                    objectFit="cover"
                    // width={100}
                    // height={100}
                  />
                </div>
                <div className="flex flex-col flex-wrap justify-center px-5 py-6">
                  <h2 className="font-poppins font-semibold capitalize text-left text-[25px] text-[#323232]">
                    Protect your data , systems and users
                  </h2>
                  <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                    Designing, building, and operating businesses that are
                    resilient and defensible requires the right blend of people,
                    processes, and technology. Our Protect services enable you
                    to implement platforms and solutions that address your
                    business goals while securing critical data, environments,
                    systems, and users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
AutomationServices.PageLayout = Layout;
