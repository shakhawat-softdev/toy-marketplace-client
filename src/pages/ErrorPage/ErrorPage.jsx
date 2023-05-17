import errorImage from '../../../public/images/error404/errorpage.png'

const ErrorPage = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
         <h1 className="text-4xl text-white mb-4">Oops!</h1>
         <p className="text-xl text-white mb-2">
            We are sorry, but something went wrong.
         </p>
         <p className="text-xl text-white mb-4">
            Please try again later or contact support.
         </p>
         <img className="w-64" src={errorImage} alt="Error" />
      </div>
   );
};

export default ErrorPage;