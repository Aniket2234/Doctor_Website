import React from "react";

const WhyChooseDrIqra = () => {
  const features = [
    "Strong medical foundation with multi-disciplinary expertise",
    "Blend of holistic and modern medical practices",
    "Personalized, ethical, and patient-friendly approach",
    "Commitment to health, wellness, and confidence",
    "Years of experience in comprehensive patient care"
  ];

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .main-title {
            animation: fadeInUp 1s ease-out;
          }
          
          .feature-item {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .feature-item:nth-child(1) { animation-delay: 0.2s; }
          .feature-item:nth-child(2) { animation-delay: 0.4s; }
          .feature-item:nth-child(3) { animation-delay: 0.6s; }
          .feature-item:nth-child(4) { animation-delay: 0.8s; }
          .feature-item:nth-child(5) { animation-delay: 1.0s; }
          
          .image-section {
            animation: slideInRight 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          
          @media (max-width: 768px) {
            .content-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .image-section {
              order: -1 !important;
              animation: fadeInUp 1s ease-out forwards;
            }
            .main-title {
              font-size: 24px !important;
            }
            .feature-text {
              font-size: 16px !important;
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
            .feature-item {
              animation: fadeInUp 0.6s ease-out forwards;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Centered Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-manrope main-title">
            <span className="text-gray-700">Why Choose </span>
            <span style={{color: "#001C57"}}>Dr. Iqra </span>
            <span style={{color: "#001C57"}}>Rahi</span>
          </h2>
        </div>

        {/* Content Section */}
        <div style={styles.content} className="content-grid">
          {/* Left Content Section */}
          <div style={styles.contentSection}>
            <div style={styles.features}>
              {features.map((feature, index) => (
                <div key={index} style={styles.feature} className="feature-item">
                  <div style={styles.numberCircle}>{index + 1}</div>
                  <p style={styles.featureText} className="feature-text">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div style={styles.imageSection} className="image-section">
            <div style={styles.imageContainer}>
              <div style={styles.gradientBorder}>
                <div style={styles.imageWrapper}>
                  {/* Doctor image */}
                  <img
                    src="Images/Why Choose.png"
                    alt="Dr. Iqra Rahi"
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
    padding: "32px 0",
    backgroundColor: "white",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "flex-start",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    marginTop: "24px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#1F2937",
    lineHeight: "1.2",
    marginBottom: "8px",
  },
  highlight: {
    color: "rgba(32, 148, 194, 1)",
  },
  features: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  feature: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  numberCircle: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#001C57",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    flexShrink: 0,
    fontSize: "14px",
  },
  featureText: {
    color: "#6B7280",
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "0",
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
    top: "-60px",
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
    color: "#001C57",
    fontSize: "16px",
    whiteSpace: "nowrap" as const,
  },
};

export default WhyChooseDrIqra;