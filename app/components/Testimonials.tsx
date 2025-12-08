'use client'

import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex_92",
      avatar: "🧑",
      text: "Found my childhood Game Boy here! The quality is amazing and shipping was super fast. Feels like traveling back to 1995!"
    },
    {
      id: 2,
      name: "RetroGamer",
      avatar: "👨",
      text: "This shop is a treasure trove! Got a mint condition NES with all original cables. The nostalgia hit me hard!"
    },
    {
      id: 3,
      name: "Sarah_K",
      avatar: "👩",
      text: "Incredible collection of vintage tech. The staff really knows their stuff. My Walkman works perfectly!"
    }
  ]

  return (
    <div className='max-w-6xl mx-auto px-8 py-16'>
      <h2 className='text-4xl font-bold text-center text-cyan-300 font-mono mb-12'>
        💬 WHAT OUR PLAYERS SAY 💬
      </h2>
      
      <div className='grid grid-cols-1 gap-6'>
        {testimonials.map((review) => (
          <div 
            key={review.id}
            className='bg-white border-8 border-black rounded-lg p-6 relative shadow-lg'
            style={{ 
              borderStyle: 'solid',
              borderImage: 'linear-gradient(45deg, #00ffff, #ff00ff) 1'
            }}
          >
            {/* RPG-style dialogue box */}
            <div className='flex items-start gap-4'>
              <div className='bg-purple-950 border-4 border-cyan-400 rounded-full w-16 h-16 flex items-center justify-center text-4xl shrink-0'>
                {review.avatar}
              </div>
              
              <div className='flex-1'>
                <div className='bg-purple-900 text-yellow-300 font-bold font-mono px-4 py-2 rounded-t-lg border-4 border-purple-950'>
                  {review.name}
                </div>
                <div className='bg-blue-950 border-4 border-blue-900 border-t-0 rounded-b-lg p-4'>
                  <p className='text-white font-mono leading-relaxed'>
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pixel corner decoration */}
            <div className='absolute -top-2 -right-2 bg-yellow-400 w-4 h-4'></div>
            <div className='absolute -bottom-2 -left-2 bg-cyan-400 w-4 h-4'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
