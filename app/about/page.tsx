'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-purple-950'>
      <Navbar />

      {/* Hero Section */}
      <div className='bg-linear-to-r from-purple-900 to-purple-950 py-20 px-4 border-b-4 border-cyan-400'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-6xl font-bold text-cyan-300 mb-6 font-mono'>
            🎮 ABOUT RETROWAVE SHOP 🎮
          </h1>
          <p className='text-2xl text-purple-300 font-mono'>
            WHERE NOSTALGIA MEETS THE FUTURE
          </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 py-16 space-y-16'>
        {/* Our Mission */}
        <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-6xl'>🎯</span>
            <h2 className='text-4xl font-bold text-yellow-300 font-mono'>OUR MISSION</h2>
          </div>
          <p className='text-xl text-cyan-300 font-mono leading-relaxed mb-4'>
            RetroWave Shop exists to bridge the gap between yesterday's golden age and tomorrow's collectors. 
            We're on a mission to preserve gaming history, celebrate vintage technology, and make retro treasures 
            accessible to enthusiasts worldwide.
          </p>
          <p className='text-lg text-purple-300 font-mono leading-relaxed'>
            Every pixel, every cartridge, every console tells a story. We're here to make sure those stories 
            never fade away. Level up your collection with us! 🚀
          </p>
        </div>

        {/* Why We Built This */}
        <div className='bg-purple-900 border-4 border-yellow-300 p-8 rounded-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-6xl'>💡</span>
            <h2 className='text-4xl font-bold text-cyan-300 font-mono'>WHY WE EXIST</h2>
          </div>
          <div className='space-y-4'>
            <div className='bg-purple-950 border-2 border-purple-700 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>🕹️ PRESERVE HISTORY</h3>
              <p className='text-cyan-300 font-mono'>
                The 80s and 90s were revolutionary for gaming and tech. We're dedicated to keeping these 
                iconic devices alive and functional, so future generations can experience the magic that 
                started it all.
              </p>
            </div>

            <div className='bg-purple-950 border-2 border-purple-700 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>🎨 CELEBRATE AESTHETICS</h3>
              <p className='text-cyan-300 font-mono'>
                Synthwave. Vaporwave. Retro-futurism. The aesthetic of the past has never looked more 
                vibrant. We celebrate the neon glow, the pixel art, and the geometric designs that defined 
                an era.
              </p>
            </div>

            <div className='bg-purple-950 border-2 border-purple-700 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>🤝 BUILD COMMUNITY</h3>
              <p className='text-cyan-300 font-mono'>
                Retro gaming isn't just about collecting—it's about connecting. We built this platform to 
                unite collectors, gamers, and enthusiasts who share the same passion for vintage tech and 
                timeless gameplay.
              </p>
            </div>

            <div className='bg-purple-950 border-2 border-purple-700 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>⚡ MAKE IT ACCESSIBLE</h3>
              <p className='text-cyan-300 font-mono'>
                Finding authentic retro items can be challenging. We've streamlined the process, offering 
                verified products with transparent pricing, so you can build your dream collection without 
                the hassle.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-6xl'>👥</span>
            <h2 className='text-4xl font-bold text-yellow-300 font-mono'>WHO WE SERVE</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-cyan-400 p-6 rounded'>
              <h3 className='text-2xl font-bold text-cyan-300 font-mono mb-3'>🎮 RETRO GAMERS</h3>
              <p className='text-purple-300 font-mono'>
                Whether you grew up with an NES controller in hand or discovered retro gaming later, 
                this is your playground. Relive the classics and discover hidden gems.
              </p>
            </div>

            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-yellow-300 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>📦 COLLECTORS</h3>
              <p className='text-purple-300 font-mono'>
                Building the ultimate collection? We curate authentic, quality items that deserve a 
                place on your shelf. From rare consoles to mint-condition accessories.
              </p>
            </div>

            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-cyan-400 p-6 rounded'>
              <h3 className='text-2xl font-bold text-cyan-300 font-mono mb-3'>🎨 AESTHETIC ENTHUSIASTS</h3>
              <p className='text-purple-300 font-mono'>
                Love the synthwave vibe? These products aren't just tech—they're art. Display them 
                proudly and let that retro-futuristic aesthetic shine.
              </p>
            </div>

            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-yellow-300 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>🎁 GIFT SEEKERS</h3>
              <p className='text-purple-300 font-mono'>
                Looking for the perfect gift for a retro fan? We've got you covered with unique 
                items that'll make any gamer's heart skip a beat (or two).
              </p>
            </div>

            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-cyan-400 p-6 rounded'>
              <h3 className='text-2xl font-bold text-cyan-300 font-mono mb-3'>🕰️ NOSTALGIA SEEKERS</h3>
              <p className='text-purple-300 font-mono'>
                Missing the good old days? We understand. Reconnect with your childhood through 
                the devices and games that shaped your memories.
              </p>
            </div>

            <div className='bg-linear-to-r from-purple-950 to-purple-900 border-2 border-yellow-300 p-6 rounded'>
              <h3 className='text-2xl font-bold text-yellow-300 font-mono mb-3'>🎓 NEW EXPLORERS</h3>
              <p className='text-purple-300 font-mono'>
                Never experienced retro gaming? Start your journey here. Discover why these 
                "ancient" games still captivate millions today.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className='bg-purple-900 border-4 border-yellow-300 p-8 rounded-lg'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-6xl'>⭐</span>
            <h2 className='text-4xl font-bold text-cyan-300 font-mono'>OUR VALUES</h2>
          </div>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='text-center'>
              <div className='text-6xl mb-4'>🔒</div>
              <h3 className='text-xl font-bold text-yellow-300 font-mono mb-2'>AUTHENTICITY</h3>
              <p className='text-purple-300 font-mono text-sm'>
                Every product is verified. No knockoffs, no fakes—only genuine retro treasures.
              </p>
            </div>

            <div className='text-center'>
              <div className='text-6xl mb-4'>💎</div>
              <h3 className='text-xl font-bold text-yellow-300 font-mono mb-2'>QUALITY</h3>
              <p className='text-purple-300 font-mono text-sm'>
                We test, inspect, and ensure every item meets our high standards before shipping.
              </p>
            </div>

            <div className='text-center'>
              <div className='text-6xl mb-4'>❤️</div>
              <h3 className='text-xl font-bold text-yellow-300 font-mono mb-2'>PASSION</h3>
              <p className='text-purple-300 font-mono text-sm'>
                We're not just sellers—we're fans. This is built by gamers, for gamers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='bg-linear-to-r from-cyan-400 to-purple-600 border-4 border-yellow-300 p-12 rounded-lg text-center'>
          <h2 className='text-5xl font-bold text-white font-mono mb-4'>
            READY TO START YOUR JOURNEY?
          </h2>
          <p className='text-2xl text-yellow-300 font-mono mb-8'>
            Press START to continue... 🎮
          </p>
          <div className='flex justify-center gap-6'>
            <a href='/shop'>
              <button className='bg-yellow-300 hover:bg-yellow-400 text-purple-950 font-bold py-4 px-8 rounded font-mono text-xl transition-all border-4 border-yellow-400'>
                BROWSE SHOP →
              </button>
            </a>
            <a href='/contact'>
              <button className='bg-purple-950 hover:bg-purple-900 text-cyan-300 font-bold py-4 px-8 rounded font-mono text-xl transition-all border-4 border-cyan-400'>
                CONTACT US 📧
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
