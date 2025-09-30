import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center px-4 mt-25 mb-25 ml-20 mr-20">
      {/* Content Wrapper */}
      <div className="flex items-center" style={{ width:"1512px" }}>
        {/* Text Section */}
        <div style={{width:"600px",}}>
          <h1
            className="tracking-tighter
-0.05em text-[44px] font-bold text-left bg-gradient-to-r from-[#1D3D76] via-[#E64622] to-[#E64622] text-transparent bg-clip-text leading-[48px]"
            style={{ fontFamily: '"Myriad Pro", sans-serif' }}
          >
            Welcome to <br />
            the National Council for 
            <br />Skill Education (NCSE), Sikkim
          </h1>
<div style={{width:"577px"}}>
          <p
            className="text-[15px] text-left mt-4 leading-[22px]"
            style={{ fontFamily: '"Myriad Pro", sans-serif', }}
          >
            The National Council for Skill Education (NCSE), established under
            the NCSE Act 2023 and recognized by the Government of Sikkim, is a
            premier statutory board dedicated to advancing skill-integrated
            education in India.
          </p>

          <p
            className="text-[15px] text-left mt-4 leading-[22px]"
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
          className="ml-8 flex justify-center"
          style={{ width: "573px", height: "373px" }}
        >
          <img
            src="/ncse.png"
            alt="ncse"
            style={{ width: "573px", height: "373px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
