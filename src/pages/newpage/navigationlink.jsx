"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1D3D76] text-white md:py-8 py-6 md:mt-0 mt-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-6 text-sm md:text-lg text-center md:gap-1 gap-3">
          <a href="#" className="hover:underline ml-1 md:ml-0">
            Public Notice
          </a>
          <span className=" md:inline">|</span>

          <a href="#" className="hover:underline">
            Latest Circulars
          </a>
          <span className="hidden md:inline">|</span>

          <a href="#" className="hover:underline ">
            Syllabus Download
          </a>
          <span className=" md:inline">|</span>

          <a href="#" className="hover:underline md:mr-0 mr-5.5">
            Study Center List
          </a>
          <span className="hidden md:inline">|</span>

          <a href="#" className="hover:underline">
            News &amp; Events
          </a>
          <span className=" md:inline">|</span>

          <a href="#" className="hover:underline">
            Student Support
          </a>
        </div>

        {/* Bottom Row: Contact Info + Social Media Links */}
        <div className="flex flex-row md:flex-row justify-between items-center md:mt-8 mt-5  text-sm text-center md:text-left">
          <div className="mb-4 md:mb-0 md:ml-12">
            <p>Contact Info</p>
          </div>
          <div className="md:mr-11">
            <p>Social Media Links</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
