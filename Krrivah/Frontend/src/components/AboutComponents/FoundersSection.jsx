import React from 'react';

const FoundersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6 md:px-14">
        {/* Top Headings */}
        <h4 className="text-2xl uppercase text-gray-900 tracking-wider mb-2">
          Meet The Founders
        </h4>
        <h2 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 leading-snug">
          The Minds Behind <br /> Krrivah
        </h2>

        {/* Founder Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
          {/* Ananth Rajan */}
          <div className="text-left max-w-[400px]">
            <img
              src="/founder1.png"
              alt="Ananth Rajan"
              className="w-full h-[480px] object-cover object-right"
            />
            <h3 className="mt-6 text-xl font-bold text-gray-800">ANANTH RAJAN</h3>
            <p className="text-[16px] text-gray-500 mt-1">Vision & Values</p>
            <p className="mt-3 text-gray-700 text-[15px] leading-relaxed">
              With a background in urban development and a passion for mindful architecture, Ananth leads the strategic direction at Krrivah. His focus: ensuring every project reflects a larger purpose.
            </p>
          </div>

          {/* Divya Menon */}
          <div className="text-left max-w-[400px]">
            <img
              src="/founder2.png"
              alt="Divya Menon"
              className="w-full h-[480px] object-cover object-top"
            />
            <h3 className="mt-6 text-xl font-bold text-gray-800">DIVYA MENON</h3>
            <p className="text-[16px] text-gray-500 mt-1">Design & Experience</p>
            <p className="mt-3 text-gray-700 text-[15px] leading-relaxed">
              An architect by training and a creator by instinct, Divya brings spaces to life with an eye for balance, beauty, and soul. She champions the design language of Krrivah — one that blends global minimalism with local depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
