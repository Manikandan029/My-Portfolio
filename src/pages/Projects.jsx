import Image1 from '../assets/HMS.png';
import Image2 from '../assets/Movie.png';
import Image3 from '../assets/Restourent.png';
import Image4 from '../assets/YouTube.png';
import Image5 from '../assets/Travel.png';
import Image6 from '../assets/Weather1.png';
import Image7 from '../assets/TTT1.PNG';
import Image8 from '../assets/Stopwatch1.png';
import { motion } from 'framer-motion';

function Projects() {
    return (
      <>
    
         
        <div className="bg-neutral-800">

            <motion.h1
            initial={{ opacity:0, x:-30}}
            animate={{ opacity:1,x:0}}
            transition={{  type:'spring', stiffness:60}} 
            className="bg-neutral-800 ml-15 pt-15 text-3xl text-white ">Projects
            </motion.h1>
            <span className="h-0.75 w-30 bg-green-300 absolute ml-14 mt-2"></span>
            
        <div className="flex min-h-screen items-center justify-center bg-neutral-800 px-15 mt-10">
        
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  
            {/* First Project - Hospital Management Software */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                     src={Image1} 
                     alt="Hospital Management Software"
                     href='https://github.com/Manikandan029/Hospital_Software'
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Hospital Management Software</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  A software solution for managing hospital operations including patient records, billing, and staff management.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p><strong>Skills:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
                </div>
                <a href="https://github.com/Manikandan029/Hospital_Software" target="_blank" rel="noopener noreferrer">
                <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>
                </a>

              </div>
            </div>
  
            {/* Second Project - Movie Application */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                     src={Image2}
                     alt="Movie Application" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Movie Application</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  A dynamic movie application built with React and Tailwind CSS, fetching data from a JSON source.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p><strong>Skills:</strong> React, Tailwind CSS</p>
                </div>
                <a href="https://mk-movie-application.netlify.app" target="_blank" rel="noopener noreferrer " >
                    <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>                
                    </a>
              </div>
            </div>
  
            {/* Third Project - Restaurant Application */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                     src={Image3}
                     alt="Restaurant Application" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Restaurant Application</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  A restaurant web application built with React and Tailwind CSS, featuring table bookings and contact information.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p><strong>Skills:</strong> React, Tailwind CSS</p>
                </div>
                <a href="https://mk-food-restaurant.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>       
                </a>
              </div>
            </div>
  

                        {/* Sixth Project - YouTube Clone */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                      src={Image4}
                    alt="YouTube Clone" 
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">YouTube Clone</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                A YouTube clone built with HTML, CSS, and JavaScript that mimics the functionality of the video-sharing platform.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
                </div>
                <a href="https://manikandan029.github.io/Youtube-clone/" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>
                </a>
            </div>
            </div>

            {/* Seventh Project - Travel Website */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                    src={Image5}
                    alt="Travel Website" 
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Travel Website</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                A responsive travel website built with HTML, CSS, and JavaScript, showcasing travel packages and destinations.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
                </div>
                <a href="https://manikandan029.github.io/Travel-App" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>                
                </a>
            </div>
            </div>

            {/* Eighth Project - Weather App */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                    src={Image6}
                    alt="Weather App" 
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Weather App</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                A weather app built using HTML, CSS, and JavaScript that fetches data from a weather API to display the forecast.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p><strong>Skills:</strong> HTML, CSS, JavaScript, API</p>
                </div>
                <a href="https://manikandan029.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>
                </a>
            </div>
            </div>

            {/* Ninth Project - Tic-Tac-Toe */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-full md:w-96 lg:w-[450px]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" 
                    src={Image7}
                    alt="Tic-Tac-Toe" 
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Tic-Tac-Toe</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript with a turn-based play logic.
                </p>
                <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
                </div>
                <a href="https://manikandan029.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
                  <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>                
                </a>
            </div>
            </div>

              {/* Tenth Project - Stopwatch */}{/* Tenth Project - Stopwatch Application */}
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-full md:w-96 lg:w-[450px]">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                      src={Image8}
                      alt="Stopwatch App"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">Stopwatch App</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      A simple stopwatch application developed using HTML, CSS, and JavaScript with start, stop, and reset functionalities.
                    </p>
                    <div className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
                    </div>
                    <a href="https://manikandan029.github.io/Stopwatch-App/" target="_blank" rel="noopener noreferrer">
                        <button className="rounded-full py-2 mt-2 px-3.5 font-com text-xl capitalize text-green-300 cursor-pointer">See More...</button>
                    </a>
                  </div>
                </div>
    
          </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Projects;
  