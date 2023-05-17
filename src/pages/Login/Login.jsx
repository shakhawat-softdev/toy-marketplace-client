import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';



const Login = () => {
   const [message, setMessage] = useState('');
   const { sinInUser, signInGoogle, } = useContext(AuthContext)
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/'

   const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;



      sinInUser(email, password)
         .then(resut => {
            // const loggedUser = resut.user;
            setMessage('Login successful!');
            navigate(from);
            setMessage('');
         })
         .catch(error => {
            setMessage(error.message)
            console.error(error.message)
         })

   };

   const handleGoogleLogin = () => {
      signInGoogle()
         .then(result => {
            const loggedUser = result.user;
            setMessage('Login successful!');
            navigate(from);
            message('');
            console.log(loggedUser);
         })
         .catch(error => {
            setMessage(error.message);
            console.error(error.message);
         })
   };



   return (
      <>
         <h1 className="text-3xl font-bold my-3 ml-4 text-center">Login now!</h1>
         <div className='flex justify-center items-center text-center mb-5'>
            <section className="card flex-shrink-0 w-96 max-w-sm hadow-md border border-sky-300 bg-base-100 ">
               <div className='card-body'>
                  <form onSubmit={handleLogin} >
                     <div className="">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Email</span>
                           </label>
                           <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Password</span>
                           </label>
                           <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                           <label className="label">
                              <span className="label-text-alt text-red">{message}</span>
                           </label>
                        </div>
                        <div className="form-control mt-3">
                           <button className="btn btn-primary">Login</button>
                        </div>
                     </div>
                  </form>
                  <div className="divider">OR</div>

                  <button className="btn btn-active btn-success" onClick={handleGoogleLogin}> <FcGoogle className='text-3xl mr-2' /> Login with Google</button>

                  {/* <button className="btn btn-active btn-success" onClick={handleGithubLogin} ><FaGithub className='text-3xl mr-2' />Login with Github</button> */}

                  <label className="label">
                     <p className='label-text-alt'>Haven't account? Please <Link to='/register'><span className="label-text-alt link link-hover">register</span></Link>
                     </p>
                  </label>
               </div>

            </section>

         </div>



      </>
   );
};

export default Login;