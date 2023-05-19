import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";


const AllToys = () => {
   const [allToys, setAllToys] = useState([])
   const allToysFromDB = useLoaderData();

   useEffect(() => {
      fetch('http://localhost:5000/dolls')
         .then(res => res.json())
         .then(data => setAllToys(data))
   }, [allToysFromDB])

   console.log(allToys);

   const handleSearchName = (event) => {
      event.preventDefault()
      const form = event.target;
      const toyName = form.name.value;
      console.log(toyName);
   }

   return (
      <div>
         <form onSubmit={handleSearchName} className="form-control w-full max-w-xs mx-auto my-10 space-y-4">
            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
            <input className="btn btn-secondary" type="submit" value="Search" />
            {/* <button className="btn btn-secondary">Search</button> */}
         </form>

         <div className="overflow-x-auto">
            <table className="table table-compact w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Seller</th>
                     <th>Toy Name</th>
                     <th>Sub-Category</th>
                     {/* <th>location</th> */}
                     <th>price</th>
                     <th>Available Quantity</th>
                     <th>Details</th>
                  </tr>
               </thead>
               <tbody>
                  {allToys?.map(toyInfo => <TableRow toyInfo={toyInfo} key={toyInfo._id} />)}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllToys;