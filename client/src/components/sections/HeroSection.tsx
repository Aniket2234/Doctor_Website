// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const trustedLogos = "/figmaAssets/group-10.png";

// export const HeroSection = (): JSX.Element => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleBookConsultation = () => {
//     // Smooth scroll to services section
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       servicesSection.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'start' 
//       });
//     }
//   };
//   return (
//     <div className="w-full bg-[linear-gradient(166deg,rgba(242,250,255,1)_0%,rgba(255,255,255,1)_88%)] relative min-h-screen overflow-hidden">
//       {/* Hero Content */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[119px] pb-[10px] lg:pb-[10px] max-w-full overflow-hidden min-h-screen">
//         {/* Left Content */}
//         <div className={`flex-1 max-w-[552px] text-center lg:text-left transition-all duration-1000 transform ${
//           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//         }`}>
//           {/* Main Heading */}
//           <div className="mb-8 pt-12">
//             <h1 className={`font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-normal text-[#4f4f4f] mb-6 transition-all duration-1200 delay-200 transform ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//             }`}>
//               Your{" "}
//               <span className="text-[#001C57] font-normal">
//                 trusted partner
//               </span>
//               <br className="hidden lg:block" />
//               in holistic healthcare.
//             </h1>
//           </div>

//           {/* Hero Text - Reduced */}
//           <div className={`mb-12 mt-8 font-manrope font-normal text-sm sm:text-base tracking-[0] leading-6 transition-all duration-1000 delay-400 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//           }`}>
//             <div className="mb-4">
//               <span className="font-bold text-[#001C57] block mb-2">
//                 Dr. Iqra Rahi - Homeopathy, Emergency Medicine & Cosmetology Expert
//               </span>
//             </div>
//             <span className="font-medium text-[#4f4f4f]">
//               Experience personalized healthcare that blends traditional homeopathy with modern medical expertise.{" "}
//             </span>
//             <span className="font-bold text-[#001C57]">
//               Get Started
//             </span>
//             <span className="font-medium text-[#4f4f4f]">
//               {" "}or Book a Consultation today.
//             </span>
//           </div>

//           {/* CTA Button */}
//           <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-600 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
//           }`}>
//             <Button
//               onClick={handleBookConsultation}
//               className="h-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-4 sm:py-5 rounded-xl shadow-[-8px_8px_28px_#0000000f] 
//               bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] mb-12 sm:mb-20 cursor-pointer hover:shadow-[-12px_12px_35px_#00000020] 
//               hover:scale-105 transition-all duration-300 active:scale-95"
//             >
//               <div className="font-manrope font-bold text-white text-lg sm:text-2xl tracking-[0] leading-7 whitespace-nowrap">
//                 Book a consultation
//               </div>
//               <img
//                 className="w-3 h-[18px]"
//                 alt="Intersect"
//                 src="/figmaAssets/intersect.svg"
//               />
//             </Button>
//           </div>
//         </div>

//         {/* Right Side: Doctor Image + Cards - Reduced Size & Centered */}
//         <div className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-1200 delay-300 transform ${
//           isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
//         }`}>
//           {/* Doctor Image Container - Reduced Size with Curves */}
//           <div className={`relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto mb-6 transition-all duration-800 delay-500 transform ${
//             isVisible ? 'scale-100 rotate-0' : 'scale-95 -rotate-2'
//           }`}>
//             {/* Background Shape - Adjusted for smaller image */}
//             <div className="absolute w-[75%] h-[80%] top-[20%] left-[12.5%] rounded-[150px_150px_12px_12px] bg-[linear-gradient(180deg,#001C57_0%,rgba(174,210,255,1)_68%)] animate-pulse" />
            
//             {/* Doctor Image - Reduced Size with Enhanced Curves */}
//             <img
//               className="relative w-full h-auto object-cover z-10 rounded-[120px_120px_20px_20px] shadow-[0_20px_50px_rgba(0,28,87,0.3)] 
//               hover:shadow-[0_25px_60px_rgba(0,28,87,0.4)] transition-all duration-500 hover:scale-105"
//               alt="Dr. Iqra Rahi"
//               src="/Images/Doc3.png"
//             />
            
