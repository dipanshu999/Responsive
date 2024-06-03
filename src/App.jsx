import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {
  return (
    <div className='p-0 m-0  max-w-[1450px] mx-auto  '>
       <Navbar/>
       <Home/>
    </div>
  )
}
