import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='bg-white text-black py-20' id='contact'>
                <div className='container mx-autopx-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12 text-blue-900'>Contact</h2>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold text-green-500 mb-4">Let's Talk</h2>

                            <p className="text-lg mb-4">I'm open to discussing web development projects or partnership opportunities.
                            </p>

                            <div className="mb-4">
                                <p className="flex items-center">
                                    <span className="mr-2">📧</span> vkondhekar32@gmail.com
                                </p>
                            </div>

                            <div className="mb-4">
                                <p className="flex items-center">
                                    <span className="mr-2">📞</span> +91 9529836284
                                </p>
                            </div>

                            <div className="mb-4">
                                <p className="flex items-center">
                                    <span className="mr-2">📍</span> Pt.no. 55, Suraj Nagar, Near Palloti Church ,<br></br>Gorewada Ring Road ,Nagpur -440013
                                </p>
                            </div>

                        </div>

                        <div className="md:w-1/2">
                            <form className="bg-gray-800 p-6 rounded-lg shadow-lg">

                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="name">Your Name</label>
                                    <input className="w-full p-2 bg-gray-700 rounded-md text-white" id="name" type="text" placeholder="Enter Your Name" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input className="w-full p-2 bg-gray-700 rounded-md text-white" id="email" type="email" placeholder="Enter Your Email" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full p-2 bg-gray-700 rounded-md text-white" id="message" placeholder="Enter Your Message"></textarea>
                                </div>

                                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md">Send</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
