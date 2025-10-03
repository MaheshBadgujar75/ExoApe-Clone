import React from "react";

export default function ExoApeFooter() {
  return (
    <footer className="relative mt-[12rem] sm:mt-[25rem] h-[130vh] overflow-hidden">
      {/* Video Background */}
      <video
        data-scroll
        data-scroll-speed="-1"
        src="/Footer.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Dark Overlay
      <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-full">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto w-full text-center lg:text-left">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 leading-tight font-bold"
              style={{ color: "#e0ccbb" }}
            >
              Our
              <br />
              Story
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-12 sm:mb-16 max-w-3xl mx-auto lg:mx-0"
              style={{ color: "#e0ccbb" }}
            >
              The story behind Exo Ape is one of exploration, creativity, and
              curiosity.
            </p>

            <a
              style={{ color: "#e0ccbb" }}
              href="#"
              className="inline-block text-base sm:text-lg md:text-xl lg:text-2xl text-white hover:text-gray-300 transition-all duration-300 border-b-2 border-white/40 hover:border-white pb-1 sm:pb-2 mb-12 sm:mb-16"
            >
              Explore Our Journey →
            </a>
          </div>

          {/* Bottom Section - Contact and Links */}
          <div
            style={{ color: "#e0ccbb" }}
            className="max-w-7xl mx-auto w-full mt-12 sm:mt-16"
          >
            <div className="border-t border-white/20 pt-8 sm:pt-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-8 sm:mt-12">
              {/* Address Column */}
              <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 style={{ color: "#e0ccbb" }} className="text-white font-medium mb-2 sm:mb-3">
                  Location
                </h3>
                <p className="text-sm">Willem II Singel 8</p>
                <p className="text-sm">6041 HS, Roermond</p>
                <p className="text-sm">The Netherlands</p>
                <p className="text-sm mt-4 sm:mt-6">hello@exoape.com</p>
              </div>

              {/* Work Column */}
              <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-medium mb-2 sm:mb-3">Work</h3>
                {["Work", "Studio", "News", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Social Column */}
              <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-medium mb-2 sm:mb-3">Social</h3>
                {["Behance", "Dribbble", "LinkedIn", "Instagram"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>

              {/* Legal Column */}
              <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <h3 className="font-medium mb-2 sm:mb-3">Legal</h3>
                <p className="text-sm">© 2025 Exo Ape</p>
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
