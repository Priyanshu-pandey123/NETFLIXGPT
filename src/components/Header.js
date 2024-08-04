import React, { useEffect } from 'react'
import { LOGO } from '../utils/constant'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

const navigate=useNavigate();

const user=useSelector((store)=>store.user);
const dispatch=useDispatch();



useEffect(()=>{
    
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} =user   ;
      dispatch(addUser({uid:uid,
        email:email,
        displayName:displayName,
      photoURL:photoURL}));
       navigate('/browse')
       
    } else {
     
       dispatch(removeUser());
       navigate('/');
    }
  });

  return ()=>{
      unsubscribe(); 
  }


 },[])



  const handleSignOut=()=>{
  signOut(auth).then(() => {
  
}).catch((error) => {
  navigate('/error');
  
});


  }

  return (
    <div className='fixed top-0 left-0 w-full bg-gradient-to-b from-transparent to-black h-18 z-10 flex justify-between'>


     <div>
     <img src={LOGO}  className='h-20 w-25'
      alt="not found"/>
     </div>

    <div className=' my-4 text-white rounded-lg'>
   {user && <button className='bg-purple-700 p-3 rounded-lg mx-5 ' onClick={handleSignOut}>Sign Out</button>}
    </div>
    </div>
  )
}

export default Header
