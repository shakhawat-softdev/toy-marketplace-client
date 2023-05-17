import React from 'react';
import Home from '../pages/Home/Home/Home';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
   return (
      <div>
         <Navbar />
         <Home />
         <Footer />
      </div>
   );
};

export default Main;