import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky z-[1000] top-0">
            <nav className="flex justify-between items-center gap-[30px]  sticky top-0 flex-col lg:flex-row z-10 p-8 bg-white bg-opacity-5 backdrop-blur-lg shadow-lg rounded-lg">
                <div className='flex flex-row h-100 w-screen px-5  justify-between'>
                    <div className="text-3xl font-bold">Portfolio</div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="block text-gray-500 focus:outline-none">
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"

                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`lg:flex  ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex gap-12  flex-col lg:flex-row ">
                        <li className="text-xl hover:text-[#00e6e6]">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-xl  hover:text-[#00e6e6]">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-xl hover:text-[#00e6e6]">
                            <Link to="/education">Education</Link>
                        </li>
                        <li className="text-xl hover:text-[#00e6e6]">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="text-xl hover:text-[#00e6e6]">
                            <Link to="/project">Projects</Link>
                        </li>
                        <li className="text-xl  hover:text-[#00e6e6]">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
