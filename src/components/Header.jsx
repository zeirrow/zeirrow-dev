import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { myInfo } from "../../data/data";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Link from "next/link";

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useOutsideClick(() => setIsMenuOpen(false));
  const [name, ext] = myInfo.website.split(".");

  // Close menu when clicking on a nav item
  const handleNavClick = () => {
    setIsMenuOpen(false);
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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[100000] ${
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["home", "projects", "about", "contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`capitalize text-sm font-medium transition-colors ${
                activeSection === item
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
            aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button> */}
          <Link href="#contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Hire Me
            </motion.span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              ref={ref}
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {["home", "projects", "about", "contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={handleNavClick}
                    className={`capitalize py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "bg-gray-800 text-cyan-400"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  {/* <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      handleNavClick();
                    }}
                    className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                    aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
                  >
                    {darkMode ? "☀️" : "🌙"}
                  </button> */}
                  <Link href="#contact">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
                      onClick={handleNavClick}
                    >
                      Hire Me
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
