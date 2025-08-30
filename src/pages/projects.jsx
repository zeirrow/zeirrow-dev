"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../data/data";
import GlobalHeader from "../components/GlobalHeader";
import Footer from "../components/Footer";
import TabCarousel from "../components/TabCarousel";
import { useState, useMemo } from "react";

const Projects = () => {
  const customTabs = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeTab, setActiveTab] = useState("All");

  // Derive filtered projects whenever activeTab changes
  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter(
      (project) =>
        project.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  return (
    <>
      <GlobalHeader />
      <section id="projects" className="bg-[#101828] overflow-x-hidden">
        <div className=" mx-auto pt-28 px-4 py-16 md:py-24 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-100 text-3xl md:text-4xl font-bold mb-4">
              Discover my work 👀
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on recently.
            </p>
          </motion.div>

          <TabCarousel
            tabs={customTabs}
            onTabChange={setActiveTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
