import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonialCards = [
  {
    image: "data:image/jpeg;base64,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",
    quote: "Dr. Iqra's homeopathic treatment for my chronic migraines has been life-changing. Her holistic approach truly works wonders.",
    author: "Priya Sharma",
    type: "homeopathy"
  },
  {
    image: "data:image/jpeg;base64,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",
    quote: "The emergency medicine guidance Dr. Iqra provided during my father's cardiac episode was invaluable. Her quick thinking saved his life.",
    author: "Rajesh Kumar",
    type: "emergency"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9sM64vcxXrE0dkKa_vg2X16fEuzBDqwflQxAubhLS9tpS8-_LRirBKo&s",
    quote: "The cosmetology treatments have boosted my confidence tremendously. Dr. Iqra's expertise in skin rejuvenation is exceptional.",
    author: "Ananya Patel",
    type: "cosmetology"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuTMRECCaDPeGM7MPX5gR8GlwG_EapluEKD738G5jGdbqTUXZdg6oKP0&s",
    quote: "Managing my daughter's allergies with Dr. Iqra's natural homeopathic approach has been incredibly effective and safe.",
    author: "Vikram Singh",
    type: "homeopathy"
  }
];

// export const TestimonialsOverview = (): JSX.Element => {
//   const [stats, setStats] = useState({
//     consultations: 0,
//     treatments: 0,
//     satisfaction: 0,
//     specialists: 0
//   });

//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const [statsVisible, setStatsVisible] = useState(false);
//   const cardRefs = useRef([]);
//   const statsRef = useRef(null);

//   // Intersection Observer for lazy loading animations
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '50px 0px -50px 0px'
//     };

//     const cardObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = parseInt(entry.target.dataset.index);
//           setVisibleCards(prev => new Set([...prev, index]));
//         }
//       });
//     }, observerOptions);

//     const statsObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && !statsVisible) {
//           setStatsVisible(true);
//         }
//       });
//     }, observerOptions);

//     // Observe cards
//     cardRefs.current.forEach((ref) => {
//       if (ref) cardObserver.observe(ref);
//     });

//     // Observe stats section
//     if (statsRef.current) {
//       statsObserver.observe(statsRef.current);
//     }

//     return () => {
//       cardObserver.disconnect();
//       statsObserver.disconnect();
//     };
//   }, [statsVisible]);

//   // Animate stats when visible
//   useEffect(() => {
//     if (!statsVisible) return;

//     const targetStats = {
//       consultations: 5000,
//       treatments: 3200,
//       satisfaction: 98,
//       specialists: 15
//     };

//     const animateCounter = (target, key) => {
//       let current = 0;
//       const increment = target / 100;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           setStats(prev => ({ ...prev, [key]: target }));
//           clearInterval(timer);
//         } else {
//           setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
//         }
//       }, 20);
//     };

//     setTimeout(() => {
//       animateCounter(targetStats.consultations, 'consultations');
//       animateCounter(targetStats.treatments, 'treatments');
//       animateCounter(targetStats.satisfaction, 'satisfaction');
//       animateCounter(targetStats.specialists, 'specialists');
//     }, 500);
//   }, [statsVisible]);

//   return (
//     <section className="w-full relative bg-gradient-to-br from-blue-50 to-white">
//       {/* Header */}
//       <div className="text-center py-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
//           <span style={{ color: '#001C57' }}>Patient Testimonials:</span>
//           <br />
//           <span className="text-gray-700">Hear from Those We've Cared For</span>
//         </h2>
//         <div className="w-full max-w-3xl mx-auto font-manrope font-semibold text-gray-500 text-base text-center tracking-[0] leading-6 px-4">
//           Discover the difference we make through the voices of those we've served
//         </div>
//       </div>

//       {/* Testimonial Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-8 mb-16">
//         {testimonialCards.map((testimonial, index) => (
//           <div
//             key={index}
//             ref={el => cardRefs.current[index] = el}
//             data-index={index}
//             className={`transform transition-all duration-700 ease-out ${
//               visibleCards.has(index) 
//                 ? 'translate-y-0 opacity-100' 
//                 : 'translate-y-8 opacity-0'
//             }`}
//             style={{ transitionDelay: `${index * 150}ms` }}
//           >
//             <Card
//               className="h-full rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               style={{
//                 background: 'radial-gradient(50% 50% at 0% 12%, rgba(230,240,255,1) 2%, rgba(253,254,255,1) 50%)',
//                 border: `1px solid rgba(0, 28, 87, 0.1)`
//               }}
//             >
//               <CardContent className="flex items-start gap-5 px-10 py-7 h-full">
//                 <img
//                   className="w-[76px] h-[76px] rounded-full object-cover flex-shrink-0"
//                   alt="Patient"
//                   src={testimonial.image}
//                   loading="lazy"
//                   style={{ border: `2px solid rgba(0, 28, 87, 0.1)` }}
//                 />
//                 <div className="flex-1 font-manrope font-normal text-gray-700 text-base tracking-[0] leading-6 min-h-[120px] flex flex-col justify-between">
//                   <span className="font-medium text-gray-600 leading-6 flex-1">
//                     "{testimonial.quote}"
//                   </span>
//                   <span className="font-bold text-gray-700 leading-6 mt-3 block">
//                     - {testimonial.author}
//                   </span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* Statistics Section */}
//       <div 
//         ref={statsRef}
//         className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8 pb-16 text-center"
//       >
//         <div className={`group transform transition-all duration-1000 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
//             {stats.consultations >= 5000 ? '5,000+' : stats.consultations.toLocaleString() + '+'}
//           </div>
//           <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
//             Successful Consultations
//           </div>
//         </div>

