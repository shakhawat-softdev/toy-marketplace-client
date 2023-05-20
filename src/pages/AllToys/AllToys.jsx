import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";
import useTitle from "../../hook/useTitle";
import { data } from "autoprefixer";


const AllToys = () => {
   useTitle('ToyKingdom | All Toys');
   const allToysFromDB = useLoaderData();
   const [allToys, setAllToys] = useState([]);
   const [searchText, setSearchText] = useState('');


   useEffect(() => {
      fetch('http://localhost:5000/dolls')
         .then(res => res.json())
         .then(data => setAllToys(data))
   }, [allToysFromDB]);

   const handleSearchName = () => {
      fetch(`http://localhost:5000/toySearchByName/${searchText}`)
         .then(res => res.json())
         .then(data => setAllToys(data))
   }

   return (
      <div>
         {/* <form className="form-control w-full max-w-xs mx-auto my-10 space-y-4"> */}
         <input onChange={(e) => setSearchText(e.target.value)} type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
         <button onClick={handleSearchName} className="btn btn-secondary">Button</button>


         {/* </form> */}

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