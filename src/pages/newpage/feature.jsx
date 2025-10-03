import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Navbar() {
  const images = ["/awod.png", "/awod.png", "/awod.png", "/awod.png"];
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Wait until the ref exists
    setSwiperReady(true);
  }, []);

  return (
    <div className="md:mt-10">
      <style>{`
  .swiper-pagination-bullet {
    background-color: #AEAEAE !important; 
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: white !important; 
  }
`}</style>

      <div className="bg-[#1D3D76] w-full h-full md:pt-10 pt-7 ">
        <h1
          className="md:text-[44px] text-[34px] mb-5  md:mb-20 font-bold text-center text-white md:leading-[48px] leading-[38px]"
          style={{ fontFamily: "'Myriad Pro', sans-serif" }}
        >
          Featured Achievements
        </h1>

        <div className="relative max-w-[1200px] mx-auto">
          {swiperReady && (
            <Swiper
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: paginationRef.current }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay, Pagination]}
              className="pb-12"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[385px] h-[212px] overflow-hidden border-1 border-transparent hover:border-white hover:shadow-lg transition-all duration-300 mx-auto">
                    <img
                      src={img}
                      alt={`Achievement ${index}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Explore More Button */}
          <div className="md:mt-15 mt-5">
            <button
              className="cursor-pointer flex justify-center items-center mb-2 mx-auto text-[16px] text-white border-0 px-4 py-2 rounded-full hover:bg-orange-600 bg-orange-500 leading-[22px] font-semibold"
              style={{ fontFamily: "'Myriad Pro', sans-serif" }}
            >
              Explore More
            </button>
          </div>

          {/* ✅ Pagination BELOW the button */}
          <div
            ref={paginationRef}
            className="custom-pagination flex justify-center gap- md:mt-10 py-5"
          ></div>
        </div>
      </div>
    </div>
  );
}
