// import React from "react";
// import { Header } from "@/components/sections/Header";
// import { HeroSection } from "@/components/sections/HeroSection";
// import { ServicesOverview } from "@/components/sections/ServicesOverview";
// import { ServicesGrid } from "@/components/sections/ServicesGrid";
// import { StatisticsSection as NewStatisticsSection } from "@/components/sections/StatisticsSection";
// import { HowItWorksOverview } from "@/components/sections/HowItWorksOverview";
// import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
// import { TeamOverview } from "@/components/sections/TeamOverview";
// import { MeetOurTeamSection } from "./sections/MeetOurTeamSection";
// import { TestimonialsOverview } from "@/components/sections/TestimonialsOverview";
// import { TestimonialsSection } from "./sections/TestimonialsSection";
// import { MeetSpecialists } from "@/components/sections/MeetSpecialists";
// import { ContactForm } from "@/components/sections/ContactForm";
// import { SupportSection } from "./sections/SupportSection";
// import { Footer } from "@/components/sections/Footer";

// export const DesktopCleanBg = (): JSX.Element => {
//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       <div className="design-container bg-neutrals-0 relative flex-1">
//         {/* Header and Hero Section */}
//         <section className="relative w-full">
//           <Header />
//           <HeroSection />
//         </section>

//         {/* Services Section */}
//         <ServicesOverview />
//         <ServicesGrid />

//                 {/* Testimonials Section */}
//                 <TestimonialsSection />
//         <TestimonialsOverview />
        

//         {/* Statistics Section */}
//         {/* <NewStatisticsSection /> */}

//         {/* How It Works Section */}
//         {/* <HowItWorksOverview /> */}
//         <HowItWorksSteps />

//         {/* Meet Our Team Section */}
//         {/* <TeamOverview />
//         <MeetOurTeamSection /> */}



//         {/* Meet Specialists Section */}
//         <MeetSpecialists />

//         {/* Support Section */}
//         <ContactForm />
//       </div>
      
//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };
import React from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatisticsSection as NewStatisticsSection } from "@/components/sections/StatisticsSection";
import { HowItWorksOverview } from "@/components/sections/HowItWorksOverview";
import HowItWorksSteps from "@/components/sections/HowItWorksSteps";
import { TeamOverview } from "@/components/sections/TeamOverview";
import { MeetOurTeamSection } from "./sections/MeetOurTeamSection";
import { TestimonialsOverview } from "@/components/sections/TestimonialsOverview";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { MeetSpecialists } from "@/components/sections/MeetSpecialists";
import { ContactForm } from "@/components/sections/ContactForm";
import { SupportSection } from "./sections/SupportSection";
import { Footer } from "@/components/sections/Footer";

export const DesktopCleanBg = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <div className="design-container bg-neutrals-0 relative flex-1">
        {/* Header and Hero Section */}
        <section id="home" className="relative w-full">
          <Header />
          <HeroSection />
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full">
          <ServicesOverview />
          <ServicesGrid />
        </section>


        {/* Testimonials Section */}
        <section id="aboutus" className="relative w-full">
          <TestimonialsSection />
          <TestimonialsOverview />
        </section>

        {/* Statistics Section */}
        {/* <NewStatisticsSection /> */}

        {/* How It Works Section */}
        <section id="how-it-works" className="relative w-full">
          {/* <HowItWorksOverview /> */}
          <HowItWorksSteps />
        </section>

        {/* Meet Our Team Section */}
        {/* <TeamOverview />
        <MeetOurTeamSection /> */}

        {/* Meet Specialists Section */}
        <section id="specialists" className="relative w-full">
          <MeetSpecialists />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full">
          <ContactForm />
        </section>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};