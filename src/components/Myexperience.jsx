import React from "react";

const MyExperience = () => {
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">My Experience</h1>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{exp.date}</h2>
            <h3 className="text-lg font-medium text-blue-600">{exp.title}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
