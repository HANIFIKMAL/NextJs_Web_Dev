"use client"


import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
// import {signIn, signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
    // const isUserLoggedIn = true;

    // const[providers,setProviders]=useState(null);

    // useEffect(() => {
    //   const setProviders=async()=>{
    //     const response =await getProviders();

    //     setProviders(response);
    //   }

    //   setProviders();
    // }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
          <p className='logo_text'>Movie Search Tool</p>
        </Link>

        <div className='sm:flex hidden'>
            <div className='flex gap-3 md:gap-5'>
              <Link href="/popular" className='black_btn'>Popular</Link>
              <Link href="/new" className='black_btn'>Now-Playing</Link>
            </div>
        </div>

    </nav>
  )
}

export default Nav
