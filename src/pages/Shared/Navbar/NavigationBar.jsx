import { Link } from "react-router-dom";
import navLogo from '../../../../public/images/siteLogo/toy-kingdom.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
   const { user, logout } = useContext(AuthContext)
   const handleLogout = () => {
      logout()
         .then(result => { })
         .catch()
   };

   // const loginLogout = <ul className="menu menu-horizontal px-1 text-white font-semibold">
   //    {user ? <Link onClick={handleLogout}><li><span>Logout</span></li></Link> :
   //       <Link to='/login'><li><span>Login</span></li></Link>}
   // </ul>

   const navItems = <ul className="menu menu-horizontal text-white font-semibold px-1">
      <Link to='/'><li><span>Home</span></li></Link>
      <Link to='/allToys'><li><span>Instructors</span></li></Link>
      <Link to='/addToy'><li><span>Add A Toy</span></li></Link>
      <Link to='/myToys'><li><span>My Toys</span></li></Link>

      {!user ? <Link to='/login'><li><span>Login</span></li></Link> : <li onClick={logout}><span>Logout</span></li>}
      <Link to='/blog'><li><span>Blogs</span></li></Link>

   </ul>


   const navItemsDropdown = <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'><li><span>Home</span></li></Link>
      {user && <>
         <Link to='/allToys'><li><span>Instructors</span></li></Link>
         <Link to='/addToy'><li><span>Add A Toy</span></li></Link>
         <Link to='/myToys'><li><span>My Toys</span></li></Link>
      </>}
      {/* <Link to='/blog'><li><span>Blogs</span></li></Link> */}
   </ul>


   return (
      <>

         <div className="navbar bg-red-500 p-5">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  {navItemsDropdown}
               </div>

               <div className=" invisible lg:visible">
                  <img className="w-[150px] h-[60px]" src={navLogo} alt="" />
               </div>

               <a className="btn btn-ghost normal-case text-xl text-yellow-100 invisible lg:visible ">Toy KingDom</a>
            </div>

            <div className="navbar-center hidden lg:flex">
               {navItems}
            </div>

            <div className="navbar-end">
               {/* {loginLogout} */}
               {user &&
                  <div className="dropdown dropdown-end">
                     <div className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-info" data-tip={`${user && user?.displayName}`}>
                        <div className="w-10 rounded-full">
                           <img src={user && user?.photoURL} />
                        </div>
                     </div>
                  </div>}
            </div>

         </div>




      </>
   );
};

export default NavigationBar;