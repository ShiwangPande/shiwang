import React from 'react'
import { FaUser, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Importing necessary icons from Font Awesome

function Contact() {
    return (
        <div className='bg-[#122e43]'>
            <h1 className='text-center pt-10 text-white font-bold text-3xl lg:text-5xl tracking-normal'>Contact <span className="text-[#00e6e6]">Me!</span></h1>
            <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Details Column */}
                <div className="max-w-xl w-full  mx-auto bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-25 rounded-lg p-6 text-white">
                    <h2 className="text-3xl font-semibold mb-10 text-gray-300">Contact <span className='text-[#00e6e6]'>Details</span> </h2>
                    <div className='flex flex-col gap-4 m-4'>
                        <div className="mb-6 ">
                            <div className="text-lg mb-2 flex items-center">
                                <FaUser className="inline-block mr-4 w-10 h-10 text-[#00e6e6]" /> {/* Icon for User */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Shiwang Pandey</h3>
                                    <p className="text-lg mb-2 text-gray-400">Student</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="text-lg mb-2 flex items-center">
                                <FaLinkedin className="inline-block mr-4 w-10 h-10 text-[#00e6e6]" /> {/* Icon for Linkedin */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Linkedin:</h3>
                                    <p className="text-lg mb-2 text-gray-400">
                                        <a href="https://www.linkedin.com/in/shiwang-pandey" className="text-gray-400 hover:text-[#00e6e6]">
                                            shiwang-pandey
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="text-lg mb-2 flex items-center">
                                <FaEnvelope className="inline-block mr-4 w-10 h-10 text-[#00e6e6]" /> {/* Icon for Email */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Email:</h3>
                                    <p className="text-lg mb-2 text-gray-300">
                                        <a href="mailto:shiwangpande1@gmail.com" className="text-gray-400 hover:text-[#00e6e6]">
                                            shiwangpande1@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="text-lg mb-2 flex items-center">
                                <FaWhatsapp className="inline-block mr-4 w-10 h-10 text-[#00e6e6]" /> {/* Icon for Whatsapp */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-300">Whatsapp:</h3>
                                    <p className="text-lg mb-2 text-gray-300">
                                        <a href="https://wa.me/918459795840" className="text-gray-400 hover:text-[#00e6e6]">
                                            +91 8459795840
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Form Column */}
                <div className="max-w-xl w-full mx-auto bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-25 rounded-lg p-6 text-white">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-300">Contact <span className='text-[#00e6e6]'>Us</span></h2>
                    <p className="text-lg mb-6 text-gray-300">Have questions or suggestions? <span className='text-[#00e6e6]'>Drop us a message below!</span></p>
                    <form action="#" method="POST" className="grid grid-cols-1 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-lg text-gray-300">Your Name</label>
                            <input type="text" id="name" name="name" className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md text-white bg-transparent" style={{ borderColor: '#00e6e6' }} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg text-gray-300">Your Email</label>
                            <input type="email" id="email" name="email" className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md text-white bg-transparent" style={{ borderColor: '#00e6e6' }} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg text-gray-300">Your Message</label>
                            <textarea id="message" name="message" rows="5" className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md text-white bg-transparent" style={{ borderColor: '#00e6e6' }}></textarea>
                        </div>
                        <button type="submit" className="mt-4 px-6 py-2 bg-[#00e6e6] text-black font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    )
}

export default Contact;

