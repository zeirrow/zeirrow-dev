import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { myInfo } from "../../data/data";

const Footer = () => {
  const [name, ext] = myInfo.website.split(".");

  const contactLinks = [
    { icon: <FaGithub />, url: `https://github.com/${myInfo.contact.github}` },
    { icon: <FaLinkedin />, url: myInfo.contact.linkedIn },
    { icon: <FaTwitter />, url: myInfo.contact.twitter },
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              <span className="font-light">{name}</span>.{ext}
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Crafting exceptional digital experiences
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {contactLinks.map(({ icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${url}`}
                  whileHover={{ y: -3, color: "#06b6d4" }}
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Copyright 2025 {name}.{ext}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
