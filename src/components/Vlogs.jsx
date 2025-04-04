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
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-4xl font-mono text-[#fffce1] mb-8">My Published Articles</h1>
      <div className="w-full max-w-2xl grid grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {article.icon}
            <div>
              <h2 className="text-lg font-mono text-[#9CFF00]">{article.title}</h2>
              <p className="text-sm font-mono text-gray-400">Published on {article.platform}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
