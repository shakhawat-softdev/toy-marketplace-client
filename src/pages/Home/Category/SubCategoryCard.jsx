import { Link } from "react-router-dom";

const SubCategoryCard = ({ doll }) => {
   console.log(doll);
   const { _id, sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = doll;

   return (

      // <div className="card w-96 bg-base-100 shadow-xl">
      //    <figure><img src={toyImgUrl} /></figure>
      //    <div className="card-body">
      //       <h2 className="card-title">Doll Name: {toyName}</h2>
      //       <p>Price: ${price}</p>
      //       <p>Rating: {rating}</p>
      //       <p>If a dog chews shoes whose shoes does he choose?</p>

      //       <div className="card-actions justify-end">
      //          <div className="badge badge-outline">Fashion</div>
      //          <div className="badge badge-outline">Products</div>
      //       </div>
      //    </div>
      // </div>

      <div className="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={toyImgUrl} /></figure>
         <div className="card-body">
            <h2 className="card-title">Doll Name: {toyName}</h2>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>

            <div className="card-actions justify-end">
               <Link to={`/viewDetails/${_id}`}><label onClick={() => handleDetails(_id)} className="btn btn-ghost btn-active btn-sm">View Details</label></Link>
            </div>
         </div>
      </div>

   );
};

export default SubCategoryCard;