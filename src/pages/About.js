import React from 'react'
import "../App.css"
import TypeWriter from '../components/TypeWriter.js'
import Profile2 from "./Profile2.js"
import Achievement from './Achievement.js'

function About() {
    const sentences2 = ["Mern Stack Developer!", "freelancer!", "Student!", "Designer!"];
    return (
        <div className='bg-[#122e43] '>
            <h1 className='text-center pt-24 '> <span className="text-2xl lg:text-5xl   tracking-normal  about"> About </span> <span className="text-2xl lg:text-5xl text-[#00e6e6]  tracking-normal about">Me</span></h1>

            <div className="flex flex-col lg:flex-col items-center justify-center gap-5 lg:gap-20">
                <div className='pt-8'>

                    <Profile2 />
                </div>
                <div className="flex flex-col mx-5 justify-center items-center gap-8">
                    <h1 className="text-2xl  lg:text-2xl tracking-wider">Hello! I'm Shiwang Pandey and I'm a <TypeWriter data={sentences2} speed={180} pauseDelay={3000} /> </h1>

                    <p className="text-lg lg:text-2xl  lg:mx-32 text-justify tracking-wider leading-loose		">Welcome! I'm  dedicated MERN stack developer with a passion for crafting seamless and scalable front-end architectures. With a keen eye for detail and a knack for problem-solving, I specialize in delivering modular solutions that breathe life into digital experiences.

                        Freelancing isn't just a job for me; it's a way of life. I thrive in the dynamic world of freelancing, where each project presents a unique challenge and an opportunity to make a meaningful impact. Whether it's building intuitive user interfaces or architecting robust back-end systems, I'm committed to exceeding expectations and bringing visions to life.

                        One of my core principles is a profound respect for time. I understand the value of deadlines and the importance of delivering on time, every time. Rest assured, when you entrust your project to me, you can expect nothing less than punctuality and reliability.

                        But it's not just about meeting deadlines; it's about understanding the story behind every brand and every individual. I believe that great software isn't just functional; it tells a story, resonates with users, and leaves a lasting impression. By delving into the essence of each project, I ensure that every line of code reflects the unique narrative it aims to convey.

                        So, whether you're a startup looking to establish a digital presence or an established enterprise seeking to elevate your online experience, I'm here to turn your vision into reality. Let's collaborate, innovate, and create something extraordinary together.

                        Get in touch, and let's embark on a journey to transform ideas into digital masterpieces!</p>

                </div>
            </div>
            <div className='py-14'>
                <Achievement />
            </div>
        </div>
    )
}

export default About