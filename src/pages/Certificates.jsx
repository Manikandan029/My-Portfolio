import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image1 from '../assets/kho-24.png';
import Image2 from '../assets/hock-24.png';
import Image3 from '../assets/kho-23.png';
import Image4 from '../assets/kab-23.png';
import Image5 from '../assets/sih.png';
import Image6 from '../assets/webinar.png';
import Image7 from '../assets/tech-1.png';
import Image8 from '../assets/tech-2.png';
import Image9 from '../assets/tech-3.png';

const Certificates = () => {
    const [activeCategory, setActiveCategory] = useState('curriculam');

    // Category data mapping
    const categories = {
        curriculam: [Image5, Image6, Image7, Image8, Image9],
        sports: [Image1, Image2, Image3, Image4]
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-800 min-h-screen text-white px-5 py-10 pt-25 "
        >
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="text-3xl font-medium text-white mb-5 sm:text-3xl"
            >
                Certificates
            </motion.h1>
            <span className="h-1 w-40 bg-green-300 block mb-6 -mt-5"></span>

            {/* Category Buttons */}
            <div className="flex gap-10 mt-5">
                {["curriculam", "sports"].map((category) => (
                    <motion.p
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`py-1 px-5 text-2xl rounded-3xl shadow bg-neutral-850 font-semibold cursor-pointer transition duration-300 bg-emerald-950 ${
                            activeCategory === category ? "text-green-300" : "hover:text-green-300"
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.p>
                ))}
            </div>

            {/* Certificate Grid with Animation on Section Change */}
            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeCategory}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 pr-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {categories[activeCategory].map((image, index) => (
                        <motion.div 
                            key={index} 
                            className="relative overflow-hidden rounded-lg shadow-lg border-4 border-green-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <img
                                src={image}
                                alt={`Certificate ${index + 1}`}
                                className="transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black rounded-lg object-cover w-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Certificates;
