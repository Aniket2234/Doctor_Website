import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonialCards = [
  {
    image: "/public/images/A.jpg",
    quote: "Have Had A Wonderful Experience at Rahi's Clinic. Dr.Iqra Takes Her time to Listen, Understand and Advise the best possible Line Of Treatment for each concern. Besides she takes the time to explain everything you need to know about your condition and treat it with not only medication but also lifestyle changes with minimal investigation I Would definitely recommend you to Visit Rahi's Clinic for any health concerns of your family and friends.🙂",
    author: "Aarti Subramani",
    type: "general"
  },
  {
    image: "public/images/I.png",
    quote: "I had a wonderful experience with Dr. Iqra Rahi. She is extremely knowledgeable, professional, and compassionate. From the moment I walked into her clinic, I felt comfortable and well cared for. She took the time to listen to all my concerns, explained everything clearly, and made sure I was comfortable throughout the process. Her approach is both thorough and reassuring. I would highly recommend Dr. Iqra Rahi to anyone looking for a skilled and caring doctor. Truly a great professional",
    author: "Irsshad Shaaikh",
    type: "general"
  },
  {
    image: "public/images/R.png",
    quote: "Dr Iqra has been a gem of a doctor.. she is super friendly and a connect with her will feel like family and so far her treatments have been very effective.. Also is just a call away . Thanks Dr Iqra for everything!",
    author: "Reshma Khan",
    type: "general"
  },
  {
    image: "public/images/C.png",
    quote: "I had visited Dr. Rahis' clinic multiple times for my acne problem. Since longer time taking treatment from Dr. Rahi and got good result. Thank you so much Dr. Rahi for your cooperation.",
    author: "Chinmayi Raut",
    type: "dermatology"
  }
];

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
      satisfaction: 100
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
          <div className="flex flex-col items-center mb-3">
            <div className="text-4xl md:text-6xl font-bold font-manrope mb-2 transition-transform duration-300 group-hover:scale-110" style={{ color: '#001C57' }}>
              4.9
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl md:text-2xl">⭐</span>
              ))}
            </div>
            <div className="text-gray-500 text-sm md:text-base font-manrope">
              100 reviews
            </div>
          </div>
          <div className="text-gray-600 font-medium text-sm md:text-base font-manrope">
            Patient Reviews
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