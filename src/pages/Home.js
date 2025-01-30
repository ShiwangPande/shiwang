import React from "react";
import Profile from "./Profile";
import { Button } from "@nextui-org/react";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import x from "./x.svg";
import Profile2 from "./Profile2.js"
import TypeWriter from "../components/TypeWriter";
import MyJourney from "./MyJourney.js";
import { useNavigate } from 'react-router-dom';
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Achievement from "./Achievement.js";
function Home() {
    const sentences = ["Mern Stack Developer!", "freelancer!", "Student!", "Designer!"];
    const sentences2 = ["Mern Stack Developer!", "freelancer!", "Student!", "Designer!"];
    const navigate = useNavigate();
    function handleClick() {
        navigate('/about');
    }
    const router = useNavigate();
    const url = 'https://res.cloudinary.com/dfgbr3v7a/image/upload/'

    const projects = [
        { href: "https://echowave.shiwang.tech/", src: `${url}v1738204644/c927969f-f26c-4390-af57-8a1df1959a34.png`, alt: "echowave" },
        { href: "https://clashdeckpro.shiwang.tech/", src: `${url}v1738204012/132d3ce4-396c-43c1-b159-4828fe3ca93f.png`, alt: "clashdeckpro" },
        { href: "https://vakyagen.vercel.app/", src: `${url}v1738204537/d4516ca3-79aa-4a5e-9eca-8fafa91db218.png`, alt: "vakyagen" },
        { href: "https://kartmatch.in/", src: `${url}v1738202723/c35cc818-6a75-4f58-ad7b-07b1d3dead38.png`, alt: "Kartmatch" },
    ];

    const handleShowMore = () => {
        router('/project');
    };
    function download() {
        window.open("https://drive.google.com/file/d/1W38cjtg4JWRvS9d5JhE0fq5HvfbXz8ob/view?usp=sharing")
    }
    function contact() {
        window.open('https://www.linkedin.com/in/shiwang-pandey/');
    }

    return (
        <div className="overflow-hidden	 ">

            <div className="flex  h-[80vh] flex-col lg:flex-row	items-center justify-center  lg:gap-20 ">
                <Profile className="overflow-hidden	" />
                <div className="flex flex-col  gap-5 mx-10 lg:gap-8">
                    <h1 className="text-white flex-col flex justify-center items-center gap-1 lg:items-start lg:gap-3  z-10">
                        <span className="text-lg lg:text-3xl tracking-wider "> Hello, It's Me </span > <span className="text-2xl lg:text-5xl tracking-tracking-wider name font-sans"> Shiwang Pandey </span> <span className="text-2xl lg:text-5xl tracking-normal stack"> And I'm a <TypeWriter data={sentences} speed={180} pauseDelay={3000} /> </span>
                    </h1>
                    <div className="flex flex-row gap-7  justify-center lg:justify-normal  items-center  lg:items-start">
                        <a href="https://www.linkedin.com/in/shiwang-pandey/" className="text-xl relative z-10  hover:scale-105" color="secondary" variant="ghost">
                            <img className="w-7 h-7 relative z-10" src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/ShiwangPande" className="text-xl" color="primary" variant="ghost">
                            <img className="w-7 h-7 relative z-10 hover:scale-105" src={github} alt="" />
                        </a>
                        <a href="https://x.com/Shiwang__Pandey" className="text-xl" color="primary" variant="ghost">
                            <img className="w-7 h-7 relative z-10 hover:scale-105" src={x} alt="" />
                        </a>
                    </div>
                    <div className="flex flex-row lg:gap-5 gap-3 items-center  lg:items-start">
                        <Button onClick={navigate('resume')} className="text-xl text-black font-semibold bg-[#00e6e6] tracking-wider rounded-3xl p-6  border-3 border-[#033333] hover:bg-white hover:text-black hover:font-bolder" color="default" variant="ghost">
                            Download  CV
                        </Button>
                        <Button onClick={contact} className="text-xl text-black font-semibold bg-[#00e6e6] tracking-wider rounded-3xl p-6  border-3 border-[#033333] hover:bg-white hover:text-black hover:font-bolder" color="default" variant="ghost" >
                            Hire Me
                        </Button>

                    </div>


                </div>
            </div>
            <div className="my-14 lg:my-14">
                <div className='bg-[#122e43] '>
                    <h1 className='text-center pt-10  lg:pt-16 '> <span className="text-3xl lg:text-5xl   tracking-normal  about"> About </span> <span className="text-3xl lg:text-5xl text-[#00e6e6]  tracking-normal about">Me</span></h1>

                    <div className="flex flex-col lg:flex-col mb-10 items-center justify-center gap-5 lg:gap-10">
                        <div className='pt-5 lg:pt-8'>

                            <Profile2 />
                        </div>
                        <div className="flex flex-col justify-center mx-5 items-center gap-5 lg:gap-5">
                            <h1 className="text-2xl  lg:text-2xl tracking-wider">Hello! I'm Shiwang Pandey and I'm a <TypeWriter data={sentences2} speed={180} pauseDelay={3000} /> </h1>

                            <p className="text-lg lg:text-2xl lg:mx-32 text-justify  lg:text-center tracking-wider"> I'am known for crafting modular and scalable solutions. With a passion for code and a penchant for problem-solving, I excel in the realm of freelancing. From architecting robust back-end systems to creating seamless user experiences, I'm committed to delivering exceptional results on time, every time. Let's collaborate and bring your projects to life!</p>
                            <Button onClick={handleClick} className="text-xl text-black font-semibold bg-[#00e6e6] tracking-wider rounded-3xl p-6  border-3 border-[#033333] hover:bg-white hover:text-black hover:font-bolder" color="default" variant="ghost">
                                Read More
                            </Button>
                        </div>
                    </div>
                    <Achievement />
                </div>
            </div>
            <MyJourney />
            <Skills />
            <div className=''>
                <h1 className='text-center pt-10 '>
                    <span className="text-3xl lg:text-5xl tracking-normal about"> My </span>
                    <span className="text-3xl lg:text-5xl text-[#00e6e6] tracking-normal about">Projects</span>
                </h1>
                <div className="grid grid-cols-1 mx-4 mt-14 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <a href={project.href}>
                                <img className="h-auto max-w-full rounded-lg" src={project.src} alt={project.alt} />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center my-8">
                    <button className="px-4 py-2 bg-[#00e6e6] text-black rounded" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Home;
