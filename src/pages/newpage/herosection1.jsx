import React from "react";

export default function Page14() {
  return (
    <div
      className="w-full h-[610px]  flex justify-center items-center px-4 md:px-8 md:mt-0 pt-10 relative"
      style={{
        backgroundImage: `url('/2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Reduced horizontal gap with md:gap-x-4 */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] relative h-full md:gap-x-4">
        
        {/* Left Side Content */}
        <div className="flex flex-col md:w-[52%] text-center md:text-left justify-center h-full md:ml-5">
          <h1 className="text-[25px] md:text-[34px] text-[#1D3D76] font-bold md:mb-1 md:mt-20 mb-1 mt-10">
            Education doesn't expire
          </h1>
          <h1 className="text-[25px] md:text-[44px] text-[#F05B23] leading-snug font-bold">
            Your opportunity starts now.
          </h1>

          <div className="bg-[#1D3D76] md:w-fit  rounded-lg mt-3 md:mb-10 mb-10 text-left">
            <h1 className="text-white p-2 text-sm md:text-base font-bold md:px-14 px-1 py-1 text-left">
              From nurturing roots to creating a worldwide impact.
            </h1>
          </div>

          <div className="bg-yellow-400 rounded-[20px] w-fit mx-auto md:mx-0 md:mt-2 mt-10">
            <button className="cursor-pointer text-[14px] md:text-[14px] font-semibold text-black px-6 py-1">
              ENROLL NOW
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full md:w-[48%] flex justify-end  h-full">
          <img
            src="/1.png"
            alt="educated"
            className="absolute bottom-0 w-full md:w-auto max-w-[600px] md:max-w-[700px] max-h-[970px] object-contain"
          />

          {/* Vertical Right Button */}
              <button className=" absolute -right-6 md:-right-8 bottom-80 bg-orange-500 text-white px-2  py-1 rounded-b-lg rotate-90 hover:bg-orange-600 shadow-lg">
            <span className="block rotate-0 whitespace-nowrap cursor-pointer">
              Enquiry now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
