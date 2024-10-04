import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id="hero" className="flex min-h-screen">
      <div className="flex-1 bg-white p-10">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="mb-2 font-bold">HELLO, I AM</p>
            <h3 className="text-5xl font-bold mb-4">
              <TypeAnimation
                sequence={[
                  'Vaibhav Kondhekar ,',
                  1000,
                  '',
                  1000,
                ]}
                style={{ fontSize: '30px' }}
                repeat={Infinity}
              />
            </h3>

            <p className="mb-6">
              <div>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    'I specialize in', 
                    1000,
                    'I specialize in building modern web ',
                    1000,
                    'I specialize in building responsive web applications.',
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: '2em' }}
                  repeat={Infinity}
                />
              </div>
            </p>

            <a 
              href="/cv.pdf" // This should be the path to your CV file in the public folder
              download 
              className="px-4 py-2 bg-blue-900 text-white rounded-xl"
            >
              Download CV
            </a>
          </div>

          <div className="flex-1 mt-11">
    <img
        src="src/assets/profile-01.jpg"
        alt="Vaibhav Kondhekar"
        className="rounded-md shadow-lg w-70 h-70 object-cover" // Adjust the width and height as needed
    />
</div>

          
        </div>
      </div>

      <div className="bg-gradient-to-tl from-blue-900 to-green-400 p-10 text-white">
        <div className="mb-2 align-middle">
          <div className="mt-12 justify-items-center">
            “Website without visitors is like<br /> a ship lost in the horizon.”
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold"></h2>
          <p>― Dr. Christopher Dayagdag</p>
        </div>

        <div className="mt-11">
          <h2 className="text-2xl font-bold">Social Media</h2>
          <div className="flex space-x-4">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;