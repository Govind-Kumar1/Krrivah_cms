import { Link } from "react-router-dom";
import CarousalProject from "./CarousalProject";
import { Mail, Phone } from "lucide-react";

// ✅ Custom LocationIcon (SVG)
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

const HeroSection = () => {
  return (
    <section className="min-h-screen px-2 w-full">
      <div className="sm:mx-2 md:flex w-full min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/3 mr-7 ml-2 py-4">
          <Link
            to="/projects"
            className="text-sm font-bold text-[#2E2E2E] mb-6 inline-block"
          >
            <span className="text-xl font-bold">←</span> ALL PROJECTS
          </Link>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#0B2204] tracking-tight mb-4">
            INNARA
          </h1>

          {/* Pills */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#3E3F36] text-white text-[13px] font-semibold px-3 py-1 rounded-full flex gap-1.5 items-center">
              VILLAS
            </span>
            <span className="bg-[#3E3F36] text-white text-xs font-semibold px-3 py-1 rounded-full flex gap-1.5 items-center">
              <LocationIcon />
              MORJIM, GOA
            </span>
          </div>

          {/* Description */}
          <div className="text-sm font-normal leading-relaxed text-[#212121] space-y-6">
            <p>
              Innara is more than a mere promise. It is an invitation to an
              extraordinary realm of living where exclusivity is not just a
              concept, but a lived experience. This is a sanctuary designed for
              those who understand that true luxury is not about abundance, but
              about carefully curated rarity.
            </p>
            <p>
              An invitation to an unparalleled lifestyle and exceptional living.
              Your Private Oasis in Goa’s hidden heartland – Moira. Imagine
              living in a sleepy village steeped in greenery. Lush green palms
              with a gentle river flowing through it. Innara welcomes you to a
              life that’s wrapped in exclusivity and peace...
            </p>
            <p>
              The true meaning of a luxurious life. A gem waiting to be
              discovered Moira is a quaint life personified. This typical Goan
              hamlet in Bardez district, North Goa, welcomes you with its
              swaying coconut trees, emerald green fields and the Mapusa river's
              eternal charm. Known for its fun loving and industrious people,
              Moira is also famous for its large Goan bananas (munnouchinz
              kellim) loved by the local natives and often sold in the Mapusa
              market.
            </p>
            <p>
              Step into the laid–back life in Moira. A step into tranquility and
              serenity.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/projects/innara"
            className="text-center inline-block mt-8 px-6 py-1.5 bg-white text-[#0B2204] font-semibold rounded-full border-2 border-[#E7E9E6] w-[95%] hover:bg-gray-200 transition"
          >
            LEARN MORE
          </Link>
        </div>

        {/* Right Image & Slider */}
        <div className="relative md:w-2/3 md:border-l-2 py-4 pb-5 border-[#E3E8E0]">
          <CarousalProject />

          {/* Amenities */}
          <div className="w-full mx-auto mt-1 border-gray-700 pt-10 text-sm px-4 flex flex-col justify-between gap-y-10">
            {/* Villa Amenities */}
            <div>
              <p className="text-[#212121] font-medium mb-3 border-[#E3E8E0] border-b-2">
                <span className="text-gray-400">•</span> VILLA AMENITIES
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "SWIMMING POOL",
                  "5 BHK",
                  "SECURITY",
                  "GARDEN",
                  "INTERCOMM SYSTEM",
                  "BAR",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#E3E8E0] text-[#393F36] font-medium text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Apartment Amenities */}
            <div>
              <p className="text-[#212121] font-medium mb-3 border-[#E3E8E0] border-b-2">
                <span className="text-gray-400">•</span> APARTMENT AMENITIES
              </p>
              <div className="flex flex-wrap gap-2">
                {["PRIVATE POOL", "5 BHK", "GARDEN"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#E3E8E0] text-[#393F36] font-medium text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
