import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.div
      className="w-full fixed z-[999]"
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-screen-7xl mx-auto px-5 py-5 sm:py-10 sm:px-10 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="logo"
        ></motion.div>

        {/* Hamburger Icon */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="md:hidden "
        >
          <IoMenu />
        </motion.span>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="links hidden sm:flex gap-10"
        >
          {["Journeys", "Contact"].map((item, index) => (
            <a key={index} className="text-sm font-light font-sans">
              {item}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
