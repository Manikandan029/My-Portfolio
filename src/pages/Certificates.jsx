import { useState } from 'react';
import { motion } from 'framer-motion';
import Image1 from '../assets/kho-24.png';
import Image2 from '../assets/hock-24.png';
import Image3 from '../assets/kho-23.png';
import Image4 from '../assets/kab-23.png';
import Image5 from '../assets/sih.png';
import Image6 from '../assets/webinar.png';
import Image7 from '../assets/tech-1.png';
import Image8 from '../assets/tech-2.png';
import Image9 from '../assets/tech-3.png';


function Certicates() {
    const [activeCategory, setActiveCategory] = useState('curriculam'); // State to track the active category

    return (
        <div className="bg-neutral-800 min-h-screen text-white px-5 py-15 pt-25  -ml-48">

            <motion.h1
                
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="text-4xl ml-5 pt-5 font-medium text-white mb-5 -mt-5 max-w-full sm:text-3xl pl-15">Certificates
            </motion.h1>
            <span className="h-0.75 w-40 bg-green-300 absolute ml-20 -mt-4 "></span>

            <div className="mx-w-30 flex gap-10 mt-8 pl-15">
                <motion.p
                    
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                    
                    className="py-1 px-5 text-xl ml-5 rounded-3xl shadow bg-neutral-850 font-semibold transition duration-300 hover:text-green-300 mb-6"
                    onClick={() => setActiveCategory('curriculam')} // Set active category to 'curriculam'
                >
                    Curriculam
                    <span className='w-28 h-0.5 absolute bg-green-300 mt-7.5 -ml-26'></span>
                </motion.p>

                <motion.p
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-1 px-5 text-xl ml-5 max-w-34 rounded-3xl shadow bg-neutral-850 font-semibold transition duration-300 hover:text-green-300 mb-6"
                    onClick={() => setActiveCategory('sports')} // Set active category to 'sports'
                >
                    Sports
                    <span className='w-18 h-0.5 absolute bg-green-300 mt-7.5 -ml-16'></span>
                </motion.p>
            </div>

            {/* Conditionally render images based on the selected category */}
            {activeCategory === 'curriculam' && (
                <div className="grid grid-rows-2 grid-cols-2 gap-10 p-10 px-20 ">
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image5} 
                            alt="Certificate 1" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image6} 
                            alt="Certificate 2" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image7} 
                            alt="Certificate 3" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image8} 
                            alt="Certificate 4" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                </div>
            )}

            {activeCategory === 'sports' && (
                <div className="grid grid-rows-2 grid-cols-2 gap-10 p-10 px-20">
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image1} 
                            alt="Certificate 1" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image2} 
                            alt="Certificate 2" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image3} 
                            alt="Certificate 3" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700">
                        <img 
                            src={Image4} 
                            alt="Certificate 4" 
                            className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certicates;
