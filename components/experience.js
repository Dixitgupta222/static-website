import React from "react";
import Link from "next/link";
export default function Experience(props) {
  return (
    <div className={`py-10 lg:py-24 px-4 md:px-0 lg:bg-[#323232]`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-auto md:col-span-5 mb-5 lg:my-0">
            <div className="grid grid-cols-2 gap-5 md:gap-10  lg:gap-y-3 xl:gap-5">
              <div className="col-auto">
                <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-52 lg:h-52 xl:w-60 xl:h-56 relative">
                  <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                    270+
                  </h2>
                  <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                    Completed Projects
                  </p>
                  <div className="bg-[#323232] opacity-50 h-[7px] absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
                </div>
              </div>
              <div className="col-auto translate-y-5"> 
                <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-52 lg:h-52 xl:w-60 xl:h-56 relative">
                  <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                    3+
                  </h2>
                  <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                    Global Presence
                  </p>
                  <div className="bg-[#323232] opacity-50 h-[7px] absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
                </div> 
              </div>
              <div className="col-auto">
                <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-52 lg:h-52 xl:w-60 xl:h-56 relative">
                  <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                    100+
                  </h2>
                  <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                    Clients
                  </p>
                  <div className="bg-[#323232] opacity-50 h-[7px] absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
                </div>
              </div>
              <div className="col-auto translate-y-5">
                <div className="bg-white rounded shadow-custom transform duration-150 hover:scale-105 px-10 py-8 mx-auto lg:m-0 min-h-[160px] md:w-72 md:h-64 lg:w-52 lg:h-52 xl:w-60 xl:h-56 relative">
                  <h2 className="font-poppins font-medium text-[35px] md:text-[50px] text-[#323232] text-center">
                    30+
                  </h2>
                  <p className="font-poppins font-medium text-[14px] mb-4 md:mb-0 md:text-[20px] text-[#000000] text-center">
                    Team
                  </p>
                  <div className="bg-[#323232] opacity-50 h-[7px] absolute bottom-6 left-1/2 transform -translate-x-2/4 w-4/5 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto md:col-span-7  flex flex-col justify-center lg:pl-10">
            <h3 className="font-poppins text-center uppercase lg:text-left my-3 md:m-0 text-[25px] md:text-[45px] font-bold text-[#323232] lg:text-[#ffffff]">
              Immersive Experience
            </h3>
            <p className="font-poppins text-[15px] text-center lg:text-left md:text-[18px] leading-7 text-[#323232] lg:text-[#ffffff] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
            <Link href="/contact">
              <a className="font-bold text-[20px] mx-auto lg:mx-0 text-[#323232] lg:text-[#ffffff]  border-[1px] lg:border-[#ffffff] border-[#323232] py-[12px] px-[26px] md:pr-[50px] mt-10 block w-fit duration-150 lg:hover:bg-[#ffffff] hover:bg-[#323232] lg:hover:text-[#323232] hover:text-[#ffffff]">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
  