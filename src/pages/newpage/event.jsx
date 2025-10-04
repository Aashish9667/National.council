"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Navbar() {
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  const events = [
    { img: "/event1.png", date: "Published On: September 6, 2025", title: "Celebrating Achievement of Mr. Kishor Thapa, BPES Student at AUS" },
    { img: "/event1.png", date: "Published On: September 6, 2025", title: "Celebrating Achievement of Mr. Kishor Thapa, BPES Student at AUS" },
    { img: "/event2.png", date: "Published On: September 6, 2025", title: "Celebrating Achievement of Mr. Kishor Thapa, BPES Student at AUS" },
    { img: "/event3.png", date: "Published On: September 6, 2025", title: "Celebrating Achievement of Mr. Kishor Thapa, BPES Student at AUS" },
  ];

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      // ✅ connect ONLY custom container
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <div className="bg-[#fafafa] md:pt-20 md:mt-0 pt-15">
      {/* Section Title */}
      <div
        className="text-center md:pt-4 md:pb-4 font-bold text-[34px] md:text-[44px] leading-[48px]"
        style={{ fontFamily: "'Myriad Pro', sans-serif" }}
      >
        <h1>Events & Updates</h1>
      </div>

      <div className="text-center md:pt-2 md:pb-13 pt-2 pb-10 text-[15px] leading-[22px]">
        <p>Stay updated with NCSE’s latest initiatives:</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          // 🚨 Important: disable default container (el will be set manually)
          pagination={{ clickable: true, el: null }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="w-64 flex flex-col mx-auto">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={event.img}
                    alt="event"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-[12px] mt-2 mb-1">{event.date}</p>
                <p className="text-[14px] font-extrabold mt-1">{event.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Single Dots Container */}
        <div ref={paginationRef} className="flex justify-center mt-10"></div>
      </div>
      <style>{`
  .swiper-pagination-bullet {
    background-color: #000 !important;   /* sabhi dots black */
    opacity: 0.3;                        /* halka gray effect for inactive */
  }
  .swiper-pagination-bullet-active {
    background-color: #000 !important;   /* active dot bhi pure black */
    opacity: 1;
  }
`}</style>
    </div>
  );
}
