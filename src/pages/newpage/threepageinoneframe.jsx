import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import your pages/components
import Herosection1 from "./herosection1";
import Herosection2 from "./herosection2";
import Herosection3 from "./Herosection3";

export default function Index() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1} // one page per slide
        
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide><Herosection1 /></SwiperSlide>
        <SwiperSlide><Herosection2 /></SwiperSlide>
        <SwiperSlide><Herosection3/></SwiperSlide>
      </Swiper>
    </div>
  );
}
