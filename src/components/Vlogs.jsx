import { FaReddit, FaMedium, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const allArticles = [
  {
    title: "🐍 Did You Know? Exploring Python's Lesser-Known Features 🐍",
    platform: "Reddit",
    link: "https://www.reddit.com/r/learnpython/comments/1cki40i/did_you_know_exploring_pythons_lesserknown/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
    icon: <FaReddit className="text-[#FF4500] text-3xl" />, 
    description: "Python is full of surprises! While you might be familiar with its popular libraries and syntax, there are some lesser-known features that can make your coding journey even more delightful. Here are a couple of Python facts you might not know (maybe you know 🌼):",
    image: "https://res.cloudinary.com/teepublic/image/private/s--lwodOF8N--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1597850228/production/designs/13217786_0.jpg"
  },
  // {
  //   title: "Building a Malware Detection System in Python",
  //   platform: "Medium",
  //   link: "https://medium.com/@yourusername/building...",
  //   icon: <FaMedium className="text-[#000000] text-3xl" />, 
  //   description: "Step-by-step guide on developing a malware detection system using machine learning.",
  //   image: "https://th.bing.com/th/id/R.ece71c13d5169f86feecf697b4acdfbf?rik=oHn4KYyf8FH8VA&riu=http%3a%2f%2fcdn3.whatculture.com%2fwp-content%2fuploads%2f2015%2f05%2fR1jzAvZI.jpg&ehk=lNuBvGYRfV44%2fiPREF3fwze%2bIpVtNOLMLoeqdCbnR6o%3d&risl=&pid=ImgRaw&r=0"
  // },
  {
    title: "🛠️ The Unsung Heroes of Software Engineering: Bug Fixing and Testing 🛠️",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/posts/nipun-priyanjith-06a84a28a_softwareengineering-bugfixing-testing-activity-7197413037710925824-lvBg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY_h9IBsDslZGPQdf-tmbzVkqzkF2waPXg",
    icon: <FaLinkedin className="text-[#0077B5] text-3xl" />, 
    description: "As software engineers, we often find ourselves most excited about building new features, designing innovative systems, and writing elegant code. However, two critical aspects of our work sometimes don’t get the attention they deserve: bug fixing and testing.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFhhN8BtZ60FQ/feedshare-shrink_800/feedshare-shrink_800/0/1715996987776?e=1746662400&v=beta&t=um7ITe_BaEt25pGT8b7Q4rNm3GLSgrR99BBqA9B1pOQ"
  }
  // {
  //   title: "The Importance of Code Reviews in Software Development",
  //   platform: "Medium",
  //   link: "https://medium.com/@yourusername/code-reviews...",
  //   icon: <FaMedium className="text-[#000000] text-3xl" />, 
  //   description: "Why code reviews are crucial for maintaining code quality and team collaboration.",
  //   image: "https://th.bing.com/th/id/OIP.KOgu6qiko5ct4HlbVXr3HAHaD9?rs=1&pid=ImgDetMain"
  // }
];
export default function Vlogs() {
  const [visibleArticles, setVisibleArticles] = useState(2);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-4xl font-mono text-[#fffce1] mb-8">Published Articles</h1>
      <div className="w-full max-w-3xl grid grid-cols-2 gap-6">
        {allArticles.slice(0, visibleArticles).map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#9CFF00]"
          >
            <img src={article.image} alt={article.title} className="w-full h-32 object-cover rounded-lg" />
            {article.icon}
            <div className="text-center">
              <h2 className="text-lg font-mono text-[#9CFF00]">{article.title}</h2>
              <p className="text-sm font-mono text-gray-400">Published on {article.platform}</p>
              <p className="text-sm font-mono text-gray-300 mt-2">{article.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        {visibleArticles < allArticles.length && (
          <button
            onClick={() => setVisibleArticles(allArticles.length)}
            className="px-6 py-2 font-mono bg-darkGray text-[#9CFF00] border-2 border-[#9CFF00] rounded-lg hover:text-[#40A4FF] hover:border-[#40A4FF] transition"
          >
            Show More Articles
          </button>
        )}
        {visibleArticles > 2 && (
          <button
            onClick={() => setVisibleArticles(2)}
            className="px-6 py-2 font-mono bg-darkGray text-[#9CFF00] border-2 border-[#9CFF00] rounded-lg hover:text-[#40A4FF] hover:border-[#40A4FF] transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

