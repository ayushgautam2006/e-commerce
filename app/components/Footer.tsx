import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-purple-950 border-t-4 border-cyan-400 mt-16'>
      <div className='max-w-6xl mx-auto px-8 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-4 gap-8 mb-8'>
          {/* About Section */}
          <div>
            <h3 className='text-cyan-300 font-bold font-mono text-xl mb-4 flex items-center gap-2'>
              <span className='text-2xl'>🎮</span>
              RETRO TECH
            </h3>
            <p className='text-purple-300 text-sm mb-4'>
              Your ultimate destination for authentic vintage tech and gaming collectibles from the golden age of technology.
            </p>
            <div className='flex gap-3 mt-4'>
              <a href='#' className='bg-purple-900 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-900 transition-colors'>
                <span className='text-2xl'>📘</span>
              </a>
              <a href='#' className='bg-purple-900 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-900 transition-colors'>
                <span className='text-2xl'>🐦</span>
              </a>
              <a href='#' className='bg-purple-900 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-900 transition-colors'>
                <span className='text-2xl'>📷</span>
              </a>
              <a href='#' className='bg-purple-900 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-900 transition-colors'>
                <span className='text-2xl'>🎵</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-cyan-300 font-bold font-mono text-lg mb-4'>QUICK LINKS</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/shop' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → Shop All
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → About Us
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → Contact
                </Link>
              </li>
              <li>
                <Link href='/faq' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className='text-cyan-300 font-bold font-mono text-lg mb-4'>ACCOUNT</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/profile' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → My Profile
                </Link>
              </li>
              <li>
                <Link href='/Cart' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='text-cyan-300 font-bold font-mono text-lg mb-4'>LEGAL</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/privacy' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-purple-300 hover:text-cyan-300 transition-colors font-mono text-sm'>
                  → Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className='border-t-2 border-purple-700 pt-8 mb-8'>
          <h3 className='text-cyan-300 font-bold font-mono text-sm mb-4 text-center'>ACCEPTED PAYMENT METHODS</h3>
          <div className='flex justify-center gap-4 flex-wrap'>
            <div className='bg-purple-900 border-2 border-cyan-400 rounded p-2 text-2xl'>💳</div>
            <div className='bg-purple-900 border-2 border-cyan-400 rounded p-2 text-2xl'>💰</div>
            <div className='bg-purple-900 border-2 border-cyan-400 rounded p-2 text-2xl'>🪙</div>
            <div className='bg-purple-900 border-2 border-cyan-400 rounded p-2 font-mono text-cyan-300 font-bold'>PAYPAL</div>
            <div className='bg-purple-900 border-2 border-cyan-400 rounded p-2 font-mono text-cyan-300 font-bold'>STRIPE</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t-2 border-purple-700 pt-8'>
          <div className='flex justify-between items-center flex-wrap gap-4'>
            <p className='text-purple-300 text-sm font-mono'>
              © 2025 Retro Tech Exchange. All rights reserved.
            </p>
            <p className='text-purple-400 text-xs font-mono'>
              Made with 💜 for retro tech enthusiasts
            </p>
          </div>
          <p className='text-purple-400 text-xs font-mono text-center mt-4'>
            ⚡ POWER UP YOUR NOSTALGIA ⚡ GAME ON ⚡ STAY RETRO ⚡
          </p>
        </div>
      </div>

      {/* Pixel decoration */}
      <div className='h-2 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500'></div>
    </footer>
  )
}

export default Footer
