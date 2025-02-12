import { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaCertificate, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed left-0 h-screen w-48 bg-neutral-900 text-white shadow-lg hidden md:flex flex-col items-start py-10 space-y-10 px-4 pt-40">
            

                <Link to="/" className="nav-link flex flex-row gap-3 items-center group ">
                    <FaHome size={20} />
                    <span className="font-medium text-xl">Home</span>
                </Link>

                <Link to="/about" className="nav-link flex flex-row gap-3 items-center group">
                    <FaUser size={20} />
                    <span className="text-xl">About</span>
                </Link>

                <Link to="/projects" className="nav-link flex flex-row gap-3 items-center group">
                    <FaFolderOpen size={20} />
                    <span className="text-xl">Projects</span>
                </Link>

                <Link to="/certificates" className="nav-link flex flex-row gap-3 items-center group">
                    <FaCertificate size={20} />
                    <span className="text-xl">Certificates</span>
                </Link>

                <Link to="/contact" className="nav-link flex flex-row gap-3 items-center group">
                    <FaEnvelope size={20} />
                    <span className="text-xl">Contact</span>
                </Link>
            </nav>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 right-0 w-full bg-neutral-900 text-white flex justify-between items-center p-4 shadow-lg">
                

                {/* Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-neutral-900 text-white flex flex-col items-center justify-center space-y-6 text-2xl z-50">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                        <FaHome />
                        Home
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                        <FaUser />
                        About
                    </Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                        <FaFolderOpen />
                        Projects
                    </Link>
                    <Link to="/certificates" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                        <FaCertificate />
                        Certificates
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                        <FaEnvelope />
                        Contact
                    </Link>
                </div>
            )}
        </>
    );
}

export default Navbar;
