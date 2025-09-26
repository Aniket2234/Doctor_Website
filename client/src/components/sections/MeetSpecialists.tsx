import React from "react";
import { Phone } from "lucide-react";

const specialists = [
  {
    name: "Dr. Iqra Rahi",
    specialty: "Holistic Healthcare Philosophy",
    image: "./Images/Doc1.png",
    description: "Health is not just the absence of illness but the presence of balance, confidence, and overall well-being. My approach integrates scientific medical training with holistic healing principles and modern aesthetic care to ensure every patient receives personalized treatment with compassion, care, and professionalism. With expertise spanning Homeopathic Medicine, Emergency Care, and Medical Cosmetology, I bring a unique blend of traditional wisdom and modern medical precision.",
    gradient: "bg-gradient-to-br from-sky-400 to-sky-500"
  }
];

export const MeetSpecialists = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header Section */}
        <div className="text-center py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-manrope">
            <span style={{ color: '#001C57' }}>Vision & Approach:</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gray-700">Holistic healing with modern precision</span>
          </h2>
          <div className="w-full max-w-3xl mx-auto font-manrope font-semibold text-gray-500 text-sm sm:text-base text-center tracking-[0] leading-5 sm:leading-6 px-2 sm:px-4">
            Dr. Iqra Rahi believes that true healthcare goes beyond treating symptoms. Her philosophy centers on 
            achieving balance, confidence, and overall well-being through a unique integration of traditional and modern medicine.
          </div>
        </div>

        {/* Dr. Iqra Rahi Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8" style={{ background: 'linear-gradient(to bottom right, #001C57, #003875)' }}>
              {/* Mobile Layout (Stack vertically) */}
              <div className="flex flex-col sm:hidden">
                {/* Doctor Image - Mobile */}
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-48 bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-end justify-center">
                    <img
                      src={specialists[0].image}
                      alt={specialists[0].name}
                      className="w-36 h-44 object-cover object-top rounded-lg"
                    />
                  </div>
                </div>

                {/* Doctor Info - Mobile */}
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-3">
                    {specialists[0].name}
                  </h3>
                  <p className="text-sm text-white/80 font-medium mb-3">
                    {specialists[0].specialty}
                  </p>
                  <p className="text-white/90 leading-relaxed mb-6 text-sm px-2">
                    {specialists[0].description}
                  </p>

                  <button className="w-full bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation">
                    <Phone size={18} />
                    Book consultation
                  </button>
                </div>
              </div>

              {/* Tablet Layout (Stack vertically with larger elements) */}
              <div className="hidden sm:flex md:hidden flex-col items-center">
                {/* Doctor Image - Tablet */}
                <div className="flex justify-center mb-8">
                  <div className="w-52 h-64 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-end justify-center">
                    <img
                      src={specialists[0].image}
                      alt={specialists[0].name}
                      className="w-44 h-56 object-cover object-top rounded-lg"
                    />
                  </div>
                </div>

                {/* Doctor Info - Tablet */}
                <div className="text-white text-center max-w-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {specialists[0].name}
                  </h3>
                  <p className="text-base text-white/80 font-medium mb-4">
                    {specialists[0].specialty}
                  </p>
                  <p className="text-white/90 leading-relaxed mb-6 text-base">
                    {specialists[0].description}
                  </p>

                  <button className="bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mx-auto min-h-[48px] touch-manipulation">
                    <Phone size={18} />
                    Book consultation
                  </button>
                </div>
              </div>

              {/* Desktop Layout (Side by side) */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {/* Doctor Image Container - Desktop */}
                <div className="flex-shrink-0">
                  <div className="w-56 lg:w-64 h-64 lg:h-72 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-end justify-center">
                    <img
                      src={specialists[0].image}
                      alt={specialists[0].name}
                      className="w-48 lg:w-56 h-56 lg:h-64 object-cover object-top rounded-lg"
                    />
                  </div>
                </div>

                {/* Doctor Info - Desktop */}
                <div className="flex-1 text-white">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-1">
                      {specialists[0].name}
                    </h3>
                    <p className="text-base lg:text-lg text-white/80 font-medium">
                      {specialists[0].specialty}
                    </p>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6 text-base lg:text-lg">
                    {specialists[0].description}
                  </p>

                  <button className="bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 min-h-[48px] touch-manipulation">
                    <Phone size={18} />
                    Book consultation
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};