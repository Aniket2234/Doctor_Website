import React from 'react';

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-gradient-to-br from-[#001C57]/10 to-white rounded-3xl border border-[#001C57]/20 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start gap-12 p-12 lg:p-16">
            {/* Left side - Image */}
            <div className="flex-shrink-0">
              <img
                src="/Images/Doctor.jpg"
                alt="Dr. Iqra Rahim - Rahi's Clinic"
                className="w-80 h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-[#001C57]">Rahi's Clinic:</span>{' '}
                  <span className="text-gray-800">Your Partner in Health & Wellness</span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                  At Rahi's Clinic, we combine the best of homeopathy, emergency medicine,
                  and cosmetology to provide holistic, patient-focused care. From managing
                  chronic health conditions and boosting immunity, to offering life-saving
                  first-aid guidance and conducting health workshops, we focus on prevention
                  as much as treatment. Our cosmetology services include skin rejuvenation,
                  anti-aging therapies, acne and scar management, and hair restoration —
                  helping you feel healthy and confident inside and out. Led by Dr. Iqra Rahim,
                  the clinic is built on a strong medical foundation, blending modern and
                  natural practices with a personalized, ethical approach for every patient.
                </p>
              </div>

              <div>
                <button className="bg-[#001C57] hover:bg-[#001C57]/90 text-white px-10 py-4 rounded-xl text-xl font-semibold transition-colors duration-200 shadow-lg">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};