//             {/* Decorative floating elements */}
//             <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4A90E2] rounded-full animate-bounce opacity-70"></div>
//             <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#001C57] rounded-full animate-pulse opacity-60"></div>
//           </div>

//           {/* Cards Section - Adjusted spacing with animations */}
//           <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-[400px] transition-all duration-1000 delay-700 transform ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             {/* Holistic Care Card */}
//             <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[200px] sm:w-[180px] transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-[-12px_12px_35px_#0000002a] cursor-pointer">
//               <CardContent className="flex items-center gap-2 px-3 py-3">
//                 <div className="w-6 h-6 bg-[#001C57] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
//                   <img className="w-3 h-3" alt="Frame" src="/figmaAssets/frame-5-1.svg" />
//                 </div>
//                 <div className="font-manrope font-bold text-[#001C57] text-xs leading-4">
//                   Holistic Healthcare Solutions
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Specializations Card */}
//             <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[200px] sm:w-[180px] transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-[-12px_12px_35px_#0000002a] cursor-pointer">
//               <CardContent className="flex flex-col gap-1 px-3 py-3">
//                 <div className="font-manrope font-bold text-[#001C57] text-xs leading-3 mb-1">
//                   Specializations:
//                 </div>
//                 <div className="space-y-0.5">
//                   <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                     • Homeopathy (B.H.M.S.)
//                   </div>
//                   <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                     • Emergency Medicine (P.G.D.E.M.)
//                   </div>
//                   <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                     • Medical Cosmetology
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Wave Background with animation */}
//       {/* <img
//         className={`absolute w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[627px] bottom-0 left-0 transition-all duration-2000 delay-1000 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}
//         alt="Vector"
//         src="/figmaAssets/vector-1-1.svg"
//       /> */}
      
