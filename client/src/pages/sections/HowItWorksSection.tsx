// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

// export const HowItWorksSection = (): JSX.Element => {
//   const statistics = [
//     {
//       number: "10,000+",
//       description: "Successful Consultations",
//       gradient:
//         "bg-[linear-gradient(112deg,rgba(1,121,180,1)_14%,rgba(136,216,255,1)_100%)]",
//       numberPosition: "left-0",
//     },
//     {
//       number: "2,500+",
//       description: "Healthcare Professionals",
//       gradient:
//         "bg-[linear-gradient(98deg,rgba(1,121,180,1)_0%,rgba(136,216,255,1)_95%)]",
//       numberPosition: "left-[13px]",
//     },
//     {
//       number: "98%",
//       description: "Patient Satisfaction Rate",
//       gradient:
//         "bg-[linear-gradient(111deg,rgba(1,121,180,1)_4%,rgba(136,216,255,1)_92%)]",
//       numberPosition: "left-11",
//     },
//     {
//       number: "200+",
//       description: "Top Specialists",
//       gradient:
//         "bg-[linear-gradient(116deg,rgba(1,121,180,1)_0%,rgba(136,216,255,1)_95%)]",
//       numberPosition: "left-[34px]",
//     },
//   ];

//   return (
//     <Card className="w-full max-w-fit mx-auto rounded-2xl shadow-[3.12px_9.37px_72px_#7bd3ff33]">
//       <CardContent className="flex items-center justify-center gap-12 p-10">
//         {statistics.map((stat, index) => (
//           <div
//             key={index}
//             className={`relative ${index === 0 ? "w-[198px]" : "w-[194px]"} h-[76px] ${index === 3 ? "mr-[-4.00px]" : ""}`}
//           >
//             <div
//               className={`absolute top-0 ${stat.numberPosition} ${stat.gradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-extrabold text-5xl text-center leading-[52px] [font-family:'Manrope',Helvetica] text-transparent tracking-[0] whitespace-nowrap`}
//             >
//               {stat.number}
//             </div>
//             <div
//               className={`absolute w-[190px] top-[52px] ${index === 0 ? "left-0.5" : "left-0"} [font-family:'Manrope',Helvetica] font-semibold text-neutrals-500 text-sm text-center tracking-[0] leading-6`}
//             >
//               {stat.description}
//             </div>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };
import React from "react";

const HowItWorksSteps = () => {
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
    <section style={styles.section}>
      {/* Extra responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .steps-content {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .image-section {
              order: -1 !important; /* Move image above steps */
            }
            .header-title {
              font-size: 24px !important;
            }
            .header-desc {
              font-size: 14px !important;
              padding: 0 12px;
            }
            .step-title {
              font-size: 16px !important;
            }
            .step-desc {
              font-size: 14px !important;
            }
            .doctor-image {
              max-width: 260px !important;
              top: -10px !important;
            }
            .plus-icon {
              width: 64px !important;
              height: 64px !important;
              top: -20px !important;
              right: -20px !important;
            }
            .card-text {
              font-size: 14px !important;
              white-space: normal !important;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Centered Heading + Description */}
        <div style={styles.header}>
          <h2 style={styles.title} className="header-title">
            How our <span style={styles.highlight}>platform</span> works
          </h2>
          <p style={styles.description} className="header-desc">
            Navigating your healthcare journey with HealNet is seamless. Just
            follow these steps mentioned below to proceed with your selected
            services. You can also see our FAQ section for more guidance:
          </p>
        </div>

        {/* Content Section */}
        <div style={styles.content} className="steps-content">
          {/* Left Steps Section */}
          <div style={styles.steps}>
            {steps.map((step, index) => (
              <div key={index} style={styles.step}>
                <div style={styles.numberCircle}>{step.number}</div>
                <div>
                  <h3 style={styles.stepTitle} className="step-title">
                    {step.title}
                  </h3>
                  <p style={styles.stepDescription} className="step-desc">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div style={styles.imageSection} className="image-section">
            <div style={styles.imageContainer}>
              <div style={styles.gradientBorder}>
                <div style={styles.imageWrapper}>
                  {/* Doctor image */}
                  <img
                    src="figmaAssets/doctor-png-images-1.png"
                    alt="Doctor"
                    style={styles.doctorImage}
                    className="doctor-image"
                  />
                  <img
                    src="figmaAssets/plus.png"
                    alt="Plus"
                    className="plus-icon"
                    style={{
                      position: "absolute",
                      top: "-33px",
                      right: "-45px",
                      width: "124px",
                      height: "124px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* "Best Certified Team of Specialists" Card */}
              <div style={styles.card}>
                <div style={styles.cardContent}>
                  <div style={styles.cardIcon}>
                    <img src="/figmaAssets/frame-5-1.svg" alt="" />
                  </div>
                  <div style={styles.cardText} className="card-text">
                    Best Certified Team of Specialists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    padding: "64px 0",
    backgroundColor: "white",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    marginBottom: "48px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: "16px",
  },
  highlight: {
    color: "rgba(32, 148, 194, 1)",
  },
  description: {
    color: "#6B7280",
    fontSize: "16px",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
  },
  steps: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "32px",
  },
  step: {
    display: "flex",
    alignItems: "flex-start",
    gap: "24px",
  },
  numberCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#3B82F6",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: "5px",
  },
  stepDescription: {
    color: "#6B7280",
    fontSize: "15px",
    lineHeight: "1.6",
  },
  imageSection: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative" as const,
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  gradientBorder: {
    width: "100%",
    maxWidth: "319px",
    height: "284px",
    borderRadius: "24px",
    boxShadow: "3.12px 9.37px 21.85px rgba(0, 0, 0, 0.06)",
    background:
      "radial-gradient(50% 50% at 41% -10%, #FFFFFF 44%, #CEEFFF 98%)",
    position: "relative" as const,
    overflow: "visible" as const,
    marginBottom: "20px",
  },
  imageWrapper: {
    position: "relative" as const,
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    overflow: "visible" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  doctorImage: {
    width: "100%",
    maxWidth: "374px",
    height: "auto",
    maxHeight: "398px",
    objectFit: "contain" as const,
    position: "relative" as const,
    top: "-30px",
  },
  card: {
    position: "relative" as const,
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "-8px 8px 28px rgba(0, 0, 0, 0.06)",
    padding: "16px 24px",
    width: "fit-content",
    margin: "0 auto",
    zIndex: 2,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  cardIcon: {
    width: "28px",
    height: "28px",
  },
  cardText: {
    fontWeight: "bold",
    color: "#1E40AF",
    fontSize: "16px",
    whiteSpace: "nowrap" as const,
  },
};

export default HowItWorksSteps;