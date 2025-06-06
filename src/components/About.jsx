import { motion } from "framer-motion";
import { experience, skills } from "../../data/data";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="via-purple-600 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through technology and the skills I've mastered along the
            way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-800"></div>

              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-8 group"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gray-800 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10">
                    {index + 1}
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors">
                    <span className="text-sm text-cyan-400">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <span className="text-blue-400 text-sm">
                      {item.company}
                    </span>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <p className="text-gray-400 mb-8">
              I've worked with a wide range of technologies in the web
              development world. Here are my core competencies:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map(({ name, icon: Icon, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-800 hover:border-cyan-400/30 transition-colors"
                >
                  <Icon className="text-4xl" style={{ color }} />
                  <span className="mt-2 text-sm">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