//       {/* Floating animation elements */}
//       <div className="absolute top-20 left-10 w-2 h-2 bg-[#4A90E2] rounded-full animate-bounce opacity-40 hidden lg:block"></div>
//       <div className="absolute top-40 right-20 w-3 h-3 bg-[#001C57] rounded-full animate-pulse opacity-30 hidden lg:block"></div>
//       <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#4A90E2] rounded-full animate-ping opacity-50 hidden lg:block"></div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustedLogos = "/figmaAssets/group-10.png";

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/Images/Doc3.png",
    "/Images/Hero2.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  const handleBookConsultation = () => {
    // Smooth scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="w-full bg-[linear-gradient(166deg,rgba(242,250,255,1)_0%,rgba(255,255,255,1)_88%)] relative min-h-screen overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[119px] pb-[10px] lg:pb-[10px] max-w-full overflow-hidden min-h-screen">
        {/* Left Content */}
        <div className={`flex-1 max-w-[552px] text-center lg:text-left transition-all duration-1000 transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          {/* Main Heading */}
          <div className="mb-8 pt-12">
            <h1 className={`font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-normal text-[#4f4f4f] mb-6 transition-all duration-1200 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              Your{" "}
              <span className="text-[#001C57] font-normal">
                trusted partner
              </span>
              <br className="hidden lg:block" />
              in holistic healthcare.
            </h1>
          </div>

          {/* Hero Text - Reduced */}
          <div className={`mb-12 mt-8 font-manrope font-normal text-sm sm:text-base tracking-[0] leading-6 transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <div className="mb-4">
              <span className="font-bold text-[#001C57] block mb-2">
                Dr. Iqra Rahi - Homeopathy, Emergency Medicine & Cosmetology Expert
              </span>
            </div>
            <span className="font-medium text-[#4f4f4f]">
              Experience personalized healthcare that blends traditional homeopathy with modern medical expertise.{" "}
            </span>
            <span className="font-bold text-[#001C57]">
              Get Started
            </span>
            <span className="font-medium text-[#4f4f4f]">
              {" "}or Book a Consultation today.
            </span>
          </div>

          {/* CTA Button */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            <Button
              onClick={handleBookConsultation}
              className="h-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-4 sm:py-5 rounded-xl shadow-[-8px_8px_28px_#0000000f] 
              bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] mb-12 sm:mb-20 cursor-pointer hover:shadow-[-12px_12px_35px_#00000020] 
              hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <div className="font-manrope font-bold text-white text-lg sm:text-2xl tracking-[0] leading-7 whitespace-nowrap">
                Book a consultation
              </div>
              <img
                className="w-3 h-[18px]"
                alt="Intersect"
                src="/figmaAssets/intersect.svg"
              />
            </Button>
          </div>
        </div>

        {/* Right Side: Auto-Scrolling Images + Cards - Reduced Size & Centered */}
        <div className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-1200 delay-300 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          {/* Image Container with Auto-Scroll - Fixed Size with Curves */}
          <div className={`relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-6 transition-all duration-800 delay-500 transform ${
            isVisible ? 'scale-100 rotate-0' : 'scale-95 -rotate-2'
          }`}>
            {/* Background Shape - Adjusted for fixed size */}
            <div className="absolute w-[75%] h-[80%] top-[20%] left-[12.5%] rounded-[150px_150px_12px_12px] bg-[linear-gradient(180deg,#001C57_0%,rgba(174,210,255,1)_68%)] animate-pulse" />
            
            {/* Auto-Scrolling Images Container - Fixed Size */}
            <div className="relative w-full h-full rounded-[120px_120px_20px_20px] shadow-[0_20px_50px_rgba(0,28,87,0.3)] 
            hover:shadow-[0_25px_60px_rgba(0,28,87,0.4)] transition-all duration-500 hover:scale-105 overflow-hidden">
              {heroImages.map((imageSrc, index) => (
                <img
                  key={index}
                  className={`w-full h-full object-cover z-10 rounded-[120px_120px_20px_20px] transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex 
                      ? 'opacity-100' 
                      : 'opacity-0 absolute top-0 left-0'
                  }`}
                  alt={index === 0 ? "Dr. Iqra Rahi" : "Healthcare Services"}
                  src={imageSrc}
                />
              ))}
            </div>
            
            {/* Image Indicators */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-[#001C57] scale-125' 
                      : 'bg-[#4A90E2] opacity-50'
                  }`}
                />
              ))}
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#4A90E2] rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#001C57] rounded-full animate-pulse opacity-60"></div>
          </div>

          {/* Cards Section - Adjusted spacing with animations */}
          <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-[400px] transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Holistic Care Card */}
            <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[200px] sm:w-[180px] transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-[-12px_12px_35px_#0000002a] cursor-pointer">
              <CardContent className="flex items-center gap-2 px-3 py-3">
                <div className="w-6 h-6 bg-[#001C57] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <img className="w-3 h-3" alt="Frame" src="/figmaAssets/frame-5-1.svg" />
                </div>
                <div className="font-manrope font-bold text-[#001C57] text-xs leading-4">
                  Holistic Healthcare Solutions
                </div>
              </CardContent>
            </Card>

            {/* Specializations Card */}
            <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[200px] sm:w-[180px] transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-[-12px_12px_35px_#0000002a] cursor-pointer">
              <CardContent className="flex flex-col gap-1 px-3 py-3">
                <div className="font-manrope font-bold text-[#001C57] text-xs leading-3 mb-1">
                  Specializations:
                </div>
                <div className="space-y-0.5">
                  <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
                    • Homeopathy (B.H.M.S.)
                  </div>
                  <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
                    • Emergency Medicine (P.G.D.E.M.)
                  </div>
                  <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
                    • Medical Cosmetology
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#4A90E2] rounded-full animate-bounce opacity-40 hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#001C57] rounded-full animate-pulse opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#4A90E2] rounded-full animate-ping opacity-50 hidden lg:block"></div>
    </div>
  );
};