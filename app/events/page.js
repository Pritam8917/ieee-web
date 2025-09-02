"use client";
import React from "react";
import {
  Calendar,
  Users,
  Clock,
  Phone,
  Mail,
  FileText,
  Award,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger, ScrollToPlugin } from "gsap/ScrollTrigger";
import { FaUser } from "react-icons/fa6";
import Footer from "@/components/Footer";
const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 sticky">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center space-x-5 p-4 object-cover">
              <Link href="/">
                <img
                  src="/assets/ieee_logo.png"
                  className="h-20 w-20 bg-white text-white"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-5 text-2xl font-semibold">
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-[#00629B] py-2 "
                >
                  About
                </Link>
                <Link
                  href="/ourteam"
                  className="text-gray-900 hover:text-[#00629B] py-2 px-3"
                >
                  Our Team
                </Link>
                <Link
                  href="/events"
                  className="px-3 py-2 font-bold text-[#2095d8]  "
                >
                  Events
                </Link>
                <Link
                  href="/activities"
                  className="text-gray-900 hover:text-[#00629B] px-3 py-2"
                >
                  Activities
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto py-20 sm:px-6 lg:px-12">
        <div className="px-6 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8 max-w-3xl ">
              {/* Title */}
              <div>
                <h1
                  className="text-6xl  space-y-14 mb-6"
                  style={{ color: "#00629B" }}
                >
                  SLIDE THE CHANGE
                </h1>
              </div>

              {/* About Section */}
              <section>
                <h2 className="text-4xl  text-black mb-8 ">
                  About Slide the change:
                </h2>
                <p className="text-gray-800  text-2xl">
                  A virtual, non-live presentation challenge designed to empower
                  individuals and duos to creatively articulate ideas and
                  advocate for positive change.
                </p>
                <p className="text-gray-800 text-2xl">
                  Participants are invited to submit concise, visually engaging
                  presentations on critical themes surrounding women's
                  empowerment, innovation, leadership, and social transformation
                </p>
              </section>

              {/* Objective */}
              <section className="aboutA">
                <h2 className="text-4xl  text-black mb-8  ">Objective</h2>
                <p className="text-gray-800 text-2xl ">
                  To foster creativity and advocacy for equality and change
                  through impactful storytelling, while recognizing innovative
                  thinking in social transformation
                </p>
              </section>

              {/* Eligibility */}
              <section className="aboutB">
                <h2 className="text-4xl  text-black mb-8 ">Eligibility</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      The challenge is open to individuals ("Solo") and teams of
                      two ("Duo")
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      There are no age or geographical restrictions, as this is
                      a virtual event
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Each participant or duo may submit only one entry
                    </span>
                  </li>
                </ul>
              </section>

              {/* Submission Guidelines */}
              <section className="aboutC">
                <h2 className="text-4xl  text-black mb-8">
                  Submission Guidelines
                </h2>
                <p className="text-gray-800 text-2xl">
                  All submissions must strictly adhere to the following
                  requirements:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      6 to 8 slides max
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-7 w-7 text-blue-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Submissions must be in one of the following digital
                      formats: PDF (.pdf), Microsoft PowerPoint (.pptx)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      All presentations must be uploaded via the designated
                      Google link
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      All presentations must be in English
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-7 w-7 text-blue-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      The file should be renamed to the following format:
                      TeamLeaderName_SlideTheChange.pptx
                    </span>
                  </li>
                </ul>
              </section>

              {/* Suggested Themes */}
              <section className="aboutD">
                <h2 className="text-4xl  text-black mb-8">
                  Suggested Themes (Choose One)
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-purple-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Tech for Her: Innovative Solutions for Women's Safety or
                      Health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-purple-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Trailblazers: Women Who Inspire Me
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Target className="h-5 w-5 text-purple-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Digital Literacy for Rural Women: A Step Toward
                      Empowerment
                    </span>
                  </li>
                </ul>
              </section>

              {/* Event Timeline */}
              <section className="aboutE">
                <h2 className="text-4xl  text-black mb-8">Event Timeline</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Submission Timing: From 27th June - 8:00 AM to 11:59 PM
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Submissions Close: 27th June at 11:59 PM (different time
                      zones for different events)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Poster Presentation: 28th June from 10:30 AM to 12:00 PM
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Judging Period: 29-30 June 2025
                    </span>
                  </li>
                </ul>
              </section>

              {/* Judging Criteria */}
              <section className="aboutF">
                <h2 className="text-4xl  text-black mb-8">Judging Criteria</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Relevance to Theme - 15 marks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Clarity and Visual Appeal - 15 marks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Originality of Idea - 15 marks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Structure and Flow of Content - 10 marks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                    <span className="text-gray-800 text-2xl">
                      Total :- 55 marks
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Event Poster */}
              <div
                className=" bg-gray-100 p-3"
                style={{ boxShadow: "6px 6px 8px -1px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="bg-white overflow-hidden">
                  <img src="/assets/event-poster.jpg" alt="Event Poster" />
                </div>
                <div className="m-4 ml-0">
                  <div className="space-y-8 py-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className="bg-gray-300 rounded-md
                       w-12 h-12 flex items-center justify-center"
                      >
                        <Users className="h-6 w-7 text-gray-800" />
                      </div>
                      <div>
                        <span className=" text-gray-900 ">Registered</span>
                        <div className="text-xl font-semibold text-gray-800">
                          80
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className="bg-gray-300 rounded-md
                       w-12 h-12 flex items-center justify-center"
                      >
                        <Users className="h-6 w-7 text-gray-800" />
                      </div>
                      <div>
                        <span className=" text-gray-900  ">Team Size</span>
                        <div className="text-xl font-semibold text-gray-800">
                          5 members
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className="bg-gray-300 rounded-md
                       w-12 h-12 flex items-center justify-center"
                      >
                        <Calendar className="h-6 w-7 text-gray-800" />
                      </div>
                      <div>
                        <span className=" text-gray-900  ">
                          Registration Deadline
                        </span>
                        <div className="text-xl font-semibold text-gray-800">
                          1st July 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3.5 px-5 font-bold text-xl text-white bg-gray-400  transition-colors">
                  <Link href="/register">Registration Closed</Link>
                </button>
              </div>

              {/* Contact Organizers */}
              <div
                className="bg-white rounded-lg  p-3 space-x-3"
                style={{ boxShadow: "6px 6px 8px -1px rgba(0, 0, 0, 0.5)" }}
              >
                <div className=" flex justify-center items-center py-5 border-b-2 border-black">
                  {" "}
                  <span className="text-3xl font-bold text-gray-900 ">
                    Contact Organizers
                  </span>
                </div>

                <div className="space-y-5 py-8">
                  <div className="flex items-center space-x-3">
                    <div
                      className="bg-gray-300 rounded-md
                       w-12 h-12 flex items-center justify-center"
                    >
                      <FaUser className="h-6 w-7 text-gray-800" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-gray-800">
                        Ramesh
                      </div>
                      <span className=" text-gray-900  ">+91-7847950250</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div
                      className="bg-gray-300 rounded-md
                       w-12 h-12 flex items-center justify-center"
                    >
                      <FaUser className="h-6 w-7 text-gray-800" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-gray-800">
                        Samesh
                      </div>
                      <span className=" text-gray-900  ">+91-7847950250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
 <Footer/>
    </div>
  );
};

export default Events;
