import React from "react";

export default function Programs() {
  // ✅ Array of boxes with title and subtitle
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
    <div className="bg-gradient-to-r from-[#1D3D76] to-[#E64622] min-h-[473px] flex justify-center ">
      {/* Content Wrapper with fixed base width */}
      <div className="flex justify-between items-stretch" style={{ minWidth: "1200px" }}>
        
        {/* Left Section (Title top + Image bottom) */}
        <div className="flex flex-col justify-between">
          <h1 className="text-[44px] font-bold text-white md:mt-13 md:mb-6 md:ml-12">PROGRAMS</h1>
          <div className="w-[384px] h-[490px] self-start md:-mb-30">
            <img
              src="/degree.png"
              alt="degree"
              className="w-[384px] h-[370px] object-contain"
            />
          </div>
        </div>

        {/* Right Section (Boxes in grid) */}
        <div className="flex flex-col gap-6 self-center md:mr-10" style={{ fontFamily: "'Myriad Pro', sans-serif" }}>
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-6">
            {boxes.slice(0, 3).map((box, i) => (
              <div key={`row1-${i}`} className="border-1 border-white rounded-xl p-3 w-[220px] h-auto">
                <p className="text-[14px] font-bold text-white leading-snug">{box.title}</p>
                <p className="text-[12px] text-white mt-1 leading-tight">{box.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-6">
            {boxes.slice(3, 6).map((box, i) => (
              <div key={`row2-${i}`} className="border-1 border-white rounded-xl p-3  w-[220px] h-auto">
                <p className="text-[14px] font-bold text-white leading-snug">{box.title}</p>
                <p className="text-[12px] text-white mt-1 leading-tight">{box.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-6">
            {boxes.slice(6, 8).map((box, i) => (
              <div key={`row3-${i}`} className="border-1 border-white rounded-xl p-3  w-[220px] h-auto">
                <p className="text-[14px] font-bold text-white leading-snug">{box.title}</p>
                <p className="text-[12px] text-white mt-1 leading-tight">{box.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
