import React from "react";

const Myexperience = () => {
  const experiences = [
    {
      date: "January 2025 - September 2025",
      title: "Sri Lanka Telecom - DevOps Engineer Intern",
      imageUrl: "https://shalankans.lk/content/uploads/photos/2019/03/shalanka_c3dde961362e9807c27f093218e0cac2.gif", // Image URL here
      details: [
        "Firewall handling",
        "CI/CD pipeline",
      ],
    },
    {
      date: "January 2023 - Present",
      title: "Self Projects",
      imageUrl: "https://th.bing.com/th/id/OIP.9ZO7S-C-KRpCXxgWYIJjRwHaHa?rs=1&pid=ImgDetMain", // Image URL here
      details: [
        "My portfolio project",
        "School management system",
      ],
    },
    {
      date: "October 2022 - Present",
      title: "NIBM Academic Project",
      imageUrl: "https://findit-resources.s3.us-east-2.amazonaws.com/account/profilePictures/1628842127359.jpg", // Image URL here
      details: [
        "ML project",
      ],
    },
  ];

  return (
    <div className="p-6 bg-darkGray min-h-screen text-[#fffce1] font-mono">
      <h1 className="text-3xl font-bold text-center mb-6">My Experience</h1>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-darkGray rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <img src={exp.imageUrl} alt={exp.title} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-[#9CFF00]">{exp.title}</h2>
                <h3 className="text-lg font-medium text-[#40A4FF]">{exp.date}</h3>
              </div>
            </div>
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
