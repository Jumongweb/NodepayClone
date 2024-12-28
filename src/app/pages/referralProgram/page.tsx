import Link from 'next/link'
import React from 'react'

const ReferralProgram = () => {
  return (
    <>
    ReferralProgram
    <div className='flex flex-col mt-8'>

                <Link className='bg-blue-900 p-4 text-white rounded' href="/">Dashboard</Link>
                <Link className='p-4' href="pages/referralProgram">Referral Program</Link>
                <Link className='p-4' href="/dashboard">Missions & Rewards</Link>
                <Link className='p-4' href="/dashboard">Earnings</Link>
                <Link className='p-4' href="/dashboard">Medal & Boost</Link>
                <Link className='p-4' href="/dashboard">Transaction History</Link>
            </div>
    </>
    
  )
}

export default ReferralProgram