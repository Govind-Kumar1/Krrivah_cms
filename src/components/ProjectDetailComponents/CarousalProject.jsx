import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/pic4.png",
    title: "CRAFTED FOR LIVING",
    description:
      "Innara creates deeply personal living spaces that inspire and endure—a seamless fusion of natural textures, warm tones, and thoughtful craftsmanship, designed to elevate the modern lifestyle with quiet elegance and meaning.",
    brand: "INNARA",
  },
  {
    image: "/pic3.png",
    title: "DESIGNED FOR YOU",
    description:
      "Experience a new dimension of comfort and style with our bespoke villas, where every detail is crafted for your unique lifestyle.",
    brand: "KRRIVAH",
  },
  {
    image: "/SCENE 8.png",
    title: "ELEGANCE REDEFINED",
    description:
      "Discover spaces that blend modern architecture with timeless elegance, offering a sanctuary for inspired living.",
    brand: "SERENITY",
  },
];

const CarousalProject = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative  w-full sm:w-[95%] h-[543px] overflow-hidden text-white sm:mx-auto">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5 z-10" />

      {/* Slide Number Indicators */}
      <div
        className="
    absolute z-20 flex items-center md:items-start
    sm:top-1/2 sm:left-6 sm:-translate-y-1/2 
    sm:flex sm:flex-col 
    flex-row gap-2
    bottom-4 right-4
  "
      >
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={
              idx === current
                ? "text-white font-semibold text-[45px]"
                : "opacity-80"
            }
          >
            {(idx + 1).toString().padStart(2, "0")}
          </div>
        ))}
      </div>

      {/* Navigation arrow */}
      <div className="absolute left-4  bottom-6 md:right-6 md:left-auto z-30 flex gap-4 ">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-[#C7C7C7] text-black rounded-full flex items-center justify-center  hover:bg-[#0E0E0E] hover:text-white transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-[#C7C7C7] text-black rounded-full flex items-center justify-center hover:bg-[#0E0E0E] hover:text-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CarousalProject;