//         <div className={`group transform transition-all duration-1000 delay-100 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
//             {stats.treatments >= 3200 ? '3,200+' : stats.treatments.toLocaleString() + '+'}
//           </div>
//           <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
//             Holistic Treatments
//           </div>
//         </div>

//         <div className={`group transform transition-all duration-1000 delay-200 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
//             {stats.satisfaction}%
//           </div>
//           <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
//             Patient Satisfaction Rate
//           </div>
//         </div>

//         <div className={`group transform transition-all duration-1000 delay-300 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
//             {stats.specialists}+
//           </div>
//           <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
//             Years Experience
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
export const TestimonialsOverview = (): JSX.Element => {
  const [stats, setStats] = useState({
    consultations: 0,
    treatments: 0,
    satisfaction: 0
  });

  const [visibleCards, setVisibleCards] = useState(new Set());
  const [statsVisible, setStatsVisible] = useState(false);
  const cardRefs = useRef([]);
  const statsRef = useRef(null);

  // Intersection Observer for lazy loading animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
        }
      });
    }, observerOptions);

    // Observe cards
    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    // Observe stats section
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      cardObserver.disconnect();
      statsObserver.disconnect();
    };
  }, [statsVisible]);

  // Animate stats when visible
  useEffect(() => {
    if (!statsVisible) return;

    const targetStats = {
      consultations: 5000,
      treatments: 3200,
      satisfaction: 98
    };

    const animateCounter = (target, key) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 20);
    };

    setTimeout(() => {
      animateCounter(targetStats.consultations, 'consultations');
      animateCounter(targetStats.treatments, 'treatments');
      animateCounter(targetStats.satisfaction, 'satisfaction');
    }, 500);
  }, [statsVisible]);

  return (
    <section className="w-full relative bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
          <span style={{ color: '#001C57' }}>Patient Testimonials:</span>
          <br />
          <span className="text-gray-700">Hear from Those We've Cared For</span>
        </h2>
        <div className="w-full max-w-3xl mx-auto font-manrope font-semibold text-gray-500 text-base text-center tracking-[0] leading-6 px-4">
          Discover the difference we make through the voices of those we've served
        </div>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-8 mb-16">
        {testimonialCards.map((testimonial, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            data-index={index}
            className={`transform transition-all duration-700 ease-out ${
              visibleCards.has(index) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Card
              className="h-full rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'radial-gradient(50% 50% at 0% 12%, rgba(230,240,255,1) 2%, rgba(253,254,255,1) 50%)',
                border: `1px solid rgba(0, 28, 87, 0.1)`
              }}
            >
              <CardContent className="flex items-start gap-5 px-10 py-7 h-full">
                <img
                  className="w-[76px] h-[76px] rounded-full object-cover flex-shrink-0"
                  alt="Patient"
                  src={testimonial.image}
                  loading="lazy"
                  style={{ border: `2px solid rgba(0, 28, 87, 0.1)` }}
                />
                <div className="flex-1 font-manrope font-normal text-gray-700 text-base tracking-[0] leading-6 min-h-[120px] flex flex-col justify-between">
                  <span className="font-medium text-gray-600 leading-6 flex-1">
                    "{testimonial.quote}"
                  </span>
                  <span className="font-bold text-gray-700 leading-6 mt-3 block">
                    - {testimonial.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div 
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-8 pb-16 text-center"
      >
        <div className={`group transform transition-all duration-1000 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
            {stats.consultations >= 5000 ? '5,000+' : stats.consultations.toLocaleString() + '+'}
          </div>
          <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
            Successful Consultations
          </div>
        </div>

        <div className={`group transform transition-all duration-1000 delay-100 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
            {stats.treatments >= 3200 ? '3,200+' : stats.treatments.toLocaleString() + '+'}
          </div>
          <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
            Holistic Treatments
          </div>
        </div>

        <div className={`group transform transition-all duration-1000 delay-200 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-4xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110 font-manrope" style={{ color: '#001C57' }}>
            {stats.satisfaction}%
          </div>
          <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
            Patient Satisfaction Rate
          </div>
        </div>
      </div>
    </section>
  );
};