"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AchievementsTimeline() {
  const achievements = [
    {
      image: "/assets/Achievements1.jpg",
    },
    {
      image: "/assets/Achievements2.jpg",
    },
    {
      image: "/assets/Achievements3.jpg",
    },
    {
      image: "/assets/Achievements4.jpg",
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const totalWidth = timeline.scrollWidth;
    gsap.to(timeline, {
      x: `-${totalWidth / 2}px`, // scroll half width to loop smoothly
      ease: "linear",
      duration: 20, // adjust speed here
      repeat: -1, // infinite
    });
  }, []);

  return (
<section className="mb-0 relative">
  <div className="max-w-full mx-auto relative overflow-hidden">
    {/* Timeline items */}
    <div
      ref={timelineRef}
      className="flex space-x-4 sm:space-x-6 md:space-x-10 px-4 sm:px-6 md:px-10"
    >
      {/* Duplicate items for seamless loop */}
      {[...achievements, ...achievements , ...achievements].map((a, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
