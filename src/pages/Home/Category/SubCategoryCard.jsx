import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

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

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={toyImgUrl} /></figure>
         <div className="card-body">
            <h2 className="card-title">Doll Name: {toyName}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>

            {user ? <div className="card-actions justify-end">
               <Link to={`/viewDetails/${_id}`}><label onClick={() => handleDetails(_id)} className="btn btn-ghost btn-active btn-sm">View Details</label></Link>
            </div>
               :
               <div className="card-actions justify-end">
                  {/* <button onClick={notify} className="btn btn-ghost btn-active btn-sm">View Details</button> */}
                  <Link to={`/viewDetails/${_id}`}><button onClick={notify} className="btn btn-ghost btn-active btn-sm">View Details</button></Link>
               </div>
            }







         </div>
      </div>
   );
};

export default SubCategoryCard;