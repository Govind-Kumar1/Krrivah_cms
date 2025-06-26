import React from 'react';

const FoundersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-14">
        {/* Top Headings */}
        <h4 className="text-2xl uppercase text-gray-900 tracking-wider mb-2">
          Meet The Founders
        </h4>
        <h2 className="text-7xl font-serif font-medium text-gray-900 leading-snug">
          The Minds Behind <br /> Krrivah
        </h2>

        {/* Founder Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 ">
          
          {/* Ananth Rajan */}
          <div className="text-left">
            <img
              src="/image1.png"  
              alt="Ananth Rajan"
              className="w-[400px] h-[480px] object-cover object-right"
            />
            <h3 className="mt-6 text-xl  font-bold text-gray-800">ANANTH RAJAN</h3>
            <p className="text-[16px] text-gray-500 mt-1">Vision & Values</p>
            <p className="mt-3 text-gray-700 text-[15px] leading-relaxed w-[400px]">
              With a background in urban development and a passion for mindful architecture, Ananth leads the strategic direction at Krrivah. His focus: ensuring every project reflects a larger purpose.
            </p>
          </div>

          {/* Divya Menon */}
          <div className="text-left mt-20 ">
            <img
              src="/image2.png"
              alt="Divya Menon"
              className="w-[400px] h-[480px] object-cover object-top  "
            />
            <h3 className="mt-6 text-xl font-bold text-gray-800">DIVYA MENON</h3>
            <p className="text-[16px] text-gray-500 mt-1">Design & Experience</p>
            <p className="mt-3 text-gray-700 text-[15px] leading-relaxed w-[400px]">
              An architect by training and a creator by instinct, Divya brings spaces to life with an eye for balance, beauty, and soul. She champions the design language of Krrivah — one that blends global minimalism with local depth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
