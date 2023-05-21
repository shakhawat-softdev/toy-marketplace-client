import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../../../public/images/dicover/24.jpg'
import img2 from '../../../../public/images/dicover/33.jpg'
import img3 from '../../../../public/images/dicover/39.jpg'

function Section3() {

   useEffect(() => {
      AOS.init({ once: true });
   }, []);

   return (
      <section className="bg-gray-100 py-12">
         <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8" data-aos="fade-up">Discover Our Toy Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
                  <img src={img1} alt="Action Figures" className="mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">Sindrilla</h3>
                  <p className="text-gray-700">Unleash your imagination with our diverse collection of action figures.</p>
               </div>
               <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
                  <img src={img2} alt="Board Games" className="mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">Tanson</h3>
                  <p className="text-gray-700">Gather your loved ones and enjoy endless hours of fun with our board games.</p>
               </div>
               <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="400">
                  <img src={img3} alt="Puzzles" className="mb-4 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">DeAlexdra</h3>
                  <p className="text-gray-700">Challenge your mind and put your problem-solving skills to the test with our puzzles.</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Section3;
