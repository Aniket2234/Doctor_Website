import React from "react";

const stats = [
  {
    number: "10,000+",
    label: "Happy Patients"
  },
  {
    number: "2,500+", 
    label: "Consultations"
  },
  {
    number: "98%",
    label: "Satisfaction Rate"
  },
  {
    number: "200+",
    label: "Certified Doctors"
  }
];

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-primary-blues50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-3xl text-neutrals-900 mb-4">
            Healthcare Statistics - Get to know us
          </h2>
          <p className="font-manrope text-neutrals-500 text-lg max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our numbers. Here's what we've achieved together with our patients and healthcare partners.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-clash font-bold text-4xl lg:text-5xl text-primary-blues700 mb-2">
                {stat.number}
              </div>
              <div className="font-manrope font-semibold text-neutrals-500 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};