import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
export default function ContactUs() {
  return (
    <>
      <div
        id="contact"
        className="w-full h-full flex flex-col p-4 lg:p-10 justify-center gap-5 text-[#f5f5f5] max-w-screen-lg mb-10"
      >
        <h3 className="text-5xl font-semibold tracking-widest mb-10">
          Contact Us
        </h3>
        <p className="text-lg">
          {`
            Feel free to reach out to us! We're here to hear from you and answer any questions you may have. You can contact us using the information below or simply fill out the form next to it to send us a message. We'll get back to you as soon as possible.
            `}
        </p>
        <p>Address: İzmir/Turkey</p>
        <p>Email: Luna@lunaticeclipse.com</p>
        <p>Stay connected with us on social media too:</p>
        <ul className="flex items-center gap-10 mt-10">
          <li>
            <a target="_blank" href="https://www.instagram.com/lunaticeclipse/">
              <FaInstagram className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/LunaticEclipse">
              <FaTwitter className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/LunaticEclipse">
              <FaFacebookF className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC7f2KXk2t7zvDyD9v4e4zVw"
            >
              <FaYoutube className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/lunaticeclipse"
            >
              <FaLinkedinIn className="w-6 h-6 hover:scale-125 transition-all duration-200" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
