import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative w-full h-[150vh] md:h-[200vh] lg:h-[290vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="/BackgroundHero.jpg"
          alt="hero-bg-img"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div className="w-full absolute top-0">
        <div className="text max-w-screen-2xl h-full mx-auto px-5 sm:px-8 md:px-10 lg:px-10 text-white">
          <div className="para mt-32 sm:mt-56 md:mt-72 lg:mt-[30rem] xl:mt-[35rem]">
            {[
              "Exploring the beauty of birds",
              "shaping connections between people",
              "and the natural world.",
            ].map((item, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl masker overflow-hidden leading-snug sm:leading-relaxed"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </div>

          <div className="headings mt-5 sm:mt-8 md:mt-10 lg:mt-10">
            {["Wings.", "Wonder.", "World."].map((item, index) => (
              <h1
                key={index}
                className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[15rem] tracking-tighter leading-[1.2] sm:leading-[0.85] md:leading-[1.2] overflow-hidden"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.8,
                    delay: 1 + index * 0.15,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="subtitle lg:w-1/3 para2 font-sans">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                We celebrate the timeless beauty of birds by revealing the
                elegance, freedom, and harmony they bring to our world. From the
                gentle flutter of wings to the songs that awaken our mornings,
                we create experiences that remind people of nature's artistry.
                Unforgettable connections begin with a flight.
              </p>
              <a
                href="#birdie"
                className="text-sm sm:text-base md:text-lg lg:text-xl border-b-[.3px] md:border-b-[.5px] lg:border-b-[1px] border-zinc-100 pb-1 mt-8 sm:mt-10 inline-block cursor-pointer hover:opacity-80 transition-opacity"
              >
                The Birdie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
