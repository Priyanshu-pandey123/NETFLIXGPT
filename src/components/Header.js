import React from 'react'
import { LOGO } from '../utils/constant'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

const navigate=useNavigate();

const user=useSelector((store)=>store.user);



  const handleSignOut=()=>{
  signOut(auth).then(() => {
    console.log('sogn out called');
    navigate('/');
  
}).catch((error) => {
  navigate('/error');
  
});


  }

  return (
    <div className='absolute bg-gradient-to-b from-transparent to-black h-18 w-full z-10 flex justify-between  '>

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
