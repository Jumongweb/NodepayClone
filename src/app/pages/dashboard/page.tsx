import { url } from 'inspector'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div>
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