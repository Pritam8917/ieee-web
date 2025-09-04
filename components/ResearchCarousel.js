"use client";
import { FaDownload } from "react-icons/fa";

const ResearchCarousel = () => {
  const currentItems = [
    {
      title: "LI-FI Technology Using Sustainable Energy",
      description:
        "Study my research paper on Li-Fi Technology using Sustainable Energy which explores how renewable-powered Li-Fi systems enable eco-friendly, high-speed, and reliable wireless communication. The paper highlights potential applications in smart cities, rural connectivity, and green communication networks.",
      author: "By IEEE VSSUT Student Branch Members",
      status: "Published",
      file: "/assets/ResearchPaper1.pdf",
    },
    {
      title: "Thermal Imaging of Facial Muscle Activation",
      description: "",
      author: "By Adyasha Pattanayak",
      status: "Published",
       file: "/assets/ResearchPaper2.pdf",
    },
    {
      title: "Quantum Computing for Next-Gen Encryption",
      description: "",
      author: "By IEEE VSSUT Student Branch Members",
      status: "inpress",
    },
  ];

  return (
    <section className="text-center mt-30 px-4">
      {/* Heading */}
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-center text-4xl sm:text-3xl md:text-5xl"
          style={{ color: "#00629B" }}>
          Research Papers
        </h1>
      </div>

      {/* Cards Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="  shadow-lg rounded-2xl p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#003B5C] mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm italic">
                {item.author}
              </div>
              <p className="text-gray-700 text-sm md:text-base text-left mb-4 leading-relaxed">
                {item.description || "Description coming soon..."}
              </p>
            </div>

            {item.status === "published" ? (
              <button
                className="mt-auto inline-flex items-center justify-center gap-2 border border-[#00629B] text-[#00629B] rounded-full px-5 py-2 text-sm md:text-base font-medium hover:bg-[#00629B] hover:text-white transition-all duration-300"
                onClick={() => window.open(item.file)}
              >
                Download PDF <FaDownload />
              </button>
            ) : (
              <span className="mt-auto inline-block border border-gray-400 text-gray-500 rounded-full px-5 py-2 text-sm md:text-base cursor-not-allowed bg-gray-100">
                In-press
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchCarousel;
