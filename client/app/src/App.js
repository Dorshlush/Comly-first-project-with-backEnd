
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comments from "./components/comments"
import  LoginForm  from './components/loginForm';
import Navbar from './components/navbar';
import RegistrationForm from "./components/registrationForm"

function App() {
  return (
    <Fragment>
      <Navbar/>
    <Routes>
        
        <Route path="/comments" element={<Comments />}/>
        <Route path="/users" element={<LoginForm />}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        
      
    </Routes>
    </Fragment>
  );
}

export default App;
