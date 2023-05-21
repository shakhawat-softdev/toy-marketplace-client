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
import HeroBanner from "../HeroBanner";


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




   return (
      <div className="mx-auto">
         <HeroBanner />

         {/* Gallery Image */}

         <section className="mx-auto bg-gradient-to-r from-[#00C0FF] to-[#4218B8] p-5">
            <h1 className='text-3xl text-center bg-[red] p-4 text-yellow-50 my-5 rounded-md' ><span>New</span><span className='font-bold'> Arrivals</span></h1>
            <div className="grid lg:grid-cols-4 mx-auto max-w-7xl gap-5">
               {allbannerToys.map(toy => <NewArrival toy={toy} key={toy.id} />)}
            </div>
            {/* <div className="divider"></div> */}
         </section>


         {/* Carosel */}
         <h1 className='text-3xl text-center bg-[red] p-3 text-yellow-50 mt-5 rounded-md' ><span>Our</span><span className='font-bold'> Barnds</span></h1>
         <Section1 />


         {/* Shop By CATEGORY */}

         <section className="mx-auto">
            <h1 className='text-3xl m-10 text-center' ><span>Shop By</span><span className='font-bold'> Category</span></h1>

            <div className="text-center my-10 mx-auto overflow-hidden">
               <Category allDollFromDB={allDollFromDB} />
            </div>

            <div className="divider"></div>
         </section>

         <section className="flex flex-col justify-center items-center">

            <h1 className='text-3xl text-center' ><span>Way To Shop By</span><span className='font-bold'> Age</span></h1>
            <Section4 />
         </section>

         <section>
            <Section3 />
         </section>


      </div>
   );
};

export default Home;