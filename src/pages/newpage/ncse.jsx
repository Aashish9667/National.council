"use client";

import React from "react";

export default function WhyChoose() {
  return (
    <div className="bg-[#fafafa] py-12 px-6 flex flex-col items-center pt-10 md:pt-25 pb-10 md:pb-25">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Heading Section */}
        <div className="flex flex-col md:flex-col items-start md:items-right-safe justify-end">
  {/* WHY */}
  <div>
    <h2 className="text-xl font-bold leading-tight ml-2 md:ml-7 -mb-5">
      WHY
    </h2>
  </div>

  {/* CHOOSE NCSE */}
  <div>
    <h2 className="text-xl font-bold leading-tight ml-2 md:ml-7 -mt-1 md:-mt-2">
      CHOOSE <span className="text-5xl font-bold">NCSE</span>
    </h2>
  </div>
</div>


        {/* First row - 2 boxes */}
        <div className="border border-black rounded-xl p-6 text-center ">
          <p style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
            Promote <span className="font-bold">skill-based learning</span> at <br />
            all education levels
          </p>
        </div>
        <div className="border border-black rounded-xl p-6 text-center ">
          <p style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
            Create an{" "}
            <span className="font-bold">industry-ready <br /> workforce</span>
          </p>
        </div>

        {/* Second row - 3 boxes */}
        <div className="border border-black rounded-xl p-6 text-center ">
          <p style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
            Bridge{" "}
            <span className="font-bold">education-employability <br /><span>gap</span></span>
          </p>
        </div>
        <div className="border border-black rounded-xl p-6 text-center ">
          <p style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
            Provide{ " "} 
            <span className="font-bold">
              national & <br />international recognition
            </span>
          </p>
        </div>
        <div className="border border-black rounded-xl p-6 text-center ">
          <p style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
            Support{" "}
            <span className="font-bold">underprivileged & <br />rural youth</span>
          </p>
        </div>
      </div>
    </div>
  );
}
