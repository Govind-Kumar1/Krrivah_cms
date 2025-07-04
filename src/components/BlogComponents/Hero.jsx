import React from "react";

export default function Hero() {
  return (
    <section className="relative w-screen h-[180px] md:h-[421px] bg-white text-white overflow-hidden pb-2 px-6 flex md:flex-col justify-end  ">
      <div className=" mt-2 max-screen mx-auto w-full flex flex-col justify-between  md:flex-row md:items-end  h-full gap-y-12">
        <p
          style={{ color: "#0B2204" }}
          className=" text-5xl md:text-[80px]  font-light leading-none tracking-tight text-[#0B2204]"
        >
          OUR JOURNAL
        </p>
        <p className="max-w-md text-sm lg:text-base text-gray-800 font-normal leading-snug lg:mb-4">
          Whether you’re looking to collaborate, have an enquiry, or just want
          to say hello—we’d love to hear from you.
        </p>
      </div>
    </section>
  );
}