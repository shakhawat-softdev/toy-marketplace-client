
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavigationBar from '../pages/Shared/Navbar/NavigationBar';
import { Toaster } from 'react-hot-toast';

const Main = () => {

   return (
      <>
         <NavigationBar />
         <Outlet />
         <Footer />
         <Toaster />
      </>
   );
};

export default Main;