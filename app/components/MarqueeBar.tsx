'use client'

import React from 'react'

const MarqueeBar = () => {
  return (
    <div className='bg-yellow-400 border-y-2 border-yellow-600 py-2 overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap'>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          🔥 FLASH SALE: 30% OFF ALL RETRO CONSOLES 🔥
        </span>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          📦 FREE SHIPPING ON ORDERS OVER $50 📦
        </span>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          ⚡ NEW STOCK INCOMING: GAME BOYS & WALKMANS ⚡
        </span>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          💎 USE CODE: RETRO90 FOR EXTRA 10% OFF 💎
        </span>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          🔥 FLASH SALE: 30% OFF ALL RETRO CONSOLES 🔥
        </span>
        <span className='text-purple-950 font-bold font-mono text-lg mx-8'>
          📦 FREE SHIPPING ON ORDERS OVER $50 📦
        </span>
      </div>
    </div>
  )
}

export default MarqueeBar
