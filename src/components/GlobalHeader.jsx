import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { myInfo } from "../../data/data";
import { usePathname } from "next/navigation";

const GlobalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, ext] = myInfo.website.split(".");
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-90 border-b border-gray-800"
          : "backdrop-blur-sm bg-opacity-80"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent uppercase"
          >
            <span className="font-light">{name}</span>.{ext}
          </motion.div>
        </Link>

        {/* Hire Me Button */}
        <Link href="/#contact" onClick={handleClick}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Hire Me
          </motion.span>
        </Link>
      </div>
    </header>
  );
};

export default GlobalHeader;
