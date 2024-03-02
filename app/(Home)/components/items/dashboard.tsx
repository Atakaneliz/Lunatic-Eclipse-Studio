"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div
      id="dashboard"
      className="w-full h-full flex flex-col xl:flex-row min-h-screen items-center p-4 lg:p-10 gap-5 mt-16"
    >
      <div className="w-full h-full flex flex-col items-center justify-center min-h-[50vh] p-4">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-contain bg-white rounded-lg shadow p-1"
        >
          <source src="/Web_Video_2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-full gap-5 flex flex-col items-center justify-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl  text-[#f5f5f5] font-medium tracking-widest text-center"
        >
          Lunatic Eclipse Studio
        </motion.h1>
        <div className="h-[1px] bg-[#f5f5f5] w-full"></div>
        <p className="text-[#f5f5f5] md:text-2xl font-medium text-center mt-10">
          {`Welcome to Lunatic Eclipse Studio! We're a dynamic team specializing in horror-themed games. At the intersection of passion and creativity, we aim to provide players with unforgettable experiences. Are you ready to embark on this journey where we redefine reality? `}
        </p>
        <div className="flex w-full items-center justify-between gap-2 mt-16">
          <button className="p-4 px-10 md:p-10 md:px-20 text-center border border-[#f5f5f5] rounded shadow text-[#f5f5f5]">
            About Us
          </button>
          <button className="p-4 px-10 md:p-10 md:px-20 text-center border border-[#f5f5f5] rounded shadow bg-[#f5f5f5]">
            Our Games
          </button>
        </div>
      </div>
    </div>
  );
}
