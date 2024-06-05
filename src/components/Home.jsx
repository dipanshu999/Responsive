import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRefs = useRef([]);
  boxRefs.current = [];
  const textRef = useRef();

  useEffect(()=>{
     gsap.from(boxRefs.current,{
       y:-1500,
       duration:2,
       delay:1,
       stagger:0.3
     })

     gsap.from(textRef.current,{
      y:500,
      duration:1.5,
      scrollTrigger:{
        trigger:textRef.current,
        markers:true,
        scroller:'body',
        start:'top 150%'
      }
     })
    
   },[])

   const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <>

<div className='box-container flex flex-wrap items-center justify-center p-4 gap-4 mob:p-12 mob:gap-12 bg-yellow-50'>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} ref={addToRefs} className="box border-2 bg-white border-red-400 rounded-xl w-[140px] h-[200px] xsm:w-[180px] xsm:h-[240px]">
            <img src="https://imgs.search.brave.com/NjUZiET-9D8rLOEuq7YJ6P9tU8axeFDcpsDH8zATSSo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVmdW5reS5jb20v/aW1hZ2VzL3ByaXNt/aWMvYThmODc3ZmYt/ZjE1My00MjMwLTlk/OTUtYjk2MGJlM2U0/YTc5X3Bob3RvLXRv/LXBhaW50aW5nLWFm/dGVyLmpwZWc_YXV0/bz1hdmlmLHdlYnAm/Zm9ybWF0PWpwZyZ3/aWR0aD04NjM" alt="" />
            <p className='text-xl leading-6 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        ))}
      </div>

    <div ref={textRef}  className="blob w-[100vw] h-[20em] bg-[url('/blob.svg')] bg-no-repeat opacity-85 border flex items-center justify-center  mob:h-[32em] tab:h-[42em] ">
      <p className="text-[2.3em] font-['montserrat'] font-bold  opacity-80 mob:text-[3em] tab:text-[4.3em]  ">
        We provide <br/>the best  painters <br/> in the world
      </p>
    </div>

    
  </>
  )
}
