import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TeamOverview = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="relative">
        <img
          className="absolute w-0.5 h-[117px] top-[214px] left-[274px]"
          alt="Line"
          src="/figmaAssets/line-2.svg"
        />
        <img
          className="absolute w-0.5 h-[117px] top-[50px] left-[274px]"
          alt="Line"
          src="/figmaAssets/line-2.svg"
        />

        <div className="relative">
          <div className="w-[319px] h-[284px] mx-auto rounded-3xl border-[none] shadow-[3.12px_9.37px_21.85px_#0000000f] [background:radial-gradient(50%_50%_at_41%_-10%,rgba(255,255,255,1)_44%,rgba(206,239,255,1)_98%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-3xl before:[background:linear-gradient(96deg,rgba(192,234,255,1)_0%,rgba(78,198,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <img
              className="absolute w-[374px] h-[398px] top-[-116px] left-[-18px]"
              alt="Doctor PNG images"
              src="/figmaAssets/doctor-png-images-1.png"
            />
          </div>

          <Card className="absolute top-[212px] left-1/2 transform -translate-x-1/2 bg-neutrals-0 rounded-[10px] shadow-[-8px_8px_28px_#0000000f]">
            <CardContent className="flex items-center gap-3 px-6 py-2">
              <img
                className="w-7 h-7"
                alt="Frame"
                src="/figmaAssets/frame-5-1.svg"
              />
              <div className="font-manrope font-bold text-primary-blues700 text-base tracking-[0] leading-5 whitespace-nowrap">
                Best Certified Team of Specialists
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center py-16">
        <div className="w-[740px] mx-auto font-manrope font-semibold text-neutrals-300 text-base text-center tracking-[0] leading-6">
          Our team of specialists is at the forefront of medical innovation.
          Each specialist brings a unique blend of expertise, empathy, and
          experience to ensure that your health is in the best hands:
        </div>
      </div>
    </section>
  );
};