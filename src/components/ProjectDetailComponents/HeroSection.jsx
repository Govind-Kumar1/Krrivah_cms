import { Link } from "react-router-dom";
import CarousalProject from "./CarousalProject";
import { Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen px-2 w-full ">
      <div className="sm:mx-2 md:flex w-full min-h-screen">
        {/* Left Content */}
        <div className="md:w-1/3 mr-7 ml-2 py-4 ">
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
            <span className="bg-[#3E3F36] text-white text-xs font-semibold px-3 py-1 rounded-full">
              VILLAS
            </span>
            <span className="bg-[#3E3F36] text-white text-xs font-semibold px-3 py-1 rounded-full flex gap-1.5 items-center">
              <MapPin className="text-white" size={20} strokeWidth={3} />
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
            className="text-center inline-block mt-8 px-6 py-1.5 bg-white text-[#0B2204] font-semibold rounded-full border-2  border-[#E7E9E6] w-[95%] hover:bg-gray-200 transition"
          >
            LEARN MORE
          </Link>
        </div>

        {/* Right Image & Slider */}
        <div className="relative md:w-2/3 md:border-l-2 py-4 pb-5  border-[#E3E8E0]">
          <CarousalProject />
          {/* Amenities */}
          <div className="w-full mx-auto mt-1  border-gray-700 pt-10  text-sm px-4 flex flex-col justify-between gap-y-10 ">
            {/* Villa Amenities */}
            <div>
              <p className="text-[#212121] font-medium mb-3 border-[#E3E8E0] border-b-2">
                <span className="text-gray-400" >•</span> VILLA AMENITIES
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
                <span className="text-gray-400" >•</span> APARTMENT AMENITIES
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