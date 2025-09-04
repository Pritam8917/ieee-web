"use client";

import { motion } from "framer-motion";

export default function ChampionsPage() {
  return (
    <main className="bg-gray-50 text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-blue-100 py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Champions of Change
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0">
              How IEEE VSSUT Student Branch Fuels Innovation and Inclusion
            </p>
            <div className="w-28 h-1 bg-white rounded-full md:mx-0 mx-auto"></div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/assets/innovation2.jpg"
              alt="Champions"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-20">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            Spotlight: Social Impact & Student Innovation
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed mb-2">
            In March 2025, our campus was abuzz with anticipation at the
            YESIST12 International Hackathon Preliminary Round. Hundreds of
            young engineers focused on critical issues.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ideas ranged from intelligent waste management to accessible medical
            solutions, demonstrating how youth innovation really counts.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            Diversity & Inclusion: Women in Engineering
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Behind any great action are pioneers who break with tradition.
            Electrical engineering giant and women in STEM advocate, Dr.
            Anuradha Tomar, inspires our campus with her tireless quest for
            equality and excellence.
          </p>
          <p className="text-gray-700 leading-relaxed">
            "WiePower" ideathons give young engineers the confidence to consider
            how women can drive innovation in all industries.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            Space, Sustainability & Beyond
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed mb-2">
            VSSUT doesn't wish big—it launches big. The VSSUT Satellite
            Launching Vehicle is a student initiative to develop and launch
            native rockets and small satellites.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From Solution Challenge Hackathons dedicated to UN SDGs to green
            tech applications, IEEE VSSUT Student Branch paves the way for a
            responsible and inclusive future.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            A Culture of Creativity & Future Leaders
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Competitions like "Artopia" challenge engineers to be artistic with
            painting and photography, reminding everyone that innovation comes
            from everywhere.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Technical symposiums, coding competitions, and innovation
            exhibitions are not just steps—they’re launchpads for students
            daring to think, solve, and lead change.
          </p>
        </motion.div>

        {/* New Section: Events & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            Events & Achievements
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>YESIST12 International Hackathon – Preliminary Round 2025</li>
            <li>Samavesh Tech Fest – Workshops on IoT, Embedded Systems, AI</li>
            <li>
              Women in Engineering “She Aspire 2024” – 7-day mentorship program
            </li>
            <li>
              Binary Battle Coding Competition – Campus-wide coding contest
            </li>
          </ul>
        </motion.div>

        {/* New Section: Student Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 mb-3">
            Student Projects
          </h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-4"></div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Green Tech Initiatives – Sustainable solutions and IoT devices
            </li>
            <li>
              Li-Fi Communication Systems – Renewable energy-powered networking
            </li>
          </ul>
        </motion.div>
        {/* New Section: Call to Action */}
      </section>
      <footer className=" py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">© 2025 IEEE VSSUT Student Branch.</p>
        </div>
      </footer>
    </main>
  );
}
