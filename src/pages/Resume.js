import React from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Resume() {
  const handleDownload = () => {
    const resumeURL = "/assets/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "ShiwangPandey_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillsData = [
    { title: "Programming Languages", skills: "C++, Python, C, Kotlin, JavaScript, HTML, CSS" },
    { title: "Frontend Development", skills: "React.js, Next.js, Tailwind CSS, Bootstrap" },
    { title: "Backend Development", skills: "Node.js, Express.js, Prisma, Mongoose" },
    { title: "Databases", skills: "MongoDB, PostgreSQL" },
    { title: "Cloud & DevOps", skills: "AWS (EC2, S3, CloudFront, Certificate Manager), Nginx, Linux" },
    { title: "Machine Learning", skills: "Python (Pandas, NumPy, Scikit-learn)" },
    { title: "Mechanical Design Tools", skills: "Fusion 360, SolidWorks, ANSYS" },
    { title: "Graphic Design", skills: "Photoshop, Figma, Canva" },
  ];

  const positions = [
    {
      title: "Vice President & Web Developer | MESA, GCOEN",
      date: "Sep 2022 – Aug 2024",
      roles: [
        "Vice President (Sep 2023 – Aug 2024): Led a team of 100+ members and organized a tech fest with 3,000+ participants.",
        "Web Developer (Sep 2022 – Sep 2023): Designed and developed the official website for MESA."
      ]
    },
    {
      title: "Executive Body & Financial Director | Rotaract Club, GCOEN",
      date: "Jun 2022 – Jun 2024",
      roles: [
        "Executi ve Body (Jul 2023 – Jun 2024): Coordinated club acti viti es and helped lead community outreach programs.",
        "Financial Director (Jun 2022 – Jul 2023): Managed financial operati ons, budgeti ng, and fund allocati on for the club's events and acti viti es."
      ]
    },
    {
      title: "TPO Coordinator | Training and Placement Office, GCOEN",
      date: "Apr 2023 – Jan 2024",
      roles: [
        "Coordinated placement-related acti viti es, liaised with companies, and assisted in organizing recruitment drives for students."
      ]
    },
    {
      title: "Technical Lead & Tech Team Member | Google Developer Student Club (GDSC), GCOEN",
      date: "Aug 2022 – Sep 2023",
      roles: [
        "Technical Lead (Aug 2023 – Sep 2023): Led technical initi ati ves, conducted workshops on Web Development, and mentored students on various technologies.",
        "Tech Team Member (Aug 2022 – Aug 2023): Assisted in organizing coding events and contributed to technical aspects of the club's projects."
      ]
    },
    {
      title: "Technical Co-Head | Mechanical Engineering Department, GCOEN",
      date: "Oct 2022 – Apr 2023",
      roles: [
        "Led technical projects and workshops for the department, focusing on developing technical skills among students."
      ]
    },
    // Add more positions...
  ]

  const experienceData = [
    {
      title: "Freelanced | Web Developer",
      date: "March 8, 2024",
      description: "Built Vegan Hub website using React.js, Tailwind CSS, Express.js, and MySQL.",
      project: { name: "Vegan Hub", link: "https://veganhub.shiwang.tech/" },
    },
    {
      title: "Ekaansh Foundation | Freelanced Web Developer",
      date: "May 26, 2023 - June 3, 2023",
      description: "Developed a PWA using React.js and Tailwind CSS.",
      project: { name: "Kaal Sarp Dosh Puja Mahakal", link: "https://kaalsarpdoshpujamahakal.vercel.app/" },
    },
    {
      title: "Txon | Web Design Intern",
      date: "March 3, 2023",
      description: "Created HTML, CSS, and JS tutorial websites.",
      project: { name: "Web Development Tutorial | GitHub", link: "https://website-tutorial.vercel.app/" },
    },
    {
      title: "CodeClause | AI Intern",
      date: "April 1, 2023",
      description: "Developed House Price Prediction and Gold Price Prediction apps.",
      project: { name: "House Price Prediction | Gold Price Prediction", link: "https://github.com/ShiwangPande/house-price-prediction" },
    },
    {
        title: "Oasis Infobyte | Full Stack Developer Intern ",
        date: "April 1, 2023",
        description: "Created a Pizza Delivery App.",
      project: { name: "Pizza Delivery App", link: "https://github.com/ShiwangPande/oasis-inforbyte-app" },
    },
    {
        title: "OrbitSys Consultancy Pvt. Ltd. | Soft ware Intern ",
        date: "June 1, 2024 - July 30, 2024",
        description: "Developed a website, mobile app, and PGP encrypti on using Python and Linux.",
        certificate: { name: "OrbitSys Consultancy Pvt. Ltd.", link: "https://www.linkedin.com/posts/shiwang-pandey_internship-softwareintern-orbitsys-activity-7224746955157987328--sWU?utm_source=share&utm_medium=member_desktop" },
    },
    {
        title: "Cisco AICTE Virtual Internship | Cybersecurity Intern ",
        date: "May - July 2024",
        description: "Completed Cybersecurity internship.",
        certificate: { name: "Cisco AICTE Virtual Internship", link: "https://www.linkedin.com/posts/shiwang-pandey_cisco-aicte-virtual-internship-program-2024-activity-7241395555564670976-mf5t?utm_source=share&utm_medium=member_desktop" },
    },
  ];

  const academicProjects = [
    {
      title: "Model Rocket Project (Final Year, 2024)",
      objective: "Developed a model rocket designed to reach an altitude of 1 km, equipped with cameras, sensors, and telemetry systems for pressure, acceleration, and velocity measurements.",
      technologies: "Raspberry Pi, Arduino, Python, Fusion 360, SolidWorks, Sensors (IMU, Pressure, Temperature), LoRaWAN, PGP Encryption",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 text-black bg-gray-50 min-h-screen">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-12 animate-fadeIn">
      <div className="w-full md:w-auto mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform">
          Shiwang Pandey
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          shiwangpande1@gmail.com | (+91) 8459795840
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/ShiwangPande"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all transform hover:-translate-y-1"
          >
            <FaGithub className="text-xl" /> <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/shiwang-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all transform hover:-translate-y-1"
          >
            <FaLinkedin className="text-xl" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="group bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-3 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
      >
        <span className="flex items-center gap-3">
          <FaDownload className="group-hover:animate-bounce" /> Download Resume
        </span>
      </button>
    </div>

    {/* Skills Section */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        SKILLS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-100 hover:bg-white hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">{item.skills}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Experience Section */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        EXPERIENCE
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-600 before:to-blue-400 hover:before:w-2 transition-all"
          >
            <div className="p-5 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                <h3 className="font-bold text-base md:text-lg">{exp.title}</h3>
                <span className="text-gray-600 text-xs md:text-sm">{exp.date}</span>
              </div>
              <p className="text-gray-700 mb-2 text-sm md:text-base">{exp.description}</p>
              {exp.project && exp.project.link && (
                <a
                  href={exp.project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Project: {exp.project.name} <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Academic Projects Section */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        ACADEMIC PROJECTS
      </h2>
      {academicProjects.map((project, index) => (
        <div key={index} className="p-5 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all mb-6">
          <h3 className="font-semibold text-lg md:text-xl">{project.title}</h3>
          <p className="font-semibold mt-2 text-sm md:text-base">{project.objective}</p>
          <div className="mt-4">
            <h4 className="font-semibold">Technologies Used:</h4>
            <p className="text-gray-700 text-sm md:text-base">{project.technologies}</p>
          </div>
        </div>
      ))}
    </section>

    {/* Positions Section */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">
        POSITIONS OF RESPONSIBILITY
      </h2>
      <div className="space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="group p-5 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <h3 className="font-semibold text-sm md:text-base">{position.title}</h3>
              <span className="text-gray-600 text-xs md:text-sm">{position.date}</span>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700 text-sm md:text-base">
              {position.roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
}

export default Resume;
