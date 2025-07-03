import React from "react";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[750px] pt-20 bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/SCENE 16.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/44 z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-20 flex flex-col justify-between h-full pb-10 md:pb-24 gap-6">
        
        {/* Left Text (Always on top) */}
        <div className="text-white w-full text-center md:text-left">
          <h1 className="text-[64px] md:text-[80px] leading-tight font-serif">
            WHERE STORIES <br />
            FIND THEIR SPACE
          </h1>
        </div>

        {/* Right Text (Always below the H1) */}
        <div className="text-white w-full text-center md:text-right md:max-w-[460px] self-end">
          <h2 className="text-[20px] md:text-[28px] font-serif mb-3">
            ROOTED IN PURPOSE. <br /> ELEVATED BY DESIGN.
          </h2>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed px-2 md:px-0">
            Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh
            amet morbi sed at a urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
