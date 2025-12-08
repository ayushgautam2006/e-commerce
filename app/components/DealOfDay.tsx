'use client'

import React, { useState, useEffect } from 'react'

const DealOfDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
            }
          }
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='max-w-6xl mx-auto px-8 py-16'>
      <div className='border-4 border-red-500 rounded-lg p-8 bg-linear-to-r from-red-900/30 to-orange-900/30 relative overflow-hidden'>
        <div className='absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold font-mono animate-pulse'>
          HOT DEAL!
        </div>
        
        <h2 className='text-4xl font-bold text-center text-yellow-300 font-mono mb-8'>
          ⚡ DEAL OF THE DAY ⚡
        </h2>
        
        <div className='grid grid-cols-2 gap-8 items-center'>
          <div className='bg-purple-900/50 rounded-lg p-8 border-2 border-cyan-400'>
            <div className='bg-white/90 rounded-lg p-8 mb-4 flex items-center justify-center h-64'>
              <span className='text-9xl'>🎮</span>
            </div>
            <h3 className='text-2xl font-bold text-cyan-300 font-mono text-center'>
              NINTENDO GAME BOY COLOR
            </h3>
            <p className='text-purple-300 text-center mt-2'>Limited Edition Translucent Purple</p>
          </div>
          
          <div className='text-center'>
            <div className='text-6xl font-bold text-yellow-300 line-through mb-2'>$199.99</div>
            <div className='text-8xl font-bold text-green-400 mb-8'>$99.99</div>
            <div className='text-2xl text-cyan-300 font-mono mb-4'>SALE ENDS IN:</div>
            
            {/* Digital Clock Style Countdown */}
            <div className='flex justify-center gap-4 mb-8'>
              <div className='bg-black border-4 border-green-500 rounded-lg p-4 min-w-[100px]'>
                <div className='text-5xl font-bold text-green-400 font-mono' style={{ fontFamily: 'Courier New, monospace' }}>
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className='text-sm text-green-400 font-mono mt-2'>HOURS</div>
              </div>
              <div className='bg-black border-4 border-green-500 rounded-lg p-4 min-w-[100px]'>
                <div className='text-5xl font-bold text-green-400 font-mono' style={{ fontFamily: 'Courier New, monospace' }}>
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className='text-sm text-green-400 font-mono mt-2'>MINS</div>
              </div>
              <div className='bg-black border-4 border-green-500 rounded-lg p-4 min-w-[100px]'>
                <div className='text-5xl font-bold text-green-400 font-mono' style={{ fontFamily: 'Courier New, monospace' }}>
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className='text-sm text-green-400 font-mono mt-2'>SECS</div>
              </div>
            </div>
            
            <button className='bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-lg text-xl font-mono transition-all transform hover:scale-105'>
              CLAIM THIS DEAL! 🎯
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealOfDay
