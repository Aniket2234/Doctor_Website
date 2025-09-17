import React from "react";

export const MeetOurTeamSection = (): JSX.Element => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description:
        "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.",
    },
    {
      number: "2",
      title: "Choose Your Service",
      description:
        "Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.",
    },
    {
      number: "3",
      title: "Meet Your Doctor",
      description:
        "Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.",
    },
  ];

  return (
    <div className="w-full max-w-[420px] flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-[18px] items-start">
          <div className="w-[52px] h-[52px] rounded-full bg-[linear-gradient(142deg,rgba(167,226,255,1)_0%,rgba(0,149,222,1)_100%)] flex items-center justify-center flex-shrink-0">
            <div className="[font-family:'Manrope',Helvetica] font-bold text-neutrals-0 text-[32px] leading-8">
              {step.number}
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1 pt-[5px]">
            <h3 className="[font-family:'Manrope',Helvetica] font-bold text-neutrals-900 text-[32px] leading-10">
              {step.title}
            </h3>
            <p className="[font-family:'Manrope',Helvetica] font-semibold text-neutrals-500 text-sm leading-6">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
