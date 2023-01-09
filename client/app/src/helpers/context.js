import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
const Context = (props) => {
const { children } = props;
const [comments,setComments]=useState([])
const [comment,setComment]=useState()
const[userName,setUserName]=useState()
const[userEmail,setUserEmail]=useState()



 return (
    <AppContext.Provider
      value={{comments,setComments,comment,setComment,userName,setUserName,userEmail,setUserEmail
        
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
