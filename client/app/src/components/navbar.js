import React from 'react';
import "./navbar.css"
import { Link,useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate=useNavigate()
  return (
    <nav>
      <ul>
        <li hidden={localStorage.getItem('token')?true:false}><Link to="/Comments">Comments</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><button onClick={()=>{
          localStorage.removeItem('token')
          navigate("/login")
        }}>LogOut</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
