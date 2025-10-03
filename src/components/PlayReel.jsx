import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  useEffect(() => {
    if (!parent.current || !videodiv.current || !play.current || !reel.current)
      return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const slideDistance = isMobile ? "20%" : "70%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      tl.to(
        videodiv.current,
        {
          width: "105%",
          height: "105%",
          ease: Power4.easeInOut,
          duration: 1,
        },
        0
      )
        .to(
          play.current,
          {
            x: slideDistance,
            ease: Power4.easeInOut,
            duration: 1,
          },
          0
        )
        .to(
          reel.current,
          {
            x: `-${slideDistance}`,
            ease: Power4.easeInOut,
            duration: 1,
          },
          0
        );
    }, parent);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={parent}
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      {/* Video Container */}
      <div
        ref={videodiv}
        className="w-28 xs:w-36 sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-[28rem] aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden will-change-[width,height]"
      >
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 object-cover"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 text-white flex flex-col justify-between py-8 px-6 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16 xl:py-24 xl:px-20 pointer-events-none">
        {/* Top Section */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
            aria-label="Star icon"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
            Work in Motion
          </h3>
        </div>

        {/* Center Title */}
        <h1 className="flex justify-center items-center gap-6 xs:gap-10 sm:gap-16 md:gap-24 lg:gap-40 xl:gap-56 2xl:gap-72 px-2 sm:px-4">
          <div
            ref={play}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light whitespace-nowrap will-change-transform"
          >
            Play
          </div>
          <div
            ref={reel}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light whitespace-nowrap will-change-transform"
          >
            Reel
          </div>
        </h1>

        {/* Bottom Text */}
        <p className="text-center text-xs sm:text-sm md:text-base xl:text-lg font-light leading-relaxed md:leading-loose px-2 sm:px-4 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
          Our work is best experienced in motion. Don't forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
