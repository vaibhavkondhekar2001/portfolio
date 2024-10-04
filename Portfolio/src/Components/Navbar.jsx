import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-black text-white bg-gradient-to-r from-blue-900 to-green-400 px-8 md:px-16 lg:px-24'>

        <div className='container py-2 flex justify-center md:justify-between items-center'>
          <div className='text-2xl font-bold hidden md:inline'>
            vk_since_01
          </div>

          <div className='space-x-6'>
            <a href="#hero" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#services" className='hover:text-gray-400'>Services</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
          </div>

          <button className='bg-blue-900 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 py-2 px-1 rounded-xl '>Connect Me</button>
        </div>

      </nav>
    </>
  )
}

export default Navbar
