// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {

//   const [storeduser, setStoreduser] = useState(null);
//   const navigate = useNavigate()
//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setStoreduser(JSON.parse(user));
//     }
//   }, []);

//   const login = (user) => {
//     setStoreduser(user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   const logout = () => {
//     setStoreduser(null);
//     navigate('/login')
//     // localStorage.removeItem('user');
   
//   };

//   return (
//     <AuthContext.Provider value={{ storeduser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
//};


// ******************************************************************************************
import React, {  createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext()
export const useAuth =()=> useContext(AuthContext)

export const AuthProvider=({children})=>{ 
   
    const[storeduser, setStoreduser] = useState(null)
    const navigate= useNavigate()
    const location = useLocation();

//   useEffect(()=>{
//     const user = localStorage.getItem('user')
//     if(user)
//     {
//         setStoreduser(JSON.parse(user))
//     }
//   },[])

useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
        if (location.pathname === '/login') {
            setStoreduser(null); // Clear in-memory state but not localStorage
        } else {
            setStoreduser(JSON.parse(user)); // Set in-memory state from localStorage
        }
    }
}, [location.pathname]);
  

  const login=(user)=>{
   setStoreduser(user)
   localStorage.setItem('user',JSON.stringify(user))
  }

  const logout=()=>{
    setStoreduser(null)
      localStorage.removeItem('user')
    navigate('/login')

  }
    return(
        <>
          <AuthContext.Provider value={{storeduser,login,logout}} >
        {children}
          </AuthContext.Provider>
        
        </>
    )
}






