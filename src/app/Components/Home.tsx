import React from 'react'
import Image from 'next/image';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import img5 from '../Assets/img5.png';
import img6 from '../Assets/img6.png';
import { FaArrowDownLong } from "react-icons/fa6";
import Line from '../Assets/Line.png';
import Link from 'next/link';



const Home = () => {
  return (
     <div className="flex flex-col items-center justify-center overflow-x-auto  bg-black">
      <div className="text-4xl font-extrabold text-white font-Montserrat border border-green-800 mt-20 mb-20 underline underline-offset-8 decoration-4 decoration-white font-serif" >
      
         Our Blogs Regarding Exercise or treatment
        </div>
         {/* new grid */}
       <div className='grid md:grid-cols-3 gap-4 md:gap-6 px-16'>
  <div className="w-full md:w-auto">
     <a href="Diabetes">
  <div>
    <Image src={img1} alt="img1" width={300} height={300} />
  </div>
</a>
    </div>
  <div className="w-full md:w-auto">
    <a href="Juandice">
  <div>
    <Image src={img2} alt="img2" width={300} height={300} />
  </div>
</a></div>
  <div className="w-full md:w-auto">
    <a href="Flu">
  <div>
    <Image src={img3} alt="img3" width={300} height={300} />
  </div>
</a>
  </div>
  <div className="w-full md:w-auto">
    <a href="Cough">
  <div>
    <Image src={img4} alt="img4" width={300} height={300} />
  </div>
</a>
  </div>
  <div className="w-full md:w-auto">
    <a href="Weightloss">
  <div>
    <Image src={img5} alt="img5" width={300} height={300} />
  </div>
</a>
  </div>
  <div className="w-full md:w-auto">
    <a href="Heartattack">
  <div>
    <Image src={img6} alt="img6" width={300} height={300} />
  </div>
</a></div>
</div>

      
      {/* branches code */}
      <div className="text-4xl font-bold text-white font-Montserrat border border-green-800 mt-20 mb-16 underline underline-offset-8 decoration-4 decoration-white font-serif">
         Our Branches
        </div>

      <div className='grid grid-cols-2 grid-rows-4 gap-8  mb-10' >
        {/* col 1 */}
     <div className=''>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48
        '/>
     </div>
      {/* col 2 */}
      <div className=''>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48'/>
     </div>
       {/*2nd row col 1 */}
     <div className=''>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48'/>
     </div>
      {/*2nd row col 2 */}
      <div className=''>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48'/>
     </div>
      {/*3rd row */}
      <div className='col-span-2'>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center mr-56 gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48'/>
     </div>
      {/*4th row  */}
      <div className='col-span-2 '>   
        <a
            href=""
            // target="_blank"
            className="flex justify-center items-center mr-56 gap-2"
          >
            <h5 className='text-white text-3xl'>Karachi</h5>
            <FaArrowDownLong  className='text-white text-3xl'/>
          </a>
        <Image src={Line} alt='Line' className='w-48'/>
     </div>
      </div>
      
    </div>

  )
}

export default Home
    //  <Link href="/Diabetes">Diabetes</Link>
    