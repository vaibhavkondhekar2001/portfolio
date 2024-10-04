import React, { useState } from 'react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const service = [
        {
            id: 1,
            title: "Web Design",
            description: "Creating visually appealing and user-friendly web designs",
            details: `▪️ Technologies Used: Figma, Adobe XD, Photoshop.<br />
▪️ Process: I start by understanding your vision, target audience, and business goals. From wireframes to final design mockups, I ensure your site is aesthetically pleasing while focusing on user experience and brand consistency.<br />
▪️ Benefits: You’ll receive a fully responsive, user-centric design that enhances user engagement and optimizes the site's navigation.<br />
▪️ Use Cases: Perfect for businesses launching a new brand or looking to refresh their website’s look.`,
        },
        {
            id: 2,
            title: "Frontend Development",
            description: "Building responsive and interactive user interfaces",
            details: `▪️ Technologies Used: React, Tailwind CSS, JavaScript.<br />
▪️ Process: I craft interactive and fast-loading UIs that work seamlessly across devices. I prioritize performance, ensuring smooth interactions and minimal load times.<br />
▪️ Benefits: Responsive design, high performance, SEO-optimized code, and cross-browser compatibility.<br />
▪️ Use Cases: Suitable for single-page applications (SPAs), e-commerce platforms, and interactive landing pages.`,
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Developing robust server-side logic and database",
            details: `▪️ Technologies Used: Node.js, Express, MongoDB.<br />
▪️ Process: I focus on building secure, scalable backend architectures with robust database management and API integration.<br />
▪️ Benefits: Seamless data handling, fast server response, and secure user authentication.<br />
▪️ Use Cases: Essential for applications needing user authentication, data storage, and integration with other systems (e.g., payment gateways).`,
        },
        {
            id: 4,
            title: "Full-Stack Development",
            description: "Combining both frontend and backend development skills",
            details: `▪️ Technologies Used: MERN stack (MongoDB, Express, React, Node.js).<br />
▪️ Process: I offer end-to-end development, from frontend design to backend architecture, ensuring seamless integration of all components.<br />
▪️ Benefits: Complete project development in one place, ensuring consistency, fast communication, and holistic optimization.<br />
▪️ Use Cases: Ideal for startups or businesses looking to develop complex, data-driven applications.`,
        },
    ];

    return (
        <div className='bg-white text-black py-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 text-blue-900'>Services</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {service.map(service => (
                        <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                {service.title}
                            </h3>

                            <p className='mt-2 text-gray-300'>
                                {service.description}
                            </p>

                            <button
                                onClick={() => setSelectedService(service)}
                                className='mt-4 inline-block text-green-400 hover:text-blue-500'>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>

                {selectedService && (
                    <div className="modal">
                        <div className="modal-content bg-white p-8 rounded-lg">
                            <h3 className="text-3xl font-bold mb-4">{selectedService.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: selectedService.details }}></p>
                            <button className="mt-4 text-red-500" onClick={() => setSelectedService(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;