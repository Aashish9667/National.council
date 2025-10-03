"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function SuccessStories() {
  const swiperRef = useRef(null);

  const stories = [
    {
      name: "Pallabi Saikai",
      major: "B Tech",
      img: "/image 1.png",
      text: "When I first started my journey at Arunachal University of studies, I was unsure about my future and anxious about different challenges. But the university has given me the support",
    },
    {
      name: "Second Student",
      major: "B Tech",
      img: "/image 1.png",
      text: "When I first started my journey at Arunachal University of studies, I was unsure about my future and anxious about different challenges. But the university has given me the support",
    },
    {
      name: "Third Student",
      major: "MSc",
      img: "/image 1.png",
      text: "When I first started my journey at Arunachal University of studies, I was unsure about my future and anxious about different challenges. But the university has given me the support",
    },
    {
      name: "Fourth Student",
      major: "BBA",
      img: "/image 1.png",
      text: "When I first started my journey at Arunachal University of studies, I was unsure about my future and anxious about different challenges. But the university has given me the support",
    },
  ];

  return (
    <div className="w-full bg-[#193872] text-white px-1 md:px-6 py-16">
      <div className="container mx-auto max-w-[1440px] px-1 md:px-6 lg:px-10 flex flex-col md:flex-row gap-16">
        {/* ===== LEFT SIDE (Desktop only visible) ===== */}
        <div className="hidden md:flex md:w-1/3 flex-col justify-center">
          <p
            className="text-xs mb-3 mt-1 font-semibold leading-[16px]"
            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
          >
            Testimonials / Impact Stories
          </p>
          <h1
            className="text-[48px] font-bold leading-[42px] whitespace-nowrap"
            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
          >
            Success Stories
          </h1>

          {/* Arrow buttons (Desktop) */}
          <div className="flex gap-3 mt-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[55px] h-[55px] rounded-full bg-[#2A4A8A] flex items-center justify-center hover:bg-[#3659a1] transition cursor-pointer"
            >
              <span className="text-3xl">‹</span>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[55px] h-[55px] rounded-full bg-[#2A4A8A] flex items-center justify-center hover:bg-[#3659a1] transition cursor-pointer"
            >
              <span className="text-3xl">›</span>
            </button>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          {/* MOBILE HEADING */}
          <div className="md:hidden text-center mb-6">
            <p
              className="text-xs font-semibold leading-[16px]"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Testimonials / Impact Stories
            </p>
            <h1
              className="text-[34px] md:text-[44px] font-bold leading-[28px] mt-1"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Success Stories
            </h1>
          </div>

          {/* Top tab buttons */}
          <div className="flex gap-2 mb-6 justify-center  md:mr-2">
            <button
              className=" md:px-3 md:py-2 px-2 py-1 bg-[#3659a1] rounded-t-[12px] text-[10px] leading-[16px] font-medium text-white cursor-pointer md:w-[340px] "
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Learner experiences – “How NCSE changed my career path”
            </button>
            <button
              className=" md:px-3 md:py-2 px-2 py-1 bg-[#4d4d4d] rounded-t-[12px] text-[10px] leading-[16px] font-medium text-white cursor-pointer md:w-[170px] "
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Industry endorsements
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={2}
            spaceBetween={15}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 }, // Mobile → 2 slides ek sath
              768: { slidesPerView: 2, spaceBetween: 30 }, // Tablet & desktop same as before
            }}
            slidesOffsetBefore={0} // 👈 left space remove
            slidesOffsetAfter={0}
            className="w-[350px] md:w-[520px]"
          >
            {stories.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white text-black rounded-xl p-3 shadow-md h-[230px] md:h-[300px] flex flex-col">
                  <div className="flex items-center mb-2">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-[60px] h-[70px] md:w-[90px] md:h-[100px] object-cover rounded-md mr-2 transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div>
                      <h3
                        className="text-[14px] md:text-[16px] font-semibold"
                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                      >
                        {s.name}
                      </h3>
                      <p
                        className="text-[12px] md:text-[13px] font-semibold text-gray-700"
                        style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                      >
                        {s.major}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] mt-4 text-gray-800"
                    style={{ fontFamily: '"Myriad Pro", sans-serif' }}
                  >
                    {s.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* MOBILE ARROWS */}
          <div className="md:hidden flex gap-4 mt-6 justify-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[45px] h-[45px] rounded-full bg-[#2A4A8A] flex items-center justify-center hover:bg-[#3659a1] transition cursor-pointer"
            >
              <span className="text-2xl">‹</span>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[45px] h-[45px] rounded-full bg-[#2A4A8A] flex items-center justify-center hover:bg-[#3659a1] transition cursor-pointer"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
