'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useOrders } from '../context/OrderContext'

const ProfilePage = () => {
  const { orders } = useOrders()
  
  // Mock user data - in a real app this would come from authentication
  const [user, setUser] = useState({
    name: 'RetroGamer92',
    email: 'retrogamer@email.com',
    avatar: '👤',
    joinDate: 'January 2024',
    level: 42,
    points: 8500,
    membershipTier: 'Gold',
  })

  const [wishlist] = useState([
    { id: 1, name: 'NES Console', image: '🎮', price: '$199.99' },
    { id: 2, name: 'Game Boy Pocket', image: '🎯', price: '$129.99' },
    { id: 3, name: 'Atari 2600', image: '👾', price: '$249.99' },
  ])

  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className='min-h-screen bg-linear-to-b from-purple-950 via-purple-900 to-purple-950'>
      <Navbar />
      
      <div className='max-w-6xl mx-auto px-8 py-12'>
        {/* Profile Header */}
        <div className='border-4 border-cyan-400 rounded-lg p-8 bg-purple-900/30 mb-8'>
          <div className='flex items-center gap-6 mb-6'>
            <div className='bg-purple-950 border-4 border-cyan-400 rounded-full w-24 h-24 flex items-center justify-center text-6xl'>
              {user.avatar}
            </div>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold text-cyan-300 font-mono mb-2'>{user.name}</h1>
              <p className='text-purple-300 font-mono mb-2'>{user.email}</p>
              <div className='flex gap-4 text-sm'>
                <span className='bg-yellow-500 text-purple-950 px-3 py-1 rounded font-bold font-mono'>
                  {user.membershipTier} Member
                </span>
                <span className='bg-purple-800 text-cyan-300 px-3 py-1 rounded font-mono border-2 border-cyan-400'>
                  Level {user.level}
                </span>
                <span className='bg-purple-800 text-yellow-300 px-3 py-1 rounded font-mono border-2 border-yellow-400'>
                  ⭐ {user.points} Points
                </span>
              </div>
            </div>
            <button className='bg-cyan-400 hover:bg-cyan-300 text-purple-950 font-bold px-6 py-3 rounded font-mono transition-all'>
              EDIT PROFILE
            </button>
          </div>
          
          {/* Stats Bar */}
          <div className='grid grid-cols-4 gap-4 pt-6 border-t-2 border-purple-700'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-300 font-mono'>12</div>
              <div className='text-purple-300 text-sm font-mono'>Orders</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-300 font-mono'>5</div>
              <div className='text-purple-300 text-sm font-mono'>Wishlist</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-300 font-mono'>8</div>
              <div className='text-purple-300 text-sm font-mono'>Reviews</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-cyan-300 font-mono'>{user.joinDate}</div>
              <div className='text-purple-300 text-sm font-mono'>Member Since</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className='flex gap-4 mb-8'>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-bold font-mono rounded transition-all ${
              activeTab === 'profile'
                ? 'bg-cyan-400 text-purple-950'
                : 'bg-purple-900 text-cyan-300 border-2 border-cyan-400 hover:bg-purple-800'
            }`}
          >
            📋 PROFILE INFO
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 font-bold font-mono rounded transition-all ${
              activeTab === 'orders'
                ? 'bg-cyan-400 text-purple-950'
                : 'bg-purple-900 text-cyan-300 border-2 border-cyan-400 hover:bg-purple-800'
            }`}
          >
            📦 MY ORDERS
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`px-6 py-3 font-bold font-mono rounded transition-all ${
              activeTab === 'wishlist'
                ? 'bg-cyan-400 text-purple-950'
                : 'bg-purple-900 text-cyan-300 border-2 border-cyan-400 hover:bg-purple-800'
            }`}
          >
            ❤️ WISHLIST
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 font-bold font-mono rounded transition-all ${
              activeTab === 'settings'
                ? 'bg-cyan-400 text-purple-950'
                : 'bg-purple-900 text-cyan-300 border-2 border-cyan-400 hover:bg-purple-800'
            }`}
          >
            ⚙️ SETTINGS
          </button>
        </div>

        {/* Tab Content */}
        <div className='border-4 border-cyan-400 rounded-lg p-8 bg-purple-900/30'>
          {activeTab === 'profile' && (
            <div>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>PLAYER STATS</h2>
              <div className='grid grid-cols-2 gap-6'>
                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-yellow-300 font-mono mb-4'>ACHIEVEMENTS 🏆</h3>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <span className='text-3xl'>🥇</span>
                      <div>
                        <div className='text-cyan-300 font-mono'>First Purchase</div>
                        <div className='text-purple-400 text-sm'>Unlocked: Jan 2024</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='text-3xl'>💎</span>
                      <div>
                        <div className='text-cyan-300 font-mono'>Gold Member</div>
                        <div className='text-purple-400 text-sm'>Unlocked: Mar 2024</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='text-3xl'>⭐</span>
                      <div>
                        <div className='text-cyan-300 font-mono'>Level 42 Reached</div>
                        <div className='text-purple-400 text-sm'>Unlocked: Nov 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-yellow-300 font-mono mb-4'>COLLECTION 🎮</h3>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-cyan-300 font-mono'>Consoles Owned</span>
                      <span className='text-yellow-300 font-bold font-mono'>4</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-cyan-300 font-mono'>Games Collected</span>
                      <span className='text-yellow-300 font-bold font-mono'>23</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-cyan-300 font-mono'>Accessories</span>
                      <span className='text-yellow-300 font-bold font-mono'>8</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-cyan-300 font-mono'>Total Value</span>
                      <span className='text-green-400 font-bold font-mono'>$2,499</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>ORDER HISTORY</h2>
              {orders.length === 0 ? (
                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-12 text-center'>
                  <p className='text-purple-400 font-mono text-lg'>No orders yet. Start shopping! 🎮</p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {orders.map((order) => (
                    <div key={order.id} className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6 hover:border-cyan-400 transition-all'>
                      <div className='flex justify-between items-start mb-4'>
                        <div>
                          <div className='text-cyan-300 font-bold font-mono text-lg mb-2'>Order {order.id}</div>
                          <div className='text-purple-400 font-mono text-sm'>Date: {order.date}</div>
                          <div className='text-purple-400 font-mono text-sm'>Shipping: {order.shippingAddress}</div>
                        </div>
                        <div className='text-right'>
                          <div className='text-yellow-300 font-bold font-mono text-xl mb-2'>${order.total.toFixed(2)}</div>
                          <span className={`px-4 py-1 rounded font-mono text-sm font-bold ${
                            order.status === 'Delivered' ? 'bg-green-500 text-black' :
                            order.status === 'Shipped' ? 'bg-blue-500 text-white' :
                            'bg-yellow-500 text-black'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Order Items */}
                      <div className='border-t border-purple-700 pt-4 space-y-2'>
                        {order.items.map((item, index) => (
                          <div key={index} className='flex justify-between text-purple-300 font-mono text-sm'>
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>MY WISHLIST ❤️</h2>
              <div className='grid grid-cols-3 gap-6'>
                {wishlist.map((item) => (
                  <div key={item.id} className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6 hover:border-cyan-400 transition-all'>
                    <div className='text-8xl text-center mb-4'>{item.image}</div>
                    <h3 className='text-cyan-300 font-bold font-mono text-center mb-2'>{item.name}</h3>
                    <div className='text-yellow-300 font-bold font-mono text-center text-xl mb-4'>{item.price}</div>
                    <button className='w-full bg-cyan-400 hover:bg-cyan-300 text-purple-950 font-bold py-2 rounded font-mono transition-all'>
                      ADD TO CART
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>ACCOUNT SETTINGS ⚙️</h2>
              <div className='space-y-6'>
                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-yellow-300 font-mono mb-4'>PERSONAL INFO</h3>
                  <div className='space-y-4'>
                    <div>
                      <label className='text-cyan-300 font-mono block mb-2'>Username</label>
                      <input 
                        type='text' 
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        className='w-full px-4 py-2 bg-purple-900 border-2 border-cyan-400 rounded text-cyan-300 font-mono focus:outline-none focus:border-yellow-400'
                      />
                    </div>
                    <div>
                      <label className='text-cyan-300 font-mono block mb-2'>Email</label>
                      <input 
                        type='email' 
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className='w-full px-4 py-2 bg-purple-900 border-2 border-cyan-400 rounded text-cyan-300 font-mono focus:outline-none focus:border-yellow-400'
                      />
                    </div>
                  </div>
                </div>

                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-yellow-300 font-mono mb-4'>SECURITY</h3>
                  <button className='bg-cyan-400 hover:bg-cyan-300 text-purple-950 font-bold px-6 py-3 rounded font-mono transition-all'>
                    CHANGE PASSWORD
                  </button>
                </div>

                <div className='bg-purple-950 border-2 border-purple-700 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-red-400 font-mono mb-4'>DANGER ZONE</h3>
                  <button className='bg-red-500 hover:bg-red-400 text-white font-bold px-6 py-3 rounded font-mono transition-all'>
                    DELETE ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProfilePage
