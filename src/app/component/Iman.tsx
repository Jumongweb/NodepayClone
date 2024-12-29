import React from 'react'
import Image from "next/image";
import Iman1 from '../asset/iman1.jpg'
import Iman2 from '../asset/iman2.jpg'
import Iman3 from '../asset/iman3.jpg'
import Iman4 from '../asset/iman4.jpg'


const Iman = () => {
  return (
    <>
        <div className='w-full items-center mt-4 flex justify-center'>
            <input className='h-8 mt-4 rounded-lg w-1/3 text-black p-4' placeholder='Who does Toheeb heart bleed for?' type="text" />
        </div>
        <p className='text-4xl font-bold text-center mt-4 text-blue-700'>Happy new year in advance</p>
        <p className='text-4xl font-bold text-center text-blue-700'>I miss you</p>

        <div className='border border-black mt-4 p-4 rounded-lg flex gap-4 bg-white'>

        <div>
            <Image src={Iman1} alt='IMAN' />
        </div>
        <div>
            <Image
              src={Iman2} alt="IMAN"
            />
        </div>
        <div>
            <Image
              src={Iman3} alt="IMAN"
            />
        </div>
        <div>
            <Image
              src={Iman4} alt="IMAN"
            />
        </div>
        </div>

        </>
  )
}

export default Iman