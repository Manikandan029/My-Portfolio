import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar at the top */}
            <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-white shadow-lg flex justify-center items-center
             px-10 py-4 md:px-10 z-50">
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="nav-link text-lg">Home</Link>
                    <Link to="/about" className="nav-link text-lg">About</Link>
                    <Link to="/projects" className="nav-link text-lg">Projects</Link>
                    <Link to="/certificates" className="nav-link text-lg">Certificates</Link>
                    <Link to="/contact" className="nav-link text-lg">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl absolute right-4">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-neutral-900 text-white flex flex-col items-center py-6 space-y-6 text-xl z-50">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}

            {/* Ensuring content does not go under the navbar */}
            <div className="pt-16">
                {/* Your page content goes here */}
            </div>
        </>
    );
}

export default Navbar;
