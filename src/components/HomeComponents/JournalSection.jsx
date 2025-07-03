import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    tag: "DESIGN",
    date: "JUNE 5, 2025",
    title: "Why Design Thinking Matters in Real Estate",
    description:
      "From intuitive layouts to natural light flow, design thinking is transforming how we imagine modern living. Here's how we inte…",
    image: "/SCENE 17.png",
  },
  {
    tag: "PROJECTS",
    date: "JUNE 5, 2025",
    title: "Inside Moira Villas: The Art of Material Harmony",
    description:
      "Explore the textures, tones, and finishes that make Moira Villas a study in material balance — from taupe floors to bronze fixtures.",
    image: "/SCENE 12.png",
  },
  {
    tag: "DESIGN",
    date: "JUNE 5, 2025",
    title: "Beyond Square Feet: Rethinking Space in Urban Living",
    description:
      "It's not about how much space you have — it's how meaningfully you design it. Here’s our take on intentional living in compact layo…",
    image: "/SCENE 4.png",
  },
];

const JournalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 1 second for mobile carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#EAEDE5] w-full py-10 md:py-24 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Title */}
        <div className="flex-1">
          <p className="text-[18px] text-[#5F5F5F] font-medium mb-10 md:mb-40 uppercase tracking-widest">
            Journal
          </p>
          <h2 className="text-3xl sm:text-[56px] font-serif leading-[1.2] text-[#393F36] mb-12 w-full">
            BEYOND <br /> BLUEPRINTS.
          </h2>
          <button className="flex items-center text-[#2E2E2E] gap-3 text-sm font-semibold uppercase tracking-wider hover:cursor-pointer">
            View All
            {/* ChevronRight removed as per your request */}
          </button>
        </div>

        {/* Right Cards Section */}
        <div className="w-full">
          {/* Mobile View: Single Card Carousel */}
          <div className="sm:hidden w-full flex justify-center">
            <div className="w-[300px] bg-white shadow-sm h-[450px] flex flex-col transition duration-500 ease-in-out">
              <img
                src={posts[currentIndex].image}
                alt={posts[currentIndex].title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase text-[#393F36] mb-2 tracking-wide">
                  {posts[currentIndex].tag}
                  <span className="text-[#828282]"> • {posts[currentIndex].date}</span>
                </p>
                <h3 className="text-md font-semibold text-[#2E2E2E] mb-2">
                  {posts[currentIndex].title}
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  {posts[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow at bottom removed for auto-scroll */}

          {/* Desktop Grid View (unchanged) */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-sm w-[300px] h-[450px] flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase text-[#393F36] mb-2 tracking-wide">
                    {post.tag}
                    <span className="text-[#828282]"> • {post.date}</span>
                  </p>
                  <h3 className="text-md font-semibold text-[#2E2E2E] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
