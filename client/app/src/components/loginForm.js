import React from 'react';
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import "./user.css"
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../helpers/context';



const Users = () => {
  const {userName,setUserName,userEmail,setUserEmail}=useContext(AppContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm,setConfirm]=useState('');
    const navigator=useNavigate()
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const confirmation = {
        email: email,
        password: password
    
      };
      
  
      try {
          const response = await axios.post('http://localhost:5000/api/login', confirmation);
           localStorage.setItem("token",response.data)
           console.log(response)
           const userD=await axios.post('http://localhost:5000/api/users/userdetails',confirmation)
           await setUserName(userD.data)
          //  await setUserEmail(confirmation.email)
           navigator("/comments")
           
          
          
        } catch (error) {
          alert(error)
          setConfirm("Wrong user name or password")
          
        }
      
      };
    return (
      <>
      <form onSubmit={handleSubmit}>
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
        <span><button type="submit">Log in</button><Link to="/register"><button>Sign up</button></Link></span>
        
      </form>
      <div>
          {confirm}
  
      </div>
      </>)
}

export default Users;
