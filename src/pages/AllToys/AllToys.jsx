import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";
import useTitle from "../../hook/useTitle";


const AllToys = () => {
   useTitle('ToyKingdom | All Toys');
   const allToysFromDB = useLoaderData();
   const [allToys, setAllToys] = useState([]);
   const [searchText, setSearchText] = useState('');


   useEffect(() => {
      fetch('https://toy-marketplace-server-side-gray.vercel.app/dolls')
         .then(res => res.json())
         .then(data => setAllToys(data))
   }, [allToysFromDB]);

   const handleSearchName = () => {
      fetch(`https://toy-marketplace-server-side-gray.vercel.app/toySearchByName/${searchText}`)
         .then(res => res.json())
         .then(data => setAllToys(data))
   }

   return (
      <div>
         <h1 className='text-3xl mt-3 text-center my-10' ><span>All</span><span className='font-bold'> Toys</span></h1>
         <div className="text-center my-10">
            <input onChange={(e) => setSearchText(e.target.value)} type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full max-w-xs" />
            <button onClick={handleSearchName} className="btn btn-secondary">Search</button>
         </div>


         {/* </form> */}

         <div className="overflow-x-auto">
            <table className="table table-compact w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Seller</th>
                     <th>Toy Name</th>
                     <th>Sub-Category</th>
                     <th>price</th>
                     <th>Available Quantity</th>
                     <th>Details</th>
                  </tr>
               </thead>
               <tbody>
                  {allToys?.map((toyInfo, index) => <TableRow toyInfo={toyInfo} index={index} key={toyInfo._id} />)}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllToys;