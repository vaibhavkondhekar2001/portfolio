import React from 'react';
import AboutImage from '../assets/about-me.jpeg';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const About = () => {
    return (
        <>
            <div className='bg-white text-black py-20' id='about'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12 text-blue-900'>About Me</h2>

                    <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                        <img src={AboutImage} alt="About Me" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />

                        <div className='flex-1'>
                            <p className='text-lg mb-8'>
                                Hello, my name is Vaibhav Kondhekar, and I'm a dedicated Full Stack Developer with experience in creating innovative, responsive websites. My area of expertise is utilizing the MERN stack to create streamlined user experiences.
                                <br />
                                <br />
                                I have an adequate understanding of technologies such as Node.js, MongoDB, Tailwind CSS, and React. My main interest is developing dynamic online applications.
                                <br />
                                <br />
                                My skill set also includes utilizing programs like GSAP to create original animations and interactive elements.
                                <br />
                                <br />
                                I have experience working on a range of projects, such as making responsive, eye-catching online apps and user management systems. My primary goal is to write well-organized and easily maintained code without sacrificing performance.
                                <br />
                                <br />
                                I'm constantly excited to take on challenges that enable me to push the limits of web development, and I have a special interest in positions that place a strong emphasis on creativity and innovation.
                                <br />
                                When I'm not coding, I like to experiment with the newest technology, contribute to open-source projects, and pick up new UI/UX design techniques.
                            </p>

                            {/* Icons Section */}
                            <div className='flex justify-center space-x-8 mt-8'>
                                <div className='flex flex-col items-center'>
                                    <FaNodeJs className='text-4xl text-green-500' />
                                    <span className='text-sm mt-1'>Node.js</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <SiMongodb className='text-4xl text-green-700' />
                                    <span className='text-sm mt-1'>MongoDB</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <SiTailwindcss className='text-4xl text-blue-500' />
                                    <span className='text-sm mt-1'>Tailwind CSS</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <FaReact className='text-4xl text-blue-400' />
                                    <span className='text-sm mt-1'>React</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;