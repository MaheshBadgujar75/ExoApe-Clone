import React from "react";

export default function ExoApeFooter() {
  return (
    <footer className="relative mt-[12rem] sm:mt-16 md:mt-24 lg:mt-32 xl:mt-[10rem] min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        data-scroll
        data-scroll-speed="-0.5"
        src="/FooterImage.jpg"
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Hero Section */}
        <div className="flex-1 flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="text-center lg:text-left max-w-4xl">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6 sm:mb-8 leading-[0.95] tracking-tighter"
                style={{ color: "white" }}
              >
                Wings of
                <br />
                Freedom
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight mb-10 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed opacity-90"
                style={{ color: "white" }}
              >
                Explore the boundless journeys of birds, soaring across skies,
                forests, and oceans, inspiring freedom, harmony, and connection.
              </p>

              <a
                href="#"
                style={{ color: "white" }}
                className="group inline-flex items-center gap-3 text-sm sm:text-base md:text-lg font-light tracking-wide hover:gap-4 transition-all duration-500"
                aria-label="Explore More Journeys"
              >
                <span className="opacity-80 group-hover:opacity-100">
                  Explore More Journeys
                </span>
                <span
                  className="text-xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div
          style={{ color: "white" }}
          className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
        >
          <div className="max-w-[1600px] mx-auto w-full">
            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10 sm:mb-12 md:mb-16 lg:mb-20" />

            {/* Mobile: Stacked Sections */}
            <div className="block md:hidden space-y-10">
              {/* Contact Section */}
              <div className="space-y-3 pb-8 border-b border-white/10">
                <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                  Contact
                </p>
                <address className="not-italic">
                  <p className="text-base leading-relaxed opacity-80">
                    123 Birds
                  </p>
                  <p className="text-base leading-relaxed opacity-80">Amazon</p>
                  <p className="text-base leading-relaxed opacity-80">Nature</p>
                  <a
                    href="mailto:info@birdjourneys.com"
                    className="block text-base mt-4 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    info@birdjourneys.com
                  </a>
                </address>
              </div>

              {/* Navigation Grid */}
              <div className="grid grid-cols-2 gap-8 pb-8 border-b border-white/10">
                <nav>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                    Explore
                  </p>
                  <div className="space-y-3">
                    {["Journeys", "Stories", "Gallery", "Contact"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                </nav>

                <nav>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                    Connect
                  </p>
                  <div className="space-y-3">
                    {["Instagram", "Twitter", "LinkedIn", "YouTube"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                </nav>
              </div>

              {/* Legal */}
              <div className="space-y-3">
                <p className="text-xs opacity-50">© 2025 Bird Journeys</p>
                <nav className="flex gap-6">
                  <a
                    href="#"
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    Terms
                  </a>
                </nav>
              </div>
            </div>

            {/* Tablet: 2 Column Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                {/* Left Column */}
                <div className="space-y-12">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Contact
                    </p>
                    <address className="not-italic">
                      <p className="text-base leading-relaxed opacity-75">
                        123 Birds
                      </p>
                      <p className="text-base leading-relaxed opacity-75">
                        Amazon
                      </p>
                      <p className="text-base leading-relaxed opacity-75">
                        Nature
                      </p>
                      <a
                        href="mailto:info@birdjourneys.com"
                        className="block text-base mt-5 opacity-75 hover:opacity-100 transition-opacity"
                      >
                        info@birdjourneys.com
                      </a>
                    </address>
                  </div>

                  <nav className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Explore
                    </p>
                    {["Journeys", "Stories", "Gallery", "Contact"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </nav>
                </div>

                {/* Right Column */}
                <div className="space-y-12">
                  <nav className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Connect
                    </p>
                    {["Instagram", "Twitter", "LinkedIn", "YouTube"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </nav>

                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Legal
                    </p>
                    <p className="text-sm opacity-60">© 2025 Bird Journeys</p>
                    <nav className="space-y-3">
                      {["Privacy Policy", "Terms of Service"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: 4 Column Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12">
              <div className="col-span-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Contact
                </p>
                <address className="not-italic">
                  <p className="text-sm xl:text-base leading-relaxed opacity-70">
                    123 Birds
                  </p>
                  <p className="text-sm xl:text-base leading-relaxed opacity-70">
                    Amazon
                  </p>
                  <p className="text-sm xl:text-base leading-relaxed opacity-70">
                    Nature
                  </p>
                  <a
                    href="mailto:info@birdjourneys.com"
                    className="block text-sm xl:text-base mt-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    info@birdjourneys.com
                  </a>
                </address>
              </div>

              <nav className="col-span-2 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Explore
                </p>
                {["Journeys", "Stories", "Gallery", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <nav className="col-span-2 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Connect
                </p>
                {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="col-span-2"></div>

              <div className="col-span-3 space-y-3 lg:text-right">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Legal
                </p>
                <p className="text-xs xl:text-sm opacity-50">
                  © 2025 Bird Journeys
                </p>
                <nav className="space-y-2">
                  {["Privacy Policy", "Terms of Service"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
