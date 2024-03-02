"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
let tabs = [
  { id: "dashboard", label: "Home" },
  { id: "about", label: "About" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="flex flex-col items-center w-full relative">
        <header className="w-full p-4 top-5 rounded shadow flex items-center justify-between  fixed z-10 max-w-screen-2xl bg-black/10 backdrop-blur h-20">
          <div className="flex gap-1 items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Lunatic Eclipse Studio Logo"
                className="hover:scale-110 duration-200 transition-all"
              />
            </Link>
            <h1 className="text-lg font-semibold text-[#d9d9d9]">
              Lunatic Eclipse Studio
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex w-full gap-5 items-center">
              {tabs.map((tab) => (
                <li className="" key={tab.id}>
                  <Link href={`#${tab.id}`} passHref>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id ? "" : "hover:text-white/60"
                      } relative rounded-sm px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2 w-[125px] h-[50px]`}
                      style={{
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      {activeTab === tab.id && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute  inset-0 z-10 bg-white mix-blend-difference w-[125px] h-[50px]"
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
          <button className={`md:hidden`}>
            <CiMenuBurger className="w-8 h-8 text-white" />
          </button>
        </header>
      </div>
    </>
  );
}
