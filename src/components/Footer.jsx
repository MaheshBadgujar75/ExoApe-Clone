import React from "react";

export default function ExoApeFooter() {
  return (
    <footer className="relative mt-[12rem] sm:mt-16 md:mt-24 lg:mt-32 xl:mt-[20rem] min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        data-scroll
        data-scroll-speed="-1"
        src="/Footer.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Minimal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Hero Section */}
        <div className="flex-1 flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="text-center lg:text-left max-w-4xl">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6 sm:mb-8 leading-[0.95] tracking-tighter"
                style={{ color: "#e0ccbb" }}
              >
                Our
                <br />
                Story
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extralight mb-10 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed opacity-90"
                style={{ color: "#e0ccbb" }}
              >
                The story behind Exo Ape is one of exploration, creativity, and
                curiosity.
              </p>

              <a
                href="#"
                style={{ color: "#e0ccbb" }}
                className="group inline-flex items-center gap-3 text-sm sm:text-base md:text-lg font-light tracking-wide hover:gap-4 transition-all duration-500"
              >
                <span className="opacity-80 group-hover:opacity-100">
                  Explore Our Journey
                </span>
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div
          style={{ color: "#e0ccbb" }}
          className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-8 sm:pb-10 md:pb-12 lg:pb-16"
        >
          <div className="max-w-[1600px] mx-auto w-full">
            {/* Subtle Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10 sm:mb-12 md:mb-16 lg:mb-20" />

            {/* Mobile: Stacked Sections */}
            <div className="block md:hidden space-y-10">
              {/* Contact Section */}
              <div className="space-y-3 pb-8 border-b border-white/10">
                <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                  Contact
                </p>
                <p className="text-base leading-relaxed opacity-80">
                  Willem II Singel 8
                </p>
                <p className="text-base leading-relaxed opacity-80">
                  6041 HS, Roermond
                </p>
                <p className="text-base leading-relaxed opacity-80">
                  The Netherlands
                </p>
                <a
                  href="mailto:hello@exoape.com"
                  className="block text-base mt-4 opacity-80 hover:opacity-100 transition-opacity"
                >
                  hello@exoape.com
                </a>
              </div>

              {/* Navigation Grid - 2 Columns */}
              <div className="grid grid-cols-2 gap-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                    Work
                  </p>
                  <div className="space-y-3">
                    {["Work", "Studio", "News", "Contact"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-base opacity-70 hover:opacity-100 transition-opacity duration-300"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                    Social
                  </p>
                  <div className="space-y-3">
                    {["Behance", "Dribbble", "LinkedIn", "Instagram"].map(
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
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-3">
                <p className="text-xs opacity-50">© 2025 Exo Ape</p>
                <div className="flex gap-6">
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
                </div>
              </div>
            </div>

            {/* Tablet: 2 Column Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                {/* Left Column */}
                <div className="space-y-12">
                  {/* Contact */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Contact
                    </p>
                    <p className="text-base leading-relaxed opacity-75">
                      Willem II Singel 8
                    </p>
                    <p className="text-base leading-relaxed opacity-75">
                      6041 HS, Roermond
                    </p>
                    <p className="text-base leading-relaxed opacity-75">
                      The Netherlands
                    </p>
                    <a
                      href="mailto:hello@exoape.com"
                      className="block text-base mt-5 opacity-75 hover:opacity-100 transition-opacity"
                    >
                      hello@exoape.com
                    </a>
                  </div>

                  {/* Work */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Work
                    </p>
                    {["Work", "Studio", "News", "Contact"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-base opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-12">
                  {/* Social */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Social
                    </p>
                    {["Behance", "Dribbble", "LinkedIn", "Instagram"].map(
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
                  </div>

                  {/* Legal */}
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-40 mb-5">
                      Legal
                    </p>
                    <p className="text-sm opacity-60">© 2025 Exo Ape</p>
                    <div className="space-y-3">
                      {["Privacy Policy", "Terms of Service"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-base opacity-70 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: 4 Column Grid */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12">
              {/* Contact - Spans 3 columns */}
              <div className="col-span-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Contact
                </p>
                <p className="text-sm xl:text-base leading-relaxed opacity-70">
                  Willem II Singel 8
                </p>
                <p className="text-sm xl:text-base leading-relaxed opacity-70">
                  6041 HS, Roermond
                </p>
                <p className="text-sm xl:text-base leading-relaxed opacity-70">
                  The Netherlands
                </p>
                <a
                  href="mailto:hello@exoape.com"
                  className="block text-sm xl:text-base mt-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  hello@exoape.com
                </a>
              </div>

              {/* Work - Spans 2 columns */}
              <div className="col-span-2 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Work
                </p>
                {["Work", "Studio", "News", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Social - Spans 2 columns */}
              <div className="col-span-2 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Social
                </p>
                {["Behance", "Dribbble", "LinkedIn", "Instagram"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>

              {/* Spacer */}
              <div className="col-span-2"></div>

              {/* Legal - Spans 3 columns, aligned right */}
              <div className="col-span-3 space-y-3 lg:text-right">
                <p className="text-xs uppercase tracking-[0.25em] opacity-30 mb-6">
                  Legal
                </p>
                <p className="text-xs xl:text-sm opacity-50">© 2025 Exo Ape</p>
                <div className="space-y-2">
                  {["Privacy Policy", "Terms of Service"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm xl:text-base opacity-65 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
