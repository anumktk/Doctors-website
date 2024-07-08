import React from 'react'
import Image from 'next/image';
import Herobg from '../Assets/Herobg.png'
import Arrow from '../Assets/Arrow.png'

const Hero = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center overflow-x-auto">
      <div className="md:ml-6 mb-6 md:mb-0 text-white">
        <h1 className="text-2xl font-bold font-Montserrat mt-40 mb-2 text-center">
          Best Doctors of Pakistan
        </h1>
        <h2 className="mb-4 text-xl mt-6 text-center font-Montserrat md:text-left">
         Snippy is a rich coding snippets app<br/> that lets you create your own code<br/> snippets, categorize them, and even<br/> sync them in the cloud so you can use<br/> them anywhere. All that is free!
        </h2>
      </div>
      <div className="hidden md:block">
        <Image src={Arrow} alt="Arrow" className="w-48 "/>
         </div>
      <div>
        <Image src={Herobg} alt="Herobg" width={300} height={300}  />
      </div>
    </div>


  )
}

export default Hero
