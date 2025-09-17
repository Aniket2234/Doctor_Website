import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SupportSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="relative w-full max-w-[778px] mx-auto rounded-[28px] border-none shadow-[3.12px_9.37px_21.85px_#0000000f] [background:radial-gradient(50%_50%_at_41%_-10%,rgba(53,189,255,1)_38%,rgba(0,140,208,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(96deg,rgba(197,236,255,1)_0%,rgba(149,221,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="relative p-0 h-[340px] overflow-hidden">
          <div className="absolute w-full h-full left-[-19px]">
            <img
              className="absolute w-[797px] h-[352px] top-9 left-0"
              alt="Mask group"
              src="/figmaAssets/mask-group-1.png"
            />

            <img
              className="absolute w-[135px] h-[180px] top-0 left-[57px]"
              alt="Doctor PNG clipart"
              src="/figmaAssets/doctor-png-clipart-2.png"
            />
          </div>

          <div className="absolute top-20 left-[318px] right-6">
            <h2 className="[font-family:'Manrope',Helvetica] font-extrabold text-primary-blues50 text-2xl tracking-[0] leading-10 mb-4">
              Dr. Mark Lee (Dermatologist )
            </h2>

            <p className="[font-family:'Manrope',Helvetica] font-semibold text-neutrals-0 text-base tracking-[0] leading-6 mb-8">
              Dr. Lee is a visionary in dermatology, advancing treatments for
              skin health with a gentle, holistic approach. His dedication to
              clinical excellence and patient education has made him a leader in
              dermatological care. He&apos;s known for his precision and
              commitment to patient-centered care.
            </p>

            <Button className="gap-3 px-5 py-4 bg-primary-blues50 hover:bg-primary-blues50/90 rounded-xl h-auto">
              <span className="bg-[linear-gradient(90deg,rgba(0,125,170,1)_0%,rgba(21,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-xl [font-family:'Manrope',Helvetica] tracking-[0] leading-6 whitespace-nowrap">
                Book appointment
              </span>
              <ArrowRightIcon className="w-[22px] h-[22px]" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
