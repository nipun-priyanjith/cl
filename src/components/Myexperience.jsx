import React, { useState } from "react";
import { motion } from "framer-motion";

function Myexperience() {
  // Hardcoded YouTube videos & experiences data
  const experiences = [
    {
      _id: "1",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video link
      role: "Content Creator",
      company: "YouTube",
      description: "Sharing coding tutorials, project showcases, and tech insights.",
    },
    {
      _id: "2",
      link: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Replace with actual video link
      role: "Software Engineer",
      company: "Personal Projects",
      description: "Developing full-stack applications and open-source contributions.",
    },
    {
      _id: "3",
      link: "https://www.youtube.com/embed/tgbNymZ7vqY", // Replace with actual video link
      role: "Machine Learning Enthusiast",
      company: "NIBM",
      description: "Working on AI/ML projects in academia and research.",
    },
  ];

  // Work & Project Experience Data
  const workExperience = [
    {
      year: "2025 January - 2025 September",
      title: "Sri Lanka Telecom - DevOps Engineer Intern",
      tasks: ["Firewall Handling", "CI/CD Pipeline Management"],
    },
    {
      year: "2023 January - Present",
      title: "Self-initiated Projects",
      tasks: ["My Portfolio Website", "School Management System"],
    },
    {
      year: "2022 October - Present",
      title: "NIBM Academic Projects",
      tasks: ["Machine Learning Project"],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-mono"
        style={{ color: "#fffce1" }}
      >
        My <span className="text-5xl font-mono" style={{ color: "#FF0000" }}>YouTube</span> Channel
      </motion.h1>

      {/* YouTube Videos Section */}
      <div>
        {visibleExperiences.map((exp) => (
          <div key={exp._id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <iframe
                width="400"
                height="250"
                title={exp._id}
                src={exp.link}
                style={{ borderColor: "#FF0000", borderWidth: "2px", borderStyle: "solid" }}
              />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-2xl font-mono font-semibold" style={{ color: "#fffce1" }}>
                {exp.role} -{" "}
                <span className="text-2xl font-mono" style={{ color: "#FF0000" }}>
                  {exp.company}
                </span>
              </h6>
              <p className="mb-4 font-mono text-neutral-400">{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {experiences.length > 2 && (
        <div className="text-center mt-6">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="px-4 py-2 bg-[#1A1A1A] border border-[#9CFF00] text-[#9CFF00] rounded-lg transition-colors duration-300 hover:border-[#40A4FF] hover:text-[#40A4FF]"
          >
            {showAll ? "Show Less" : "Show More Videos"}
          </button>
        </div>
      )}

      {/* Work & Project Experience Section */}
      <div className="my-16 text-white font-mono">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl"
          style={{ color: "#fffce1" }}
        >
          My Experience
        </motion.h1>
        
        <div className="mt-10">
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold">🔹 {exp.year}</h2>
              <p className="text-neutral-400">📍 {exp.title}</p>
              <ul className="list-disc pl-5 text-neutral-400">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myexperience;
