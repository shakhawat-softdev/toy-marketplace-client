import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';

const Category = ({ allDollFromDB }) => {
   // console.log(allDollFromDB);

   const [babyDolls, setBabyDolls] = useState();
   const [barbieDolls, setBarbieDolls] = useState();
   const [americanDolls, setAmericanDolls] = useState();

   useEffect(() => {
      const babydollsFromDB = allDollFromDB.filter(doll => doll.category == 'babyDoll');
      setBabyDolls(babydollsFromDB)

      const barbieDollsFromDB = allDollFromDB.filter(doll => doll.category == 'barbieDoll');
      setBarbieDolls(barbieDollsFromDB);

      const americanDollsFromDB = allDollFromDB.filter(doll => doll.category == 'amiricanDoll');
      setAmericanDolls(americanDollsFromDB);
   }, [allDollFromDB])




   return (
      <div >
         <Tabs>
            <TabList >
               <Tab >Baby Dolls</Tab>
               <Tab>Barbie Dolls</Tab>
               <Tab>American Dolls</Tab>
            </TabList>

            <TabPanel>
               <h2>Here is All Baby Dolls</h2>
               <div className='lg:grid lg:grid-cols-3'>
                  {babyDolls?.map(doll => <SubCategoryCard doll={doll} key={doll._id} />)}
               </div>

            </TabPanel>
            <TabPanel>
               <h2>Here is All Barbie Dolls</h2>
               <div className='lg:grid lg:grid-cols-3'>
                  {barbieDolls?.map(doll => <SubCategoryCard doll={doll} key={doll._id} />)}
               </div>
            </TabPanel>
            <TabPanel>
               <h2>American Dolls</h2>
               <div className='lg:grid lg:grid-cols-3'>
                  {americanDolls?.map(doll => <SubCategoryCard doll={doll} key={doll._id} />)}
               </div>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Category;
