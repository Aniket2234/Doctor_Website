
import React from "react";

export const Footer = () => {
  // Smooth scroll function
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-slate-50 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/figmaAssets/logo.png"
                alt="Rahi's Clinic Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 text-base leading-6 max-w-xs">
              Experience personalized medical care from the comfort of your home.
            </p>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-base mb-6" style={{ color: "#001C57" }}>
              Support
            </h3>
            <ul className="space-y-4">
              {[
                "Getting Started",
                "FAQs",
                "Help Articles",
                "Report an issue",
                "Contact Help Desk",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-[#001C57]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-6" style={{ color: "#001C57" }}>
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#homeopathic"
                  onClick={(e) => handleScroll(e, "homeopathic")}
                  className="text-gray-600 hover:text-[#001C57] cursor-pointer"
                >
                  Homeopathic Care
                </a>
              </li>
              <li>
                <a
                  href="#emergency"
                  onClick={(e) => handleScroll(e, "emergency")}
                  className="text-gray-600 hover:text-[#001C57] cursor-pointer"
                >
                  Emergency Medicine Expertise
                </a>
              </li>
              <li>
                <a
                  href="#cosmetology"
                  onClick={(e) => handleScroll(e, "cosmetology")}
                  className="text-gray-600 hover:text-[#001C57] cursor-pointer"
                >
                  Cosmetology Treatments
                </a>
              </li>
            </ul>
          </div>

{/* Address */}
          <div>
            <h3 className="font-bold text-base mb-6" style={{ color: "#001C57" }}>
              Address
            </h3>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>Rahi's Clinic</li>
              <li>Shop no 2, raj lifestyle, Hatkesh Rd, opp. GCC Club Road, Hatkesh Udhog Nagar, Mira Road East,Mumbai, Mira Bhayandar, Maharashtra 401107</li>
              <li></li>
              <li>Phone: 077158 01401</li>
              <li>Hours: Open • Closes 10 pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[#001C57] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 lg:px-8 py-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {[
              // Instagram
              {
                href: "https://www.instagram.com/_driqrarahi_?igsh=eTVsbHh1dGNjajR5&utm_source=qr",
                svg: (
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                ),
              },
              // LinkedIn
              {
                href: "#",
                svg: (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                ),
              },
              // Google
              {
                href: "https://share.google/PdC1NuaAbAHhaU17T",
                svg: (
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                ),
              },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#001C57" }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon.svg}
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm md:text-base text-center md:text-right">
            © 2024 HealNet. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};