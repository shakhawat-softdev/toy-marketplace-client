

const Login = () => {
   return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
         <div className="bg-white rounded-lg shadow p-8 w-1/3">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div>
               <form>
                  <div className="mb-4">
                     <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email Address
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div className="mb-6">
                     <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Enter your password"
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 mb-4"
                  >
                     Log In
                  </button>

               </form>
               <button
                  type="button"

                  className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600"
               >
                  Log in with Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;