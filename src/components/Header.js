import React from 'react'
import { LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-transparent to-black h-18 w-full z-10 flex justify-between  '>

     <div>
     <img src={LOGO}  className='h-20 w-25'
      alt="not found"/>
     </div>

    <div className=' my-4 text-white rounded-lg'>
    <button className='bg-purple-700 p-3 rounded-lg mx-5 '>Sign Out</button>
    </div>
    </div>
  )
}

export default Header
