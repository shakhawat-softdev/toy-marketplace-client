import { Link } from "react-router-dom";

const TableRow = ({ toyInfo, index }) => {


   const { _id, sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = toyInfo;

   const handleDetails = (_id) => {
      console.log(_id);
   };


   return (
      <>
         <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><Link to={`/viewDetails/${_id}`} state={`Toy Details | ${toyName}`}><label className="btn btn-ghost btn-active btn-sm">View Details</label></Link></td>
         </tr>

      </>
   );
};

export default TableRow;

