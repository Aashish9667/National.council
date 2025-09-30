"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white flex flex-col items-center px-8 py-8 -ml-10">
      {/* Top row: Left text + Right 2x2 grid */}
      <div className="flex flex-row justify-start items-start gap-x-20 w-full max-w-5xl">
        {/* Left content */}
        <div className="max-w-lg text-center md:text-left">
          {/* Heading */}
          <h1 className="text-white bg-[#1D3D76] inline-block px-6 py-0 mt-10 rounded-r-4xl font-bold text-[32px] tracking-tighter-0.4rem"style={{fontFamily: "'Myriad Pro', sans-serif"}}>
            CURRICULUM & SYLLABUS
          </h1>

          {/* Gradient Title */}
          <p
            className="mt-6 text-[44px] font-bold text-left bg-gradient-to-r from-[#1D3D76] to-[#E64622] text-transparent bg-clip-text leading-[1.2]"
            style={{ width: "604px",fontFamily: "'Myriad Pro', sans-serif" }}
          >
            NCSE curriculum is designed to be industry-relevant,
            skill-integrated, and competency- based, covering:
          </p>

          {/* Description */}
          <p
            className="mt-4 md:ml-1 text-[15px] text-gray-700"
            style={{ width: "511px",fontFamily: "'Myriad Pro', sans-serif" }}
          >
            NCSE curriculum is designed to be industry-relevant,
            skill-integrated, and <br />
            competency-based, covering:
          </p>
        </div>

        {/* Right-side topics in 2x2 grid */}
        <div className="grid grid-cols-2 gap-5 text-left font-bold text-[#1D3D76] pt-20 text-[26px] leading-[1.2]">
          <div>
            <h1 className="tracking-tighter-0.4rem" style={{ width: "217px",fontFamily: "'Myriad Pro', sans-serif" }}>
              Core academic subjects
            </h1>
          </div>
          <div>
            <h1 className="tracking-tighter-0.4rem md:ml-7" style={{ width: "282px",fontFamily: "'Myriad Pro', sans-serif" }}>
              Internship, apprenticeship,
              <br /> and on-job training
            </h1>
          </div>
          <div>
            <h1 className="tracking-tighter-0.4rem md:-mt-2" style={{ width: "230px",fontFamily: "'Myriad Pro', sans-serif" }}>
              Emerging technologies & entrepreneurial skills
            </h1>
          </div>
          <div>
            <h1 className="tracking-tighter-0.4rem md:ml-7 md:mt-4" style={{ width: "247px",fontFamily: "'Myriad Pro', sans-serif" }}>
              Vocational & practical training
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p
        className="md:mt-8 md:ml-7 text-[16px] text-gray-800 font-bold flex flex-row justify-center place-items-center"
        style={{
          fontFamily: "'Myriad Pro', sans-serif",
          width: "1206px",
        }}
      >
        All syllabi are structured as per National Skill Qualification Framework
        (NSQF), National Vocational Education Qualification Framework
        <br />
        (NVEQF), and National Credit Framework (NCrF).
      </p>
    </div>
  );
}
