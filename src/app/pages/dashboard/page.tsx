// import { url } from 'inspector'
import React from 'react'
import Image from 'next/image'
import Logo from '../../asset/node-logo.png'

const Dashboard = () => {
  return (
    <>
      <div>
        {/* how do i make a div appear here when it is mobile view */}

        <div className="pr-4 sm:hidden bg-white rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <Image
              src={Logo} alt='Nodepay Logo'
            />
          </div>

          <button className="bg-yellow-300 p-4 rounded-lg font-bold">Check Airdrop</button>

          {/* <p className="text-xl font-bold text-center">This is mobile view only!</p> */}
        </div>

        <p className="text-4xl mt-4 font-bold">Dashboard</p>
          <div style={{
            backgroundImage: "url('/star_wars_banner.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='rounded-lg'>
            <div className="mt-4 p-4">
              <p className='text-white text-3xl font-bold'>Node Wars is live! Join the fight to increase your rewards and</p> 
              <p className='text-white text-3xl font-bold'>prove your humanity</p> 
            </div>
            <button className="m-4 shadow bg-white p-2 mt-4 rounded-lg">Play Now</button>
          </div>
          
      </div>
      
    </>
    
  )
}

export default Dashboard