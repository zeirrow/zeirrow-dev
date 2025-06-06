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
      className="w-full md:w-[1000px] mx-auto relative"
    >
      {/* Animated Neon Border */}
      <div className="absolute -inset-0.5 rounded-lg overflow-hidden z-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#ff00d9_25%,#00f2ff_50%,#ff00d9_75%,#00f2ff_100%)] bg-[length:200%_200%] animate-spin-gradient opacity-30" />
        <div className="absolute inset-[1px] bg-[#1D2939] rounded-[7px] z-10" />
      </div>

      {/* Shooting Stars Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: Math.random() * 100 }}
            animate={{
              x: "100vw",
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        ))}
      </div>

      {/* Main Card Content */}
      <div className="flex flex-col lg:flex-row gap-8 bg-[#1D2939]/90 rounded-lg p-6 relative z-20 backdrop-blur-sm">
        {/* Left Text */}
        <div className={`lg:w-1/2 ${!isEven ? "lg:order-2" : ""}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            {project.title}
          </h3>
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
          <div className="relative w-full h-48 lg:h-64 overflow-hidden rounded-lg border border-gray-700/50">
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
