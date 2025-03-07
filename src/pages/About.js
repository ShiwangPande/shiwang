import React from "react";
import "../App.css";
import TypeWriter from "../components/TypeWriter.js";
import Profile2 from "./Profile2.js";
import Achievement from "./Achievement.js";

function About() {
  const sentences2 = [
    "Mern Stack Developer!",
    "freelancer!",
    "Student!",
    "Designer!",
  ];
  return (
    <div className="bg-[#122e43] ">
      <h1 className="text-center pt-24 ">
        {" "}
        <span className="text-2xl lg:text-5xl   tracking-normal  about">
          {" "}
          About{" "}
        </span>{" "}
        <span className="text-2xl lg:text-5xl text-[#00e6e6]  tracking-normal about">
          Me
        </span>
      </h1>

      <div className="flex flex-col lg:flex-col items-center justify-center gap-5 lg:gap-20">
        <div className="pt-8">
          <Profile2 />
        </div>
        <div className="flex flex-col mx-5 justify-center items-center gap-8">
          <h1 className="text-2xl  lg:text-2xl tracking-wider">
            Hello! I'm Shiwang Pandey and I'm a{" "}
            <TypeWriter data={sentences2} speed={180} pauseDelay={3000} />{" "}
          </h1>

          <p className="text-lg lg:text-2xl  lg:mx-32 text-justify tracking-wider leading-loose		">
            I am a Mechanical Engineering student with a growing interest in
            technology, particularly in the fields of web development and IoT.
            My academic background has equipped me with strong analytical and
            problem-solving skills, which I have been complementing with
            self-directed learning in software development. I have been
            developing my skills in technologies such as Next.js, the MERN
            stack, Python, and C++, aiming to build a solid understanding of
            both front-end and back-end development. Although I am still at the
            beginning of my professional journey, I am enthusiastic about
            applying my interdisciplinary knowledge to practical projects and
            learning in a real-world setting. My approach is characterized by a
            willingness to adapt and a commitment to continuous improvement. I
            enjoy working in collaborative environments where I can contribute,
            learn from experienced professionals, and gradually build my
            expertise. As I seek entry-level opportunities, my focus remains on
            steadily developing my skills while supporting the goals of a
            forward-thinking team.
          </p>
        </div>
      </div>
      <div className="py-14">
        <Achievement />
      </div>
    </div>
  );
}

export default About;
