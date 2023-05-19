import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {


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
            </TabPanel>
            <TabPanel>
               <h2>Here is All Barbie Dolls</h2>
            </TabPanel>
            <TabPanel>
               <h2>American Dolls</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default Category;
