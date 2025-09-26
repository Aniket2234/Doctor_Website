import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="w-full max-w-[778px] mx-auto rounded-[28px] border-none shadow-[3.12px_9.37px_21.85px_#0000000f] [background:radial-gradient(50%_50%_at_41%_-10%,rgba(53,189,255,1)_38%,rgba(0,140,208,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[28px] before:[background:linear-gradient(96deg,rgba(197,236,255,1)_0%,rgba(149,221,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="p-0 relative h-[340px] overflow-hidden">
          <div className="flex h-full">
            <div className="relative w-[597px] h-full flex-shrink-0">
              <img
                className="absolute w-[597px] h-[321px] top-[49px] left-0"
                alt="Mask group"
                src="/figmaAssets/mask-group.png"
              />
              <img
                className="absolute w-[289px] h-[141px] top-0 left-0"
                alt="Doctor free PNG"
                src="/figmaAssets/doctor-free-png-image-2.png"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 py-8 relative">
              <h3 className="[font-family:'Manrope',Helvetica] font-extrabold text-primary-blues50 text-2xl tracking-[0] leading-10 mb-4">
                Dr. Sarah Johnson (Cardiologist)
              </h3>

              <p className="[font-family:'Manrope',Helvetica] font-semibold text-neutrals-0 text-base tracking-[0] leading-6 mb-8">
                Heart health is Dr. Wong&apos;s passion, and her approach to
                cardiology integrates cutting-edge technology with compassionate
                care. She&apos;s a respected voice in the prevention of heart
                disease and a trusted partner to her patients on their journey
                to wellness.
              </p>

              <Button className="inline-flex items-center gap-3 px-5 py-4 bg-primary-blues50 rounded-xl h-auto hover:bg-primary-blues50/90 w-fit">
                <span className="bg-[linear-gradient(90deg,rgba(0,125,170,1)_0%,rgba(21,178,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-xl [font-family:'Manrope',Helvetica] tracking-[0] leading-6 whitespace-nowrap">
                  Book appointment
                </span>
                <ArrowRightIcon className="w-[22px] h-[22px]" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
