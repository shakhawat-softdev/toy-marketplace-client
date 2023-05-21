import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const SubCategoryCard = ({ doll }) => {


   const { _id, sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = doll;
   const { user } = useContext(AuthContext)

   const notify = () => toast('You Have To Login First to view details!',
      {
         icon: '👏',
         style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            height: '70px'
         },
      }
   );

   return (
      <div className="card w-80 glass m-auto bg-slate-200 my-3">
         <figure className="px-10 pt-10">
            <img className="w-40 h-40" src={toyImgUrl} alt="car!" />
         </figure>
         <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title">Doll Name: {toyName}</h2>

            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>Price: <span className="font-normal">${price}</span></p>
            <div className="flex justify-center items-center gap-1" >Rating: <span className="font-normal">{rating}</span> <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /></div> </div>

            {user ? <div className="card-actions justify-center">
               <Link to={`/viewDetails/${_id}`} state={'Login'}><label onClick={() => handleDetails(_id)} className="btn btn-ghost btn-active btn-sm">View Details</label></Link>
            </div>
               :
               <div className="card-actions justify-end">
                  <Link to={`/viewDetails/${_id}`}><button onClick={notify} className="btn btn-ghost btn-active btn-sm">View Details</button></Link>
               </div>
            }
         </div>
      </div>
   );
};

export default SubCategoryCard;