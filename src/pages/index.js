import { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Testimonials from "@/components/Testimonials";
import useMediaQuery from "../hooks/useMediaQuery";
import FAQs from "../components/FAQs";
import { allSections } from "../../data/data";
// import DesktopHero from "@/components/DesktopHero";
// import Waves from "../ui/Wave";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Section scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = allSections
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Conditionally render hero based on screen size */}
      {/* {isDesktop ? <DesktopHero /> : <Hero />} */}

      <Hero />
      <ProjectSection />
      <About />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />

      {/* <Waves
        lineColor="#ffffff40"
        backgroundColor="#1E2939"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      /> */}
    </div>
  );
};

export default Home;
