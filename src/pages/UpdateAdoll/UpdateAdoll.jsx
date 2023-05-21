import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useTitle from "../../hook/useTitle";

const UpdateAdoll = () => {
   useTitle('ToyKingdom | Update A Toy');

   const toyFromDB = useLoaderData()
   const [toy, setToy] = useState(toyFromDB);
   const { _id, sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating } = toy;

   const [value, setValue] = useState('amiricanDolls');
   const handleChange = (e) => {
      setValue(e.target.value);
   };

   const handleAddToy = (event) => {
      event.preventDefault();
      const form = event.target;
      const price = parseFloat(form.price.value);
      const quantity = form.quantity.value;
      const details = form.details.value;


      const newToy = { price, quantity, details }
      console.log(newToy);

      fetch(`https://toy-marketplace-server-side-gray.vercel.app/doll/${_id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ price, quantity, details })

      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               Swal.fire('Update!', 'Item been Updated successfully!!');
            }
         })
   }

   return (
      <div>
         <>
            <h1 className='text-3xl mt-3 text-center' ><span>Update A</span><span className='font-bold'> Toy</span></h1>
            <form onSubmit={handleAddToy} className="bg-red-100 p-5 m-5 mb-30 mb-48 " >
               <div className="grid grid-cols-3 gap-5 p-5">

                  <div>
                     <label className="label">
                        <span className="label-text">Price</span>
                     </label>
                     <input type="text" name="price" defaultValue={price} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  </div>

                  <div>
                     <label className="label">
                        <span className="label-text">Available Quantity</span>
                     </label>
                     <input type="text" name="quantity" defaultValue={quantity} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                     <label className="label">
                        <span className="label-text">Toy Details</span>
                     </label>

                     <input type="text" name="details" defaultValue={details} placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />

                  </div>

               </div>
               <div className="text-center">
                  <button className="btn btn-success btn-wide" type="submit">Update</button>
               </div>
            </form>

         </>
      </div>
   );
};

export default UpdateAdoll;