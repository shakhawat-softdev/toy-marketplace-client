import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Main = () => {
   const loc = useLocation()
   console.log(location.pathname);
   useEffect(() => {
      if (loc.state) {
         document.title = loc.state
      }
   }, [loc.pathname])


   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Main;