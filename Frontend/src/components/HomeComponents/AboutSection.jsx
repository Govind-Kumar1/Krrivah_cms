import React from 'react';
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className=" w-full md:item-start h-full min-h-screen bg-[#e5e6e1] py-[12vh] px-[2vw] font-sans flex flex-col md:flex-row items-center ">
      <div className=" px-2 flex flex-col md:flex-row w-full gap-8 md:gap-22 justify-between items-center md:items-start  h-full"> 

        {/* Left Title Section */}
        <div className=" w-full min-h-full md:w-[28vw] flex flex-col  gap-6 md:gap-80 justify-between  ">
          <h3 className="text-[16px] md:text-[22px] tracking-wide text-[#5F5F5F] mb-2 md:mb-6">
            ABOUT
          </h3>
          <h2 className="text-[2rem] md:text-[3rem] leading-tight tracking-wide font-serif text-[#2c2f28] ">
            ROOTED IN<br className="hidden md:block" />
            DESIGN,<br className="hidden md:block" />
            <span className="inline-block mt-1 md:mt-2">DRIVEN BY</span><br className="hidden md:block" />
            PURPOSE.
          </h2>
        </div>

        {/* Center Image */}
        <div className="h-[470px] w-[345px] md:w-[36vw] flex justify-center md:justify-center md:h-[80vh] mt-6 md:mt-0">
          <img 
            src="/SCENE 3.png"
            alt="About Krrivah"
            className="w-full max-w-[400px] md:max-w-[460px] h-auto md:h-[630px] object-cover shadow-md"
          />
        </div>

        {/* Right Description */}
        <div className="w-full md:w-[29vw] flex flex-col text-left md:text-left mt-6 md:mt-0 text-gray-700 text-sm leading-relaxed">
          <p className=" flex flex-wrap  mb-6 md:mb-14 text-[14px] md:text-[16px] text-[#393F36] leading-5">
            Krrivah is more than a development brand — it’s a vision brought to life through architecture. 
            With a passion for design and a commitment to quality, we create living spaces 
            that reflect a deeper understanding of form, function, and feeling.
          </p>
          <button
            className="  md:mr-60 md:self-center self-start px-4 md:px-6 py-2 bg-white rounded-full font-bold text-[12px] md:text-[16px] shadow-sm hover:bg-[#393F36] hover:text-white transition hover:cursor-pointer"
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
