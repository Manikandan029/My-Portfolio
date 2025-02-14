import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import bgImage from "../assets/contact.jpg";

export default function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData(e.target);
        formDataToSubmit.append("access_key", "6c04c4fc-dc7f-4a52-bec2-fd0630f4624a");

        const object = Object.fromEntries(formDataToSubmit);
        const json = JSON.stringify(object);

        console.log("Form data to submit:", object); 

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000); 

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            console.error("Submission failed", res);
        }
    };

    return (
        <>
            <div style={{ backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"}} 
                className="w-full min-h-screen"
            >
                <div className="pt-10 px-6 md:px-16">
                    <div className="flex flex-col  md:items-start ">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: 'spring', stiffness: 60 }}
                            viewport={{ once: true }}
                            className="pt-15 text-3xl text-white -pl-10 "
                        >
                            Contact me
                        </motion.h1>
                        <motion.span 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-[3px] w-40 bg-green-300 md:self-start origin-left"
                        />
                    </div>
                </div>

                <div className="min-h-screen flex items-center justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-4xl w-full mb-4 backdrop-blur-md border-2 bg-white/20 rounded-lg shadow-md text-white p-5 mx-4 -mt-25 sm:mt-5"
                    > 
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-3xl text-green-300 font-bold mb-4 text-center"
                        >
                            SEND ME AN EMAIL
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-white mb-6 text-center"
                        >
                            Feel free to reach out for collaborations, inquiries, or to discuss how we can bring your ideas to life with creative and innovative solutions. Let’s connect!
                        </motion.p>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-10">
                                <div className="flex flex-col md:flex-row justify-between md:space-x-4 ">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="name" className="text-white mb-1 font-bold">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your Name"
                                            className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                                            value={formData.name}
                                            onChange={handleChange}
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="email" className="text-white mb-1 font-bold">Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                                            value={formData.email}
                                            onChange={handleChange}
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="subject" className="text-white mb-1 font-bold">Subject:</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="What's the subject?"
                                            className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            name="subject"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-white mb-1 font-bold">Message:</label>
                                    <textarea
                                        id="message"
                                        placeholder="Write your message"
                                        className="p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none w-full"
                                        value={formData.message}
                                        onChange={handleChange}
                                        name="message"
                                        required
                                    />
                                </div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="flex justify-center mt-4"
                                >
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 bg-green-400 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                                    >
                                        Send
                                    </button>
                                </motion.div>
                            </div>
                        </form>
                    </motion.div>

                    {showSuccess && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="fixed top-10 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/3 bg-black border-2 border-green-500 p-4 rounded-lg shadow-lg text-white z-50"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-xl font-bold">Success!</h2>
                                <button onClick={() => setShowSuccess(false)} className="text-white">
                                    <AiOutlineClose size={24} />
                                </button>
                            </div>
                            <p>Your message has been sent successfully.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}
