import React from "react";

const Myexperience = () => {
  const experiences = [
    {
      date: "January 2025 - Present",
      title: "Sri Lanka Telecom - DevOps Engineer Intern",
      imageUrl: "https://shalankans.lk/content/uploads/photos/2019/03/shalanka_c3dde961362e9807c27f093218e0cac2.gif",
      details: ["Firewall handling", "CI/CD pipeline"],
      highlight: true,
    },
    {
      date: "January 2023 - Present",
      title: "Self Projects",
      imageUrl: "https://th.bing.com/th/id/OIP.9ZO7S-C-KRpCXxgWYIJjRwHaHa?rs=1&pid=ImgDetMain",
      details: ["My portfolio project", "School management system"],
    },
    {
      date: "October 2022 - Present",
      title: "NIBM Academic Project",
      imageUrl: "https://findit-resources.s3.us-east-2.amazonaws.com/account/profilePictures/1628842127359.jpg",
      details: ["ML project"],
    },
  ];

  return (
    <div className="p-6 sm:p-8 bg-darkGray min-h-screen text-[#fffce1] font-mono flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">My Experience</h1>
      <div className="relative w-full max-w-3xl">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start mb-10 sm:mb-14">
            {/* Timeline Circle and Line */}
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#9CFF00] rounded-full text-base sm:text-lg font-bold text-black shadow-md z-10">
                {index + 1}
              </div>

              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute top-full w-px h-[290px] sm:h-[260px] bg-[#9CFF00]"></div>
              )}
            </div>

            {/* Experience Card */}
            <div
              className={`ml-6 sm:ml-8 p-4 sm:p-6 bg-[#1A1A1A] rounded-xl sm:rounded-2xl shadow-md w-full transition duration-300 ${
                exp.highlight ? "border-2 border-[#40A4FF] sm:scale-105" : ""
              }`}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#9CFF00] shadow-md"
                />
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#9CFF00]">{exp.title}</h2>
                  <h3 className="text-md sm:text-lg font-medium text-[#40A4FF]">{exp.date}</h3>
                </div>
              </div>
              <ul className="list-none flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-[#fffce1] text-md sm:text-lg font-light flex items-center">
                    <span className="text-[#9CFF00] mr-2">➤</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myexperience;
