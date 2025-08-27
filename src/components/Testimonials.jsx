
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../../data/data";
import Link from "next/link";
import TestimonyCard from "./TestimonyCard";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={24}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonyCard
                testimonial={testimonial}
                index={index}
                setHoveredIndex={setHoveredIndex}
                hoveredIndex={hoveredIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>

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
