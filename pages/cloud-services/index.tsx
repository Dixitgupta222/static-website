import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageBox from "../../components/imageBox";
export default function CloudServices() {
  var data = [
    {
      title: "DevOps & Automation first",
      imgURL: "devops.png",
      dec: `TO get the biggest benefits from cloud, DevOps and automation 
      together is proven to be the best way to We migrate / build your apps
       and infrastructure in a DevOps model, automating wherever possible. `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Collaborative style",
      imgURL: "collaborative.png",
      dec: `We work on your project (whether it’s migration or build) collaboratively.
       As every company starts to see themselves as an IT company, we provide the knowledge 
       and experience to do and accelerate this journey with you, not to you`,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Cloud Strategy",
      imgURL: "cloudstratergy.png",
      dec: `Our value focused, public cloud planning, implementation and operating model. Designed and implemented to your specific needs. 
      We help you get to where value is created, fast: by enabling dynamic public cloud native development, you can transform your business inside and out and create a new agile, digital culture.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "SMART WorkSpace",
      imgURL: "smartworkspace.png",
      dec: `We connect all your teams to our high-performance collaborative workspace. They can work anytime, anyplace, anywhere.`,
      btn: {
        link: "#",
        type: "",
      },
    },
  ];
  return (
    <>
      <div className="bg-[url('/images/cloud-banner.png')] md:bg-[url('/images/cloud-banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[350px]">
            <h2 className="font-poppins font-bold capitalize text-[20px] md:text-[50px] text-white">
              Quality Delivery
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold capitalize text-center text-[20px] md:text-[30px]  text-[#323232]">
                We support our customer at all phases of their cloud adoption.
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                Our goal is to help client leverage public cloud technology
                without any of the IT pain points along the way.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                Achieving value in the cloud Every business is looking forward
                to stay in game for cloud.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                WeKrypt we help our customers find it – whether it’s by
                migrating legacy technologies and applications to the public
                cloud, or deploying new cloud applications.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                We Krypt portfolio enables benefits, and drives adoption of the
                latest technology such as Automation and AI. We help customer to
                move to Cloud and enable their business, improving the service
                and taking out cost. Our solutions ensure client get what they
                are goals at their pace.
              </p>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words">
                We’ll manage Client journey to a public cloud that’s flexible,
                scalable and always updated. And we’ll help your business to
                stay agile and focused once you’re there.
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
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              {data.map((item, i) => (
                <ImageBox
                  key={i}
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
CloudServices.PageLayout = Layout;
