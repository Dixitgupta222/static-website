import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function TechSlider() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <div className="relative px-14 md:px-10">
        <div
        className="button-prev w-8 h-8 md:w-auto md:h-auto md:block absolute top-2/4 left-2 md:-left-4 transform -translate-y-[50%] hover:cursor-pointer"
      >
        <Image src="/images/leftarrowwhite.png" width="50" height="50" />
      </div>
      <div
        className="button-next w-8 h-8 md:w-auto md:h-auto  md:block absolute top-2/4 right-2 md:-right-4 transform -translate-y-[50%] hover:cursor-pointer"
      >
        <Image src="/images/rightarrowwhite.png" width="50" height="50" />
      </div>
      <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
         autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          loop={true}
          className="myswiper "
          navigation= {{
            nextEl: '.button-next',
            prevEl: '.button-prev'
          }}
          // centeredSlides={true}
        //   breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
      >
        <SwiperSlide>
          <div className="rounded-xl w-28 h-28 md:w-40 md:h-40 shadow-custom bg-white p-6 mx-auto my-4 flex items-center justify-center transform duration-150 hover:shadow-xl hover:scale-105">
              <Image width="114" height="114" src="/images/php.png"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl w-28 h-28 md:w-40 md:h-40 shadow-custom bg-white p-6 mx-auto my-4 flex items-center justify-center transform duration-150 hover:shadow-xl hover:scale-105">
              <Image width="114" height="114" src="/images/wordpress.png"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl w-28 h-28 md:w-40 md:h-40 shadow-custom bg-white p-6 mx-auto my-4 flex items-center justify-center transform duration-150 hover:shadow-xl hover:scale-105">
              <Image width="114" height="114" src="/images/slide3.png"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl w-28 h-28 md:w-40 md:h-40 shadow-custom bg-white p-6 mx-auto my-4 flex items-center justify-center transform duration-150 hover:shadow-xl hover:scale-105">
              <Image width="114" height="114" src="/images/slide4.png"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl w-28 h-28 md:w-40 md:h-40 shadow-custom bg-white p-6 mx-auto my-4 flex items-center justify-center transform duration-150 hover:shadow-xl hover:scale-105">
              <Image width="114" height="114" src="/images/react.png"></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
