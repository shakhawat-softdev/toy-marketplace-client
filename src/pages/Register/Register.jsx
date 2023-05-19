import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hook/useTitle';

const Register = () => {
   useTitle('ToyKingdom | Register');

   const { registerUser, logout } = useContext(AuthContext)
   const [message, setMessage] = useState('');
   const navigate = useNavigate()

   // console.log(updateProfileInfo)



   const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const userName = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const password1 = form.password1.value;
      const imageUrl = `${form.photoUrl.value}`


      if (password.length < 6) {
         setMessage('Please enter Password minimum six character');
         return;
      };

      if (password1 !== password) {
         setMessage("Password doesn't matched");
         return;
      }




      form.reset();
      registerUser(email, password)

         .then(result => {
            const loggedUser = result.user;
            setMessage('Registation Sussessful')
            updeteUserProfile(loggedUser, userName, imageUrl)

            logout();
            navigate('/login')

         })

         .catch(error => {
            console.error(error.message)
            setMessage(error.message)
         })


      const updeteUserProfile = (loggedUser, userName, imageUrl) => {
         updateProfile(loggedUser, {
            displayName: userName, photoURL: imageUrl
         })
            .then(() => {
               console.log('user name updated');
            })
            .catch(error => console.error(error.message))
      }



   }
   return (
      <>
         <div className='flex justify-center items-center'>
            <div >
               <h1 className="text-3xl font-bold my-3 ml-16">Register now!</h1>
               <form onSubmit={handleRegister} className="card flex-shrink-0 w-96 max-w-sm shadow-md border border-sky-300 bg-base-100 my-5">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' required placeholder="Your Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Re-Enter Password</span>
                        </label>
                        <input type="password" name='password1' required placeholder="Re-Enter Password" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo Url" name='photoUrl' className="input input-bordered" />
                     </div>
                     <label className="label">
                        <span className="label-text-alt text-red-600">{message}</span>
                     </label>
                     <div className="form-control">
                        <button className="btn btn-primary">Register</button>
                     </div>

                     <label className="label">
                        <div className='label-text-alt'>
                           Alreadey have account? Please <Link to='/login'><span className="label-text-alt link link-hover"> login</span></Link>
                        </div>
                     </label>
                  </div>
               </form>
            </div>
         </div>



      </>
   );
};

export default Register;