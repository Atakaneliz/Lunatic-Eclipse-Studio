"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div
      id="dashboard"
      className="w-full h-full flex flex-col xl:flex-row min-h-screen items-center justify-center p-4 lg:p-10 gap-5"
    >
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className=" w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[720px] lg:h-[720px] flex flex-col items-center justify-center bg-[url(/WebF.gif)] border-2 rounded-xl shadow border-[#404040] "></div>
      </div>
      <div className="w-full h-full gap-5 flex flex-col items-center justify-center p-4">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-5xl  text-[#f5f5f5] font-medium tracking-widest text-center"
        >
          Lunatic Eclipse Studio
        </motion.h1>
        <div className="h-[1px] bg-[#f5f5f5] w-full"></div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#f5f5f5] md:text-2xl font-medium text-center mt-10"
        >
          {`Welcome to Lunatic Eclipse Studio! We're a dynamic team specializing in horror-themed games. At the intersection of passion and creativity, we aim to provide players with unforgettable experiences. Are you ready to embark on this journey where we redefine reality? `}
        </motion.p>
        <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-10 mt-16">
          <motion.button
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/#about")}
            className="p-4 px-10 md:p-10 md:px-20 text-center border w-full border-[#f5f5f5] rounded shadow text-[#f5f5f5] "
          >
            About Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/#games")}
            className="p-4 px-10 md:p-10 md:px-20 text-center border w-full border-[#f5f5f5] rounded shadow bg-[#f5f5f5]"
          >
            Our Games
          </motion.button>
        </div>
      </div>
    </div>
  );
}
