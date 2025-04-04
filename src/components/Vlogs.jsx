import { FaReddit, FaMedium, FaLinkedin } from "react-icons/fa";

const articles = [
  {
    title: "Mastering Git Version Control",
    platform: "Reddit",
    link: "https://www.reddit.com/r/programming/comments/...",
    icon: <FaReddit className="text-[#FF4500] text-3xl" />, 
    description: "A deep dive into using Git effectively for version control and collaboration.",
    image: "https://th.bing.com/th/id/OIP.KOgu6qiko5ct4HlbVXr3HAHaD9?rs=1&pid=ImgDetMain"
  },
  {
    title: "Building a Malware Detection System in Python",
    platform: "Medium",
    link: "https://medium.com/@yourusername/building...",
    icon: <FaMedium className="text-[#000000] text-3xl" />, 
    description: "Step-by-step guide on developing a malware detection system using machine learning.",
    image: "https://th.bing.com/th/id/OIP.nuNA-Oo4Up98qI5Wc_PulAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain"
  },
  {
    title: "How to Land a Software Engineering Internship",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/pulse/how-to-land...",
    icon: <FaLinkedin className="text-[#0077B5] text-3xl" />, 
    description: "Essential tips and strategies to secure a software engineering internship.",
    image: "https://th.bing.com/th/id/R.ece71c13d5169f86feecf697b4acdfbf?rik=oHn4KYyf8FH8VA&riu=http%3a%2f%2fcdn3.whatculture.com%2fwp-content%2fuploads%2f2015%2f05%2fR1jzAvZI.jpg&ehk=lNuBvGYRfV44%2fiPREF3fwze%2bIpVtNOLMLoeqdCbnR6o%3d&risl=&pid=ImgRaw&r=0"
  },
];

export default function Vlogs() {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-4xl font-mono text-[#fffce1] mb-8">My Published Articles</h1>
      <div className="w-full max-w-3xl grid grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
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
    </div>
  );
}
