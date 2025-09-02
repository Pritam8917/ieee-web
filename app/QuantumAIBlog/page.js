"use client"
import React from "react";
import { motion } from "framer-motion";

export default function QuantumGreenTechPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="text-center py-16 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-teal-700 mb-6">
          Empowering Tomorrow: How Quantum AI and Green Tech Are Reshaping
          Engineering
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Picture yourself walking onto campus in 2025 and finding that the
          engineering world is transforming around you. Technologies long
          reserved for science fiction films—quantum computing, smart AI, and
          green-tech innovations—are becoming routine realities for students,
          researchers, and engineers around the globe.
        </p>
      </motion.section>

      {/* Quantum Revolution Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-8 px-8 py-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div
          className="md:w-1/2"
          variants={fadeUp}
        >
          <img
            src="/assets/QuantumComputing.webp"
            alt="Quantum Computing"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div className="md:w-1/2" variants={fadeUp}>
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Quantum Revolution: Leaving the Laboratory for the Real World
          </h2>
          <p className="text-gray-700 mb-4">
            It’s easy to imagine quantum computing as exotic and inaccessible.
            But today, that’s not the case. Google’s Willow chip and Microsoft’s
            Majorana 1 processor show that quantum systems are becoming reality.
          </p>
          <p className="text-gray-700">
            Revolutionary advances in medicine, environmental forecasting, and
            simulation are possible thanks to breakthroughs like magic state
            distillation, unlocking computational doors once thought closed.
          </p>
        </motion.div>
      </motion.section>

      {/* Green AI Section */}
      <motion.section
        className="flex flex-col md:flex-row-reverse items-center gap-8 px-8 py-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div
          className="md:w-1/2"
          variants={fadeUp}
        >
          <img
            src="/assets/GreenAI.webp"
            alt="Green AI"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div className="md:w-1/2" variants={fadeUp}>
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Green AI: Smarter AND Kinder to the Planet
          </h2>
          <p className="text-gray-700 mb-4">
            AI surrounds us—from sorting campus trash to recommending music. But
            training massive models consumes as much CO₂ as dozens of
            transcontinental flights!
          </p>
          <p className="text-gray-700">
            That’s why the Green AI movement matters: energy-efficient chips,
            renewable-powered data centers, and smarter algorithms are ensuring
            AI benefits—not harms—the planet.
          </p>
        </motion.div>
      </motion.section>

      {/* Real Impact Section */}
      <motion.section
        className="px-8 py-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <h2 className="text-3xl font-semibold text-teal-700 mb-6">
          Real Impact: Solving Real-World Challenges
        </h2>
        <motion.ul className="text-left space-y-4 text-gray-700">
          {[
            "⚕️ Medical breakthroughs for faster drug modeling and treatment schedules.",
            "♻️ Intelligent recycling machines keeping campuses and cities cleaner.",
            "⚡ Smarter buildings and grids, enabling real-time energy efficiency.",
          ].map((item, idx) => (
            <motion.li key={idx} variants={listItem}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* IEEE Section */}
      <motion.section
        className="px-8 py-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
          IEEE VSSUT: Students in the Driver’s Seat
        </h2>
        <p className="text-gray-700 mb-4">
          At IEEE VSSUT Student Branch, we’re not merely discussing grand
          ideas—we’re making them come true. Members participated in Tech
          Summits, YESIST12 Hackathons, and IEEE SEED for sustainable
          innovations.
        </p>
      </motion.section>

      {/* Conclusion Section */}
      <motion.section
        className="bg-gradient-to-r from-green-100 via-teal-100 to-indigo-100 py-12 px-6 text-center pb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold text-teal-800 mb-4">
          Conclusion: A Future You Can Help Build
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          The future—powered by quantum computing and sustainable AI—isn’t just
          about inventions. It’s about building a better, cleaner, and smarter
          world. At IEEE VSSUT, we’re explorers, creators, and problem solvers.
        </p>
        <p className="text-lg font-medium text-gray-800">
          Let’s engineer responsibly and create a world where both humanity and
          nature can thrive.
        </p>
        <footer className="text-gray-800 w-full mt-26">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-md">© 2025 IEEE VSSUT Student Branch</p>
            </div>
          </div>
        </footer>
      </motion.section>
    </div>
  );
}
