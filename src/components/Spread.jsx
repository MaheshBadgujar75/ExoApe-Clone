import React from "react";
import { motion } from "framer-motion";

const Spread = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-lg sm:text-xl font-medium tracking-wide">
            Journeys in Motion
          </h1>
        </div>

        {/* Animated Title */}
        <div className="overflow-hidden">
          {["Whispers of Wings", "Echoes Across the Sky"].map((line, idx) => (
            <h1
              key={idx}
              className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tight mb-2 sm:mb-4"
            >
              <motion.span
                initial={{ y: "120%", opacity: 0, skewY: 8 }}
                whileInView={{ y: 0, opacity: 1, skewY: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.9,
                  delay: idx * 0.2,
                }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </h1>
          ))}
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 sm:mt-10 text-gray-700 text-md sm:text-lg leading-relaxed">
          Journey alongside birds as they traverse skies, forests, and oceans,
          inspiring freedom, resilience, and a harmony that transcends borders.
        </p>

        {/* Call to Action */}
        <a
          href="#"
          className="mt-6 inline-block text-black border-b-2 border-black pb-1 text-lg font-medium hover:text-gray-700 hover:border-gray-700 transition-all duration-300"
        >
          Explore the Journeys
        </a>
      </div>
    </div>
  );
};

export default Spread;
