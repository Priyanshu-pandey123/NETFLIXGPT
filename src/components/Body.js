import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch=useDispatch();


  const route=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },{
        path:'/browse',
        element:<Browse/>
    }
  ])



 useEffect(()=>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      
    } else {
      // User is signed out
      // ...
    }
  });

 },[])


  return (
    <div>
     
      <RouterProvider router={route}/>
    </div>
  )
}

export default Body
