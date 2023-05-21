
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavigationBar from '../pages/Shared/Navbar/NavigationBar';
import { Toaster } from 'react-hot-toast';

const Main = () => {
   // NavigationBar
   const loc = useLocation()

   useEffect(() => {
      if (loc.state) {
         document.title = loc.state;
      }
   }, [loc.pathname])


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