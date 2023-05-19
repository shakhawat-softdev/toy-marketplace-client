import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";


const MyToys = () => {
   const { user } = useContext(AuthContext);
   const [myToys, setMyToys] = useState([])

   useEffect(() => {
      const url = `http://localhost:5000/doll?email=${user?.email}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setMyToys(data))
   }, [])



   return (
      <div>
         <p>This Is My Toys Page :{myToys.length}</p>
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