import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import useTitle from "../../hook/useTitle";


const MyToys = () => {
   useTitle('ToyKingdom | My Toys');
   const { user } = useContext(AuthContext);
   const [myToys, setMyToys] = useState([])
   const [sort, setSortBy] = useState('');


   console.log(sort);

   useEffect(() => {
      const url = `http://localhost:5000/doll?email=${user?.email}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setMyToys(data))
   }, [user])


   const handleDropdownChange = (event) => {
      setSortBy(event.target.value);
      const sort = event.target.value;

      if (sort == 'accending') {
         const url = `http://localhost:5000/dollBysort?email=${user?.email}`;
         fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
      }
      // else if (sort == 'decending') {
      //    const url = `http://localhost:5000/dollBysortTwo?email=${user?.email}`;
      //    fetch(url)
      //       .then(res => res.json())
      //       .then(data => setMyToys(data))
      // }


   }



   return (
      <div className="mb-72">
         <h1 className='text-3xl mt-3 text-center my-10' ><span>My</span><span className='font-bold'> Toys</span></h1>
         <div className="ml-5">
            <p>Sort By Price</p>

            <select className="select select-bordered w-full max-w-xs mb-10" value={sort} onChange={handleDropdownChange}>
               <option value={"Choose One"}>Chose</option>
               <option value={"accending"}>Low to high</option>
               {/* <option value={"decending"}>High to low</option> */}
            </select>




         </div>

         <div className="overflow-x-auto">
            <table className="table table-compact w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>Doll Image</th>
                     <th>Doll Name</th>
                     <th>Seller Name</th>
                     <th>Sub-Category</th>
                     <th>price</th>
                     <th>Rating</th>
                     <th>Doll Details</th>
                     <th>Available Quantity</th>
                     <th>Update</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {myToys.map(toy => <MyToyRow toy={toy} myToys={myToys} setMyToys={setMyToys} key={toy._id} />)}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyToys;