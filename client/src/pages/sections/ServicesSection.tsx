import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

export const ServicesSection = (): JSX.Element => {
  const supportLinks = [
    "Getting Started",
    "FAQS",
    "Help Articles",
    "Report an issue",
    "Contact Help Desk",
  ];

  const serviceLinks = [
    "Booking appointments",
    "Online consultations",
    "Prescriptions",
    "Medicine Refills",
    "Medical Notes",
  ];

  const legalLinks = [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Notice",
    "Cookie Preferences",
    "Trust Center",
  ];

  const socialIcons = [
    { Icon: FacebookIcon, alt: "Facebook" },
    { Icon: InstagramIcon, alt: "Instagram" },
    { Icon: LinkedinIcon, alt: "LinkedIn" },
    { Icon: YoutubeIcon, alt: "YouTube" },
  ];

  return (
    <footer className="w-full bg-[#f2faff] py-16 px-[100px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-start mb-2">
            <img
              className="w-[90px] h-[92px] mr-4"
              alt="Group"
              src="/figmaAssets/group-2-1.png"
            />
          </div>

          <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-primary-blues700 text-[42px] leading-normal mb-6">
            HealNet
          </h2>

          <p className="[font-family:'Manrope',Helvetica] font-medium text-neutrals-500 text-base leading-6 max-w-[269px]">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>

        <div className="flex gap-[146px]">
          <div className="flex flex-col">
            <h3 className="[font-family:'Manrope',Helvetica] font-bold text-primary-blues500-base text-base leading-6 mb-11">
              Support
            </h3>
            <nav className="flex flex-col gap-10">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Manrope',Helvetica] font-medium text-neutrals-500 text-base leading-6 hover:text-primary-blues500-base transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="[font-family:'Manrope',Helvetica] font-bold text-primary-blues500-base text-base leading-6 mb-11">
              Services
            </h3>
            <nav className="flex flex-col gap-10">
              {serviceLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Manrope',Helvetica] font-medium text-neutrals-500 text-base leading-6 hover:text-primary-blues500-base transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="[font-family:'Manrope',Helvetica] font-bold text-primary-blues500-base text-base leading-6 mb-11">
              Legal
            </h3>
            <nav className="flex flex-col gap-10">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Manrope',Helvetica] font-medium text-neutrals-500 text-base leading-6 hover:text-primary-blues500-base transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-[82px]">
        <img
          className="w-full h-0.5 mb-[22px]"
          alt="Line"
          src="/figmaAssets/line-1.svg"
        />

        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            {socialIcons.map(({ Icon, alt }, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 text-neutrals-500 hover:text-primary-blues500-base transition-colors"
                aria-label={alt}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>

          <p className="[font-family:'Manrope',Helvetica] font-semibold text-neutrals-300 text-base text-right leading-6">
            HealNet 2024 © All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
