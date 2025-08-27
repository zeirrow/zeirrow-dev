import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TestimonyCard = ({ testimonial, index, setHoveredIndex, hoveredIndex }) => {
  return (
    <motion.div
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
  );
};

export default TestimonyCard;

