import React from 'react'
import Header from './Header'
import { IMG_URL } from '../utils/constant'

const Login = () => {
  return (
    <div>
     <Header/>
     <div>
        <img src={IMG_URL}
        className='h-full w-full '
         alt="not found"/>
     </div>
    </div>
  )
}

export default Login
