import React from 'react'
import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar'
import DealOfDay from './components/DealOfDay'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {
  const products = [
    { id: 1, name: 'FILM CAMERA', image: '📷' },
    { id: 2, name: 'NES', image: '🎮' },
    { id: 3, name: 'CALCULATOR', image: '🖩' },
  ]

  const categories = [
    { id: 1, level: 'LEVEL 1', name: 'CONSOLES', icon: '🎮', desc: 'Classic gaming systems' },
    { id: 2, level: 'LEVEL 2', name: 'HANDHELDS', icon: '🎯', desc: 'Portable gaming devices' },
    { id: 3, level: 'LEVEL 3', name: 'GAMES', icon: '💿', desc: 'Retro game cartridges' },
    { id: 4, level: 'LEVEL 4', name: 'AUDIO', icon: '📻', desc: 'Vintage audio equipment' },
  ]

  return (
    <div className='min-h-screen bg-linear-to-b from-purple-950 via-purple-900 to-purple-950'>
      <Navbar/>
      <MarqueeBar/>
      
      {/* Hero Section */}
      <div className='relative max-w-6xl mx-auto mt-12 mb-16'>
        <div className='border-4 border-cyan-400 rounded-lg p-12 bg-linear-to-r from-purple-900/50 to-blue-900/50 relative overflow-hidden'>
          {/* Decorative stars */}
          <div className='absolute inset-0 opacity-50'>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className='absolute text-cyan-300 text-xs'
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                ✦
              </div>
            ))}
          </div>
          
          <div className='relative z-10 flex items-center justify-between p-5'>
            <div className='text-6xl'>
              <span className='mr-8'>🎮</span>
              <span>📼</span>
            </div>
            <div className='text-center'>
              <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-wider font-mono'>
                REDISCOVER
              </h1>
              <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-wider font-mono'>
                THE PAST
              </h1>
            </div>
            <div className='text-6xl opacity-0'>🎮</div>
          </div>
        </div>
        
        {/* Retro sun decoration */}
        <div className='absolute -bottom-32 left-0 w-48 h-48 rounded-full bg-linear-to-b from-yellow-400 via-orange-400 to-pink-500 opacity-80'></div>
        <div className='absolute -bottom-32 right-0 w-48 h-48 rounded-full bg-linear-to-b from-yellow-400 via-orange-400 to-pink-500 opacity-80'></div>
      </div>

      {/* Deal of the Day */}
      <DealOfDay />

      {/* Shop by Category - Level Select Screen */}
      <div className='max-w-6xl mx-auto px-8 py-16'>
        <h2 className='text-4xl font-bold text-center text-cyan-300 font-mono mb-12'>
          🎮 SELECT YOUR LEVEL 🎮
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className='group border-4 border-purple-500 rounded-lg p-6 bg-purple-900/30 hover:bg-purple-900/60 transition-all cursor-pointer hover:scale-105 hover:border-cyan-400 hover:animate-pulse relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
              <div className='text-sm text-yellow-400 font-mono mb-2'>{cat.level}</div>
              <div className='text-6xl mb-4 text-center'>{cat.icon}</div>
              <h3 className='text-xl font-bold text-cyan-300 font-mono text-center mb-2'>{cat.name}</h3>
              <p className='text-purple-300 text-sm text-center'>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className='max-w-6xl mx-auto px-8 pb-16 relative z-10'>
        <h2 className='text-4xl font-bold text-center text-cyan-300 font-mono mb-12'>
          ⭐ FEATURED ITEMS ⭐
        </h2>
        <div className='flex justify-center items-center gap-8'>
          <button className='text-4xl text-cyan-400 hover:text-cyan-300'>‹</button>
          
          <div className='grid grid-cols-3 gap-8 flex-1'>
            {products.map((product) => (
              <div 
                key={product.id}
                className='bg-linear-to-b from-purple-300 to-purple-400 rounded-lg p-8 border-4 border-purple-500 hover:border-cyan-400 transition-all cursor-pointer group'
              >
                <div className='bg-white/90 rounded-lg p-8 mb-4 flex items-center justify-center h-48'>
                  <span className='text-8xl'>{product.image}</span>
                </div>
                <h3 className='text-center text-xl font-bold text-purple-950 font-mono tracking-wide'>
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
          
          <button className='text-4xl text-cyan-400 hover:text-cyan-300'>›</button>
        </div>
      </div>

      {/* RPG Testimonials */}
      <Testimonials />

      {/* About Section */}
      <div className='max-w-6xl mx-auto px-8 py-16'>
        <div className='border-4 border-cyan-400 rounded-lg p-12 bg-linear-to-r from-purple-900/50 to-blue-900/50'>
          <h2 className='text-4xl font-bold text-center text-cyan-300 font-mono mb-8'>WHY CHOOSE US?</h2>
          <div className='grid grid-cols-3 gap-8 text-center'>
            <div>
              <span className='text-5xl mb-4 block'>✓</span>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>AUTHENTICATED</h3>
              <p className='text-purple-300'>All products verified for authenticity</p>
            </div>
            <div>
              <span className='text-5xl mb-4 block'>⚡</span>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>FAST SHIPPING</h3>
              <p className='text-purple-300'>Quick delivery worldwide</p>
            </div>
            <div>
              <span className='text-5xl mb-4 block'>💎</span>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>QUALITY</h3>
              <p className='text-purple-300'>Carefully curated vintage items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter - Save Point */}
      <div className='max-w-6xl mx-auto px-8 py-16 mb-16'>
        <div className='border-4 border-yellow-400 rounded-lg p-12 bg-linear-to-r from-blue-900/50 to-purple-900/50 text-center relative'>
          <div className='absolute top-4 left-4 text-4xl'>💾</div>
          <div className='absolute top-4 right-4 text-4xl'>💾</div>
          
          <h2 className='text-4xl font-bold text-yellow-300 font-mono mb-4'>⚡ SAVE POINT ⚡</h2>
          <p className='text-cyan-300 mb-6 text-lg font-mono'>
            Don&apos;t lose your progress! Save your email to get updates on the latest loot drops.
          </p>
          <div className='flex gap-4 justify-center max-w-xl mx-auto'>
            <input 
              type='email' 
              placeholder='player@email.com' 
              className='flex-1 px-6 py-4 rounded bg-purple-950/50 border-4 border-cyan-400 text-cyan-300 placeholder-purple-400 focus:outline-none focus:border-yellow-400 font-mono text-lg'
            />
            <button className='px-8 py-4 bg-yellow-400 text-purple-950 font-bold rounded hover:bg-yellow-300 transition-all transform hover:scale-105 font-mono text-lg border-4 border-yellow-600'>
              💾 SAVE GAME
            </button>
          </div>
          <p className='text-purple-300 mt-4 text-sm font-mono'>
            JOIN THE GUILD • GET EXCLUSIVE ACCESS • UNLOCK SPECIAL DEALS
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Grid floor effect */}
      <div className='fixed bottom-0 left-0 right-0 h-64 bg-linear-to-t from-purple-950 to-transparent pointer-events-none'></div>
    </div>
  )
}

export default page
        