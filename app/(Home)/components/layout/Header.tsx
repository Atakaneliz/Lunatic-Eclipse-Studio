"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
let tabs = [
  { id: "dashboard", label: "Home" },
  { id: "about", label: "About" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-24"></div>
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
          <button
            className={`md:hidden z-50`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <CiMenuBurger className="w-8 h-8 text-white" />
          </button>
        </header>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: open ? 0 : "100%" }}
          className={`fixed right-0 top-0 h-full bg-black/50 backdrop-blur z-40 w-full md:hidden`}
        >
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="w-full flex justify-end text-xl p-4 text-white"
          >
            X
          </button>
          <ul className="flex flex-col w-full gap-5 items-center justify-center h-full">
            {tabs.map((tab) => (
              <li className="" key={tab.id}>
                <Link href={`#${tab.id}`} passHref>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpen(false);
                    }}
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
        </motion.div>
      </div>
    </>
  );
}
