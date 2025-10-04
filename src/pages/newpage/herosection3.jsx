import React from "react";

export default function Page14() {
  return (
    <div
      className="w-full md:h-[490px] h-[585px] flex justify-center items-center px-4 md:px-8 md:mt-28 mt-20  relative bg-amber-100"
    >
      {/* Reduced horizontal gap using gap-x-2 */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] relative h-full md:gap-x-2">
        
        {/* Left Side Content */}
        <div className="flex flex-col md:w-[51%] text-center md:text-left justify-center h-full md:ml-5 md:mt-0">
          <h1 className="text-[25px] md:text-[44px] text-[#1D3D76] font-bold  ">
           Turn your set-back
          </h1>
          <h1 className="text-[25px] md:text-[44px] text-[#1D3D76] font-bold mb-1">into a comeback</h1>
          <h1 className="text-[25px] md:text-[34px] text-[#F05B23] leading-snug font-bold">
            with skills that shape your future
          </h1>

          <div className="bg-yellow-400 rounded-[20px] w-fit mx-auto md:mx-0 md:mt-10 mt-10">
            <button className="cursor-pointer text-[14px] md:text-[14px] font-semibold text-black px-6 py-1">
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full md:w-[47%] flex justify-end h-full">
          <img
            src="/5.png"
            alt="educated"
            className="absolute bottom-0 w-full md:w-auto max-w-[700px] md:max-w-[600px] max-h-[970px] object-contain"
          />

          {/* Vertical Right Button */}
          <button className="absolute -right-6 md:-right-8 md:bottom-80 bottom-85  bg-orange-500 text-white px-2  py-1 rounded-b-lg rotate-90 hover:bg-orange-600 shadow-lg">
            <span className="block rotate-0 whitespace-nowrap cursor-pointer">
              Enquiry now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
