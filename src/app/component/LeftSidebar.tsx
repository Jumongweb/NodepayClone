import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import NodepayLogo from '../asset/node-logo.png'


const LeftSidebar = () => {
  return (
    <div className="w-68 p-2 relative">
        <div>
          <Image
            src={NodepayLogo} alt='logo'
          />
        </div>

            {/* <div className="flex items-center">
            <Image
              src={Logo} alt="Logo"
              width={50} height={50}
            />
            <p className="ml-2 text-4xl">
              nodepay
            </p>
            </div> */}
            
            <div className='flex flex-col gap-2'>
                <Link className='bg-blue-900 p-4 text-white rounded' href="/">Dashboard</Link>
                <Link className='p-4 hover:bg-gray-400 rounded-lg' href="/pages/referralProgram">Referral Program</Link>
                <Link className='p-4 hover:bg-gray-400 rounded-lg' href="/dashboard">Missions & Rewards</Link>
                <Link className='p-4 hover:bg-gray-400 rounded-lg' href="/dashboard">Earnings</Link>
                <Link className='p-4 hover:bg-gray-400 rounded-lg' href="/dashboard">Medal & Boost</Link>
                <Link className='p-4 hover:bg-gray-400 rounded-lg' href="/dashboard">Transaction History</Link>
            </div>

            <div>
              <p>Learn how to optimize your experience</p>
              <div>
                <p>Read Blog</p>
              </div>
            </div>
            <Link className='p-4 absolute bottom-28' href="pages/signIn">Logout</Link>
          </div>
)
}

export default LeftSidebar;