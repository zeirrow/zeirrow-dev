"use client";
import { motion } from "framer-motion";
import { googleReviews } from "../../data/data";
import Link from "next/link";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import GoogleReviewCard from "./GoogleReviews";
import { useEffect, useState } from "react";
import GoogleReviewCardSkeleton from "./GoogleReviewCardSkeleton";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/testimonials");
        const data = await response.json();

        setReviews(data.data || []); // ✅ pick the array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
// Calculate average rating (rounded to 1 decimal place)
const avgRating =
  reviews && reviews.length > 0
    ? (
        reviews.reduce((sum, r) => sum + Number(r.Rating || 0), 0) /
        reviews.length
      ).toFixed(1)
    : 0;

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#0a0f1a]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />

      {/* <div className="max-w-7xl mx-auto relative z-10"> */}
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
          Hear directly from clients who trusted me with their projects. These
          are real reviews left on Google - your satisfaction is my priority.
        </p>
      </motion.div>

      {/* Enhanced Google Reviews Section */}
      <section className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-lg"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left column - Enhanced */}
            <div className="lg:col-span-4 space-y-6 md:space-y-7 lg:sticky">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                  </svg>
                  Trusted by Clients
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Client{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Reviews
                  </span>
                </h2>

                {/* Stars with rating count */}
<div className="flex flex-col gap-2">
  <div className="flex items-center gap-1">
    {/* Stars */}
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-xl md:text-2xl ${
          i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ))}

    {/* Average number */}
    <span className="ml-2 text-white font-semibold text-lg">
      {avgRating}
    </span>
  </div>

  {/* Review count */}
  <p className="text-gray-400 text-sm">
    Based on {reviews?.length || 0} reviews
  </p>
</div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfePFRNXNtD101VWRL5w52n36IqyOA3l-qtW33B7KDAMtClqQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center group font-medium text-white bg-cyan-600 hover:bg-cyan-500 px-5 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Leave a Review</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column - Enhanced */}
            <div className="relative min-h-[300px] lg:col-span-8 min-w-0">
              {/* Glass overlay when testimonials are empty */}
              {loading ? (
                // Show skeletons while loading
                <div className="flex gap-6">
                  <GoogleReviewCardSkeleton />
                  <GoogleReviewCardSkeleton />
                  <GoogleReviewCardSkeleton />
                </div>
              ) : !reviews || reviews.length === 0 ? (
                // Show "coming soon" fallback when no data
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
              ) : (
                // Render reviews in Swiper
                <Swiper
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                    el: ".reviews-pagination",
                    bulletClass: "reviews-bullet",
                    bulletActiveClass: "reviews-bullet-active",
                  }}
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1.1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                    1280: { slidesPerView: 3 },
                  }}
                  className="!pb-12"
                >
                  {reviews.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <GoogleReviewCard testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* Custom pagination */}
              <div className="reviews-pagination flex justify-center gap-2 mt-4 !bottom-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-20"
      >
        <p className="text-gray-400 mb-6">Ready to create something amazing?</p>
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
      {/* </div> */}
    </section>
  );
};

export default Testimonials;
