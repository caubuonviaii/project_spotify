import React from 'react'

export default function DetailSong() {
  return (
    <div className='col-span-1 p-3 text-left'>
        <h1 className='text-2xl text-cyan-200 h-10 font-bold'> Playing Now</h1>
        <h3 className='text-2xl text-cyan-100 h-10'> Sing me to sleep</h3>
        <div className='w-[200px] m-auto'>
             <img src='https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576' alt='image'/>
        </div>
        <div className='w-[80px] m-auto mt-2 flex justify-evenly items-center'>
              <img  className='rounded-full' src='https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a ' alt='image'/>
              <span  className='text-xl text-justify-item m-3 text-cyan-500'> Alan Walker</span>
        </div>
       
       
     </div>
  )
}
