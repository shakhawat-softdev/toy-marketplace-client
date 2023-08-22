import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Uapdate = () => {
   const loadedUser = useLoaderData();

   const handleUpdate = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const updatedUserData = { name, email };
      console.log(updatedUserData);

      fetch(`http://localhost:5000/users/${loadedUser._id}`, {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(updatedUserData)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               alert('User Information updated successfully!')
            }
         })
   }

   return (
      <div>
         <h3>Update Informations of {loadedUser.name}</h3>
         <form onSubmit={handleUpdate}>
            <input type="text" name='name' defaultValue={loadedUser.name} /> <br />
            <input type="email" name="email" defaultValue={loadedUser.email} /> <br />
            <button type="submit">Update Information</button> <br />
         </form>

         <Link to='/users'><button>Back</button></Link>
      </div>
   );
};

export default Uapdate;