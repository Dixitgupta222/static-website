import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageBox from "../../components/imageBox";
export default function QualityDelivery() {
  var data = [
    {
      title: "Expertise",
      imgURL: "expertise.png",
      dec: `We have more than 10 years of quality assurance validation and
    testing experience across the industries.`,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Global",
      imgURL: "global.png",
      dec: `WeKrypt offers a global and flexible delivery model fitting with Agile, DevOps 
      and traditional methodologies. We use local and international experts and centres
       of excellence to enhance the quality levels of your applications and team.`,
      btn: {
        link: "#",
        type: "light",
      },
    },
    {
      title: "Do Best",
      imgURL: "dobest.png",
      dec: `We realize our customer’s business goals through an array of services, 
      from a simple assessment to more complex engagements.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Agile Quality Engineering",
      imgURL: "agile.png",
      dec: `We enable Agile teams to deliver and deploy at greater speed
       with higher quality, with an integrated automation-driven quality validation process
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Test Automation",
      imgURL: "testautomation.png",
      dec: `We implement a state-of-the-art test automation platform 
      and automate quality validation activities across all phases of the lifecycle.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "AI testing",
      imgURL: "aitesting.png",
      dec: `We validate the quality, transparency and accuracy of AI solutions, 
      as well as implement AI-based solutions to enhance your quality assurance activities.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "QA Services",
      imgURL: "qaservices.png",
      dec: `We offer a wide range of QA and test services and solutions on a project-based or managed services.`,
      btn: {
        link: "#",
        type: "",
      },
    },
  ];
  return (
    <>
      <div className="bg-[url('/images/quality-banner.png')] md:bg-[url('/images/quality-banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[500px]">
            <h2 className="font-poppins font-bold capitalize text-[20px] md:text-[50px] text-white">
              Quality Delivery
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] lg:text-[40px] text-[#323232]">
                Quality Assurance and Testing – Quality Delivery
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                Our Quality Engineering & Testing portfolio provides a full
                spectrum of software quality validation and testing services and
                our process works with you to assure you meet your business
                outcomes.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                To do this we utilize our Quality Assurance Delivery Centres,
                Digital Assurance and Mobile Testing Centres of Excellence, both
                onshore, nearshore and offshore.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                With our leading quality expertise, proven methodologies and
                accelerators, we assure quality delivery hence increased
                customer value and measurable business outcomes.
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
                  src="/images/software-testing-lifecycle.png"
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
      <div className="relative py-10 overflow-hidden md:py-20 bg-[#f2f2f2]">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold capitalize text-center text-[20px] md:text-[40px] lg:text-[40px] text-[#323232]">
                Quality Delivery
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-center py-4 md:text-[18px] leading-7 text-[#323232] break-words mx-auto lg:w-[911px] md:px-20">
                To ensure quality in your agile transformation our experts , m
                ethodologies and accelerators work closely with you. We speed up
                assurance validation, add and inject automation across the
                entire lifecycle.
              </p>
              {/* <Link href="/about">
                <a className="font-bold text-[20px] mx-auto md:mx-0 text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-4 md:my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-[white]">
                  Read More
                </a>
              </Link> */}
            </div>
            <div className="col-auto">
              <div className="w-full h-auto">
                <Image
                  src="/images/quality-delivery-process.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 my-20 md:px-0 md:my-10">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              {data.map((item, i) => (
                <ImageBox
                  title={item.title}
                  dec={item.dec}
                  img={item.imgURL}
                  btnType={item.btn.type}
                  btnLink={item.btn.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
QualityDelivery.PageLayout = Layout;
