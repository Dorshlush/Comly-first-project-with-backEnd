import React, { useState,useContext,useEffect } from 'react';
import axios from "axios"
import { AppContext } from '../helpers/context'; 


const AddNewAnimal = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const {userName,userEmail}=useContext(AppContext)

 
        const handleSubmit =  async (event) => {
          event.preventDefault();
          const config = {
            headers: {
              'x-auth-token': localStorage.getItem("token")
              
            }
          };
          
          const comment=  {
            name: userName,
            body: body,
           
          };
          
          try {
            const response = await axios.post('http://localhost:5000/api/comments', comment, config);
            console.log(response)
          } catch (error) {
            alert(error.message) 
          }
        };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        comment:
        <input id="commentTab" type="text" value={body} onChange={event => setBody(event.target.value)} />
      </label>
      <br />
      <button  type="submit" value="Add Comment" >Click to add comment</button>
    </form>
  );
};

export default AddNewAnimal;