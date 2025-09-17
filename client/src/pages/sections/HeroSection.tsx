import {
  ArrowRightIcon,
  CalendarIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const HeroSection = (): JSX.Element => {
  // Inject unique CSS styles
  React.useEffect(() => {
    const styleId = 'hero-section-unique-styles-xyz123';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .hero-heading-custom-xyz123 {
          font-family: 'Manrope', Helvetica !important;
          font-weight: bold !important;
          color: #001C57 !important;
          font-size: 32px !important;
          letter-spacing: 0 !important;
          line-height: 40px !important;
          white-space: nowrap !important;
          margin-bottom: 82px !important;
        }
        .hero-button-custom-xyz123 {
          background-color: #001C57 !important;
        }
        .hero-button-custom-xyz123:hover {
          background-color: #002366 !important;
        }
        .hero-border-custom-xyz123::before {
          background: linear-gradient(96deg, #001C57 0%, #001C57 100%) !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const formFields = [
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter Your Email Address",
      icon: MailIcon,
      width: "w-[257px]",
    },
    {
      id: "contact",
      label: "Contact Number",
      placeholder: "Enter Your Contact Number",
      icon: PhoneIcon,
      width: "w-[257px]",
    },
    {
      id: "date",
      label: "Date of Appointment",
      placeholder: "Select Date of Appointment",
      icon: CalendarIcon,
      width: "w-[257px]",
    },
  ];

  return (
    <section 
      className="w-full max-w-[1166px] mx-auto rounded-[28px] overflow-hidden border-[none] shadow-[3.12px_9.37px_21.85px_#0000000f] relative py-[38px] px-10 hero-border-custom-xyz123"
      style={{
        background: 'radial-gradient(50% 50% at 41% -10%, rgba(255,255,255,1) 33%, rgba(248,253,255,1) 98%)',
      }}
    >
      <div
        className="absolute inset-0 p-0.5 rounded-[28px] z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(96deg, #001C57 0%, #001C57 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      
      <h2 className="hero-heading-custom-xyz123">
        Easily book an appointment in 3 simple steps.
      </h2>

      <div className="flex items-start gap-[80px] justify-between">
        <div className="flex gap-[80px]">
          {formFields.map((field) => (
            <div
              key={field.id}
              className={`${field.width} h-[108px] flex flex-col`}
            >
              <div className="flex items-center gap-2 mb-3">
                <field.icon className="w-8 h-8 text-neutrals-400" />
                <Label
                  htmlFor={field.id}
                  className="[font-family:'Manrope',Helvetica] font-semibold text-neutrals-400 text-base tracking-[0] leading-6"
                >
                  {field.label}
                </Label>
              </div>

              <div className="relative">
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full h-[60px] bg-white rounded-xl border border-solid border-[#e7e7e7] px-[18px] [font-family:'Manrope',Helvetica] font-semibold text-neutrals-100 text-base tracking-[0] leading-6 placeholder:text-neutrals-100"
                />
              </div>
            </div>
          ))}
        </div>

        <Button 
          className="flex gap-2 px-5 py-[18px] items-center rounded-xl shadow-[-8px_8px_28px_#0000000f] h-auto hero-button-custom-xyz123"
        >
          <span className="font-bold text-neutrals-0 text-2xl [font-family:'Manrope',Helvetica] tracking-[0] leading-6 whitespace-nowrap">
            Book Now
          </span>
          <ArrowRightIcon className="w-5 h-5 text-neutrals-0" />
        </Button>
      </div>
    </section>
  );
};