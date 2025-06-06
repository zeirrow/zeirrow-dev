import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/data";
import Link from "next/link";

const ProjectSection = () => {
  // Ensure projects data is available
  if (!projects || projects.length === 0) {
    return (
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No Projects Found
          </h2>
          <p className="text-gray-400">
            It seems there are no projects to display at the moment.
          </p>
        </div>
      </section>
    );
  }
  // Render only 3 projects
  const limitedProjects = projects.slice(0, 3);
  return (
    <section id="projects" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions built with modern technologies and best
            practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden border border-gray-800 bg-gray-800/30 hover:bg-gray-800/50 transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.screenshot}
                    alt="screenshot of the site"
                    className="text-gray-500 text-lg"
                    onError={(e) => {
                      e.target.src = "/images/fallback-image.png";
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
                      }}
                      href={project.github}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors"
                      target="_blank"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)",
                      }}
                      href={project.live}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors"
                      target="_blank"
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
        >
          <Link
            href="/projects">
            <span className="text-cyan-400 hover:underline">
              View All Projects
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
