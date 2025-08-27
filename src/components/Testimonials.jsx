import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { testimonials } from "../../data/data";
import Link from "next/link";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#0a0f1a]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Client Love Notes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it—here's what collaborators say about
            working with me
          </p>
        </motion.div>

        {/* Glass overlay when testimonials are empty */}
        {testimonials.length === 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-md rounded-2xl">
            <div className="text-center px-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Client feedback coming soon 💬
              </h3>
              <p className="text-gray-300">
                Hang tight! Real testimonials will be shared after launch.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl ${testimonial.color} border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 h-full`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Client work image that appears on hover */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: [0, 3, -2, 0], // Playful wiggle
                      x: [0, 5, -5, 0],
                      y: [0, -10, 0],
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.6,
                      ease: "backOut",
                    }}
                    className="absolute -top-8 -right-8 w-48 h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20"
                  >
                    <Image
                      src={testimonial.image}
                      fill
                      alt={`Work for ${testimonial.name}`}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{testimonial.emoji}</span>
                <p className="text-gray-300 text-lg italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-cyan-500/10" />
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">
            Ready to create something amazing?
          </p>
          <Link href="#contact" passHref>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg shadow-lg"
            >
              Let's Work Together
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
