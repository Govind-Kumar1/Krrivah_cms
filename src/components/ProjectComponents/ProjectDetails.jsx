import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- Add this import

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    className="inline-block mr-1 mb-[2px]"
  >
    <g fill="none">
      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
      <path
        fill="currentColor"
        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
      ></path>
    </g>
  </svg>
);

const projects = [
  {
    title: "INNARA",
    image: "/SCENE 17.png",
    tags: ["Villas & Apartments", "Moira, Goa"],
    description:
      "Innara creates inspiring spaces — a mix of textures, warm tones, and craftsmanship for modern elegance.",
  },
  {
    title: "KRRIVAH",
    image: "/SCENE 24.png",
    tags: ["Luxury Villas", "Siolim, Goa"],
    description:
      "Krrivah blends modern architecture with nature, offering tranquil living in the heart of Goa.",
  },
  {
    title: "SERENITY",
    image: "/SCENE 4.png",
    tags: ["Apartments", "Anjuna, Goa"],
    description:
      "Serenity offers peaceful homes with contemporary design and lush surroundings.",
  },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // <-- Add this line

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-18  bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 px-10">
         
         
      </div>

      {/* Carousel */}
      {/* Carousel */}
      <div className="relative flex items-end gap-40 justify-center">
        {/* Previous Project (Left) */}
        <div className="w-[420px] h-[600px]  relative   overflow-hidden hidden lg:block">
          <img
            src={
              projects[(current - 1 + projects.length) % projects.length].image
            }
            alt="Project Left"
            className="w-full h-full object-cover"
          />
          <h3 className=" absolute text-[28px] z-20 font-serif ">
            {projects[current].title}
          </h3>

          <div className="flex gap-2 text-xs font-semibold uppercase tracking-wide mb-4 flex-wrap">
            {projects[current].tags.map((tag, idx) => (
              <span
                key={idx}
                className=" rounded-full px-3 py-[6px] flex items-center gap-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Current Project (Center) */}
        <div className="w-[460px] h-[660px] flex flex-col   "
        
        >
          
          {/* Image with overlay */}
          <div className="relative w-[460px] h-[780px]">
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-[460px] h-[600px] object-cover"
            />
            {/* Overlay: Title and tags */}
            <div className="absolute bottom-0 left-0 w-full px-6 pt-6 z-10">
              <h3 className="text-[64px]  mb-3 text-white drop-shadow-lg">
                {projects[current].title}
              </h3>
              <div className="flex gap-2 text-xs font-semibold uppercase tracking-wide mb-4 flex-wrap">
                {projects[current].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="h-[30px] gap-[10px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] rounded-full border border-white bg-black/25 backdrop-blur-[5px] text-white flex items-center"
                  >
                    {/* Show icon if tag includes 'Goa' */}
                    {tag.toLowerCase().includes("goa") && <LocationIcon />}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Optional: dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-0" />
          </div>

          {/* Content below the image */}
          <div className="w-full  pt-6 bg-white text-black flex items-center  justify-between gap-[24px]">
            <p className="basis-7/10  h-[100px]  font-normal text-[15px] leading-[120%] tracking-[0px] text-[#0E0E0E]">
              {projects[current].description}
            </p>
            <button
              className="border-1 mb-8 border-gray-300 text-sm font-semibold text-[#0B2204]  hover:bg-[#393F36] hover:text-white  h-fit transition 
               w-[150px] px-3 py-3 rounded-4xl"
              onClick={() => navigate("/projectdetails")}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Next Project (Right) */}
        <div className="w-[420px] h-[600px] overflow-hidden shadow-md hidden lg:block">
          <img
            src={projects[(current + 1) % projects.length].image}
            alt="Project Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
        {/* Pagination Dots */}
       <div className="flex justify-center items-center mt-16 gap-4">
        <button
          className="w-8 h-8 rounded-full border cursor-pointer border-gray-400 flex items-center justify-center bg-gray-400 text-gray-700 hover:bg-gray-100"
          onClick={prevProject}
        >
          <ChevronLeft  size={22} strokeWidth={3} />  
        </button>

        <button
          className="w-10 h-10 rounded-full cursor-pointer bg-black text-white flex items-center justify-center"
          onClick={nextProject}
        >
          <ChevronRight size={24} strokeWidth={2.5} /> 
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;





