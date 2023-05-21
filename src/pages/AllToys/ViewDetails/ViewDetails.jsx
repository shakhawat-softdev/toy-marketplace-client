import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ViewDetails = () => {
   const dollInfo = useLoaderData();
   const { sellerName, email, toyName, toyImgUrl, price, quantity, details, rating } = dollInfo;

   return (
      <div className="">
         <h1 className='text-3xl mt-3 text-center my-10' ><span>Toy</span><span className='font-bold'> Details</span></h1>
         <div className="card w-1/2 bg-slate-50 border-2 border-sky-700 rounded-sm mx-auto m-10">
            <figure className="px-10 pt-10">
               <img src={toyImgUrl} alt="Shoes" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">Doll Name: {toyName}</h2>
               <div className="font-bold">
                  <p>Seller Name: <span className="font-normal">{sellerName}</span></p>
                  <p>Seller Email: <span className="font-normal">{email}</span></p>
                  <p>Price: <span className="font-normal">${price}</span></p>
                  <div className="flex justify-center items-center gap-1" >Rating: <span className="font-normal">{rating}</span> <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /></div> </div>
                  <p>Available Quantity: <span className="font-normal">{quantity}</span></p>
                  <p>Doll Details: <span className="font-normal">{details}</span></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ViewDetails;