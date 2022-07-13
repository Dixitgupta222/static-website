import React from "react";
import Layout from "../../components/layout/index";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageBox from "../../components/imageBox";
export default function CybersecurityDevSecOps() {
  var data = [
    {
      title: "DevSecOps Alignment",
      imgURL: "devops2.png",
      dec: `We focus on the security in your DevSecOps transformation. 
      From security reviews of code, to scheduled penetration testing, 
      to plugins for integration to CI/CD pipelines, we have the experience to ensure smooth security integration.`,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Compliance First",
      imgURL: "compliancefirst.png",
      dec: `Making your business compliant is critical. We can provide SMEs, consultants and architects to help conduct a thorough risk analysis and implement security architecture. Our endpoint solutions are also part of the required setup for compliance to many regulations
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "What We Do Best",
      imgURL: "whatwedobest.png",
      dec: `WeKrypt acts more as a partner than a service provider for your cybersecurity needs. Our solutions are proven and scalable, and they cover all aspects of enterprise security. Our approach is collaborative and aligned with your business needs.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Agile Security - DevSecOps",
      imgURL: "agile2.png",
      dec: `More and more organizations are changing to DevOps, and we ensure that’s done securely. Strengthen your applications by effectively identifying and removing critical vulnerabilities – without slowing the pace of change down in your transformation.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Cybersecurity Consulting",
      imgURL: "cybersecuritycon.png",
      dec: `We help organizations evolve and mature along the journey from foundational reactive security practices to a proactive and adaptive, unified enterprise defence strategy. 
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Identity and Access Management",
      imgURL: "identity.png",
      dec: `Manage the Cybersecurity threats from compromised identity management with our proven toolset and methodologies. We have expertise from every vertical in protecting against the ever-increasing risks in this area.
`,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Industrial & IOT Cybersecurity",
      imgURL: "industrial.png",
      dec: `Our Device Management Service optimizes performance, reliability and security effectiveness by configuring, tuning, updating and monitoring your deployed devices 24/7 whether deployed in an IT or OT/IoT environment.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
    {
      title: "Penetration Testing",
      imgURL: "penitration.png",
      dec: `Test your security from our ‘White Hat’ cyber attacks. We think like an attacker to see if your system is truly secure and use our global insight to ensure you are proof against the most recent threat profiles.
      `,
      btn: {
        link: "#",
        type: "",
      },
    },
  ];
  return (
    <>
      <div className="bg-[url('/images/cybersecurity-banner.png')] md:bg-[url('/images/cybersecurity-banner.png')] bg-bottom bg-no-repeat bg-cover">
        <div className="container px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center h-[250px] md:h-[300px] lg:h-[350px] text-center">
            <h2 className="font-poppins font-bold capitalize text-[20px] md:text-[50px] text-white">
              Cybersecurity & DevSecOps
            </h2>
          </div>
        </div>
      </div>

      <div className="relative py-10 overflow-hidden md:py-20">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] text-[#323232] md:w-[500px]">
                Cybersecurity & DevSecOps
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words md:w-[550px]">
                Cybersecurity is must and an plays an important role. Our
                approach lets you unlock competitive differentiators to help you
                win customers and we have a complete portfolio and broad
                expertise to help you do this.
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
                  src="/images/cybersecurity.png"
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
      <div className="relative py-10 overflow-hidden md:py-20 bg-[#F6F6F6]">
        <div className="container px-4 md:px-0">
          <div className="grid gap-5 lg:grid-cols-1">
            <div className="flex flex-col flex-wrap justify-center col-auto">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[30px] text-[#323232]">
                Cybersecurity - Making you safer
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-10 text-[#323232] break-words mx-auto md:pr-20">
                Cyber security is the state or process of protecting and
                recovering networks, devices, and programs from any type of
                cyberattack. Cyberattacks are an evolving danger to
                organizations, employees, and consumers. These attacks may be
                designed to access or destroy sensitive data or extort money.
                They can, in effect, destroy businesses and damage your
                financial and personal lives — especially if you’re the victim
                of identity theft. Our portfolio of cybersecurity services has
                been specifically designed for organisations aiming for digital
                transformation, securely. Our focus is to bring you the
                capabilities you need to protect that transformed business.
                Providing the expertise and global capability to deliver risk
                analysis, compliance checks, vulnerability tests, implementation
                of cyber technologies and managed security services.
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
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="col-auto">
              <div className="w-full">
                <Image
                  src="/images/cybersecurity2.png"
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center col-auto md:pl-10">
              <h2 className="font-poppins font-semibold capitalize text-left text-[20px] md:text-[40px] text-[#323232]">
                Making Cybersecurity a Competitive Advantage
              </h2>
              <p className="font-poppins font-normal normal-case text-[18px] text-left py-4 md:text-[18px] leading-7 text-[#323232] break-words md:w-[550px]">
                Information security as an enabler of new business
                opportunities. focus on supporting business and responding to
                cyberattacks, including ransomware, serive outages and other
                types of attacks. Use better information security as a
                competitive differentiator to help win customers. Create more
                value from cybersecurity by designing in security from the start
                and use it as springboard. To support wider organization
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pb-10 overflow-hidden md:pb-20">
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
CybersecurityDevSecOps.PageLayout = Layout;
