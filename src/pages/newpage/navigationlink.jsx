"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1D3D76] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Navigation Links */}
        <div className="flex justify-center space-x-6 text-lg  ">
          <a href="#" className="hover:underline">
            Public Notice
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Latest Circulars
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Syllabus Download
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Study Center List
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            News &amp; Events
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Student Support
          </a>
        </div>

        {/* Bottom Row: Contact Info + Social Media Links */}
        <div className="flex justify-between items-center mt-8 text-sm">
            <div className="ml-12">
          <p>Contact Info</p></div>
         <div className="mr-11"> <p>Social Media Links</p></div>
        </div>
      </div>
      
    
    </footer>
  );
}
