import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppicon from '../../../public/WhatsApp_icon.png.webp'


const Whatsapp = () => {
  return (
    <div className='bg-black flex justify-end'>
      
  <Link href='https://wa.me/+923350515844' target="blank" >
 <Image className="relative m-4 " alt="whatsapp" width={60} height={60} src={WhatsAppicon} /></Link>

    </div>
  )
}

export default Whatsapp
