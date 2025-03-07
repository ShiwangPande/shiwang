import React from 'react';

const SkillBar = ({ name, percentage }) => {
  return (
    <li className="mb-6">
      <div className="mb-1 flex justify-between text-base font-medium dark:text-white">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-[#00e6e6] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </li>
  );
};

function Skills() {
  const codingSkills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
    { name: "TypeScript", percentage: 65 },
    { name: "React", percentage: 65 },
    { name: "Next.js", percentage: 60 },
    { name: "MongoDB", percentage: 60 },
    { name: "Express.js", percentage: 55 },
    { name: "Node.js", percentage: 60 },
    { name: "Python", percentage: 55 },
    { name: "Flask", percentage: 50 },
    { name: "C/C++", percentage: 50 },
    { name: "SQL/MySQL", percentage: 55 },
    { name: "Linux", percentage: 60 },
    { name: "Docker", percentage: 55 }
  ];

  const professionalSkills = [
    { name: "Web Development", percentage: 65 },
    { name: "Frontend Development", percentage: 65 },
    { name: "MERN Stack", percentage: 60 },
    { name: "Backend Development", percentage: 55 },
    { name: "Responsive Design", percentage: 70 },
    { name: "Web Design", percentage: 60 },
    { name: "IoT & Embedded Systems", percentage: 50 },
    { name: "Design & Analysis", percentage: 50 },
    { name: "Fusion 360", percentage: 55 },
    { name: "Arduino Uno", percentage: 65 },
    { name: "Raspberry Pi", percentage: 60 },
    { name: "Simulation", percentage: 45 }
  ];

  return (
    <div className="bg-[#122e43] py-20">
      <h1 className="text-center text-3xl lg:text-5xl tracking-normal mb-10 text-white">
        My <span className="text-[#00e6e6]">Skills</span>
      </h1>
      <div className="max-w-screen-xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Coding Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-5 text-white">Coding Skills</h2>
          <div className="p-6 bg-black/10 border border-[#00e6e6] rounded-lg shadow backdrop-blur-lg">
            <ul className="max-h-[450px] overflow-y-auto pr-2">
              {codingSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </ul>
          </div>
        </div>
        {/* Professional Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-5 text-white">Professional Skills</h2>
          <div className="p-6 bg-black/10 border border-[#00e6e6] rounded-lg shadow backdrop-blur-lg">
            <ul className="max-h-[450px] overflow-y-auto pr-2">
              {professionalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;