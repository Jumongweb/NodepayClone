import React from 'react'
import Dashboard from '../pages/dashboard/page'
import CurrentSeason from './CurrentSeason'
import Iman from './Iman'
import Network from './Network'
import Image from "next/image"
import Logo from '../asset/node-logo.png'

const RightSidebar = () => {
  return (
    <>
      <div className="bg-gray-200 w-full p-4">
        <div className="hidden sm:flex justify-between items-center mb-4">
          <p className="text-blue-700 text-4xl font-bold">Hello Princess Iman!</p>

          <button className="bg-yellow-300 p-4 rounded-lg font-bold">Check Airdrop</button>
        </div>
          <Dashboard/>

          <div className='bg-white mt-4 flex rounded-lg items-center justify-between p-4 border border-black'>
            <div>
                <p className='font-bold'>Total Referrals:1</p>
                <p className='text-yellow-500 font-bold'>Pending:1</p>
            </div>

            <div>
                <button className='bg-blue-700 text-white p-4 rounded-lg'>Copy Referral link</button>
            </div>
          </div>

        <CurrentSeason/>
        <Iman/>
        <Network/>
        </div>
      </>
  )
}

export default RightSidebar