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
      imageUrl: "https://3.bp.blogspot.com/_-jZuzvL9Tm8/TRL_JvWaj5I/AAAAAAAAAAw/2wLHpNe6yJU/s1600/xkq4c3.png", // Image URL here
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
            className="mb-6 p-4 bg-darkGray rounded-lg shadow-md relative z-10"
          >
            <div className="flex items-center justify-start mb-2">
              <div className="w-4 h-4 rounded-full bg-[#40A4FF]"></div>
              <div className="flex-1 border-t-2 border-[#40A4FF] h-1"></div>
            </div>
            <h2 className="text-xl font-semibold text-[#40A4FF]">{exp.date}</h2>
            <h3 className="text-lg font-medium text-[#9CFF00] flex items-center">
              <img src={exp.imageUrl} alt={exp.title} className="w-8 h-8 rounded-full mr-3" />
              {exp.title}
            </h3>
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
