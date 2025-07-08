import React from "react";
 
const HeaderSection = () => {
  return (
    <header className="text-center  py-12 max-w-[1280px] w-screen mx-auto">
      <p className="uppercase text-xs tracking-widest text-[#393F36] mb-2">
        Trends <span className="text-[#828282]">• June 5, 2025</span>
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold text-[#181D27]  dark:text-white mb-4">
        Blending Tradition with Modern
      </h1>
      <h1 className="text-3xl md:text-5xl font-semibold text-[#181D27] dark:text-white mb-4">
        Architecture{" "}
      </h1>
      <p className="text-[#535862] dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
        Why today’s best homes beautifully borrow from both rich heritage and
        minimalism to stay timeless.
      </p>
      <div className="mt-10 w-full">
        <img
          src="image1.png"
          alt="Architectural structure"
          className="w-full h-auto object-cover "
        />
      </div>
    </header>
  );
};

export default HeaderSection;