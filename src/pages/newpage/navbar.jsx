"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const menuItems = [
    "ABOUT US",
    "PROGRAMME",
    "STUDENT CORNER",
    "ACCREDITATION",
    "RECOGNITION & APPROVALS",
  ];
  const topLinks = ["NOTIFICATION", "ADMISSION FORM", "CONTACT"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: Logo + Right Section */}
        <div className="flex items-start justify-between py-2">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo (1).png"
              alt="National Council For Skill Education"
              width={150}
              height={150}
              className="w-auto md:h-24 h-16"
              priority
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end w-full lg:w-auto">
            {/* Top Links + Search */}
            <div className="flex items-center gap-6">
              {/* Search Box */}
              <div className="relative hidden lg:block">
                <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder=" SEARCH SKILL COURSE"
                  className="border border-gray-300 rounded-md py-1 pl-6 pr-3 text-xs w-48 focus:outline-none"
                />
              </div>

              {/* Top Links */}
              <div className="hidden lg:flex items-center gap-4 text-xs font-bold mt-4 mb-5">
                {topLinks.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-blue-700 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Hamburger menu for mobile */}
              <div className="lg:hidden mt-5">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Items (Desktop) */}
            <div className="hidden lg:flex items-center gap-6 py-2 text-sm font-bold">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-blue-700 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="cursor-pointer uppercase bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded">
                apply now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden flex flex-col gap-4 py-2 border-t mt-2">
            {/* Search Box in Mobile */}
            <div className="relative">
              <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder=" SEARCH SKILL COURSE"
                className="border border-gray-300 rounded-md py-1 pl-6 pr-3 text-xs w-full focus:outline-none"
              />
            </div>

            {menuItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-sm font-bold hover:text-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}

            <button className=" uppercase bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded w-fit">
              apply now
            </button>

            <div className="flex gap-4 mt-2">
              {topLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-xs font-bold hover:text-blue-700 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
