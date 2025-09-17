import React from "react";
import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    id: "homeopathic",
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    title: "Homeopathic Care",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-base">
        <li>Lifestyle & immunity management</li>
        <li>
          Chronic disease management (allergies, migraines, arthritis, hormonal
          issues, skin conditions, etc.)
        </li>
        <li>Child & women’s health care</li>
      </ul>
    ),
  },
  {
    id: "emergency",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Emergency Medicine Expertise",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-base">
        <li>First aid & life support guidance</li>
        <li>
          Corporate & community health workshops (CPR, First Aid Awareness, etc.)
        </li>
        <li>Preventive health awareness</li>
      </ul>
    ),
  },
  {
    id: "cosmetology",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Cosmetology Treatments",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-base">
        <li>Skin rejuvenation therapies</li>
        <li>Anti-aging treatments</li>
        <li>Acne & scar management</li>
        <li>Hair restoration solutions</li>
        <li>Aesthetic wellness treatments</li>
      </ul>
    ),
  },
];

export const ServicesGrid = (): JSX.Element => {
  return (
    <section id="services" className="w-full py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Top <span style={{ color: "#001C57" }}>services</span> we offer
          </h2>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
            In today&apos;s fast-paced world, your health deserves the utmost
            attention and care. That&apos;s why we offer specialized services
            designed to promote wellness and holistic health:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              id={service.id}
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ border: "2px solid #001C57" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "#001C57" }}
              >
                {service.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#001C57" }}
              >
                {service.title}
              </h3>
              <div>{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};