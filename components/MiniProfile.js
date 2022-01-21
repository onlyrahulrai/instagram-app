import React from 'react';
import { useSession,signOut } from 'next-auth/react';
import profileImg from "../public/profile.jpg"


const MiniProfile = () => {
  const {data:session} = useSession()



  return (
      <div className='flex items-center justify-between mt-14 ml-10'>
          <img 
            src={session?.user?.image ?? profileImg.src}
            alt="profile pic"
            className='w-16 h-16 rounded-full border p-[2px]'
          />

          <div className='flex-1 mx-4'>
              <h2 className='font-bold'>{session?.user?.username ?? "Rahul Rai"}</h2>
              <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
          </div>

          <button className='text-blue-400 text-sm font-semibold' onClick={signOut}>Sign Out</button>
      </div>
  )
};

export default MiniProfile;
