"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../data/data";
import GlobalHeader from "../components/GlobalHeader";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
    <GlobalHeader />
      <section id="projects" className="bg-[#101828]">
        <div className="container mx-auto px-4 py-16 md:py-24">
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

          <div className="flex flex-col gap-8 md:gap-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={project.id}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
