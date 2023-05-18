import { useEffect, useState } from "react";
import NewArrival from "../NewArrival";
import Section1 from "../Section1";


const Home = () => {

   const [allToys, setAllToys] = useState([])

   useEffect(() => {
      fetch('collection.json')
         .then(res => res.json())
         .then(data => setAllToys(data))
   }, [])

   console.log(allToys);
   return (
      <>
         <Section1 />
         <h1 className='text-3xl mt-3 text-center' ><span>New</span><span className='font-bold'> Arrivals</span></h1>
         <div className="grid lg:grid-cols-4">
            {allToys.map(toy => <NewArrival toy={toy} key={toy.id} />)}
         </div>

      </>
   );
};

export default Home;