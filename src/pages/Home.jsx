import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Image1 from '../assets/portfolio1.png'; // Import your image here
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf'; // Import the resume PDF file
import About from '../pages/About';
import Certicates from '../pages/Certificates';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function HomePage() {
    const text = "Front-End  Developer".split("");

    return (
        <>
        <div className="bg-neutral-800 min-h-screen "
        >
            
            
            <div className="text-white flex -ml-10 -mr-30">
                {/* Left Section (Content) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Changed to vertical movement for the left section
                    animate={{ opacity: 1, y: 0 }} // Smooth vertical movement
                    transition={{ duration: 4.0, type: 'spring', stiffness: 100 }} // Slowed down the transition (4x slower)
                    className="flex flex-col w-1/2 px-10 ml-10 pt-40 pl-50 -pb-20 gap-3"
                >
                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }} // Start with a slight movement from left
                        animate={{ opacity: 1, x: 0 }} // Smooth movement to the final position
                        transition={{ duration: 4.0, type: 'spring', stiffness: 80 }} // Transition duration increased for a smooth effect
                        className="text-4xl font-bold text-green-500 mb-4"
                    >
                        Manikandan M
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }} // Start with a slight movement from left
                        animate={{ opacity: 1, x: 0 }} // Smooth movement to the final position
                        transition={{ duration: 5.2, delay: 0.2, type: 'spring', stiffness: 80 }} // Slowed down transition for a smooth effect
                        className="text-2xl text-gray-300 mb-4"
                    >
                        {text.join('')}
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }} // Starting from the left (out of view)
                        animate={{ opacity: 1, y: 0 }} // Smooth movement to the final position
                        transition={{ duration: 4.0, delay: 0.8, type: 'spring', stiffness: 100 }} // Slowed down the transition (4x slower)
                        className="text-xl text-gray-300 mb-6 align-text-bottom"
                    >
                        Forward-thinking IT specialist with a talent for converting complex challenges into effective solutions. Enthusiastic
                        about applying a unique mix of technical skill and creative vision to drive impactful projects and progress in the
                        tech industry.
                    </motion.p>

                    <div className="mx-w-30">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-2 px-10 bg-green-500 rounded-lg text-black font-semibold transition duration-300 hover:bg-green-600 mb-6"
                            onClick={() => window.open(resume, '_blank')} // Opens the resume PDF file from the assets folder
                        >
                            Download CV
                        </motion.button>
                    </div>

                    {/* Social Links with Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 4.0, delay: 0.9 }} // Slowed down the transition (4x slower)
                        className="flex space-x-6 max-w-50 gap-3"
                    >
                        <motion.a
                            href="https://github.com/Manikandan029"
                            target="_blank"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl text-gray-400 transition-transform duration-300 transform hover:scale-110 hover:text-green-600"
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/-manikandan-m"
                            target="_blank"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl text-gray-400 transition-transform duration-300 transform hover:scale-110
                            hover:text-blue-600"
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/yourhandle"
                            target="_blank"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl text-gray-400 transition-transform duration-300 transform hover:scale-110
                            hover:text-pink-600"
                        >
                            <FaInstagram />
                        </motion.a>

                        <motion.a
                            href="mailto:manivagaimk@gmail.com"
                            target="_blank"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-3xl text-gray-400 transition-transform duration-300 transform hover:scale-110
                            hover:text-yellow-400"
                        >
                            <FaEnvelope />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Section (Profile Picture) */}
                <motion.div
                    className="relative mt-30 ml-20 ebordr p-5 px-7 "
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        src={Image1}
                        alt="Your Picture"
                        className="object-cover opacity-100 h-100 mb-7 mt-5 -ml-2 -pr-10"
                        initial={{ opacity: 0, y: -100 }} // Start from the right (out of view)
                        animate={{ opacity: 1, y: 0 }} // Smooth movement to the final position
                        transition={{ duration: 3.4, type: 'spring', stiffness: 50 }} // Slowed down the transition (4x slower)
                    />

                    {/* Top-left Horizontal and Vertical Lines with color */}
                    <span className="absolute top-0 left-0 w-20 h-1.5 bg-green-500"></span> {/* Horizontal line */}
                    <span className="absolute top-0 left-0 w-1.5 h-20 bg-green-500"></span> {/* Vertical line */}

                    {/* Bottom-right Horizontal and Vertical Lines with color */}
                    <span className="absolute bottom-0 right-0 w-20 h-1.5 bg-green-500"></span> {/* Horizontal line */}
                    <span className="absolute bottom-0 right-0 w-1.5 h-20 bg-green-500"></span> {/* Vertical line */}
                </motion.div>
            </div>
            
        </div>
        <About />
        <Certicates />
        <Projects />
        <Contact />
        </>
    );
}

export default HomePage;
