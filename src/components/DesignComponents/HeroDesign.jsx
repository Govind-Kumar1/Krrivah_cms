import React from 'react';
import Navbar from '../Navbar';
const IntentionSection = () => {
  return (
    <section className="bg-[#2F352D] realtive text-[#ECEDE7] max-w-full py-12  min-h-[100vh] flex flex-row items-end ">
      <Navbar/>
      <div className=" flex flex-col justify-between w-full md:flex-row h-full gap-20  min-h-[180px] px-4">

        {/* Left: Main Heading */}
        <div className="w-full basis-2/3  ">
          <h2 className="font-merchant   text-[40px] md:text-[100px] leading-16 md:leading-24 text-[#E3E8E0]">
            DESIGNING WITH <br /> INTENTION
          </h2>
        </div>

        {/* Right: Subheading + Paragraph */}
        <div className="w-full basis-1/3  flex flex-col justify-between  gap-4 md:gap-7 py-6   "> 
          <h3 className="font-serif text-xl sm:text-lg md:text-3xl leading-snug tracking-normal">
            EACH LINE IS A COMMITMENT<br />
            TO BEAUTY AND PURPOSE.
          </h3>   
          <p className="text-sm sm:text-base md:text-base text-[#D3D4C8] leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh amet morbi sed at a urna.
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntentionSection;
