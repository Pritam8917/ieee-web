"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Carousel() {
  const items = [
    {
      about:
        "IEEE VSSUT hosted a webinar on “RIS: A Potential Disruptive for 6G”, exploring how Reconfigurable Intelligent Surfaces can revolutionize 6G communication by enhancing signal strength, reducing interference, and extending coverage.The talk highlighted RIS technology’s scalability and potential to redefine wireless network design.Delivered by Dr. Debdeep Sarkar, it bridged classical electromagnetics with quantum systems, inspiring innovation in future communication and sensing technologies.",
      image: "assets/Pastwebinar1.jpg",
    },
    {
      about:
        "IEEE SEED 2025, organised jointly by IEEE VSSUT SB and IEEE CASS SC, where sustainability met innovation, was introduced this World Environment Day as we went green.Participants brainstormed bold ideas at the Ideathon or battled it out in the quiz competition. They tinkered with circuits, battled memes, and snapped nature’s beauty And they joined in for impactful webinars and more…",
      image: "assets/Pastseed.jpg",
    },
    {
      about:
        "IEEE VSSUT SB in collaboration IEEE WIE AG conducted the event on the occasion of the WIE Day celebration, bringing a powerful blend of competitions and thought-provoking sessions designed to challenge the norm and amplify voices.",
      image: "assets/Pastshe.jpg",
    },
    {
      about:
        "IEEE VSSUT Student Branch organized a one-day workshop on “AI & ML in Cybersecurity: Transforming Threat Detection and DefenseThe session explored how artificial intelligence and machine learning are reshaping cybersecurity strategies, enhancing detection accuracy, and strengthening defense mechanisms.Delivered by Dr. Sibarama Panigrahi, it provided valuable insights into leveraging AI-driven solutions for modern cyber threats.",
      image: "assets/Pastworkshop.jpg",
    },
    {
      about:
        "IEEE VSSUT Student Branch hosted a webinar on “Antenna Fundamentals and Research Opportunities in UWB MIMO Antenna Design”, exploring the basics of antenna design and the cutting-edge world of Ultra-Wideband systems.The session highlighted how compact, high-performance antennas enable faster data, better coverage, and smarter technologies. Delivered by Dr. Jeet Banerjee, it inspired participants towards innovation in communication, radar, and biomedical applications.",
      image: "assets/Pastwebinar2.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  const ITEM_WIDTH = 300;
  const GAP = 80;

  // Animate carousel positioning and scale
  useEffect(() => {
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = i - activeIndex;
      const abs = Math.abs(r);

      gsap.to(el, {
        x: r * (ITEM_WIDTH + GAP),
        rotationY: r * -10,
        zIndex: 10 - abs,
        scale: i === activeIndex ? 1 : 0.8,
        opacity: i === activeIndex ? 1 : 0.5,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  // Smooth flip animation using GSAP
  const handleHover = (index, flip = true) => {
    const el = itemRefs.current[index]?.querySelector(".flip-container");
    if (!el) return;

    gsap.to(el, {
      rotationY: flip ? 180 : 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () =>
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="h-[600px] flex flex-col items-center justify-center relative">
      <div
        ref={carouselRef}
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="absolute w-[400px] h-[400px] cursor-pointer"
            onMouseEnter={() => i === activeIndex && handleHover(i, true)}
            onMouseLeave={() => i === activeIndex && handleHover(i, false)}
          >
            {/* Flip container */}
            <div
              className="flip-container relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full rounded-2xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full rounded-2xl flex flex-col items-center justify-center p-7 shadow-lg
             bg-gradient-to-r from-black via-gray-900 to-[#00629B]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-white mt-2 text-md ">{item.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex space-x-4 mt-8">
        <button onClick={prev} className="px-4 py-2 bg-white">
          <img src="/assets/backbutton.jpg" alt="back" className="w-8 h-8" />
        </button>
        <button onClick={next} className="px-4 py-2 bg-white">
          <img src="/assets/frontbutton.jpg" alt="next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
