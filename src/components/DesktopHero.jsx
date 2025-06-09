import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { myInfo } from "../../data/data";
import { useState } from "react";
import BlurText from "../ui/buildKeyframes";
import Link from "next/link";
import ProfileCard from "./ProfileCardComponent";

const DesktopHero = () => {
  const [imgSrc, setImgSrc] = useState(myInfo.image);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0"
    >
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left py-11 pl-20 z-[100000] bg-[#101828]/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BlurText
              text={myInfo.name}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
          >
            <span className="text-cyan-400">React</span> Developer &{" "}
            <span className="text-blue-400">Specialist</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium flex items-center gap-2"
              href="/files/resume.pdf"
              download
              target="_blank"
            >
              <FiDownload /> Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-md border border-cyan-400/30 bg-gray-800/50 text-cyan-400 font-medium hover:bg-gray-800 transition-colors"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Profile card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center z-[100000]"
        >
          <div
            onMouseEnter={() => setImgSrc(myInfo.art)}
            onMouseLeave={() => setImgSrc(myInfo.image)}
          >
            <ProfileCard
              name={myInfo.name}
              title="Software Engineer"
              handle="zeirrow"
              status="Online"
              contactText="Contact Me"
              avatarUrl={imgSrc}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => scrollToSection("contact")}
            />
          </div>
        </motion.div>

        <Link href="#projects" aria-label="Scroll to Projects">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-8 h-8 border-b-2 border-r-2 border-cyan-400 rotate-45"></div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default DesktopHero;