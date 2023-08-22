import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
   const usersData = useLoaderData();
   const [users, setUser] = useState(usersData);

   const handleDelete = _id => {
      console.log(_id);
      fetch(`http://localhost:5000/users/${_id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
               alert("Delete Item success fully!");
               const remainindUser = users.filter(user => user._id !== _id);
               setUser(remainindUser);
            }
         })
   };

   console.log(users);
   return (
      <div>
         <h2>Total Users: {users.length}</h2>
         {users.map(user => <p key={user._id}>User Name: {user.name} <br /> User Email: {user.email}

            <Link to={`/update/${user._id}`}>
               <button >Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button></p>)}

         <Link to='/' ><button>Home</button></Link>

      </div>
   );
};

export default Users;