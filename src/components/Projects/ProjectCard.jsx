import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Agentic Corporate Trader (ACT) System",
    description:
      "Developed the ACT system, an AI-driven platform for corporate and government entities to manage investments in technology stocks and cryptocurrencies.",
    image: "act-system.png",
    tags: ["React", "Express", "Node.js", "MongoDB", "AI Framework"],
    demo: "#",
    source: "#",
  },
  {
    title: "Ping Pong",
    description:
      "Developed a modern version of the classic Ping Pong game, implemented in Java and Node.js.",
    image: "ping-pong.png",
    tags: ["Java", "Node.js"],
    demo: "#",
    source: "#",
  },
  {
    title: "Hotel Booking Site",
    description:
      "Developed a responsive and efficient hotel booking application using React, MongoDB, Node.js, and JavaScript.",
    image: "hotel-booking.png",
    tags: ["React", "MongoDB", "Node", "JavaScript"],
    demo: "#",
    source: "#",
  },
];

export default function ProjectCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 p-2 rounded-full shadow-md text-white hover:bg-gray-700 z-10"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Project Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-6 px-6 py-4"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[350px] bg-gray-800 rounded-lg shadow-lg p-4 text-white flex-shrink-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.demo}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              >
                Demo
              </a>
              <a
                href={project.source}
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 p-2 rounded-full shadow-md text-white hover:bg-gray-700 z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}