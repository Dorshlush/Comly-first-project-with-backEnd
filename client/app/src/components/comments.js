import React from 'react';
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import AddNewComment from "./addNewComment"
import "./comments.css"
import { AppContext } from '../helpers/context';


const Comments = () => {
    const {comments,setComments,setUserEmail}=useContext(AppContext)
    useEffect(()=>{
        async function getData(){
        try {
            const {data}=await axios.get('http://localhost:5000/api/comments')
            setComments(data)
        } catch (error) {
            console.log(error) 
        }}
        getData()
    },[])

  

    return (
        <>
        
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Body</th>
     
      </tr>
    </thead>
    <tbody>
      {comments.map(comment => (
        <tr key={comment.name}>
          <td id="name">{comment.name}</td>
          <td id="body">{comment.body}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <br/>
  <div hidden={localStorage.getItem('token')?false:true} ><AddNewComment/></div>
  
        </>
    );
}

export default Comments;
