import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const parentRef = useRef(null);
  const firstRef = useRef(null);
  const thirdRef = useRef(null);
  const second = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: parentRef.current,
            start: "0 90%",
            scrub: 1,
          },
        })
        .to(firstRef.current, { x: "100%", ease: "linear" }, "move")
        .to(thirdRef.current, { x: "-100%", ease: "linear" }, "move")
        .to(second.current, { x: "-100%", ease: "linear" }, "move")
        .to(fourth.current, { x: "100%", ease: "linear" }, "move");
    }, parentRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={parentRef}
      className="w-full h-[70vh] sm:h-[100vh] bg-white flex justify-center items-center overflow-hidden sm:mt-20 lg:mt-40"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[90%] h-1/2 relative">
        {/* Top right image */}
        <div
          ref={firstRef}
          className="absolute w-20 sm:w-40 h-[7rem] sm:h-[15rem] -right-[10%] top-6"
        >
          <img
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/TopRightImage.jpg"
            alt="Cute beeeater"
            loading="lazy"
          />
        </div>

        {/* Left middle video */}
        <div
          ref={second}
          className="absolute w-[8rem] sm:w-[20rem] h-[10rem] aspect-video -left-[12rem] sm:-left-1/2 top-[10%]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full absolute top-1/2 left-[15rem] -translate-x-1/2 -translate-y-1/2"
            src="/videos/TopLeftVideo.mp4"
          />
        </div>

        {/* Bottom left image */}
        <div
          ref={thirdRef}
          className="absolute w-[6rem] sm:w-[17rem] aspect-video left-[14%] sm:left-[30%] -bottom-10"
        >
          <img
            className="w-full h-full absolute top-1/2 left-[-20%] -translate-x-1/2 -translate-y-1/2"
            src="/BottomLeftImage.jpg"
            alt="Kingfisher Bird"
            loading="lazy"
          />
        </div>

        {/* Bottom right video */}
        <div
          ref={fourth}
          className="absolute w-[9rem] sm:w-[17rem] aspect-square -right-[10%] sm:-right-[0%] -bottom-[37%] sm:-bottom-[20%]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/videos/RightBottomVideo.mp4"
          />
        </div>

        {/* Center main image */}
        <img
          className="w-full h-full object-cover"
          src="/CenterImage.jpg"
          alt="red and black bearded barbet bird"
        />
      </div>
    </div>
  );
};

export default Images;
