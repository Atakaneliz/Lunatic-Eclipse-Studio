"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div
      id="about"
      className="w-full h-full flex flex-col md:flex-row lg:min-h-screen items-center p-4 lg:p-10"
    >
      <div className="w-full h-full gap-3 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl text-center text-[#f5f5f5] w-full font-medium tracking-widest"
        >
          Welcome to Lunatic Eclipse Studio!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#f5f5f5] w-full mt-16"
        >
          {`Step into the realm of our game studio, where creativity knows no bounds and passion fuels every endeavor. Hailing from the vibrant city of Izmir in Turkey, we are a dynamic duo, blazing trails in the gaming industry under the enigmatic banner of Lunatic Eclipse Studio.  `}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#f5f5f5] w-full "
        >{`Who are we, you ask? We're a tight-knit team with big dreams and even bigger ambitions. As they say, two heads are better than one, and we embody that spirit wholeheartedly. `}</motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#f5f5f5] w-full "
        >{`In the realm of gaming, we've carved our niche with spine-chilling horror adventures. Fear not, for we thrive in the darkness, unraveling mysteries and pushing the boundaries of human imagination. Our games are not just about scares; they're about delving deep into the psyche and leaving an indelible mark on those who dare to venture into our worlds. `}</motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#f5f5f5] w-full mt-10"
        >
          {`So, are you ready to embark on an odyssey like no other? Join us as we redefine reality, one game at a time.`}
          <br />
          {`Welcome to our world. Welcome to the Lunatic. `}
          <br />
        </motion.p>
      </div>
      <div className="w-full h-full flex-col items-center justify-center relative hidden md:flex ">
        <Image
          src="/about.png"
          width={700}
          height={700}
          alt="About Us"
          className="object-contain object-center hover:scale-110 transform transition-all duration-300 ease-in-out rounded-lg"
        />
      </div>
    </div>
  );
}
