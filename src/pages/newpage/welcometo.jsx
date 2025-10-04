import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center md:mt-15 md:mb-20 mb-5">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full md:w-[1512px] px-4 md:px-0 md:mr-10 md:ml-10 mr-0 ml-0">
        
        {/* Text Section */}
        <div className="w-full md:w-[600px]">
          {/* Heading */}
          <h1
            className="tracking-tighter -0.05em text-[28px] md:text-[44px] font-bold 
            bg-gradient-to-r from-[#1D3D76] via-[#E64622] to-[#E64622] 
            text-transparent bg-clip-text leading-[34px] md:leading-[48px] text-left w-full"
            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
          >
            Welcome to <br />
            the National Council for 
            <br />Skill Education (NCSE), Sikkim
          </h1>

          {/* Paragraphs */}
          <div className="w-full md:w-[577px] mt-4 md:mt-5">
            {/* Mobile: stacked, Desktop: stacked too */}
            <p
              className="text-[14px] md:text-[15px] text-left leading-[20px] md:leading-[22px] mt-2 md:mt-5 w-full"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              The National Council for Skill Education (NCSE), established under
              the NCSE Act 2023 and recognized by the Government of Sikkim, is a
              premier statutory board dedicated to advancing skill-integrated
              education in India.
            </p>

            <p
              className="text-[14px] md:text-[15px] text-left leading-[20px] md:leading-[22px] mt-2 md:mt-5 w-full"
              style={{ fontFamily: '"Myriad Pro", sans-serif' }}
            >
              Grounded in the principle of “Antyodaya to Sarvodaya” — from
              empowering the last individual to uplifting society as a whole — 
              NCSE provides holistic, inclusive, and future-ready education. We
              are committed to bridging the gap between academic learning and
              employability by integrating skill development at all levels of
              education.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="mt-6 md:mt-5 md:ml-8 flex justify-center w-full md:w-[573px] h-auto"
        >
          <img
            src="/ncse.png"
            alt="ncse"
            className="w-full md:w-[573px] h-auto md:h-[373px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
