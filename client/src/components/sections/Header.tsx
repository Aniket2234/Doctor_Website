import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const initialNavigationItems = [
  { label: "Home", active: true, sectionId: "home" },
  { label: "Services", active: false, sectionId: "services" },
  // { label: "Find Doctors", active: false, sectionId: "specialists" },
  { label: "About us", active: false, sectionId: "aboutus" },
  { label: "Contact us", active: false, sectionId: "contact" },
];

export const Header = (): JSX.Element => {
  const [navigationItems, setNavigationItems] = useState(initialNavigationItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          setNavigationItems(items =>
            items.map((item) => ({
              ...item,
              active: item.sectionId === sectionId
            }))
          );
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'services', 'aboutus', 'specialists', 'how-it-works', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavigationClick = (clickedIndex: number, sectionId: string) => {
    setNavigationItems(items =>
      items.map((item, index) => ({
        ...item,
        active: index === clickedIndex
      }))
    );
    
    // Scroll to the section
    scrollToSection(sectionId);
    
    // Close mobile menu when item is selected
    setIsMobileMenuOpen(false);
  };

  const handleJoinUsClick = () => {
    // Scroll to contact section for "Join us" button
    scrollToSection('contact');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[119px] py-3 sm:py-4 md:py-5 lg:py-6">
        {/* Logo */}
        <div className={`flex items-center flex-shrink-0 transition-all duration-700 ease-out ${
          isLoaded 
            ? 'opacity-100 transform translate-x-0 scale-100' 
            : 'opacity-0 transform -translate-x-8 scale-95'
        }`}>
          {/* Logo - clicking it scrolls to home */}
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              className="h-12 sm:h-16 md:h-20 w-auto"
              alt="HealNet Logo"
              src="/figmaAssets/logo.png"
            />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index, item.sectionId)}
              className={`font-manrope text-sm xl:text-base tracking-[0] leading-6 whitespace-nowrap transition-all duration-300 hover:text-[#001C57] hover:scale-105 relative overflow-hidden group ${
                item.active
                  ? "font-bold text-[#001C57]"
                  : "font-semibold text-neutrals-900"
              } ${
                isLoaded 
                  ? `opacity-100 transform translate-y-0` 
                  : `opacity-0 transform translate-y-4`
              }`}
              style={{
                transitionDelay: isLoaded ? `${index * 100}ms` : '0ms'
              }}
            >
              {item.label}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#001C57] transition-all duration-300 ${
                item.active ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </nav>

        {/* Desktop Join Us Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Join Us Button - Made Smaller */}
          <Button 
            onClick={handleJoinUsClick}
            className={`hidden sm:flex h-auto gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] rounded-lg shadow-[-4px_4px_16px_#0000000f] hover:shadow-[-6px_6px_24px_#00000015] transition-all duration-300 hover:scale-105 ${
              isLoaded 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}
            style={{
              transitionDelay: isLoaded ? '600ms' : '0ms'
            }}
          >
            <div className="font-manrope font-bold text-neutrals-0 text-sm lg:text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Join us
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 text-neutrals-900 hover:text-[#001C57] transition-all duration-300 hover:scale-110 hover:bg-[#001C57]/10 rounded-lg ${
              isLoaded 
                ? 'opacity-100 transform rotate-0' 
                : 'opacity-0 transform rotate-180'
            }`}
            style={{
              transitionDelay: isLoaded ? '500ms' : '0ms'
            }}
            aria-label="Toggle menu"
          >
            <div className={`transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-180' : 'rotate-0'
            }`}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-xl transition-all duration-500 ease-out z-50 ${
        isMobileMenuOpen 
          ? 'opacity-100 visible transform translate-y-0' 
          : 'opacity-0 invisible transform -translate-y-4'
      }`}>
        <nav className="flex flex-col px-4 sm:px-6 py-4">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index, item.sectionId)}
              className={`font-manrope text-base tracking-[0] leading-6 text-left py-3 px-2 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-[#001C57] hover:transform hover:translate-x-2 ${
                item.active
                  ? "font-bold text-[#001C57] bg-[#001C57]/10"
                  : "font-semibold text-neutrals-900"
              } ${
                isMobileMenuOpen 
                  ? `opacity-100 transform translate-x-0` 
                  : `opacity-0 transform -translate-x-4`
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.label}
            </button>
          ))}
          
          {/* Mobile Join Us Button */}
          <div className={`pt-4 mt-4 border-t border-gray-200 transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-4'
          }`}
          style={{
            transitionDelay: isMobileMenuOpen ? '300ms' : '0ms'
          }}>
            <Button 
              onClick={handleJoinUsClick}
              className="w-full h-auto gap-2 px-4 py-3 bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] rounded-lg shadow-[-4px_4px_16px_#0000000f] hover:shadow-[-6px_6px_24px_#00000015] transition-all duration-300 hover:scale-105 sm:hidden"
            >
              <div className="font-manrope font-bold text-neutrals-0 text-base text-center tracking-[0] leading-6">
                Join us
              </div>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};