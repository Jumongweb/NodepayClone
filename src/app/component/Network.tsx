import React from 'react'

const Network = () => {
  return (
    <div className='bg-white p-4 mt-4 rounded-lg border border-black'>
        <div className='flex justify-between'>
            <p className='font-bold'>Your Networks</p>
            <p>Hide IP address</p>
        </div>
        
        <div className='border border-black mt-4 rounded-lg'>
                <table className='w-full gap-4'>
                    <thead className='bg-gray-300'>
                        <tr>
                            <th className='pt-3 pb-3'>Network Status</th>
                            <th className='border'>Network Name</th>
                            <th className='border'>IP</th>
                            <th className='border'>Time Connected</th>
                            <th className='border'>Network Quality</th>
                            <th className='border'>Total Point <span>Earned</span></th>
                        </tr>    
                    </thead>
                    <tbody className='mt-4'>
                    <tr className='py-8'>
                        <td className='text-center text-green-500 pt-4'>Connected</td>
                        <td className='text-center pt-4'>Unknown</td>
                        <td className='text-center pt-4'>129.202.122.137</td>
                        <td className='text-center pt-4'>1 day, 17 hr, 29 mins</td>
                        <td className='text-center pt-4 text-green-500'>87%</td>
                        <td className='text-end pt-4'><button className='text-white  pl-4 pr-4 mr-8 rounded-xl bg-blue-700 p-1'>1,046.88</button></td>
                    </tr>

                    <tr className='py-8'>
                        <td className='text-center pt-4'>Disconnected</td>
                        <td className='text-center pt-4'>Unknown</td>
                        <td className='text-center pt-4'>79.202.122.137</td>
                        <td className='text-center pt-4'>1 day, 17 hr, 29 mins</td>
                        <td className='text-center pt-4'>-%</td>
                        <td className='text-end pt-4'><button className='text-white  pl-4 pr-4 mr-8 rounded-xl bg-blue-700 p-1'>2,046.88</button></td>
                    </tr>

                    <tr className='py-8'>
                        <td className='text-center pt-4'>Disconnected</td>
                        <td className='text-center pt-4'>Unknown</td>
                        <td className='text-center pt-4'>129.202.122.137</td>
                        <td className='text-center pt-4'>2 day, 17 hr, 29 mins</td>
                        <td className='text-center pt-4'>-%</td>
                        <td className='text-end pt-4'><button className='text-white  pl-4 pr-4 mr-8 rounded-xl bg-blue-700 p-1'>12,046.88</button></td>
                    </tr>

                    <tr className='py-8'>
                        <td className='text-center pt-4'>Disconnected</td>
                        <td className='text-center pt-4'>Unknown</td>
                        <td className='text-center pt-4'>129.202.122.137</td>
                        <td className='text-center pt-4'>1 day, 17 hr, 29 mins</td>
                        <td className='text-center pt-4'>-%</td>
                        <td className='text-end pt-4'><button className='text-white  pl-4 pr-4 mr-8 rounded-xl bg-blue-700 p-1'>1,046.88</button></td>
                    </tr>


                    </tbody>

                </table>
            

        </div>
    </div>
  )
}

export default Network