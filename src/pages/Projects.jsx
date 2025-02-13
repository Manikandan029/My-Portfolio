import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectsData from "../components/Project.json";

import Image1 from '../assets/HMS.png';
import Image2 from '../assets/Movie.png';
import Image3 from '../assets/Restourent.png';
import Image4 from '../assets/YouTube.png';
import Image5 from '../assets/Travel.png';
import Image6 from '../assets/Weather1.png';
import Image7 from '../assets/tt1.PNG';
import Image8 from '../assets/Stopwatch1.png';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.map((project, index) => ({
      ...project,
      image: images[index], // Assign correct image dynamically
    })));
  }, []);

  return (
    <div className="bg-neutral-800 pt-10">
      {/* Page Load Animation for Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="bg-neutral-800 ml-15 pt-15 text-3xl text-white pl-10"
      >
        Projects
      </motion.h1>
      <span className="h-0.75 w-30 bg-green-300 absolute ml-24 mt-2"></span>

      <div className="flex min-h-screen items-center justify-center bg-neutral-800 px-15 mt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              initial={{ opacity: 0, y: 30 }} // Animation starts from below
              whileInView={{ opacity: 1, y: 0 }} // Moves up and appears
              viewport={{ once: false, amount: 0.2 }} // Works for mobile & desktop
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileTap={{ scale: 0.95 }} // Click Animation
            >
              <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {project.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.description}
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>
                    <strong>Skills:</strong> {project.skills}
                  </p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">
                    See More...
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
