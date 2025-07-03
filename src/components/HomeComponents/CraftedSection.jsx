import React, { useState, useEffect, useRef } from "react";

// Custom hook for interval control
function useInterval(callback, delay) {
  const saved = useRef();
  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

const images = [
  { src: "/SCENE 2.png", alt: "Scene 2" },
  { src: "/SCENE 3.png", alt: "Scene 3" },
  { src: "/SCENE 24.png", alt: "Scene 24" },
  { src: "/SCENE 17.png", alt: "Scene 17" },
  { src: "/SCENE 16.png", alt: "Scene 16" },
  { src: "/SCENE 4.png", alt: "Scene 4" },
];

const CraftedSection = () => {
  const [start, setStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shiftRight = () => setStart((prev) => (prev + 1) % images.length);

  useInterval(shiftRight, isPaused ? null : 1000);

  const visibleCount = isMobile ? 2 : 4;
  const carouselImages = Array.from({ length: visibleCount }, (_, i) =>
    images[(start + i) % images.length]
  );

  return (
    <section className="w-full  py-12 flex flex-col items-center bg-white relative">
      <h2 className="relative top-20 text-center text-[40px] md:text-[64px] leading-tight font-serif text-[#0B2204] mb-10">
        CRAFTED WITH PURPOSE. <br /> DEFINED BY DESIGN.
      </h2>

      {/* Carousel */}
      <div className="w-full">
        <div className="flex flex-row justify-center gap-4 md:flex-nowrap md:gap-[50px]">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`w-[150px] h-[180px] md:w-[521px] md:h-[511px] overflow-hidden ${
                idx % 2 === 1 ? "mt-0 md:mt-20" : "mt-4"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text + Button */}
      <div className="mt-12 w-full max-w-[340px] text-center px-4 md:px-0">
        <p className="text-sm text-[#5F5F5F] max-w-2xl mx-auto mb-6">
          From materials to masterplans, every element is considered. Our
          approach to design is rooted in balance between beauty and utility,
          architecture and experience.
        </p>
        <button className="border-[1px] border-[#0B2204] text-[#0B2204] font-semibold px-6 py-3 rounded-full hover:bg-[#393F36] hover:text-white transition hover:cursor-pointer">
          EXPLORE ALL PROJECTS
        </button>
      </div>
    </section>
  );
};

export default CraftedSection;
