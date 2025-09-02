"use client";

import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const MagazineSection = () => {
  return (
    <section className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-center text-5xl sm:text-4xl md:text-5xl"
          style={{ color: "#00629B" }}>
          Magazine
        </h1>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left: Image */}
        <img
          src="/assets/Magazine.jpg"
          alt="Stellar Panorama"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            About “STELLAR PANORAMA”
          </h3>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Stellar Panorama is a space-themed magazine celebrating imagination,
            technology, and innovation. With the tagline “Voyage to Infinity”,
            it symbolizes limitless exploration and futuristic ideas. Designed
            for Samavesh Vassaunt 2024, it blends creativity and science,
            inspiring readers to dream big, explore new horizons, and embrace
            the spirit of discovery.
            <br />
            <br />
            It reflects the vision of IEEE to spark curiosity, promote
            knowledge-sharing, and encourage young minds to think beyond
            boundaries. This edition brings together innovation, inspiration,
            and creativity, making it a true celebration of ideas and
            possibilities.
          </p>

          {/* Button */}
          <button
            onClick={() => window.open("/assets/Magazine.pdf")}
            className="border-2 border-blue-800 text-[#00629B] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-mono hover:bg-blue-950 hover:text-white transition flex items-center gap-2 text-base sm:text-lg md:text-xl"
          >
            VIEW MAGAZINE <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
