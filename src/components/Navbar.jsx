import {gsap} from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
export default function Navbar() {

const[navToggle,setNavToggle]= useState(false);

  function handleToggle(){
    setNavToggle(prev=>!prev);
    
  }
  const navRef=useRef(null);
useEffect(()=>{
  
  gsap.from(navRef.current,{
    y:-100,
    duration:0.6,
    opacity:0,
    delay:1,
    stagger:1
  })
})
  
  

  return (
    <div ref={navRef} className='sticky top-0 w-full z-10'>
      <nav  className='  w-full  bg-black p-2 px-8 border-2 flex justify-between items-center mob:p-2 mob:px-16 tab:px-12'>

         <div className=" logo h-10 w-10  mob:w-14 mob:h-14  object-cover">
            <img src='../public/logo.png' alt="logo" className='h-full rounded-full '/>
         </div>

        <ul className=' hidden  text-white gap-8 text-2xl tab:flex '>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
        </ul>
    
        <div onClick={handleToggle} className='tab:hidden' >
         { 
         navToggle
            ?
         <div className="cross hover:cursor-pointer">
            <svg className='h-6 w-6' fill="#ffffff"  version="1.1"    viewBox="0 0 490 490"  stroke="#ffffff"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
          </div>
            :
          <div className="hamBurger">
            <svg  className='h-8 w-8 hover:cursor-pointer '  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
          </div>    
        }
        </div>

      </nav>
    </div>
  )
}