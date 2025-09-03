"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons
import { motion } from "framer-motion";

const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
  "/assets/gallery6.jpg",
  "/assets/gallery7.jpg",
  "/assets/gallery8.jpg",
  "/assets/gallery9.jpg",
  "/assets/gallery10.jpg",
  "/assets/gallery11.jpg",
  "/assets/gallery12.jpg",
];

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header/Navbar */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div>
              <Link href="/">
                <img
                  src="/assets/ieee_logo.png"
                  alt="IEEE Logo"
                  className="h-14 w-14 md:h-20 md:w-20 object-contain"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8 text-lg md:text-2xl font-semibold">
              <Link
                href="/about"
                className="text-gray-900 hover:text-[#00629B]"
              >
                About
              </Link>
              <Link
                href="/ourteam"
                className="text-gray-900 hover:text-[#00629B]"
              >
                Our Team
              </Link>
              <Link
                href="/activities"
                className="text-gray-900 hover:text-[#00629B]"
              >
                Activities
              </Link>
              <Link href="/gallery" className="font-bold text-[#2095d8]">
                Gallery
              </Link>
            </div>

            {/* Mobile Hamburger */}
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
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 hover:text-[#00629B]"
              >
                About
              </Link>
              <Link
                href="/ourteam"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 hover:text-[#00629B]"
              >
                Our Team
              </Link>
              <Link
                href="/activities"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 hover:text-[#00629B]"
              >
                Activities
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="block font-bold text-[#2095d8]"
              >
                Gallery
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Gallery
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-gray-700 mb-12 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A glimpse of our amazing events and activities
          </motion.p>

          {/* Gallery Grid (unchanged) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 md:px-0">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }} // smaller initial slide/scale for mobile
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }} // animate every time it comes into view
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
