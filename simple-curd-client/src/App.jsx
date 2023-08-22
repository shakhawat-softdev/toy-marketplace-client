import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userData = { name, email };
    console.log(userData);

    fetch(' http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("User added successfully!!!")
          form.reset()
        }
      })
  }

  return (
    <>
      <h1>Simple CURD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' id="1" /> <br />
        <input type="email" name="email" placeholder='Email' id="2" /> <br />
        <button type="submit">Add user</button>
      </form>

      <Link to='/users'> <button>Goto Users</button></Link>

    </>
  )
}

export default App
