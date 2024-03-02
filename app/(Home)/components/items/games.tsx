"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSteam } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const sliderItems = [
  {
    path: "/WebSite/WebLoop1.png",
  },

  {
    path: "/WebSite/WebLoop2.jpg",
  },

  {
    path: "/WebSite/WebLoop3.jpg",
  },
];
export default function Games() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
    }, 5000); // Change the duration (in milliseconds) to adjust the slide interval

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        id="games"
        className="w-full h-full flex flex-col  p-4 lg:p-10 md:min-h-screen items-center justify-center text-[#f5f5f5]"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl font-semibold py-10 tracking-widest"
        >
          Cursed Despair
        </motion.h2>
        <div className="w-full flex flex-col lg:flex-row ">
          <div className="flex w-full  flex-col gap-16 items-center justify-center ">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-medium text-center"
            >
              Cursed Despair is a psychological horror game designed for 2-4
              players.
            </motion.p>
            <div className="w-full h-full flex flex-col p-2 md:hidden">
              <div className="w-full h-full flex flex-col p-2 min-h-[200px] relative">
                {sliderItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full absolute top-0 left-0 "
                  >
                    <Image
                      src={item.path}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-contain object-center rounded-xl"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-medium text-center"
            >
              Prepare for a journey into despair! In a map brimming with secrets
              that will send shivers down your spine, navigate this maze-like,
              intricate building with your friends. But beware; you may get lost
              and find yourself alone in the darkness.
            </motion.p>
            <iframe
              src="https://store.steampowered.com/widget/2834580/"
              frameBorder="0"
              width="100%"
              height="190"
              className="hidden sm:block"
            ></iframe>
            <Link
              className="p-4 px-10 md:p-10 md:px-20 text-center bg-[#6fa721] rounded shadow text-[#f5f5f5] sm:hidden"
              href="https://store.steampowered.com/app/2834580/Cursed_Despair/"
            >
              <span>
                <FaSteam className="w-6 h-6 inline-block mr-2" />
              </span>
              View on Steam
            </Link>
          </div>
          <div className="w-full h-full flex-col p-2 hidden md:flex ">
            <div className="w-full h-full min-h-[500px] flex flex-col p-2 relative">
              {sliderItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full absolute top-0 left-0"
                >
                  <Image
                    src={item.path}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain object-center rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
