"use client";
import React from "react";
import { Pause, Play } from "lucide-react"; // ✅ icon set (or use any icon lib you prefer)

export default function Page14() {
  return (
    <div
      className="w-full h-[577px] md:h-[490px] flex justify-end items-end px-4 md:px-8 relative md:mt-28 mt-20 pt-6 md:pt-0"
      style={{
        backgroundImage: `url('/baner1.png')`, // ✅ background banner
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] relative h-full md:gap-x-4">
        {/* ===== LEFT SIDE ===== */}
        <div className="flex flex-col md:w-[52%] text-center md:text-left md:justify-center justify-start h-full md:ml-5 md:pt-0 pt-5">
          {/* Pause + Headline */}
          <div className="flex items-start md:items-center justify-start md:justify-start gap-3 md:mb-2 ">
            <div className=" md:mb-10 w-[75px] h-[75px] border-2 border-black rounded-full flex items-center justify-center">
              <Pause size={43} className="text-black" />
            </div>
             <h1
              className="text-[36px] md:text-[64px] font-bold text-[#1d3d76] md:leading-12 md:-ml-0 -ml-20"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Paused <br  /> <span className="italic text-[#1D3D76] text-[40px] md:ml-0 ml-15 md:leading-0 leading-[10px]">your</span>{" "}
              <span className="bg-yellow-400 px-1 rounded text-[40px] md:-ml-0 -ml-0 ">studies?</span>
            </h1>
          </div>

          {/* Play line */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-[45px] h-[45px] border-2 border-black rounded-md flex items-center justify-center md:mt-0 mt-5">
              <Play size={24} className="text-black" />
            </div>
            <p
              className="text-[20px] md:text-[35px] font-bold  bg-gradient-to-r from-[#E64622] to-[#1D3D76] text-transparent bg-clip-text md:mt-0 mt-5"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Press play on your career
            </p>
          </div>

          {/* Enroll button */}
          <div className="bg-yellow-400 rounded-[20px] w-fit mx-auto md:mx-0 md:mt-10 mt-10">
            <button className="cursor-pointer text-[14px] md:text-[14px] font-semibold text-black px-6 py-1">
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="relative w-full md:w-[48%] flex justify-end h-full">
          <img
            src="/3.png" // ✅ main right image
            alt="student"
            className="absolute bottom-0 w-full md:w-auto max-w-[600px] max-h-[970px]  md:max-w-[700px] md:max-h-[970px] object-contain md:-mr-7"
          />

          {/* Vertical Right Button */}
          <button className="absolute  md:-right-1 -right-5 bottom-70 md:bottom-80 bg-orange-500 text-white px-2 py-1 rounded-b-lg rotate-90 hover:bg-orange-600 shadow-lg">
            <span className="block whitespace-nowrap cursor-pointer">
              Enquiry now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
