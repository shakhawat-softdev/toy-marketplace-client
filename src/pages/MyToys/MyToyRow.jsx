import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyToyRow = ({ toy, myToys, setMyToys }) => {
   const { _id, sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = toy;

   // console.log(myToys)

   const handleDelete = (id) => {

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            fetch(`https://toy-marketplace-server-side-gray.vercel.app/doll/${id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                     const remaining = myToys.filter(toy => toy._id !== id)
                     setMyToys(remaining);
                  }
               })
         }
      })




   };
   return (
      <tr>
         <th>1</th>
         <td>
            <div className="avatar flex justify-start items-center">
               <div className="mask mask-squircle w-12 h-12">
                  <img src={toyImgUrl} alt="Avatar Tailwind CSS Component" />
               </div>
            </div>
         </td>
         <td>{toyName}</td>
         <td>{sellerName}</td>
         <td>{category}</td>
         <td>${price}</td>
         <td>{rating}</td>
         <td>{details}</td>
         <td>{quantity}</td>
         <td><Link to={`/updateADoll/${_id}`}><button className="btn btn-info btn-sm">Update</button></Link></td>
         <td><button className="btn btn-error btn-sm" onClick={() => handleDelete(_id)}>Delete</button></td>
      </tr>
   );
};

export default MyToyRow;