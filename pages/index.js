import Link from "next/dist/client/link";
import TechSlider from "../components/techSlider";
// import Gallary from "../components/gallary";
import Image from "next/image";
import Layout from "../components/layout/index";
// import Experience from "../components/experience";
import Button from "../components/button";
import Form from "../components/form";
import BannerSlider from "../components/bannerSlider";
import Review from "../components/reviewSlider";
import getTranslations from "../translations/translations";
export default function Home() {
  return (
    <>
      {/* Banner section */}
      <BannerSlider />
      {/* Experience section */}
      <div className="py-10 lg:py-0 px-4 md:px-0 relative">
        <div className="container mx-auto lg:absolute lg:z-10 lg:left-1/2 lg:bottom-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-5">
            <div className="col-auto">
              <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-60 lg:h-56 relative">
                <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                  270+
                </h2>
                <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                  Completed Projects
                </p>
                <div className="bg-[#323232] h-[7px] opacity-50 absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
              </div>
            </div>
            <div className="col-auto">
              <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-60 lg:h-56 relative">
                <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232323232] text-center">
                  3+
                </h2>
                <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                  Global Presence
                </p>
                <div className="bg-[#323232] h-[7px] opacity-50 absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
              </div>
            </div>
            <div className="col-auto">
              <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-60 lg:h-56 relative">
                <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                  100+
                </h2>
                <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                  Clients
                </p>
                <div className="bg-[#323232] h-[7px] opacity-50 absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
              </div>
            </div>
            <div className="col-auto">
              <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-60 lg:h-56 relative">
                <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                  30+
                </h2>
                <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                  Team
                </p>
                <div className="bg-[#323232] h-[7px] opacity-50 absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Who we are section */}
      <div className="bg-[url('/images/whoweare-bg.png')] bg-no-repeat bg-cover my-10 lg:my-24 px-4 md:px-0 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 lg:mt-40">
            <div className="col-span-7 md:col-span-5 flex flex-col justify-center">
              <div className="absolute w-[250px] h-[225px] md:w-[660px] md:h-[600px] z-[-1] -left-[8%]">
                <Image
                  src="/images/aboutbg.png"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="font-poppins text-[30px] text-center md:text-left md:text-[60px] mb-5 md:mb-0 font-semibold text-[#323232]">
                Who We Are...?
              </h3>
              <p className="font-poppins text-[15px] md:text-[18px] leading-7 text-[#323232] xl:w-[430px] text-center md:text-left md:block ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <Link href="/about">
                <a className="md:block mx-auto md:mx-0 font-bold text-[20px] text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-white">
                  Read More
                </a>
              </Link>
            </div>
            <div className="col-span-7">
              <div className="relative hidden md:block">
                <Image
                  layout="responsive"
                  width={50}
                  height={50}
                  src="/images/whoweare.png"
                />
              </div>
              <div className="relative block md:hidden">
                <Image
                  layout="responsive"
                  width={50}
                  height={50}
                  src="/images/mobile-whoweare.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* grow section */}
      <div className="bg-[#323232] bg-no-repeat bg-cover mt-10 lg:mt-24 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <div className="py-10 md:py-20">
              <h3 className="font-poppins  md:text-left text-[22px] uppercase md:text-[30px] mb-2 font-bold text-[white]">
                Grow your business with digital technologies
              </h3>
              <p className="font-poppins text-[18px] leading-7 md:text-left text-[white] lg:w-[895px]">
                Whether you are a startup or a Fortune 500, let us help you take
                a fresh look at your digital transformation readiness for a
                successful operating model in the digital era.
              </p>
              <Link href="/contact">
                <a className="font-bold text-[20px] text-[#ffffff] border-[1px] md:mx-0 border-[#ffffff] py-[12px] px-[26px] mt-10 block w-fit duration-150 hover:bg-[#ffffff] hover:text-[#323232]">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Tech Stack */}
      <div className="my-10 lg:my-24 px-4 md:px-0 relative overflow-hidden ">
        <div className="container mx-auto md:block hidden">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="col-span-7 md:col-span-5 lg:col-start-9 flex flex-col justify-center order-2">
              <div className="absolute w-[250px] h-[225px] md:w-[660px] md:h-[600px] z-[-1] -right-[5%] hidden md:grid">
                <Image
                  src="/images/techbg.png"
                  layout='responsive'
                  width={100}
                  height={100}
                  objectFit='contain'
                />
              </div>
              <h3 className="font-poppins text-[30px] text-center md:text-left md:text-[60px] mb-5 md:mb-0 font-semibold text-[#323232]">
                Tech Stack
              </h3>
              <p className="font-poppins text-[15px] md:text-[18px] leading-7 text-[#323232] xl:w-[430px] text-center md:text-left hidden md:block ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
              <Link href="/about">
                <a className=" hidden md:block mx-auto md:mx-0 font-bold text-[20px] text-[#323232] border-[1px] border-[#323232] py-[12px] px-[26px] my-10 block w-fit duration-150 hover:bg-[#323232] hover:text-white">
                  Read More
                </a>
              </Link>
            </div>
            <div className="col-span-7">
              <div className="relative hidden md:block">
                <Image
                  layout="responsive"
                  width={50}
                  height={50}
                  src="/images/tech.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* for mobile */}
        <div className="container mx-auto md:hidden ">
        <h3 className="font-poppins text-[30px] text-center md:text-left md:text-[60px] mb-5 md:mb-0 font-semibold text-[#323232]">
                Tech Stack
              </h3>
          <TechSlider/>
        </div>
      </div>
      {/* Work Section */}
      <div className=" bg-[#323232] px-4 md:px-0">
        <div className="container mx-auto py-8 md:py-[100px]">
          <h3 className="font-poppins text-[22px] md:text-[60px] font-bold text-[#ffffff] text-center pb-8 md:pb-20">
            Our Work
          </h3>
          <div className="grid  gap-5">
            <div className="">
              <div className="duration-150 overflow-hidden shadow-custom2 group">
                <Link href="/">
                  <a className="font-bold w-full block duration-150 hover:text-[#323232]">
                    <Image
                      src="/images/work5.png"
                      layout='responsive'
                      objectFit='cover'
                      width={1000}
                      height={500}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-auto w-fit">
            <Button name="View All" url="/" type='light'/>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="py-10 lg:py-28 lg:my-24 px-4 md:px-0 md:bg-[#ffffff] bg-[#EBF2FF] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="absolute grid w-[250px] h-[225px] md:w-[660px] md:h-[600px] z-[0] top-1/2 -translate-y-1/2 -left-[8%]">
            <Image
              src="/images/aboutbg.png"
              layout='responsive'
              width={100}
              height={100}
              objectFit='contain'
            />
          </div>
          <Review />
        </div>
      </div>
      {/* Contact section */}
      <div className="py-10 lg:py-24 relative px-4 md:px-0 bg-[url('/images/contactbg.png')] bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-5">
            <div className="col-span-6 md:block hidden order-2">
              
            </div>
            <div className="col-span-6">
              <h3 className="font-poppins uppercase text-[22px] text-center md:text-left md:text-[40px] pb-10 font-bold text-[#ffffff]">
                Contact Us
              </h3>
              <Form bordercolor="#ffffff" label="#ffffff" button="#ffffff" buttonhover="#323232"/>
            </div>
          </div>
        </div>
      </div>
      {/* carrerr section */}
      <div className="md:bg-[url('/images/careersbg.png')] px-4 md:px-0 bg-[#f3f3f3] bg-no-repeat bg-cover bg-right-top py-10 lg:py-52">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-5">
            <div className="md:col-span-4">
              <span className="bg-[#323232] font-poppins flex w-fit mx-auto md:mx-0 font-bold text-[12px] md:text-[20px] text-white py-2 px-4 md:px-[25px] md:py-[10px]">
                CAREERS
              </span>
              <h3 className="font-poppins text-center md:text-left text-[22px] md:text-[30px] uppercase font-semibold text-[#323232] my-8">
                Shape your<br></br>
                future, join wecode Today!
              </h3>
              <Button name="Read More" url="/" type='dark'/>
            </div>
            <div className="col-auto block md:hidden">
              {/* <Image
                layout="responsive"
                objectFit="cover"
                width={50}
                height={50}
                src="/images/careersbg.png"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Home.displayName = "Home";
Home.PageLayout = Layout;

export async function getStaticProps(context: any) {
  const messages = getTranslations(context.locale);
  return {
    props: {
      messages: messages,
    },
  };
}
