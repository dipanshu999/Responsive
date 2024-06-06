import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ScrollComponent from './components/ScrollComponent'

export default function App() {
  return (
    <div className='p-0 m-0  max-w-[1450px] mx-auto  '>
       <ScrollComponent>
       <Navbar/>
       <Home/>
       </ScrollComponent>
      
    </div>
  )
}
