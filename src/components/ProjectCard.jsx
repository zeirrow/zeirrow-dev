"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: (isEven) => ({ opacity: 0, x: isEven ? -100 : 100 }),
  visible: { opacity: 1, x: 0 },
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={isEven}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full md:w-[1000px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8 bg-[#1D2939] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        {/* Left Text */}
        <div className={`lg:w-1/2 ${!isEven ? "lg:order-2" : ""}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="inline-block bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium inline-flex items-center gap-1"
          >
            View Project →
          </a>
        </div>

        {/* Right Image */}
        <div className={`lg:w-1/2 ${!isEven ? "lg:order-1" : ""}`}>
          <div className="relative w-full h-48 lg:h-64 overflow-hidden rounded-lg">
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
