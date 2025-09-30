"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the National Council for Skill Education (NCSE)?",
    answer:
      "NCSE is a statutory board established by the Government of Sikkim to regulate, promote, and certify skill-based and vocational education aligned with national competency frameworks.",
  },
  {
    question: "Is NCSE equivalent to national/state education boards?",
    answer:
      "NCSE is recognized at the national level and provides standardized certification aligned with other boards.",
  },
  {
    question: "Who can apply for NCSE programs?",
    answer:
      "Any student meeting the program eligibility criteria can apply. Specific requirements depend on the program level.",
  },
  {
    question: "Does NCSE provide distance and online learning?",
    answer:
      "Yes, NCSE offers both distance and online learning programs to cater to diverse learners.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white md:py-16 md:px-4 flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

      <div className="relative md:mb-14 w-full max-w-sm">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
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
          className="border-none bg-gray-200 rounded-full py-2 pl-10 pr-4 text-sm w-full focus:outline-none"
        />
      </div>

      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl mb-4 overflow-hidden bg-gray-50">
            <button
              className={`w-full flex justify-between items-center p-4 text-left ${
                openIndex === index ? "bg-gray-100" : "bg-gray-50"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold">{faq.question}</span>
              <span className="text-xl font-bold">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-700 rounded-b-2xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className=" cursor-pointer md:mt-15 text-[16px] font-semibold bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 rounded-3xl">
        View All FAQs
      </button>
    </div>
  );
}
