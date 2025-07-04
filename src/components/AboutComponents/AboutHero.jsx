import React from "react";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[750px] pt-50 md:pt-100 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/SCENE 16.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/44 z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-20 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full h-full">
          
          {/* Left Text - match vertical position with right text */}
          <div className="text-white w-full md:w-1/2 text-center md:text-left flex items-end md:pb-[100px]">
            <h1 className="text-[40px] sm:text-[64px] md:text-[80px] leading-tight font-serif">
              WHERE STORIES <br />
              FIND THEIR SPACE
            </h1>
          </div>

          {/* Right Text - keep as is */}
          <div className="text-white w-full md:w-1/2 text-center md:text-right md:max-w-[460px] flex flex-col justify-end">
            <h2 className="text-[20px] md:text-[28px] font-serif mb-3">
              ROOTED IN PURPOSE. <br /> ELEVATED BY DESIGN.
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed  md:px-0">
              Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh
              amet morbi sed at a urna.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
