import React from "react";

const Myexperience = () => {
  const experiences = [
    {
      date: "January 2025 - September 2025",
      title: "Sri Lanka Telecom - DevOps Engineer Intern",
      details: [
        "Firewall handling",
        "CI/CD pipeline",
      ],
    },
    {
      date: "January 2023 - Present",
      title: "Self Projects",
      details: [
        "My portfolio project",
        "School management system",
      ],
    },
    {
      date: "October 2022 - Present",
      title: "NIBM Academic Project",
      details: [
        "ML project",
      ],
    },
  ];

  return (
    <div className="p-6 bg-darkGray min-h-screen text-[#fffce1]">
      <h1 className="text-3xl font-bold text-center mb-6">My Experience</h1>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 w-px h-full bg-[#9CFF00]"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-white rounded-lg shadow-md relative z-10"
          >
            <div className="flex items-center justify-start mb-2">
              <div className="w-4 h-4 rounded-full bg-[#40A4FF]"></div>
              <div className="flex-1 border-t-2 border-[#40A4FF] h-1"></div>
            </div>
            <h2 className="text-xl font-semibold text-[#40A4FF]">{exp.date}</h2>
            <h3 className="text-lg font-medium text-[#9CFF00]">{exp.title}</h3>
            <ul className="list-disc list-inside mt-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-[#fffce1]">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myexperience;
