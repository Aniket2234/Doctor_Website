// import React from 'react';

// export const TestimonialsSection = (): JSX.Element => {
//   return (
//     <section className="w-full relative">
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="bg-gradient-to-br from-[#001C57]/10 to-white rounded-3xl border border-[#001C57]/20 shadow-lg overflow-hidden">
//           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 p-12 lg:p-16">
//             {/* Left side - Image */}
//             <div className="flex-shrink-0 flex justify-center lg:justify-start items-center min-h-full">
//               <img
//                 src="/Images/Doc2.png"
//                 alt="Dr. Iqra Rahi - Rahi's Clinic"
//                 className="w-80 h-[500px] object-cover rounded-2xl"
//               />
//             </div>

//             {/* Right side - Content */}
//             <div className="flex-1 space-y-8">
//               <div className="space-y-6">
//                 <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
//                   <span className="text-[#001C57]">Health Education</span>{' '}
//                   <span className="text-gray-800">& Life-Saving Skills</span>
//                 </h2>

//                 <div className="space-y-6">
//                   <div className="bg-white/60 rounded-xl p-6 border border-[#001C57]/10">
//                     <h3 className="text-2xl font-bold text-[#001C57] mb-3">Health Talk Sessions</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       Join our interactive health awareness sessions where Dr. Iqra Rahi shares 
//                       valuable insights on disease prevention, healthy lifestyle choices, and 
//                       wellness strategies. These educational talks cover topics like immunity 
//                       building, chronic disease management, mental health, and preventive care 
//                       practices that can transform your approach to health.
//                     </p>
//                   </div>

//                   <div className="bg-white/60 rounded-xl p-6 border border-[#001C57]/10">
//                     <h3 className="text-2xl font-bold text-[#001C57] mb-3">CPR Workshop Training</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       Learn life-saving CPR techniques in our hands-on workshop sessions. 
//                       Dr. Iqra provides comprehensive training on cardiopulmonary resuscitation, 
//                       basic first aid, and emergency response protocols. These practical sessions 
//                       equip participants with essential skills to handle medical emergencies 
//                       confidently and potentially save lives in critical situations.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState } from 'react';

export const TestimonialsSection = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <section className="w-full relative">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-gradient-to-br from-[#001C57]/10 to-white rounded-3xl border border-[#001C57]/20 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 p-12 lg:p-16">
            {/* Left side - Image */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start items-center min-h-full">
              <img
                src="/Images/Doc2.png"
                alt="Dr. Iqra Rahi - Rahi's Clinic"
                className="w-80 h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-[#001C57]">Health Education</span>{' '}
                  <span className="text-gray-800">& Life-Saving Skills</span>
                </h2>

                <div className="space-y-6">
                  <div className="bg-white/60 rounded-xl p-6 border border-[#001C57]/10">
                    <h3 className="text-2xl font-bold text-[#001C57] mb-3">Health Talk Sessions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join our interactive health awareness sessions where Dr. Iqra Rahi shares 
                      valuable insights on disease prevention, healthy lifestyle choices, and 
                      wellness strategies. These educational talks cover topics like immunity 
                      building, chronic disease management, mental health, and preventive care 
                      practices that can transform your approach to health.
                    </p>
                  </div>

                  <div className="bg-white/60 rounded-xl p-6 border border-[#001C57]/10">
                    <h3 className="text-2xl font-bold text-[#001C57] mb-3">CPR Workshop Training</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Learn life-saving CPR techniques in our hands-on workshop sessions. 
                      Dr. Iqra provides comprehensive training on cardiopulmonary resuscitation, 
                      basic first aid, and emergency response protocols. These practical sessions 
                      equip participants with essential skills to handle medical emergencies 
                      confidently and potentially save lives in critical situations.
                    </p>
                    
                    {/* CPR Training Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openModal('/public/images/cpr1.jpg')}
                      >
                        <img
                          src="/public/images/cpr1.jpg"
                          alt="CPR Training Session 1"
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div 
                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openModal('/public/images/cpr2.jpg')}
                      >
                        <img
                          src="/public/images/cpr2.jpg"
                          alt="CPR Training Session 2"
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div 
                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openModal('/public/images/cpr3.jpg')}
                      >
                        <img
                          src="/public/images/cpr3.jpg"
                          alt="CPR Training Session 3"
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="CPR Training - Enlarged View"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};