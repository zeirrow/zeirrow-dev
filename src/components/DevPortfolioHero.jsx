import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuTwitter,
  LuDownload,
  LuExternalLink,
} from "react-icons/lu";
import { github, myInfo, projects } from "../../data/data";
import { DiCss3Full, DiHtml5 } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

const yearsOfExperience = new Date().getFullYear() - 2023;
const numOfProjects = projects.length;

const DevPortfolioHero = () => {
  const [imgSrc, setImgSrc] = useState(myInfo.mobImage);
  const [isHovering, setIsHovering] = useState(false);
  const [angle, setAngle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const [firstName, lastName] = myInfo.name.split(" ");
  const { email, linkedIn, twitter } = myInfo.contact;

  // Tech icons data with colors and sizes
  const techIcons = [
    {
      icon: <DiHtml5 size={24} />,
      color: "bg-orange-500",
      size: "w-12 h-12",
      orbitRadius: 120,
    },
    {
      icon: <DiCss3Full size={24} />,
      color: "bg-blue-500",
      size: "w-12 h-12",
      orbitRadius: 140,
    },
    {
      icon: <SiJavascript size={24} />,
      color: "bg-yellow-500",
      size: "w-12 h-12",
      orbitRadius: 160,
      textColor: "text-black",
    },
    {
      icon: <FaReact size={24} />,
      color: "bg-cyan-500",
      size: "w-12 h-12",
      orbitRadius: 180,
    },
    {
      icon: <FaNodeJs size={20} />,
      color: "bg-green-500",
      size: "w-10 h-10",
      orbitRadius: 100,
    },
    {
      icon: <SiTypescript size={20} />,
      color: "bg-purple-500",
      size: "w-10 h-10",
      orbitRadius: 220,
    },
  ];

  // Calculate icon positions based on angle
  const getIconPosition = (index, radius) => {
    const offsetAngle = index * (360 / techIcons.length) + angle;
    const radian = (offsetAngle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gray-900 text-white mt-10 overflow-hidden"
    >
      {/* Hero Section */}

      {/* Orbiting Tech Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {techIcons.map((tech, index) => {
          const { x, y } = getIconPosition(index, tech.orbitRadius);
          return (
            <motion.div
              key={index}
              className={`absolute ${tech.color} ${tech.size} rounded-full flex items-center justify-center shadow-lg ${tech.textColor || "text-white"}`}
              style={{
                x,
                y,
              }}
              animate={{
                x,
                y,
                rotate: 360,
                transition: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                transition: { duration: 0.2 },
              }}
            >
              {tech.icon}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-0 backdrop-blur-[2px] bg-opacity-90 border-b border-gray-800" />
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8 lg:py-16 space-y-8 lg:space-y-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm {lastName} <br />
              <motion.span
                className="text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {firstName}
              </motion.span>
              <motion.span
                className="inline-block ml-2 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Frontend Developer
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg mb-8 leading-relaxed backdrop-blur-md bg-opacity-90 border-b border-gray-800 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build modern, responsive web apps with clean UI and smooth UX
              blending design and code to create experiences that feel
              intuitive, fast, and delightful to use.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="text-gray-400 text-sm">Let's connect:</span>
              <div className="flex space-x-3">
                {[
                  { icon: <LuGithub size={20} />, href: github },
                  { icon: <LuLinkedin size={20} />, href: linkedIn },
                  { icon: <LuMail size={20} />, href: `mailto:${email}` },
                  { icon: <LuTwitter size={20} />, href: twitter },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LuExternalLink size={18} />
                <span>Explore My Projects</span>
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/files/resume.pdf"
                download
                target="_blank"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition-colors"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LuDownload size={18} />
                <span>Download My CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end relative"
            onMouseEnter={() => {
              setImgSrc(myInfo.mobArt);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setImgSrc(myInfo.mobImage);
              setIsHovering(false);
            }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    boxShadow: isHovering
                      ? "0 0 30px rgba(59, 130, 246, 0.6)"
                      : "0 0 15px rgba(59, 130, 246, 0.3)",
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl"
                >
                  <Image
                    src={imgSrc}
                    alt="profile"
                    className="w-full h-full object-cover"
                    fill
                  />
                </motion.div>
              </AnimatePresence>

              {/* Pulsing Rings */}
              {isHovering && (
                <>
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: 1.5,
                      opacity: [0, 0.5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400 rounded-full opacity-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: 1.8,
                      opacity: [0, 0.3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 0.5,
                      },
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          className="px-4 md:px-8 lg:px-16 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <motion.span
              className="text-blue-400"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              <IoStatsChartSharp/>
            </motion.span>
            <h3 className="text-lg font-semibold">Quick Stats:</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                value: `${yearsOfExperience}+`,
                label: "Years Experience",
                color: "text-blue-400",
              },
              {
                value: <JScript />,
                label: "Main Language",
                color: "text-green-50",
              },
              {
                value: `Over ${numOfProjects}`,
                label: "Projects",
                color: "text-purple-400",
              },
              { value: "🟢", label: "Available", color: "text-green-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors cursor-default"
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value === "🟢" ? (
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      {stat.value}
                    </motion.span>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevPortfolioHero;

const JScript = () => {
  return (
    <>
      <span>Java</span>
      <span className="text-black bg-yellow-500 rounded-lg px-0.5">Script</span>
    </>
  );
};
