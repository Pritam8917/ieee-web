"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import { MdOutlineArrowOutward } from "react-icons/md";
const BlogCards = [
  {
    image: "/assets/Blog1.jpg",
    title: "SEMICONDUCTOR IN INDIA",
    subtitle: "Catalyzing a Technology Revolution",
    Path: "/SemiconductorBlog",
  },
  {
    image: "/assets/Blog2.webp",
    title: "QUANTUM AI AND GREEN TECH",
    subtitle: "Engineering a Sustainable Future",
    Path: "/QuantumAIBlog",
  },
  {
    image: "/assets/Blog3.webp",
    title: "Champions of Change",
    subtitle: "How IEEE VSSUT Student Branch Fuels Innovation and Inclusion",
    Path: "/ChampionOfChangeBlog",
  },
];

const BlogSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      const direction = i % 2 === 0 ? -150 : 150; // alternate left/right
      gsap.fromTo(
        card,
        { opacity: 0, x: direction, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative my-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="flex items-center justify-center mb-12">
        <h1
          className="text-center text-5xl sm:text-4xl md:text-5xl"
          style={{ color: "#00629B" }}
        >
          Blogs
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col gap-16 relative">
        {/* Center Divider (hidden on small screens) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#40C8E9] -translate-x-1/2"></div>

        {BlogCards.map((blog, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`relative w-full md:w-[600px] ${
              index % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            <div className="group overflow-hidden rounded-lg shadow-lg transition duration-500 bg-white">
              {/* Image */}

              <div className="relative w-full h-64 sm:h-80 md:h-[380px] cursor-pointer">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 transition-all duration-500">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFD256] drop-shadow-md">
                    {blog.title}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-white">
                    {blog.subtitle}
                  </p>

                  {/* See More Button */}
                  <Link
                    className="mt-4 px-4 py-2 w-full sm:w-[70%] md:w-[50%] lg:w-[40%] 
             bg-[#D9F4FB] text-[#002855] font-semibold rounded 
             opacity-100 md:opacity-0 md:group-hover:opacity-100 
             transition-opacity duration-300 cursor-pointer 
             text-base md:text-lg lg:text-xl 
             flex items-center justify-center gap-2"
                    href={blog.Path}
                  >
                    Step Inside
                    <MdOutlineArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
