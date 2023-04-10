import React from 'react'
import reimg from '../assets/remind.jpg';
import Image from 'next/image';
import Link from 'next/link';

const remind = () => {
  return (
    <div className=' mx-auto h-screen sm:h-full bg-black'>
      <div className='max-w-[1240px] sm:px-20 sm:mx-20 px-4 items-center'>
        <div className='flex justify-center text-2xl font-bold text-[#e35555] '>
          Rules are rules!
          
        </div>
        <div className="flex justify-center sm:ml-20">
            <Image
             src={reimg}
             alt='/'
             className='lg:w-30 h-70'
            />
        </div>
        <div className='text-[#FFFFFF] flex justify-center font-bold text-2xl ml-4 sm:text-4xl px-4'>You don&apos;t have NFT! to access the premium content, you fool! .</div>
        <div className='text-[#FFFFFF] flex justify-center'><Link href='/login' className='btngrad ' >Return to login page</Link></div>
      </div>
        
    </div>
  )
}

export default remind