// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const customerImages = [
//   "/figmaAssets/ellipse-6.svg",
//   "/figmaAssets/ellipse-7.svg",
//   "/figmaAssets/ellipse-8.svg",
//   "/figmaAssets/ellipse-9.svg",
// ];

// const trustedLogos = "/figmaAssets/group-10.png";

// export const HeroSection = (): JSX.Element => {
//   return (
//     <div className="w-full bg-[linear-gradient(166deg,rgba(242,250,255,1)_0%,rgba(255,255,255,1)_88%)] relative">
//       {/* Hero Content */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[119px] pb-[10px] lg:pb-[10px] max-w-full overflow-hidden">
//         {/* Left Content */}
//         <div className="flex-1 max-w-[552px] text-center lg:text-left">
//           {/* Main Heading */}
//           <div className="mb-8 pt-12">
//             <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-normal text-[#4f4f4f] mb-6">
//               Your{" "}
//               <span className="text-[#001C57] font-normal">
//                 trusted partner
//               </span>
//               <br className="hidden lg:block" />
//               in holistic healthcare.
//             </h1>
//           </div>

//           {/* Hero Text */}
//           <div className="mb-12 mt-8 font-manrope font-normal text-sm sm:text-base tracking-[0] leading-6">
//             <div className="mb-4">
//               <span className="font-bold text-[#001C57] block mb-2">
//                 Dr. Iqra Rahim - Homeopathy, Emergency Medicine & Cosmetology Expert
//               </span>
//             </div>
//             <span className="font-medium text-[#4f4f4f]">
//               Experience personalized healthcare that blends traditional homeopathy with modern medical expertise. Get{" "}
//             </span>
//             <span className="font-bold text-[#001C57]">
//               holistic healing,
//             </span>
//             <span className="font-medium text-[#4f4f4f]">
//               {" "}emergency care guidance, and advanced cosmetology treatments from the comfort of your home.
//               Ready to achieve balance, wellness, and confidence?{" "}
//             </span>
//             <span className="font-bold text-[#001C57]">Get Started</span>
//             <span className="font-medium text-[#4f4f4f]">
//               {" "}or Book a Consultation today.
//             </span>
//           </div>

//           {/* CTA Button */}
//           <div className="flex justify-center lg:justify-start">
//             <Button
//               className="h-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-4 sm:py-5 rounded-xl shadow-[-8px_8px_28px_#0000000f] 
//               bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] mb-12 sm:mb-20"
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

//         {/* Right Side: Doctor Image + Cards */}
//         <div className="relative mt-12 lg:mt-0">
//           {/* Doctor Image */}
//           <div className="relative w-[280px] sm:w-[380px] md:w-[420px] lg:w-[482px] h-auto">
//             <div className="absolute w-[70%] h-[85%] top-[15%] left-[15%] rounded-[200px_200px_16px_16px] bg-[linear-gradient(180deg,#001C57_0%,rgba(174,210,255,1)_68%)]" />
//             <img
//               className="relative w-full h-auto object-cover"
//               alt="Dr. Iqra Rahim"
//               src="/Images/Why Choose.png"
//             />
//           </div>

//           {/* Floating Cards */}
//           <div className="flex flex-col gap-4 items-center mt-6 lg:mt-0 lg:block">
//             {/* Holistic Care */}
//             <Card className="relative lg:absolute lg:top-[260px] lg:left-[-60px] bg-white rounded-[10px] shadow-[-8px_8px_28px_#0000000f] w-[220px] sm:w-[240px]">
//               <CardContent className="flex items-center gap-3 px-4 py-2.5">
//                 <img className="w-5 h-5" alt="Frame" src="/figmaAssets/frame-5-1.svg" />
//                 <div className="font-manrope font-bold text-[#001C57] text-sm leading-5">
//                   Holistic Healthcare Solutions
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Happy Patients */}
//             <Card className="relative lg:absolute lg:top-[40px] lg:right-[-60px] rounded-[9.37px] shadow-[3.12px_9.37px_21.85px_#0000000f] 
//               [background:radial-gradient(50%_50%_at_46%_-32%,rgba(255,255,255,1)_34%,rgba(238,249,255,1)_98%)] w-[220px] sm:w-[240px] h-[90px] sm:h-[100px]">
//               <CardContent className="p-3 h-full flex items-center justify-between">
//                 <div className="flex -space-x-2">
//                   {customerImages.map((src, index) => (
//                     <img key={index} className="w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full border-2 border-white" alt="Patient" src={src} />
//                   ))}
//                 </div>
//                 <div className="text-right">
//                   <div className="font-manrope text-base sm:text-[20px]">
//                     <span className="font-bold">1500</span>
//                     <span className="font-extrabold text-[#001C57]">+</span>
//                   </div>
//                   <div className="font-manrope font-bold text-[#001C57] text-xs sm:text-sm">
//                     Satisfied Patients
//                   </div>
//                   <div className="flex items-center justify-end gap-1 mt-1">
//                     <img className="w-[55px] sm:w-[75px]" alt="Stars" src="/figmaAssets/group-6.png" />
//                     <div className="font-manrope font-bold text-gray-500 text-[9px] sm:text-[10px]">
//                       (4.9 Stars)
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Testimonial */}
//             <Card className="relative lg:absolute lg:top-[380px] lg:right-[-80px] rounded-xl shadow-[3.12px_9.37px_21.85px_#0000000f] 
//               bg-[linear-gradient(131deg,rgba(251,253,255,1)_0%,rgba(233,246,255,1)_100%)] w-[240px] sm:w-[280px] h-[75px] sm:h-[85px]">
//               <CardContent className="p-4 h-full flex flex-col justify-center relative">
//                 <div className="font-manrope font-medium text-[12px] sm:text-[13px] text-[#3d3d3d]">
//                   "Dr. Iqra's holistic approach transformed my health. Professional care with genuine compassion!"
//                 </div>
//                 <img className="absolute w-[28px] sm:w-[40px] top-[-20px] sm:top-[-28px] left-3" alt="Quote" src="/figmaAssets/vector-3.svg" />
//               </CardContent>
//             </Card>

