import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-purple-950/90 backdrop-blur-sm border-b-2 border-purple-700'>
      <div className='flex justify-between items-center px-8 py-4'>
        <div className='text-2xl font-mono text-cyan-300'>
          Retro Tech Shop.
        </div>
        <div className='flex gap-8 text-cyan-300 font-mono border-2 border-cyan-400 rounded-full px-6 py-2 bg-purple-900/30'>
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
          <button className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm'>
            <span className='text-xl'>🔍</span>
            Search
          </button>
          <Link href="/profile" className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm'>
            <span className='text-xl'>👤</span>
            Profile
          </Link>
          <Link href="/Cart" className='flex items-center gap-2 border-2 border-cyan-400 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded hover:bg-cyan-900/50 text-sm'>
            <span className='text-xl'>🛒</span>
            Cart (2)
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
