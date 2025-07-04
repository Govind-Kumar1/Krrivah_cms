import React from "react";

const OurRoots = () => {
  return (
    <section className="bg-[#EAE8E5] w-full px-6 md:px-10 py-20">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-wide text-gray-700 mb-4">
            Our Roots
          </p>
          <h2 className="text-[44px] md:text-[58px] leading-tight font-serif text-[#2B2B2B] mb-12">
            THE STORY <br /> BEHIND <br /> KRRIVAH
          </h2>
          <p className="text-sm font-semibold text-[#2B2B2B] mb-14">
            Krrivah is more than a real estate venture — it’s a philosophy of thoughtful living.
          </p>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-3 max-w-md">
            Born from the desire to blend conscious design with purposeful development, Krrivah crafts spaces that respect land, elevate lifestyle, and build long-term value. With deep roots in South India’s cultural and architectural heritage, we strive to create environments where every brick tells a story — of craft, community, and care.
          </p>
          <button className="px-5 py-2 mt-6 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#393F36] hover:text-white hover:cursor-pointer transition">
            GET IN TOUCH
          </button>
        </div>

        {/* Right Content with image layering */}
        <div className="relative pl-10 md:pl-0  md:w-[708px] md:h-[760px]">
          <img
            src="/SCENE 3.png" // Background B&W aerial image
            alt="Background"
            className="w-[275px] h-[294px] md:w-full md:h-full filter grayscale"
          />
          <img
            src="/SCENE 8V1.png" // Foreground couch window cene
            alt="Interior"
            className="absolute object-cover top-[25%] -left-4 md:-left-[20%] w-[127px] h-[167px] md:w-[328px] md:h-[430px] shadow-lg"
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2  md:grid-cols-4 gap-0 md:gap-6 mt-20">
        {[
          { 
            title: "12+",
            subtitle: "years of design expertise shaping refined living environments.",
          },
          {
            title: "3+",
            subtitle: "premium amenities crafted for seamless luxury and leisure.",
          },
          {
            title: "200K",
            superscript: "sq. ft.",
            subtitle: "of design-first development redefining urban living.",
          },
          {
            title: "100%",
            subtitle: "commitment to timeless architecture, rooted in thoughtful design.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#EAE8E5] border border-zinc-400 p-6 text-center md:h-[180px]"
          >
            <div className="text-[36px] font-serif text-[#2B2B2B] md:mb-2">
              {item.title}
              {item.superscript && (
                <sup className="text-sm ml-1 align-top">{item.superscript}</sup>
              )}
            </div>
            <p className="text-sm text-gray-600 text-left">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurRoots;
