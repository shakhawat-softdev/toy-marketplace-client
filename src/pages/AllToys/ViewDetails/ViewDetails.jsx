import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
   const dollInfo = useLoaderData();
   const { sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = dollInfo;

   return (
      <div className="card w-1/2 bg-base-100 border-2 border-sky-700 rounded-sm mx-auto">
         <figure className="px-10 pt-10">
            <img src={toyImgUrl} alt="Shoes" className="rounded-xl w-1/2" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">Doll Name: {toyName}</h2>
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {email}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Available Quantity: {quantity}</p>
            <p>Doll Details: {details}</p>
         </div>
      </div>
   );
};

export default ViewDetails;