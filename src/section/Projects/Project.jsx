import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import PathologyLab from "../../assets/PathologyLab.png"
import Perscripto from "../../assets/Perscripto.png"
import StudyNotion from "../../assets/StudyNotion.png"
import Sears from "../../assets/Sears.png"
import InsiderJobs from "../../assets/InsiderJobs.png";


const projectsData = [
  {
    id: "Perscripto",
    title: "Perscripto",
    description:
      `Easily book appointments with trusted doctors.
Access comprehensive healthcare services at your fingertips.`,
    image: Perscripto,
    link: "https://perscripto-frontend.onrender.com/",
    tags: ["Booking Appiontment ", "React", "User","Doctor","Admin" ],
  },
  {
    id: "InsiderJobs",
    title: "InsiderJObs",
    description:
      `Unlock your next career move or find your perfect hire with ease.
Dedicated dashboards for job seekers, companies, and admins make management a breeze`,
    image: InsiderJobs,
    link: "https://job-portal-app-frontend-eight.vercel.app/",
    tags: ["Job Serach", "MERN Stack", "Job Management"],
  },
  {
    id: "StudyNotion",
    title: "StudyNotion",
    description:
      `StudyNotion is a dynamic online platform for coding education. It allows users to purchase courses, track their learning progress, and explore detailed course syllabi with preview videos.`,
    image: StudyNotion,
    link: "https://study-notion-nine-navy.vercel.app/",
    tags: ["course sale web", "MERN", "Payment Gateway"],
  },
  {
    id: "Pathology",
    title: "PathologyLab",
    description:
      `Your trusted source for quick and accurate diagnostic tests.
Easily book blood, urine, and other lab tests from the comfort of your home.`,
    image: PathologyLab,
    link: "https://pathology-lab-frontend.onrender.com/",
    tags: ["Pathology test web", "React", "MongoDB"],
  },

  {
    id: "sears",
    title: "Seas",
    description:
      "A secure online voting platform that allows users to create, manage, and participate in polls and elections.",
    image: Sears,
    link: "https://sears-website.vercel.app/",
    tags: ["wishlist", "React", "Cart the item","payment Integration"],
  },
  
];

const ProjectCard = ({ project, isDark }) => (
  <div
    className={`h-full rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-xl ${
      isDark
        ? "bg-gray-900 border-gray-700 hover:shadow-purple-500/20"
        : "bg-white border-gray-200 hover:shadow-blue-500/20"
    }`}
  >
    {/* Image Section */}
    <div className="relative overflow-hidden group aspect-[4/3]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-t from-black/70 to-transparent"
            : "bg-gradient-to-t from-black/50 to-transparent"
        }`}
      />
    </div>

    {/* Text Content */}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p
        className={`text-sm line-clamp-3 mb-4 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-1 rounded-full ${
              isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Visit Site Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          isDark
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <ExternalLink size={16} />
        Visit Site
      </a>
    </div>
  </div>
);

const Project = ({ mode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const isDark = mode === "dark";

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(updateVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (activeIndex < projectsData.length - visibleCount) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 px-4 md:px-8 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-rubik mb-8 ">Projects</h1>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore my portfolio of web applications and digital solutions
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 p-3"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ProjectCard project={project} isDark={isDark} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 rounded-full ${
              isDark
                ? "bg-black text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            } ${
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            } shadow-lg`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= projectsData.length - visibleCount}
            className={`absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 rounded-full ${
              isDark
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            } ${
              activeIndex >= projectsData.length - visibleCount
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            } shadow-lg`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: projectsData.length - visibleCount + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? `w-8 ${isDark ? "bg-purple-500" : "bg-blue-600"}`
                    : `w-2 ${isDark ? "bg-gray-700" : "bg-gray-300"}`
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
