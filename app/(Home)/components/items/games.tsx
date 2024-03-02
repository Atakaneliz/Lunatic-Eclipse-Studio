"use client";
import Link from "next/link";
import React from "react";
import { FaSteam } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Games() {
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
          <div className="w-full h-full flex flex-col p-2 "></div>
        </div>
      </div>
    </>
  );
}
