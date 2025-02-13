import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image1 from "../assets/portfolio1.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
// import ParticlesBackground from "../components/ParticlesBackground";

function HomePage() {
  const text = "Front-End Developer".split("");

  return (
    <>
  
      {/* Added pt-16 to prevent content from going under the navbar */}
      <div className="bg-neutral-800 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 pt-16 "
      >
         {/* <ParticlesBackground /> */}
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          className="flex flex-col w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
            className="text-3xl md:text-4xl font-bold text-green-500 mb-4"
          >
            Manikandan M
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            {text.join("")}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-lg md:text-xl text-gray-300 mb-6"
          >
            Forward-thinking IT specialist with a talent for converting complex challenges into effective solutions. Enthusiastic about
            applying a unique mix of technical skill and creative vision to drive impactful projects and progress in the tech industry.
          </motion.p>

          {/* Download CV Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-6 md:px-10 bg-green-500 rounded-lg text-black font-semibold transition duration-300 hover:bg-green-600 mb-6"
              onClick={() => window.open(resume, "_blank")}
            >
              Download CV
            </motion.button>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex justify-center lg:justify-start space-x-6"
          >
            {[
              { href: "https://github.com/Manikandan029", icon: <FaGithub />, color: "hover:text-green-600" },
              { href: "https://www.linkedin.com/in/-manikandan-m", icon: <FaLinkedin />, color: "hover:text-blue-600" },
              { href: "https://www.instagram.com/.manikandan._/", icon: <FaInstagram />, color: "hover:text-pink-600" },
              { href: "mailto:manivagaimk@gmail.com", icon: <FaEnvelope />, color: "hover:text-yellow-400" },
            ].map(({ href, icon, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl text-gray-400 transition-transform duration-300 transform hover:scale-110 ${color}`}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div className="relative mt-10 lg:mt-0 lg:ml-10" whileHover={{ scale: 1.05 }}>
          <motion.img
            src={Image1}
            alt="Your Picture"
            className="object-cover w-60 md:w-72 lg:w-80 rounded-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          />

          {/* Border Design */}
          <span className="absolute top-0 left-0 w-16 h-1.5 bg-green-500"></span>
          <span className="absolute top-0 left-0 w-1.5 h-16 bg-green-500"></span>
          <span className="absolute bottom-0 right-0 w-16 h-1.5 bg-green-500"></span>
          <span className="absolute bottom-0 right-0 w-1.5 h-16 bg-green-500"></span>
        </motion.div>
      </div>

      {/* Other Sections */}
     
    </>
  );
}

export default HomePage;
