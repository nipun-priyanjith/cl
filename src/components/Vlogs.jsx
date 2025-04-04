import { motion } from "framer-motion";
import { FaReddit, FaMedium, FaLinkedin } from "react-icons/fa";

const articles = [
  {
    title: "Mastering Git Version Control",
    platform: "Reddit",
    link: "https://www.reddit.com/r/programming/comments/...",
    icon: <FaReddit className="text-[#40A4FF] text-3xl" />,
  },
  {
    title: "Building a Malware Detection System in Python",
    platform: "Medium",
    link: "https://medium.com/@yourusername/building...",
    icon: <FaMedium className="text-[#9CFF00] text-3xl" />,
  },
  {
    title: "How to Land a Software Engineering Internship",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/pulse/how-to-land...",
    icon: <FaLinkedin className="text-[#40A4FF] text-3xl" />,
  },
];

export default function Vlogs() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-mono text-[#40A4FF] mb-8">My Published Articles</h1>
      <div className="w-full max-w-2xl space-y-6">
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {article.icon}
            <div>
              <h2 className="text-lg font-mono text-[#9CFF00]">{article.title}</h2>
              <p className="text-sm font-mono text-gray-400">Published on {article.platform}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
