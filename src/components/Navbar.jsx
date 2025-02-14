import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar at the top */}
            <nav className="fixed top-0 left-0 w-full  sm:bg-neutral-900  bg-neutral-900 text-white shadow-lg flex justify-between items-center px-6 py-4 md:px-10 z-50">
                {/* Logo or Brand Name */}
                

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center justify-center flex flex-1 ">
                    <Link to="/" className="nav-link text-lg hover:text-green-400 transition-all duration-300">Home</Link>
                    <Link to="/about" className="nav-link text-lg hover:text-green-400 transition-all duration-300">About</Link>
                    <Link to="/projects" className="nav-link text-lg hover:text-green-400 transition-all duration-300">Projects</Link>
                    <Link to="/certificates" className="nav-link text-lg hover:text-green-400 transition-all duration-300">Certificates</Link>
                    <Link to="/contact" className="nav-link text-lg hover:text-green-400 transition-all duration-300">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
                    {isOpen ? <FaTimes className="text-red-500" /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu with Glassmorphism & Slide Effect */}
{isOpen && (
    <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-bg-white/30 to-gray-700 text-white flex flex-col items-center py-3 text-xl rounded-xl shadow-2xl  border-gray-600 backdrop-blur-lg bg-opacity-90 transition-all duration-300 animate-slideDown z-[1000] border-2 mx-8 ">
        <Link to="/" className="px-6 py-3 w-full text-center rounded-md hover:bg-gray-600 hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="px-6 py-3 w-full text-center rounded-md hover:bg-gray-600 hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" className="px-6 py-3 w-full text-center rounded-md hover:bg-gray-600 hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/certificates" className="px-6 py-3 w-full text-center rounded-md hover:bg-gray-600 hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Certificates</Link>
        <Link to="/contact" className="px-6 py-3 w-full text-center rounded-md hover:bg-gray-600 hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
    </div>
)}

            {/* Ensuring content does not go under the navbar */}
            <div className="pt-16">
                {/* Your page content goes here */}
            </div>

            {/* Keyframe Animation for Slide Down */}
            <style>
                {`
                    @keyframes slideDown {
                        from {
                            transform: translateY(-20px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                    .animate-slideDown {
                        animation: slideDown 0.3s ease-in-out;
                    }
                `}
            </style>
        </>
    );
}

export default Navbar;
