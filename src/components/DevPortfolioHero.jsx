import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuTwitter,
  LuExternalLink,
} from "react-icons/lu";
import { github, myInfo, projects } from "../../data/data";
import { IoStatsChartSharp } from "react-icons/io5";
import JScript from "./JScript";

const yearsOfExperience = new Date().getFullYear() - 2022;
const [firstName, lastName] = myInfo.name.split(" ");
const numOfProjects = projects.length;
const { email, linkedIn, twitter } = myInfo.contact;

const DevPortfolioHero = () => {
  // Memoize these values since they don't change
  const [imgSrc, setImgSrc] = useState(myInfo.mobImage);
  const [isHovering, setIsHovering] = useState(false);

  // Social links - memoized
  const socialLinks = [
    { icon: <LuGithub size={20} />, href: github },
    { icon: <LuLinkedin size={20} />, href: linkedIn },
    { icon: <LuMail size={20} />, href: `mailto:${email}` },
    { icon: <LuTwitter size={20} />, href: twitter },
  ];

  // Stats data - memoized
  const stats = [
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
  ];

  // Handlers - memoized
  const handleMouseEnter = useCallback(() => {
    setImgSrc(myInfo.mobArt);
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setImgSrc(myInfo.mobImage);
    setIsHovering(false);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gray-900 text-white mt-10 overflow-hidden"
    >
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
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4"
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
              A React Developer
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg mb-8 leading-relaxed backdrop-blur-md bg-opacity-90 border-b border-gray-800"
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
                {socialLinks.map((social, index) => (
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
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition-colors"
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, scale: 0.9 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
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
              <IoStatsChartSharp />
            </motion.span>
            <h3 className="text-lg font-semibold">Quick Stats:</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
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
