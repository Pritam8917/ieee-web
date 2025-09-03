"use client"
import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900 scroll-smooth">
      {/* Header */}
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
              className="font-bold text-[#2095d8] py-2"
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
              className="text-gray-900 hover:text-[#00629B] px-3 py-2"
            >
              Activities
            </Link>
            <Link
                href="/gallery"
                className="text-gray-900 hover:text-[#00629B] py-2"
              >
                Gallery
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
              className="block font-bold text-[#2095d8]"
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
              className="block  text-gray-900 hover:text-[#00629B]"
              onClick={() => setIsOpen(false)}
            >
              Activities
            </Link>
            <Link
              href="/gallery"
              className="block  text-gray-900 hover:text-[#00629B]"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </nav>
    </header>

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-black via-gray-900 to-[#00629B] text-white py-16 px-6 lg:px-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          IEEE VSSUT Student Branch
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A vibrant platform for innovation enthusiasts to cultivate practical
          skills, engage in impactful projects, and connect with skilled people
          worldwide. Established on 6th November 2019 under IEEE Bhubaneswar
          Subsection.
        </p>
      </motion.section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-6 lg:px-20 py-12 space-y-16">
        {/** Overview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#00629B]">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Operating with a core mission of bridging engineering principles
            with practical application...
          </p>
          <div className="mt-6 bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Our Active Societies:
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-lg">
              <li>• IEEE Communications Society (ComSoc)</li>
              <li>• IEEE Computer Society (CS)</li>
              <li>• IEEE Circuits and Systems Society (CASS)</li>
              <li>• IEEE Sensors Council</li>
              <li>• IEEE Women in Engineering(WIE)</li>
            </ul>
          </div>
        </motion.div>

        {/** Vision */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#00629B]">Vision</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Cultivating an environment where technical proficiency and creative
            problem-solving converge...
          </p>
        </motion.div>

        {/** Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#00629B]">Mission</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Creating opportunities through technical workshops, project
            leadership...
          </p>
        </motion.div>

        {/** Key Activities */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#00629B]">
            Key Activities & Initiatives
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-xl text-gray-800">
                Technical Workshops
              </h3>
              <p className="mt-3 text-gray-600">
                Hands-on sessions across electrical and electronics domains...
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="font-semibold text-xl text-gray-800">Tech Summits</h3>
              <p className="mt-3 text-gray-600">
                National and international events fostering cross-disciplinary
                collaboration...
              </p>
            </div>
          </div>
        </motion.div>

        {/** Why Join */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-[#00629B]">
            Why Join IEEE VSSUT SB?
          </h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700 leading-relaxed">
            <li>• Practical Learning: Exposure beyond the curriculum.</li>
            <li>• Global Networking: Connect with the worldwide IEEE community.</li>
            <li>
              • Leadership Development: Grow through event planning and project
              management.
            </li>
            <li>• Recognition: Get acknowledged for your work within IEEE Global.</li>
          </ul>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            IEEE VSSUT SB is not just a forum — it’s a launchpad...
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
