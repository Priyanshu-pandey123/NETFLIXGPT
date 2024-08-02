import React, { useRef, useState } from 'react'
import Header from './Header'
import { IMG_URL } from '../utils/constant'
import {validateForm} from '../utils/formValidator.js';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase.js';


const Login = () => {
    const [sign,setSign]=useState(false);
    const [errormessage,setErrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const  PassWord=useRef(null);

    const handleForm=()=>{
       
        const message=validateForm(email.current.value,PassWord.current.value);
        setErrorMessage(message);

        if(message!=null){
            console.log('error')
            setErrorMessage(message);
            return;
        }
          
        if(sign){
           
            createUserWithEmailAndPassword(auth,email.current.value, PassWord.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
             
                setErrorMessage("successful sign up")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
                // ..
            });
        }else{
            //sign In
            console.log("sign IN 3");
            signInWithEmailAndPassword(auth, email.current.value, PassWord.current.value)
            .then((userCredential) => {
                 
                const user = userCredential.user;
                 setErrorMessage("successfully SIGN In")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
            });


        }
           
       
        
    }

  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src={IMG_URL}
        className='h-full w-full '
         alt="not found"/>
     </div>
     
        
         <form className='bg-black  bg-opacity-80 absolute w-3/12  mt-40  rounded-lg flex flex-col mx-auto left-0 right-0  text-white px-4 py-4' onSubmit={(e)=>e.preventDefault()}>
         <h1 className='text-4xl p-2 m-3'>{sign?"SIGN UP":"SIGN IN"}</h1>
         { sign &&  <input type='text' ref={name} placeholder='Enter Name...' className='p-4 my-2 mx-2 rounded-lg bg-gray-600'  required/> }
         <input type='text' ref={email} placeholder='Enter Email...' className='p-4 my-2 mx-2 rounded-lg bg-gray-600' required />
            <input type='text' ref={PassWord} placeholder='Enter PassWord...' className='p-4 my-2 mx-2 bg-gray-500 rounded-lg' required />
            <p className='p-2 m-2 text-red-800 font-bold text-lg!'>{errormessage}</p>
            <button className='p-4 my-2 mx-2 bg-red-700 rounded-lg' type='text' onClick={handleForm} >{sign ?"SIGN UP":"SIGN IN"}</button>
            <p className='p-2 m-2 text-red-600 cursor-pointer' onClick={()=>setSign(!sign)}>
                {sign ? "sign iN" : "signUp/register"} 
                  
            </p>

        </form>
 
    </div>
  )
}

export default Login
