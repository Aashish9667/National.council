import React from "react";

export default function Programs() {
  const boxes = [
    { title: "SCHOOL EDUCATION (PRE-DEGREE)", subtitle: "Elementary, Secondary, Senior Secondary" },
    { title: "SKILL DEVELOPMENT PROGRAMS", subtitle: "Short, medium, long-term courses" },
    { title: "VOCATIONAL EDUCATION & TRAINING", subtitle: "Sector-specific courses with NSQF/NVEQF" },
    { title: "CERTIFICATION & DIPLOMA PROGRAMS", subtitle: "Charter certificates, Diploma programs" },
    { title: "ALTERNATIVE & FLEXIBLE LEARNING", subtitle: "Open schooling, distance education" },
    { title: "APPRENTICESHIP & INTERNSHIP PROGRAMS", subtitle: "Industry-embedded training modules" },
    { title: "COMMUNITY & SPECIAL PROGRAMS", subtitle: "Village & rural skilling, Capacity building" },
    { title: "CONTINUING EDUCATION & LIFELONG LEARNING", subtitle: "Refresher courses, professional development modules" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#1D3D76] to-[#E64622] min-h-[473px] flex justify-center px-4 md:pt-0 pt-5">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full md:min-w-[1200px]">
        
        {/* Left Section (Heading + Image for desktop) */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto order-1 md:order-none">
          {/* Heading */}
          <h1 className="text-[28px] md:text-[44px] font-bold text-white text-center md:text-left md:mt-13 md:mb-6 md:ml-12">
            PROGRAMS
          </h1>

          {/* Image → only visible on desktop here */}
          <div className="hidden md:block w-[384px] h-[490px] self-start -mb-30">
            <img
              src="/degree.png"
              alt="degree"
              className="w-[384px] h-[370px] object-contain"
            />
          </div>
        </div>

        {/* Right Section (Boxes) */}
        <div
          className="mt-6 md:mt-0 flex flex-col gap-6 md:self-center md:mr-10 md:w-[220] order-2 md:order-none"
          style={{ fontFamily: "'Myriad Pro', sans-serif" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {boxes.map((box, i) => (
              <div
                key={i}
                className="border border-white rounded-xl p-4 w-full md:w-[220px]"
              >
                <p className="text-[14px] font-bold text-white leading-snug">{box.title}</p>
                <p className="text-[12px] text-white mt-1 leading-tight">{box.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Image → sabse niche */}
        <div className="block md:hidden w-[250px] mt-6 self-center order-3">
          <img
            src="/degree.png"
            alt="degree"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
