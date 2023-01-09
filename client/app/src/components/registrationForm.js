import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response,setResponse]=useState("")
  const navigator=useNavigate()///moving the user the another page

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password
    };
    
    try {
      const response = await axios.post('http://localhost:5000/api/users', user);
      setResponse("User created Successfuly!")
      localStorage.setItem("token",response.headers['x-auth-token'])//saving the token in the local storage
      navigator ('/movies')
    } catch (error) {
      console.log(error.message)
      setResponse("User alredy exist!")//moving the user the another page
      
    }
  };
   
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <br />
      <span><Link to="/users"><button>Log in</button></Link> <button  type="submit">Sign up</button></span>
     
      
    </form>
    <span>{response}</span>
    </>
  );
};

export default Register;