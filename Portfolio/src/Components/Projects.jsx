import React from 'react';
import projectImage3 from '../assets/Fortunas_Haven-removebg-preview.png';  // Example image import
import projectImage2 from '../assets/traditional-together.png';
import projectImage1 from '../assets/css3.png';
import projectImage4 from '../assets/citizen-resolve.png';

const Projects = () => {
  const projects = [
    {
      title: "YOGA [Landing page]",
      stack: "HTML , CSS",
      github: "https://github.com/vaibhavkondhekar2001/Yoga",
      live: "https://yoga-gray.vercel.app/",
      image: projectImage1  // Use imported image variable
    },
    {
      title: "Traditions-Together",
      stack: "HTML , CSS",
      github: "https://github.com/vaibhavkondhekar2001/Traditions-Together",
      live: "https://traditions-together-eight.vercel.app/",
      image: projectImage2  // Use imported image variable
    },
    {
      title: "Fortunas_Haven",
      stack: "HTML , CSS , JAVASCRIPT",
      github: "https://github.com/vaibhavkondhekar2001/Fortunas_Haven",
      live: "https://fortunas-haven.vercel.app/",
      image: projectImage3  // Use imported image variable
    },
    {
      title: "CITIZENS RESOLVE",
      stack: "REACT VITE , TAILWINDCSS",
      github: "https://github.com/vaibhavkondhekar2001/citizens-resolve",
      live: "https://citizens-resolve.vercel.app/",
      image: projectImage4  // Use imported image variable
    }
  ];

  return (
    <>
      <div className='bg-white text-black py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
          <h2 className='text-4xl font-bold text-center mb-12 text-blue-900'>Projects</h2>

          {/* Grid for 2 columns in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                
                {/* Project Image */}
                <div className="mb-4 w-24 h-24 mx-auto">
                  <img src={project.image} alt={`${project.title} image`} className="w-full h-full object-cover rounded-full" />
                </div>

                <h2 className="text-xl font-bold mb-2 text-white text-center">
                  {project.title}
                </h2>

                <p className="text-sm mb-4 text-gray-400 text-center">
                  {project.stack}
                </p>

                {/* Buttons for GitHub and Live Links */}
                <div className="flex space-x-4 justify-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md text-sm">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-md text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