//             {/* Specializations Card */}
//             <Card className="relative lg:absolute lg:top-[140px] lg:left-[-80px] bg-white rounded-[10px] shadow-[-8px_8px_28px_#0000000f] w-[200px] sm:w-[220px] lg:block hidden">
//               <CardContent className="flex flex-col gap-1 px-3 py-3">
//                 <div className="font-manrope font-bold text-[#001C57] text-xs leading-4 mb-1">
//                   Specializations:
//                 </div>
//                 <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                   • Homeopathy (B.H.M.S.)
//                 </div>
//                 <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                   • Emergency Medicine (P.G.D.E.M.)
//                 </div>
//                 <div className="font-manrope font-medium text-[#4f4f4f] text-[10px] leading-3">
//                   • Medical Cosmetology
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//         </div>
//       </div>

//       {/* Wave Background */}
//       <img
//         className="absolute w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[627px] bottom-0 left-0"
//         alt="Vector"
//         src="/figmaAssets/vector-1-1.svg"
//       />
//     </div>
//   );
// };
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustedLogos = "/figmaAssets/group-10.png";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full bg-[linear-gradient(166deg,rgba(242,250,255,1)_0%,rgba(255,255,255,1)_88%)] relative">
      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[119px] pb-[10px] lg:pb-[10px] max-w-full overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 max-w-[552px] text-center lg:text-left">
          {/* Main Heading */}
          <div className="mb-8 pt-12">
            <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-normal text-[#4f4f4f] mb-6">
              Your{" "}
              <span className="text-[#001C57] font-normal">
                trusted partner
              </span>
              <br className="hidden lg:block" />
              in holistic healthcare.
            </h1>
          </div>

          {/* Hero Text - Reduced */}
          <div className="mb-12 mt-8 font-manrope font-normal text-sm sm:text-base tracking-[0] leading-6">
            <div className="mb-4">
              <span className="font-bold text-[#001C57] block mb-2">
                Dr. Iqra Rahim - Homeopathy, Emergency Medicine & Cosmetology Expert
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
          <div className="flex justify-center lg:justify-start">
            <Button
              className="h-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-4 sm:py-5 rounded-xl shadow-[-8px_8px_28px_#0000000f] 
              bg-[linear-gradient(142deg,#4A90E2_0%,#001C57_100%)] mb-12 sm:mb-20"
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

        {/* Right Side: Doctor Image + Cards - Completely Redesigned */}
        <div className="relative mt-12 lg:mt-0 flex flex-col items-center">
          {/* Doctor Image Container */}
          <div className="relative w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto mb-8">
            {/* Background Shape */}
            <div className="absolute w-[75%] h-[80%] top-[20%] left-[12.5%] rounded-[200px_200px_16px_16px] bg-[linear-gradient(180deg,#001C57_0%,rgba(174,210,255,1)_68%)]" />
            
            {/* Doctor Image */}
            <img
              className="relative w-full h-auto object-cover z-10"
              alt="Dr. Iqra Rahim"
              src="/Images/Why Choose.png"
            />
          </div>

          {/* Redesigned Cards Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-[500px]">
            {/* Holistic Care Card */}
            <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[240px] sm:w-[220px] transform hover:scale-105 transition-transform duration-300">
              <CardContent className="flex items-center gap-3 px-4 py-4">
                <div className="w-8 h-8 bg-[#001C57] rounded-full flex items-center justify-center flex-shrink-0">
                  <img className="w-4 h-4" alt="Frame" src="/figmaAssets/frame-5-1.svg" />
                </div>
                <div className="font-manrope font-bold text-[#001C57] text-sm leading-5">
                  Holistic Healthcare Solutions
                </div>
              </CardContent>
            </Card>

            {/* Specializations Card */}
            <Card className="bg-white rounded-[12px] shadow-[-8px_8px_28px_#0000001a] w-[240px] sm:w-[220px] transform hover:scale-105 transition-transform duration-300">
              <CardContent className="flex flex-col gap-2 px-4 py-4">
                <div className="font-manrope font-bold text-[#001C57] text-sm leading-4 mb-1">
                  Specializations:
                </div>
                <div className="space-y-1">
                  <div className="font-manrope font-medium text-[#4f4f4f] text-xs leading-4">
                    • Homeopathy (B.H.M.S.)
                  </div>
                  <div className="font-manrope font-medium text-[#4f4f4f] text-xs leading-4">
                    • Emergency Medicine (P.G.D.E.M.)
                  </div>
                  <div className="font-manrope font-medium text-[#4f4f4f] text-xs leading-4">
                    • Medical Cosmetology
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Trust Element */}
          {/* <div className="mt-6 text-center">
            <div className="font-manrope text-sm text-[#4f4f4f] mb-2">
              Trusted by patients across the globe
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img className="w-[60px]" alt="Stars" src="/figmaAssets/group-6.png" />
                <span className="font-manrope font-bold text-[#001C57] text-sm">4.9/5</span>
              </div>
              <span className="text-[#4f4f4f] text-sm">•</span>
              <span className="font-manrope font-bold text-[#001C57] text-sm">1500+ Patients</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Wave Background */}
      <img
        className="absolute w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[627px] bottom-0 left-0"
        alt="Vector"
        src="/figmaAssets/vector-1-1.svg"
      />
    </div>
  );
};