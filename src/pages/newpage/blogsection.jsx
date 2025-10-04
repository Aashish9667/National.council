import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const events = [
    {
      img: "/classroom.png",
      date: "Jul 12, 2025",
      title:
        "AUS Empowers Students with Laptops Under the Students and Alumni Upgrade Program",
    },
    {
      img: "/classroom.png",
      date: "Jul 13, 2025",
      title:
        "AUS Empowers Students with Laptops Under the Students and Alumni Upgrade Program",
    },
    {
      img: "/classroom.png",
      date: "Jul 14, 2025",
      title:
        "AUS Empowers Students with Laptops Under the Students and Alumni Upgrade Program",
    },
    {
      img: "/classroom.png",
      date: "Jul 15, 2025",
      title:
        "AUS Empowers Students with Laptops Under the Students and Alumni Upgrade Program",
    },
  ];

  return (
  
    <div
      className="md:pt-8 md:pb-4 text-[20px] leading-[22px] md:mb-0 mb-10"
      style={{ fontFamily: "'Myriad Pro', sans-serif" }}
    >
     
      <div className="pt-10 md:pt-10 text-center">
        <h1>Blog Section</h1>
      </div>

      <div
        className="text-center md:pt-5 md:pb-8 md:mb-8 pt-5 pb-8 mb-5 font-bold md:text-[44px] text-[34px]"
        style={{ fontFamily: "'Myriad Pro', sans-serif" }}
      >
        <p>Insights & Knowledge</p>
      </div>

      {/* ✅ Swiper Slider with custom pagination */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          slidesPerView={3} // Show 3 cards horizontally
            breakpoints={{
    0: {            // ✅ for mobile
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {          // ✅ for tablet
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {         // ✅ for desktop
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
          className="pb-8" // padding so slides don’t overlap dots
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center md:mb-10">
              <div
                className="
      md:w-[389.41px] md:h-[282.31px] w-[300px] h-[250px] flex flex-col relative mx-auto
      bg-white border border-gray-300 rounded-xl
      shadow-[0_0_15px_rgba(0,0,0,0.25)]
      transition-transform duration-300 ease-in-out
     
    "
              >
                {/* Image with zoom-up effect */}
                <div className="flex justify-center items-center mt-4 overflow-hidden rounded-lg">
                  <img
                    src={event.img}
                    alt="event"
                    className="md:max-w-[350px] md:max-h-[168px] max-w-[260px] max-h-[150px] object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="md:p-4 p-4">
                  <p className="md:text-[12px] text-[10px] text-gray-500 font-normal">
                    {event.date}
                  </p>
                  <p className="text-[10px] md:text-[12px] font-semibold mt-1">
                    {event.title}
                  </p>
                </div>
              </div>

              {/* Button outside the card */}
              {index === 0 && (
                <button
                  className="
        md:ml-6 ml-1 rounded-b-xl bg-orange-500 text-white
        text-[5px] md:text-[12px] font-semibold md:px-2 md:py-2 
        hover:bg-orange-600 shadow-lg cursor-pointer
leading-[16px] md:leading-[15px]  md:-mt-2 -mt-1   hidden md:block   
      "
                >
                  Recent posts
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Dots BELOW images */}
      
      </div>
       {/* ✅ Custom Pagination (no swiper pagination) */}
      <div className="flex justify-center mt-6 mb-16 md:mt-5 gap-2">
        {events.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              activeIndex === i ? "bg-black " : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
    

  );
}
