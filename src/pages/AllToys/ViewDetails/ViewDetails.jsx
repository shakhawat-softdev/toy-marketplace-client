import { useParams } from "react-router-dom";


const ViewDetails = () => {
   const { _id } = useParams()




   return (
      <p> This is view Details page</p>
   );
};

export default ViewDetails;