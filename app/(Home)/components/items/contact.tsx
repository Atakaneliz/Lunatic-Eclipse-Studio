"use client";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
export default function ContactUs() {
  return (
    <>
      <div
        id="contact"
        className="w-full h-full flex flex-col p-4 lg:p-10 justify-center gap-5 text-[#f5f5f5] max-w-screen-lg mb-10"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-semibold tracking-widest mb-10"
        >
          Contact Us
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg"
        >
          {`
            Feel free to reach out to us! We're here to hear from you and answer any questions you may have. You can contact us using the information below or simply fill out the form next to it to send us a message. We'll get back to you as soon as possible.
            `}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Address: İzmir/Turkey
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Email: Luna@lunaticeclipse.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Stay connected with us on social media too:
        </motion.p>
        <ul className="flex items-center gap-10 mt-10">
          <motion.li
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              target="_blank"
              href="https://www.instagram.com/lunaticeclipsestudio/"
            >
              <FaInstagram className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a target="_blank" href="https://twitter.com/LunaticE_Studio">
              <FaTwitter className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61556082737671"
            >
              <FaFacebookF className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              target="_blank"
              href="https://www.youtube.com/@LunaticEclipseStudio"
            >
              <FaYoutube className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/company/lunatic-eclipse-studio"
            >
              <FaLinkedinIn className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
