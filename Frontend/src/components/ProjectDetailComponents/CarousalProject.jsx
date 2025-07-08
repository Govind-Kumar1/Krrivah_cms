import React, { useState, useEffect } from "react";
 

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

  // Auto-play logic: Change slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="relative w-full sm:w-[95%] h-[543px] overflow-hidden text-white sm:mx-auto">
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
    </div>
  );
};

export default CarousalProject;
 