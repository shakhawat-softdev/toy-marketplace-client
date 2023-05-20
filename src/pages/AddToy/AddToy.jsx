import { useContext, useState } from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import useTitle from "../../hook/useTitle";
import { AuthContext } from "../../providers/AuthProvider";



const AddToy = () => {
   useTitle('ToyKingdom | Add A Toy');

   const { user } = useContext(AuthContext)
   console.log(user)

   const [value, setValue] = useState('barbieDoll');
   const handleChange = (e) => {
      setValue(e.target.value);
   };

   const handleAddToy = (event) => {
      event.preventDefault();
      const form = event.target;

      const sellerName = form.name.value;
      const email = form.email.value;
      const toyName = form.toyName.value;
      const category = value;
      const toyImgUrl = form.imgUrl.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const details = form.details.value;
      const rating = form.rating.value;

      const newToy = { sellerName, email, toyName, category, toyImgUrl, price, quantity, details, rating }
      console.log(newToy);

      fetch('https://toy-marketplace-server-side-gray.vercel.app/dolls', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(newToy)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire('Doll Insert successfully!!!');
            }
         })


   }
   return (
      <>
         <h1 className='text-3xl mt-3 text-center' ><span>Add</span><span className='font-bold'> Toy</span></h1>
         <form onSubmit={handleAddToy} className="bg-red-100 p-5 m-5" >
            <div className="grid grid-cols-3 gap-5 p-5">
               <div >
                  <label className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Toy Name</span>
                  </label>
                  <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Category</span>
                  </label>
                  <select value={value} onChange={handleChange}
                     className="select select-bordered">
                     <option disabled>Select one</option>
                     <option value='babyDoll'>Baby Dolls</option>
                     <option value='barbieDoll'>Barbie Dolls</option>
                     <option value='amiricanDoll'>Amirican Dolls</option>
                  </select>



               </div>

               <div>
                  <label className="label">
                     <span className="label-text">Toy Image Url</span>
                  </label>
                  <input type="text" name="imgUrl" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input type="number" name="price" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>

               <div>
                  <label className="label">
                     <span className="label-text">Available Quantity</span>
                  </label>
                  <input type="number" name="quantity" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Toy Details</span>
                  </label>
                  <input type="text" name="details" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text">Rating</span>
                  </label>
                  <input type="number" name="rating" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
               </div>
            </div>
            <div className="text-center">
               <button className="btn btn-success btn-wide" type="submit">Add Toy</button>
            </div>
         </form>

      </>
   );
};

export default AddToy;