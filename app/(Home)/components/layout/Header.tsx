"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

let tabs = [
  { id: "dashboard", label: "Home" },
  { id: "about", label: "About" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  // w-[185px] h-[80px] bg-[#d9d9d9] shadow rounded items-center justify-center
  return (
    <>
      <header className="w-full  p-2 sm:p-4 lg:p-10 flex items-center justify-between  fixed z-10">
        <div className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Lunatic Eclipse Studio Logo"
          />
          <h1 className="text-lg font-semibold text-[#d9d9d9]">
            Lunatic Eclipse Studio
          </h1>
        </div>
        <nav>
          <ul className="flex w-full gap-5 items-center">
            {tabs.map((tab) => (
              <li className="" key={tab.id}>
                <Link href={`#${tab.id}`} passHref>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id ? "" : "hover:text-white/60"
                    } relative rounded-sm px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2 w-[185px] h-[80px]`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute  inset-0 z-10 bg-white mix-blend-difference w-[185px] h-[80px]"
                        style={{ borderRadius: 10 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {tab.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
