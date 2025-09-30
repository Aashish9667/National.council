import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Navbar() {
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
      className="md:pt-8 md:pb-4 text-[20px] leading-[22px]"
      style={{ fontFamily: "'Myriad Pro', sans-serif" }}
    >
      <style>{`
    
        .swiper-pagination-bullet-active {
          background-color: black !important;
        }
        .swiper-pagination-bullet {
          background-color: rgba(0,0,0,0.4);
          mt-20;
        }
      `}</style>
      <div className="pt-10 text-center">
        <h1>Blog Section</h1>
      </div>

      <div
        className="text-center md:pt-5 md:pb-8 md:mb-8 font-bold text-[44px]"
        style={{ fontFamily: "'Myriad Pro', sans-serif" }}
      >
        <p>Insights & Knowledge</p>
      </div>

      {/* ✅ Swiper Slider with custom pagination */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          slidesPerView={3} // Show 3 cards horizontally
          className="pb-12" // padding so slides don’t overlap dots
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center md:mb-10">
              <div
                className="
      w-[389.41px] h-[282.31px] flex flex-col relative mx-auto
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
                    className="max-w-[350px] max-h-[168px] object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[12px] text-gray-500 font-normal">
                    {event.date}
                  </p>
                  <p className="text-[12px] font-semibold mt-1">
                    {event.title}
                  </p>
                </div>
              </div>

              {/* Button outside the card */}
              {index === 0 && (
                <button
                  className="
        ml-6 rounded-b-xl bg-orange-500 text-white
        text-[12px] font-semibold px-2 py-2
        hover:bg-orange-600 shadow-lg cursor-pointer
leading-[20px] -mt-2.5
      "
                >
                  Recent posts
                </button>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Dots BELOW images */}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
}
