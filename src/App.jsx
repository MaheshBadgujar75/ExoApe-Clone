import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Journeys from "./components/Journeys";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
      multiplier: 1,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className='w-full font-["Quicksand"]'
    >
      <Navbar />
      <Landing />
      <Journeys />
      <PlayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  );
}

export default App;
