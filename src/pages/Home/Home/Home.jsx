import { useEffect, useState } from "react";
import NewArrival from "../NewArrival";
import Section1 from "../Section1";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from "../Category/Category";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";


const Home = () => {
   useTitle('ToyKingdom | Home');

   const allCollcetTionFromDB = useLoaderData()
   const [allbannerToys, setAllbannerToys] = useState([]);
   const [allDollFromDB, setAllDollFromDB] = useState(allCollcetTionFromDB)


   // console.log(allCollcetTionFromDB);

   const [allToysFromDB, setAllToysFromDB] = useState([]);
   useEffect(() => {
      fetch('collection.json')
         .then(res => res.json())
         .then(data => setAllbannerToys(data))
   }, []);

   // useEffect(() => {
   //    fetch('http://localhost:5000/dolls')
   //       .then(res => res.json())
   //       .then(data => setAllToysFromDB(data))
   // }, [])

   // console.log(allToysFromDB);


   return (
      <div className="mx-auto">
         <Section1 />

         <section>
            <h1 className='text-3xl mt-3 text-center' ><span>New</span><span className='font-bold'> Arrivals</span></h1>
            <div className="grid lg:grid-cols-4">
               {allbannerToys.map(toy => <NewArrival toy={toy} key={toy.id} />)}
            </div>
            {/* <div className="divider"></div> */}
         </section>


         <section>
            <div className="text-center my-10">
               <h1 className='text-3xl m-10' ><span>Shop By</span><span className='font-bold'> Category</span></h1>
               <Category allDollFromDB={allDollFromDB} />
            </div>
            <div className="divider"></div>
         </section>

         <section className="flex flex-col justify-center items-center">

            <h1 className='text-3xl mt-3 text-center' ><span>Way To Shop By</span><span className='font-bold'> Age</span></h1>
            <Section4 />
         </section>

         <section>
            <Section3 />
         </section>


      </div>
   );
};

export default Home;