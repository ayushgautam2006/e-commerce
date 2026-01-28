'use client'

import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { getCartCount } = useCart()
  const { data: session } = useSession()
  
  return (
    <div className='sticky top-0 z-50 bg-purple-950/90 backdrop-blur-sm border-b-2 border-purple-700'>
      <div className='flex justify-between items-center px-8 py-4'>
        <div className='text-2xl font-mono text-cyan-300'>
          Retro Tech Shop.
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-cyan-300 font-mono border-2 border-cyan-400 rounded-full px-6 py-2 bg-purple-900/30'>
          <Link href="/" className='hover:text-cyan-400 transition-colors'>
            Home
          </Link>
          <Link href="/shop" className='hover:text-cyan-400 transition-colors'>
            Shop
          </Link>
          <Link href="/about" className='hover:text-cyan-400 transition-colors'>
            About
          </Link>
          <Link href="/contact" className='hover:text-cyan-400 transition-colors'>
            Contact
          </Link>
        </div>
        <div className='flex gap-3 font-mono'>
          {session ? (
            <>
              <Link href="/profile" className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm'>
                <span className='text-xl'>👤</span>
                {session.user?.name || 'Profile'}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className='flex items-center gap-2 border-2 border-red-400 bg-red-900/30 text-red-300 px-4 py-2 rounded hover:bg-red-900/50 text-sm'
              >
                <span className='text-xl'>🚪</span>
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth/signin" className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm'>
              <span className='text-xl'>🔑</span>
              Sign In
            </Link>
          )}
          <Link href="/Cart" className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm relative'>
            <span className='text-xl'>🛒</span>
            Cart
            {getCartCount() > 0 && (
              <span className='absolute -top-2 -right-2 bg-yellow-400 text-purple-950 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs'>
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
