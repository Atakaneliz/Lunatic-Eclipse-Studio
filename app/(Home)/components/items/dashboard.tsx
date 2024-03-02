import React from "react";

export default function Dashboard() {
  return (
    <div
      id="dashboard"
      className="w-full h-full flex  min-h-screen items-center p-4 lg:p-10"
    >
      <div className="w-full h-full flex flex-col items-center justify-center bg-red-500"></div>
      <div className="w-full h-full gap-5 flex flex-col items-center justify-center">
        <h1 className="text-5xl  text-[#f5f5f5] font-medium">
          Lunatic Eclipse Studio
        </h1>
        <div className="h-[1px] bg-[#f5f5f5] w-full"></div>
        <p className="text-[#f5f5f5] text-2xl font-medium text-center mt-10">
          {`Welcome to Lunatic Eclipse Studio! We're a dynamic team specializing in horror-themed games. At the intersection of passion and creativity, we aim to provide players with unforgettable experiences. Are you ready to embark on this journey where we redefine reality? `}
        </p>
        <div className="flex w-full items-center justify-between gap-2 mt-16">
          <button className="w-[250px] h-[100px] text-center border border-[#f5f5f5] rounded shadow text-[#f5f5f5]">
            About Us
          </button>
          <button className="w-[250px] h-[100px] text-center border border-[#f5f5f5] rounded shadow bg-[#f5f5f5]">
            Our Games
          </button>
        </div>
      </div>
    </div>
  );
}
