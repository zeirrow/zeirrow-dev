"use client";

import { motion } from "framer-motion";
import GlobalHeader from "../components/GlobalHeader";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <GlobalHeader />
      <section id="blog" className="bg-[#101828] min-h-[80dvh] overflow-x-hidden">
        <div className="mx-auto pt-28 px-4 py-16 md:py-24">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-100 text-3xl md:text-4xl font-bold mb-4">
              My Blog ✍️
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and stories. Stay tuned.
            </p>
          </motion.div>

          {/* Grid placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
          >
            <div className="col-span-full">
              <p className="text-gray-400 text-xl font-semibold py-20">
                🚧 Coming Soon!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
