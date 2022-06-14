import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BannerSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="relative">
      {/* <div
        className="button-prev hidden md:block absolute top-2/4 -left-4 transform -translate-y-[50%] hover:cursor-pointer"
      >
        <Image src="/images/leftarrow.png" width="50" height="50" />
      </div>
      <div
        className="button-next hidden md:block absolute top-2/4 -right-4 transform -translate-y-[50%] hover:cursor-pointer"
      >
        <Image src="/images/rightarrow.png" width="50" height="50" />
      </div> */}
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
        loop={true}
        className="myswiper"
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
      >
        <SwiperSlide>
          <div className="bg-[url('/images/mobile-banner.png')] md:bg-[url('/images/banner.png')]  bg-no-repeat bg-blend-overlay  md:bg-transparent bg-cover bg-left md:bg-center">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-12 py-28 pb-10 md:py-28 lg:py-36 xl:py-52  px-4 md:px-0">
                <div className="col-span-6">
                  <div className="flex flex-col">
                    <h3 className="font-poppins text-center md:text-left text-[14px] md:text-[30px] lg:text-[35px] xl:text-[45px] font-normal text-white">
                      We are
                    </h3>
                    <h3 className="font-inter text-[18px] px-10 md:px-0 text-center md:text-left md:text-[35px] lg:text-[45px] xl:text-[55px] font-bold  text-white">
                    WeKrypt is End to End Product develeopmet
                    </h3>
                    <Link href="/about">
                      <a className="font-bold text-[12px] md:text-[20px] text-white border-[1px] border-white mx-auto md:mx-0 py-[12px] px-[26px] mt-5 md:mt-10 block w-fit duration-150 hover:bg-white hover:text-[#323232]">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
