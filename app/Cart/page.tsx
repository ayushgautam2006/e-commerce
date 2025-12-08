'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const subtotal = getCartTotal()
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal - discount + shipping + tax

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'RETRO90') {
      setDiscount(subtotal * 0.1)
      alert('🎉 Promo code applied! 10% off!')
    } else if (promoCode.toUpperCase() === 'SAVE20') {
      setDiscount(20)
      alert('🎉 Promo code applied! $20 off!')
    } else {
      alert('❌ Invalid promo code')
    }
  }

  return (
    <div className='min-h-screen bg-linear-to-b from-purple-950 via-purple-900 to-purple-950'>
      <Navbar />
      
      <div className='max-w-7xl mx-auto px-8 py-12'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-5xl font-bold text-cyan-300 font-mono mb-2'>
              🛒 SHOPPING CART
            </h1>
            <p className='text-purple-300 font-mono'>
              {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className='bg-red-500 hover:bg-red-400 text-white font-bold px-6 py-3 rounded font-mono transition-all'
            >
              🗑️ CLEAR CART
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className='text-center py-16 border-4 border-purple-700 rounded-lg bg-purple-900/30'>
            <div className='text-9xl mb-6'>🛒</div>
            <h2 className='text-4xl font-bold text-cyan-300 font-mono mb-4'>
              YOUR CART IS EMPTY
            </h2>
            <p className='text-purple-300 font-mono mb-8 text-lg'>
              Time to fill it with some retro treasures!
            </p>
            <Link href='/shop'>
              <button className='bg-cyan-400 hover:bg-cyan-300 text-purple-950 font-bold px-8 py-4 rounded font-mono text-xl transition-all'>
                🎮 START SHOPPING
              </button>
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-8'>
            {/* Cart Items */}
            <div className='col-span-2 space-y-4'>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className='bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6 hover:border-cyan-400 transition-all'
                >
                  <div className='flex gap-6'>
                    {/* Product Image */}
                    <div className='bg-purple-950 rounded-lg w-32 h-32 flex items-center justify-center border-2 border-purple-800 shrink-0'>
                      <span className='text-6xl'>{item.image}</span>
                    </div>

                    {/* Product Info */}
                    <div className='flex-1'>
                      <div className='flex justify-between items-start mb-3'>
                        <div>
                          <h3 className='text-xl font-bold text-cyan-300 font-mono mb-1'>
                            {item.name}
                          </h3>
                          <div className='flex gap-3 text-sm'>
                            <span className='text-purple-300 font-mono'>{item.year}</span>
                            <span className={`font-mono px-2 py-0.5 rounded text-xs ${
                              item.condition === 'Mint' ? 'bg-green-500 text-black' :
                              item.condition === 'Excellent' ? 'bg-blue-500 text-white' :
                              item.condition === 'Very Good' ? 'bg-cyan-500 text-black' :
                              'bg-yellow-500 text-black'
                            }`}>
                              {item.condition}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className='text-red-400 hover:text-red-300 font-bold text-2xl transition-colors'
                          title='Remove from cart'
                        >
                          ✕
                        </button>
                      </div>

                      {/* Quantity and Price */}
                      <div className='flex justify-between items-center mt-4 pt-4 border-t-2 border-purple-700'>
                        <div className='flex items-center gap-3'>
                          <span className='text-cyan-300 font-mono'>Quantity:</span>
                          <div className='flex items-center gap-2'>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className='bg-purple-950 border-2 border-cyan-400 text-cyan-300 w-8 h-8 rounded font-bold hover:bg-cyan-400 hover:text-purple-950 transition-all'
                            >
                              -
                            </button>
                            <span className='text-cyan-300 font-mono font-bold w-12 text-center'>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className='bg-purple-950 border-2 border-cyan-400 text-cyan-300 w-8 h-8 rounded font-bold hover:bg-cyan-400 hover:text-purple-950 transition-all'
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='text-yellow-300 font-bold font-mono text-2xl'>
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.quantity > 1 && (
                            <div className='text-purple-400 font-mono text-sm'>
                              ${item.price} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className='col-span-1'>
              <div className='bg-purple-900/30 border-4 border-cyan-400 rounded-lg p-6 sticky top-4'>
                <h2 className='text-2xl font-bold text-cyan-300 font-mono mb-6 text-center'>
                  ORDER SUMMARY
                </h2>

                {/* Promo Code */}
                <div className='mb-6 p-4 bg-purple-950 rounded-lg border-2 border-purple-700'>
                  <label className='text-cyan-300 font-mono text-sm block mb-2'>
                    PROMO CODE
                  </label>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder='Enter code'
                      className='flex-1 px-3 py-2 bg-purple-900 border-2 border-cyan-400 rounded text-cyan-300 font-mono text-sm focus:outline-none focus:border-yellow-400'
                    />
                    <button
                      onClick={applyPromoCode}
                      className='bg-cyan-400 hover:bg-cyan-300 text-purple-950 font-bold px-4 py-2 rounded font-mono text-sm transition-all'
                    >
                      APPLY
                    </button>
                  </div>
                  <p className='text-purple-400 text-xs font-mono mt-2'>
                    Try: RETRO90 or SAVE20
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className='space-y-3 mb-6'>
                  <div className='flex justify-between text-purple-300 font-mono'>
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className='flex justify-between text-green-400 font-mono'>
                      <span>Discount:</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className='flex justify-between text-purple-300 font-mono'>
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <div className='text-green-400 text-xs font-mono'>
                      🎉 Free shipping unlocked!
                    </div>
                  )}
                  <div className='flex justify-between text-purple-300 font-mono'>
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className='border-t-2 border-purple-700 pt-3'>
                    <div className='flex justify-between text-cyan-300 font-mono font-bold text-xl'>
                      <span>TOTAL:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href='/checkout'>
                  <button className='w-full bg-yellow-400 hover:bg-yellow-300 text-purple-950 font-bold py-4 rounded font-mono text-xl transition-all mb-4'>
                    💳 CHECKOUT
                  </button>
                </Link>

                <Link href='/shop'>
                  <button className='w-full bg-purple-950 border-2 border-cyan-400 hover:bg-cyan-400 text-cyan-300 hover:text-purple-950 font-bold py-3 rounded font-mono transition-all'>
                    ← CONTINUE SHOPPING
                  </button>
                </Link>

                {/* Benefits */}
                <div className='mt-6 space-y-2 text-sm'>
                  <div className='flex items-center gap-2 text-purple-300 font-mono'>
                    <span>✓</span>
                    <span>Secure checkout</span>
                  </div>
                  <div className='flex items-center gap-2 text-purple-300 font-mono'>
                    <span>✓</span>
                    <span>30-day return policy</span>
                  </div>
                  <div className='flex items-center gap-2 text-purple-300 font-mono'>
                    <span>✓</span>
                    <span>Authenticated products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default CartPage
