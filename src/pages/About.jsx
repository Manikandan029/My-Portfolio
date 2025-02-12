import { motion } from 'framer-motion';



const skills = [
    { name: 'HTML', level: 80, color: 'bg-green-400' },
    { name: 'CSS', level: 88, color: 'bg-green-400' },
    { name: 'React', level: 70, color: 'bg-green-400' },
    { name: 'Tailwind CSS', level: 80, color: 'bg-green-400' },
    { name: 'JAVA', level: 90, color: 'bg-green-400' },
    { name: 'SQL', level: 80, color: 'bg-green-400' },
];

function About() {
    return (
        <div className="bg-neutral-800 min-h-screen px-5 py-10">

                <motion.h1
                        initial={{ opacity: 0, x: -30 }} // Start with a slight movement from left
                        animate={{ opacity: 1, x: 0 }} // Smooth movement to the final position
                        transition={{ duration: 4.0, type: 'spring', stiffness: 80 }}className="text-4xl ml-5 pt-5 font-medium text-white mb-5 -mt-5 max-w-full sm:text-3xl">
                        About Me
                </motion.h1>
                        
                        
                        <span className="h-0.75 w-37 bg-green-300 absolute ml-4.5 -mt-4 "></span>  

                <motion.h2
                        initial={{ opacity: 0, x: -30 }} // Start with a slight movement from left
                        animate={{ opacity: 1, x: 0 }} // Smooth movement to the final position
                        transition={{ duration: 5.2, delay: 0.2, type: 'spring', stiffness: 80 }} // Slowed down transition for a smooth effect
                        
                        className="text-white mt-5 text-2xl ml-5 font-bold">I'm Manikandan and <span className="text-green-500">React Developer</span>
                </motion.h2>

                <motion.p
                        initial={{ opacity: 0, y: 30 }} // Starting from the left (out of view)
                        animate={{ opacity: 1, y: 0 }} // Smooth movement to the final position
                        transition={{ duration: 4.0, delay: 0.8, type: 'spring', stiffness: 100 }}
                        className="text-white mt-3 px-5 text-left sm:px-10 sm:text-base -ml-5">I am currently pursuing a B.Tech in Information Technology, with a profound passion for leveraging technology to address real-world challenges. With a solid foundation in Java and data structures, I am deeply engaged in developing innovative web applications. I specialize in using modern frameworks like React to create dynamic, user-centric solutions. I am committed to continuous learning, always striving to improve my skills and stay ahead in the ever-evolving tech industr.y
                </motion.p>

            <div className="p-6 bg-neutral-800 text-white rounded-xl mt-5">
                <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-medium">{skill.name}</span>
                        </div>
                        <div className="relative">
                            {/* Percentage above the line */}
                            <span className="absolute top-[-1.5rem] -ml-5 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                                {skill.level}%
                            </span>
                            <div className="w-1/2 bg-gray-700 rounded-full h-2">
                                <motion.div
                                    className={`h-2 rounded-full ${skill.color}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Education section */}
            <div className="flex flex-wrap gap-138 mb-5 ml-3">
                <h3 className="text-white font-medium text-2xl ml-4">Education</h3>
                <h3 className="text-white font-medium text-2xl">Achievements</h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-10">
                {/* College section */}
                <div className="border border-black mb-6 sm:mb-0 mx-5 sm:w-1/2 bg-neutral-890 shadow-2xl">
                    <div className="flex flex-row items-start p-4">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-45 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2021 -2025</h3>
                            <p className="font-serif text-lg">Under Graduate</p>
                            <p className="text-xl font-medium mb-1  ">Saranathan College Of Engineering, (<span className="text-base">Information Technology</span>)</p>
                            <p className="max-w-prose">I possess an undergraduate degree with the skill of Java for programming and React for developing dynamic web applications. My education refined my expertise, enabling me to build responsive, efficient applications.</p>
                        </div>
                    </div>

                    {/* High sec school section */}
                    <div className="flex flex-row items-start p-4 -mt-10">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-38 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2019 -2021</h3>
                            <p className="font-serif text-lg">HR Secondary</p>
                            <p className="text-xl font-medium mb-1">Govt Model Hr Sec School, (<span className="text-base">Computer Science</span>)</p>
                            <p className="max-w-prose">During my HR secondary school years, I explored and discovered more about myself, which sparked my interest in computer science and coding, setting the foundation for my future in technology.</p>
                        </div>
                    </div>

                    {/* High school section */}
                    <div className="flex flex-row items-start p-4 -mt-10">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-31 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2017 -2019</h3>
                            <p className="font-serif text-lg">Govt High School Vagavasal</p>
                            <p className="max-w-prose">Throughout high school, I served as the leader of my class from 6th to 10th grade and was also the NSS leader of my school. These leadership roles helped me develop strong teamwork, organizational, and communication skills.</p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="border border-black mx-5 sm:w-1/2 bg-neutral-890 shadow-2xl">
                    {/* SIH finalist */}
                    <div className="flex flex-row items-start p-4">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-45 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2023</h3>
                            <p className="font-serif text-lg">Finalist</p>
                            <p className="text-xl font-medium mb-1">Smart India Hackathon</p>
                            <p className="max-w-prose">Our team was one of the top 5 finalists in SIH, where nearly 500 teams provided solutions to our problem statement. We presented a solution for a real-world problem, showcasing our problem-solving skills and innovative approach.</p>
                        </div>
                    </div>

                    {/* Sports achievements */}
                    <div className="flex flex-row items-start p-4 -mt-10">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-32 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2024</h3>
                            <p className="font-serif text-lg">Winners, (Sports)</p>
                            <p className="text-xl font-medium mb-1">Saranathan College Of Engineering</p>
                            <p className="max-w-prose">Achieved victories in Kho-Kho and Hacky, showcasing strong teamwork, resilience, and leadership skills both in sports and as a team player.</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-start p-4 -mt-10">
                        <div className="relative flex flex-col items-center mr-4">
                            <span className="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
                            <span className="h-33 w-0.5 bg-green-300"></span>
                        </div>

                        <div className="text-white">
                            <h3 className="text-sm font-light">2023</h3>
                            <p className="font-serif text-lg">Winner, (Sports)</p>
                            <p className="text-xl font-medium mb-1">Saranathan College Of Engineering</p>
                            <p className="max-w-prose">Winner in Kho-Kho and Runner-Up in Kabaddi, demonstrating strong teamwork, leadership, perseverance, and strategic thinking, all of which contribute to my problem-solving and collaboration skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default About;
