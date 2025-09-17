import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StatisticsSection = (): JSX.Element => {
  const statisticsData = [
    {
      id: "online-consultations",
      icon: "/figmaAssets/frame-5-6.svg",
      title: "Online Consultations",
      description:
        "Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.",
      width: "w-[567px]",
      height: "h-[280px]",
      position: "col-span-2",
      descriptionWidth: "w-[446px]",
    },
    {
      id: "booking-appointments",
      icon: "/figmaAssets/frame-5-5.svg",
      title: "Booking Appointments",
      description:
        "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.",
      width: "w-[370px]",
      height: "h-[280px]",
      position: "col-span-1",
      descriptionWidth: "w-[253px]",
    },
    {
      id: "prescriptions",
      icon: "/figmaAssets/frame-5-2.svg",
      title: "Prescriptions",
      description:
        "Receive and renew prescriptions digitally after your consultation with our specialists .",
      width: "w-[299px]",
      height: "h-[260px]",
      position: "col-span-1",
      descriptionWidth: "w-[219px]",
    },
    {
      id: "medical-notes",
      icon: "/figmaAssets/frame-5.svg",
      title: "Medical Notes",
      description:
        "Obtain necessary medical notes for work or school with only a few clicks of hassle.",
      width: "w-[299px]",
      height: "h-[260px]",
      position: "col-span-1",
      descriptionWidth: "w-[219px]",
    },
    {
      id: "medicine-refills",
      icon: "/figmaAssets/frame-5-3.svg",
      title: "Medicine Refills",
      description:
        "Skip the pharmacy queues and save time + energy by ordering medicine refills online.",
      width: "w-[299px]",
      height: "h-[260px]",
      position: "col-span-1",
      descriptionWidth: "w-[219px]",
    },
  ];

  return (
    <section className="w-full max-w-[977px] mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {statisticsData.map((item, index) => (
          <Card
            key={item.id}
            className={`${item.width} ${item.height} ${item.position} bg-white rounded-3xl overflow-hidden border-[none] shadow-[3.12px_9.37px_21.85px_#0000000f] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-3xl before:[background:linear-gradient(96deg,rgba(197,236,255,1)_0%,rgba(149,221,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
          >
            <CardContent className="p-10 relative z-10">
              <img className="w-11 h-11 mb-6" alt="Frame" src={item.icon} />

              <h3 className="[font-family:'Manrope',Helvetica] font-bold text-primary-blues700 text-xl tracking-[0] leading-5 whitespace-nowrap mb-4">
                {item.title}
              </h3>

              <p
                className={`${item.descriptionWidth} [font-family:'Manrope',Helvetica] font-semibold text-neutrals-500 text-sm tracking-[0] leading-6`}
              >
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
