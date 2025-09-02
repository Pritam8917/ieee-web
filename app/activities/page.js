"use client";

import React from "react";
import BlogCarousel from "@/components/BlogCarousel";
import MagazineSection from "@/components/MagazineSection";
import ResearchCarousel from "@/components/ResearchCarousel";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";
export default function ActivitiesPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen text-gray-800 scroll-smooth">
      {/* Top Header */}
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/assets/ieee_logo.png"
                alt="IEEE Logo"
                className="h-14 w-14 md:h-20 md:w-20 object-contain"
              />
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg md:text-2xl font-semibold">
            <Link
              href="/about"
              className="text-gray-900 hover:text-[#00629B] py-2"
            >
              About
            </Link>
            <Link
              href="/ourteam"
              className="text-gray-900 hover:text-[#00629B] py-2"
            >
              Our Team
            </Link>
            <Link
              href="/activities"
              className="font-bold text-[#2095d8] px-3 py-2"
            >
              Activities
            </Link>
          </div>

          {/* Right: Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[#00629B] focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-4 px-4 pb-4 text-lg font-semibold">
            <Link
              href="/about"
              className="block text-gray-900 hover:text-[#00629B]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/ourteam"
              className="block text-gray-900 hover:text-[#00629B]"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/activities"
              className="block font-bold text-[#2095d8]"
              onClick={() => setIsOpen(false)}
            >
              Activities
            </Link>
          </div>
        )}
      </nav>
    </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-12 py-10 overflow-hidden max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 mb-16 p-4 sm:p-10">
          {/* Left Side: Text */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-sm sm:text-md text-black mb-3 font-extrabold tracking-wide">
              INNOVATION AT IEEE VSSUT
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-snug font-semibold">
              Discover IEEE VSSUT’s Activities and Publications
            </h1>
            <p className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed">
              The Activities section showcases the creativity and innovations of
              our members through blogs, magazines, and research papers. From
              thought-provoking articles to impactful technical research, it
              serves as a platform for knowledge sharing and exploration. These
              activities not only highlight the achievements of our community
              but also inspire readers to learn, grow, and innovate. Through
              these initiatives, members get the opportunity to express their
              ideas, strengthen their skills, and contribute to the broader IEEE
              community.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src="/assets/innovation.jpg"
              alt="IEEE Activities"
              className="rounded-xl shadow-lg w-full max-w-md h-64 sm:h-80 md:h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Blog Section */}
        <section id="blogs" className="mb-16">
          <BlogCarousel />
        </section>

        {/* Magazine Section */}
        <section id="magazine" className="mb-16">
          <MagazineSection />
        </section>

        {/* Research Papers Section */}
        <section id="research" className="mb-16">
          <ResearchCarousel />
        </section>
      </main>

      <Footer />
    </div>
  );
}
