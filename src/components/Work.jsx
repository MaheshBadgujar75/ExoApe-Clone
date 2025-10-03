import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function Work() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const videoRefs = useRef([]);

  const projects = [
    {
      title: "Wings of Freedom",
      description:
        "Celebrating the boundless skies where birds inspire us to live without limits and embrace new horizons.",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee",
      image: "/WingsOfFreedom.png",
    },
    {
      title: "Harmony in Nature",
      description:
        "Exploring how birds connect forests, rivers, and cities, reminding us of the balance between people and the wild.",
      video: "/HarmonyOfBirds.png",
      image: "/HarmonyOfBirds.png",
    },
    {
      title: "Songs of Dawn",
      description:
        "Capturing the melodies that awaken our mornings, each note a timeless reminder of beauty in everyday life.",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0",
      image: "SongsOfDawn.png",
    },
    {
      title: "Flight Beyond Boundaries",
      description:
        "Showcasing the resilience of birds that migrate across continents, teaching us the strength of endurance and unity.",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image: "/FlightBeyondBoundaries.png",
    },
  ];

  const positions = [
    { top: 0, left: "0%", width: "45%" },
    { top: 120, left: "52%", width: "45%" },
    { top: 580, left: "4%", width: "40%" },
    { top: 700, left: "58%", width: "40%" },
  ];

  const handleMouseEnter = useCallback((i) => {
    setHoverIndex(i);
    if (videoRefs.current[i]) {
      videoRefs.current[i].play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback((i) => {
    setHoverIndex(null);
    if (videoRefs.current[i]) {
      videoRefs.current[i].pause();
      videoRefs.current[i].currentTime = 0;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Page Title */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[13rem] tracking-tighter leading-none font-light">
            <motion.span
              initial={{ y: "70%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.8,
              }}
              className="inline-block origin-left"
            >
              Journeys
            </motion.span>
          </h1>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:block relative" style={{ minHeight: "1600px" }}>
          {/* Side Text */}
          <div className="absolute top-0 right-0 w-72 xl:w-80 z-10">
            <div className="flex items-center gap-2 mb-4 xl:mb-6">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-xs tracking-widest uppercase font-medium">
                Featured Journeys
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Celebrating timeless stories of birds that inspire freedom, harmony, and connection across skies, forests, and beyond.
            </p>
          </div>

          {/* Projects Grid */}
          {projects.map((project, i) => {
            const pos = positions[i];
            const isHovered = hoverIndex === i;
            const isLight = i < 2; // 1 & 2 cards black, 3 & 4 cards white

            return (
              <div
                key={i}
                className="absolute cursor-pointer"
                style={{
                  top: `${pos.top}px`,
                  left: pos.left,
                  width: pos.width,
                }}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {/* Number Badge */}
                <div className="mb-3 xl:mb-4">
                  <span className="inline-block px-3 xl:px-4 py-1.5 xl:py-2 bg-black text-white text-xs tracking-widest uppercase font-medium">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`text-4xl xl:text-5xl font-light mb-2 xl:mb-3 tracking-tight transition-colors duration-300 ${
                    isLight ? "text-black" : "text-white"
                  }`}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 xl:mb-6 transition-colors duration-300 ${
                    isLight ? "text-black" : "text-white"
                  }`}
                >
                  {project.description}
                </p>

                {/* Image/Video Container */}
                <div
                  data-scroll
                  data-scroll-speed="-0.2"
                  className="relative overflow-hidden rounded-3xl mb-3 xl:mb-4 aspect-[4/5]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-700 rounded-3xl ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={project.video}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-700 rounded-3xl ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                </div>

                {/* Line */}
                <div
                  className={`h-px w-full transition-colors duration-500 ${
                    isHovered ? "bg-black" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="xl:hidden space-y-12 sm:space-y-16 md:space-y-20">
          {/* Side Text Mobile/Tablet */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-xs tracking-widest uppercase font-medium">
                Featured Journeys
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 max-w-2xl">
              Celebrating timeless stories of birds that inspire freedom, harmony, and connection across skies, forests, and beyond.
            </p>
          </div>

          {/* Projects List */}
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="cursor-pointer"
            >
              {/* Video */}
              <div className="relative overflow-hidden bg-gray-50 mb-4 sm:mb-6 rounded-3xl aspect-[4/5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-3xl"
                  src={project.video}
                />
              </div>

              {/* Number Line */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-xs text-gray-400 tracking-wide font-light">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 sm:mb-3 tracking-tight">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-black text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
