"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white flex flex-col items-center px-4 md:px-8 py-8 -ml-0 md:-ml-10">
      {/* Top row: Left text + Right 2x2 grid */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-20 w-full max-w-5xl">
        {/* Left content */}
        <div className="w-full md:max-w-lg text-left md:text-left">
          {/* Heading */}
          <h1
            className="text-white bg-[#1D3D76] inline-block px-2 sm:px-3 md:px-6 py-1 md:mt-5 mt-0 rounded-r-2xl sm:rounded-r-4xl md:rounded-r-4xl font-bold text-2xl md:text-[32px] tracking-tight"
            style={{
              fontFamily: "'Myriad Pro', sans-serif",
              maxWidth: "100%", // ensures it doesn’t overflow
              whiteSpace: "nowrap", // keeps the text in one line
            }}
          >
            CURRICULUM & SYLLABUS
          </h1>

          {/* Gradient Title */}
          <p
            className="mt-6 md:text-[44px] text-[28px]  font-bold text-left bg-gradient-to-r from-[#1D3D76] to-[#E64622] text-transparent bg-clip-text leading-[1.2] md:w-[604px] w-90"
            style={{ fontFamily: "'Myriad Pro', sans-serif" }}
          >
            NCSE curriculum is designed to be industry-relevant,
            skill-integrated, and competency- based, covering:
          </p>

          {/* Description */}
          <p
            className="mt-4 text-sm md:text-[15px] text-gray-700 text-left md:ml-1.5 ml-0"
            style={{ fontFamily: "'Myriad Pro', sans-serif", maxWidth: "100%" }}
          >
            NCSE curriculum is designed to be industry-relevant,
            skill-integrated, and competency-based, covering:
          </p>
        </div>

        {/* Right-side topics in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-5 text-left font-bold text-[#1D3D76]  md:pt-20 text-xl md:text-[26px] leading-snug md:leading-[1.2]">
          <div>
            <h1
              className="md:tracking-tighter tracking-tighter-0.4rem"
              style={{ fontFamily: "'Myriad Pro', sans-serif", width: "217px" }}
            >
              Core academic subjects
            </h1>
          </div>
          <div>
            <h1
              className="tracking-tighter-0.4rem md:ml-7"
              style={{ width: "282px", fontFamily: "'Myriad Pro', sans-serif" }}
            >
              Internship, apprenticeship,
              <br /> and on-job training
            </h1>
          </div>
          <div>
            <h1
              className="md:-mt-4 tracking-tighter-0.4rem"
              style={{ width: "230px", fontFamily: "'Myriad Pro', sans-serif" }}
            >
              Emerging technologies & entrepreneurial skills
            </h1>
          </div>
          <div>
            <h1
              className="md:ml-7 md:mt-4 tracking-tighter-0.4rem"
              style={{ width: "247px", fontFamily: "'Myriad Pro', sans-serif" }}
            >
              Vocational & practical training
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p
        className="mt-6 md:mt-8 text-[14px] md:text-[16px] text-gray-800 font-bold text-left md:text-left  md:w-[1010px] w-full "
        style={{ fontFamily: "'Myriad Pro', sans-serif"  }}
      >
        All syllabi are structured as per National Skill Qualification Framework
        (NSQF), National Vocational Education Qualification Framework (NVEQF),
        and National Credit Framework (NCrF).
      </p>
    </div>
  );
}
