// import React from "react";

// export const ServicesOverview = (): JSX.Element => {
//   return (
//     <section className="w-full relative px-3 sm:px-4 py-6 sm:py-8 md:py-12">
//       <div className="max-w-6xl mx-auto">
//         {/* Main container with rounded border and light sky background */}
//         <div className="relative bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-sky-200 overflow-hidden">
//           {/* Decorative dashed lines - hidden on very small screens */}
//           <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 opacity-30 hidden xs:block">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <path
//                 d="M10,10 Q50,5 90,10"
//                 stroke="#0ea5e9"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeDasharray="5,5"
//                 className="opacity-40"
//               />
//               <path
//                 d="M5,20 Q30,15 55,20"
//                 stroke="#0ea5e9"
//                 strokeWidth="1.5"
//                 fill="none"
//                 strokeDasharray="4,4"
//                 className="opacity-30"
//               />
//             </svg>
//           </div>

//           {/* Main heading */}
//           <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-600 mb-4 leading-tight">
//               Easily book an appointment in 3 simple steps.
//             </h2>
//           </div>

//           {/* Booking form container */}
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
//             {/* Form fields container - Stack on mobile, row on larger screens */}
//             <div className="flex flex-col xl:flex-row gap-4 sm:gap-4 lg:gap-6">
              
//               {/* Form Fields Group - Stack vertically on mobile and tablets */}
//               <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row flex-1 gap-4 sm:gap-4 lg:gap-6">
                
//                 {/* Email Address Field */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                       </svg>
//                     </div>
//                     <label className="text-gray-600 font-medium text-sm sm:text-base">
//                       Email Address
//                     </label>
//                   </div>
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email Address"
//                     className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                   />
//                 </div>

//                 {/* Contact Number Field */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//                       </svg>
//                     </div>
//                     <label className="text-gray-600 font-medium text-sm sm:text-base">
//                       Contact Number
//                     </label>
//                   </div>
//                   <input
//                     type="tel"
//                     placeholder="Enter Your Contact Number"
//                     className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                   />
//                 </div>

//                 {/* Date Field */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-2 sm:mb-3">
//                     <div className="w-7 h-7 sm:w-8 sm:h-8 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
//                       </svg>
//                     </div>
//                     <label className="text-gray-600 font-medium text-sm sm:text-base">
//                       Date of Appointment
//                     </label>
//                   </div>
//                   <input
//                     type="date"
//                     placeholder="Select Date of Appointment"
//                     className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
//                   />
//                 </div>
//               </div>

//               {/* Book Now Button - Full width on mobile, auto width on larger screens */}
//               <div className="w-full xl:w-auto xl:min-w-[180px] mt-4 xl:mt-0 flex xl:items-end">
//                 <button className="w-full xl:w-auto bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-6 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px] touch-manipulation">
//                   <span>Book Now</span>
//                   <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
//                     </svg>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Additional decorative elements - hidden on small screens */}
//           <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-20 hidden sm:block">
//             <svg viewBox="0 0 100 100" className="w-full h-full">
//               <circle
//                 cx="70"
//                 cy="70"
//                 r="15"
//                 stroke="#0ea5e9"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeDasharray="3,3"
//                 className="opacity-40"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from "react";

export const ServicesOverview = (): JSX.Element => {
  // Inject unique CSS styles for services overview
  React.useEffect(() => {
    const styleId = 'services-overview-unique-styles-def789';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .overview-bg-gradient-def789 {
          background: linear-gradient(to bottom right, #f8fafc, #f1f5f9) !important;
        }
        .overview-border-def789 {
          border-color: #001C57 !important;
        }
        .overview-title-def789 {
          color: #001C57 !important;
        }
        .overview-icon-bg-def789 {
          background-color: #001C57 !important;
        }
        .overview-input-focus-def789:focus {
          border-color: transparent !important;
          box-shadow: 0 0 0 2px #001C57 !important;
        }
        .overview-button-def789 {
          background-color: #001C57 !important;
        }
        .overview-button-def789:hover {
          background-color: #002366 !important;
        }
        .overview-button-def789:active {
          background-color: #001a4d !important;
        }
        .overview-dashed-line-def789 {
          stroke: #001C57 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="w-full relative px-3 sm:px-4 py-6 sm:py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Main container with rounded border and light background */}
        <div className="relative overview-bg-gradient-def789 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border overview-border-def789 overflow-hidden">
          {/* Decorative dashed lines - hidden on very small screens */}
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 opacity-30 hidden xs:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M10,10 Q50,5 90,10"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="opacity-40 overview-dashed-line-def789"
              />
              <path
                d="M5,20 Q30,15 55,20"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4,4"
                className="opacity-30 overview-dashed-line-def789"
              />
            </svg>
          </div>

          {/* Main heading */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold overview-title-def789 mb-4 leading-tight">
              Easily book an appointment in 3 simple steps.
            </h2>
          </div>

          {/* Booking form container */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
            {/* Form fields container - Stack on mobile, row on larger screens */}
            <div className="flex flex-col xl:flex-row gap-4 sm:gap-4 lg:gap-6">
              
              {/* Form Fields Group - Stack vertically on mobile and tablets */}
              <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row flex-1 gap-4 sm:gap-4 lg:gap-6">
                
                {/* Email Address Field */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 overview-icon-bg-def789 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <label className="text-gray-600 font-medium text-sm sm:text-base">
                      Email Address
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none overview-input-focus-def789 transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Contact Number Field */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 overview-icon-bg-def789 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <label className="text-gray-600 font-medium text-sm sm:text-base">
                      Contact Number
                    </label>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Your Contact Number"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none overview-input-focus-def789 transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Date Field */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 overview-icon-bg-def789 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                    </div>
                    <label className="text-gray-600 font-medium text-sm sm:text-base">
                      Date of Appointment
                    </label>
                  </div>
                  <input
                    type="date"
                    placeholder="Select Date of Appointment"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 md:py-4 border border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none overview-input-focus-def789 transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Book Now Button - Full width on mobile, auto width on larger screens */}
              <div className="w-full xl:w-auto xl:min-w-[180px] mt-4 xl:mt-0 flex xl:items-end">
                <button className="w-full xl:w-auto overview-button-def789 text-white font-semibold px-6 py-3 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px] touch-manipulation">
                  <span>Book Now</span>
                  <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Additional decorative elements - hidden on small screens */}
          <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-20 hidden sm:block">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="70"
                cy="70"
                r="15"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3,3"
                className="opacity-40 overview-dashed-line-def789"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};