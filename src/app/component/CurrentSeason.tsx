import React from 'react'

const CurrentSeason = () => {
  return (
    <div className='mt-4 sm:flex gap-4'>
        
        <div className='bg-white sm:w-2/3 border border-black p-4 rounded-lg'>
          
          <div>
            <div className='text-blue-700 rounded-lg text-2xl font-bold'>Current season: Season #2</div>

            <div className='sm:flex justify-between mt-4 gap-4'>

            <div className='bg-blue-900 p-4 rounded-lg sm:w-1/2'>
              <p className='text-white'>Icon</p>
              <p className='text-white mt-4'>Season Earnings</p>
              <p className='text-4xl text-white font-semibold mt-4'>1,253,900.23</p>
            </div>

            <div className='border border-black p-4 rounded-lg sm:w-1/2'>
              <p className=''>Icon</p>
              <p className='mt-4'>Season Earnings</p>
              <p className='text-4xl font-semibold mt-4'>5,900.23</p>
            </div>

            </div>

          </div>
          
        </div>
        
        <div className='bg-white w-1/3 rounded-lg border border-black p-4 flex'>
          <div>
            <p className='font-bold'>Network</p>
            <p className='font-bold'>Connection</p>

            <button className='mt-2 border border-black rounded-lg p-2'>Network earning rate</button>
            <button className='mt-12 border border-black rounded-lg p-2'>Unknown network</button>
            <button className='mt-2 border border-black rounded-lg p-2'>Ip 129.205.112.211</button>
          </div>

          <div>
            <button className='text-green-700 bg-gray-200 p-4 rounded-lg'>Connected</button>
            <p className='text-green-600 mt-4'>Logo</p>
            <p className='text-green-600'>Network Quality</p>
            <p className='text-green-600 font-bold text-4xl'>94%</p>
          </div>
        </div>
    </div>
  )
}

export default CurrentSeason