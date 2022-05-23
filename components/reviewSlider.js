import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Review() {
  const [review, setReview] = useState();
  const [dec, setDec] = useState();
  var activeSlide;

  const onSlideChange = (swiper) => {
    const wrapper = swiper.wrapperEl;
    activeSlide = wrapper.children[swiper.activeIndex];
    const reviewActive = activeSlide.children[0].innerHTML;
    const decActive = activeSlide.children[1].innerHTML;
    setReview(reviewActive);
    setDec(decActive);
    // console.log(activeSlide.innerHTML)
  };
  useEffect(() => {}, [onSlideChange]);

  // console.log(dec);
  // console.log(currentSlide);

  return (
    <div className="grid lg:grid-cols-12 gap-20 lg:gap-5 ">
      
      <div className="lg:col-span-7 flex  flex-col justify-center lg:pl-10 reviewSlider">
      
        <h3 className="font-poppins text-center uppercase lg:text-left font-bold text-[22px0] md:text-[30px] text-[#323232] z-10">
          What our clients say about us !
        </h3>
        <Swiper
          onSlideChange={onSlideChange}
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // loop={true}
          className="review-swiper w-[300px] md:w-[650px]  lg:w-full"
          pagination={{
            el: ".custom-pagination",
            type: "bullets",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <p
              id="review"
              className="font-poppins font-normal text-[14px] text-center lg:text-left leading-6 text-[#414141] lg:mr-28 mt-3"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
              simply dummy text of the Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <p
              id="post"
              className="font-poppins text-center lg:text-left font-normal text-[18px] leading-6 text-[#414141] mt-5 md:mt-12"
            >
              Web Developer
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p
              id="review"
              className="font-poppins font-normal text-[14px] text-center lg:text-left leading-6 text-[#414141] lg:mr-28 mt-3"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
              simply dummy text of the Lorem Ipsum is simply dummy text of the
              printing and typesetting industry 2.
            </p>
            <p
              id="post"
              className="font-poppins text-center lg:text-left font-normal text-[18px] leading-6 text-[#414141] mt-5 md:mt-12"
            >
              Web Developer 2
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p
              id="review"
              className="font-poppins font-normal text-[14px] text-center lg:text-left leading-6 text-[#414141] lg:mr-28 mt-3"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is
              simply dummy text of the Lorem Ipsum is simply dummy text of the
              printing and typesetting industry 3.
            </p>
            <p
              id="post"
              className="font-poppins text-center lg:text-left font-normal text-[18px] leading-6 text-[#414141] mt-5 md:mt-12"
            >
              Web Developer 3
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-wrap justify-center lg:justify-start my-3 gap-1 custom-pagination">
          {/* <span className=" rounded-full border-[1px] border-[#C4C4C4] p-1"></span> */}
        </div>
      </div>
      <div className="lg:col-span-5 hidden lg:block relative">
   
        <div className="md:w-96 md:h-96 w-80 h-80 md:mx-auto duration-150 group ease-in-out">
          <div className="bg-[#3a3a3a] w-full h-full p-8 flex flex-row gap-0 duration-150 flex-wrap content-start hover:-translate-y-2 relative z-[1]">
            <div className="w-10 h-10 mb-8"><Image src="/images/Q.png" layout="responsive" width="45" height="25"></Image></div>
            <div className="">
              <p className="font-poppins font-normal text-[15px] leading-5 text-white mb-4">
                {review}
              </p>
              <p className="font-poppins font-normal text-[18px] text-right leading-5 text-white md:absolute bottom-8 right-16">
                {dec}
              </p>
            </div>
          </div>
          <div className="md:w-96 md:h-96 w-80 h-80 bg-[#d2d2d247] duration-150 group-hover:top-[4.5rem] p-8 z-0 transform absolute top-16 -right-[0]"></div>
        </div>
      </div>
    </div>
  );
}
