'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const ShopPage = () => {
  const { addToCart, isInCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    { id: 'all', name: 'All Items', icon: '🎮' },
    { id: 'consoles', name: 'Consoles', icon: '🕹️' },
    { id: 'handhelds', name: 'Handhelds', icon: '🎯' },
    { id: 'games', name: 'Games', icon: '💿' },
    { id: 'audio', name: 'Audio', icon: '📻' },
    { id: 'accessories', name: 'Accessories', icon: '🔌' },
  ]

  const products = [
    { id: 1, name: 'Nintendo Game Boy Color', category: 'handhelds', price: 99.99, image: '🎮', condition: 'Excellent', year: '1998' },
    { id: 2, name: 'Sony PlayStation 1', category: 'consoles', price: 149.99, image: '🎮', condition: 'Very Good', year: '1994' },
    { id: 3, name: 'Sega Genesis', category: 'consoles', price: 129.99, image: '🕹️', condition: 'Good', year: '1988' },
    { id: 4, name: 'Nintendo NES', category: 'consoles', price: 199.99, image: '🎮', condition: 'Mint', year: '1985' },
    { id: 5, name: 'Game Boy Pocket', category: 'handhelds', price: 79.99, image: '🎯', condition: 'Very Good', year: '1996' },
    { id: 6, name: 'Atari 2600', category: 'consoles', price: 249.99, image: '👾', condition: 'Excellent', year: '1977' },
    { id: 7, name: 'Sony Walkman', category: 'audio', price: 149.99, image: '📻', condition: 'Mint', year: '1985' },
    { id: 8, name: 'Vintage Calculator', category: 'accessories', price: 49.99, image: '🖩', condition: 'Good', year: '1980' },
    { id: 9, name: 'Super Mario Bros 3', category: 'games', price: 89.99, image: '💿', condition: 'Excellent', year: '1988' },
    { id: 10, name: 'Tetris Cartridge', category: 'games', price: 39.99, image: '💿', condition: 'Very Good', year: '1989' },
    { id: 11, name: 'Nintendo 64', category: 'consoles', price: 179.99, image: '🎮', condition: 'Excellent', year: '1996' },
    { id: 12, name: 'Sega Dreamcast', category: 'consoles', price: 199.99, image: '🕹️', condition: 'Mint', year: '1998' },
    { id: 13, name: 'Game Boy Advance SP', category: 'handhelds', price: 119.99, image: '🎯', condition: 'Excellent', year: '2003' },
    { id: 14, name: 'PSP 1000', category: 'handhelds', price: 139.99, image: '🎮', condition: 'Very Good', year: '2004' },
    { id: 15, name: 'Vintage Headphones', category: 'audio', price: 69.99, image: '🎧', condition: 'Good', year: '1990' },
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0 // featured - default order
  })

  const addToCartHandler = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      condition: product.condition,
      year: product.year,
    })
  }

  return (
    <div className='min-h-screen bg-linear-to-b from-purple-950 via-purple-900 to-purple-950'>
      <Navbar />
      
      <div className='max-w-7xl mx-auto px-8 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-cyan-300 font-mono mb-4'>
            🛒 RETRO SHOP 🛒
          </h1>
          <p className='text-purple-300 font-mono text-lg'>
            Discover authentic vintage gaming treasures from the golden era
          </p>
        </div>

        {/* Category Filter */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-cyan-300 font-mono mb-4'>SELECT CATEGORY</h2>
          <div className='grid grid-cols-6 gap-4'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all font-mono font-bold ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 border-cyan-400 text-purple-950'
                    : 'bg-purple-900/30 border-purple-500 text-cyan-300 hover:border-cyan-400'
                }`}
              >
                <div className='text-4xl mb-2'>{category.icon}</div>
                <div className='text-sm'>{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sorting and Results Count */}
        <div className='flex justify-between items-center mb-8 p-4 bg-purple-900/30 border-2 border-purple-700 rounded-lg'>
          <div className='text-cyan-300 font-mono'>
            <span className='font-bold'>{sortedProducts.length}</span> items found
          </div>
          <div className='flex items-center gap-3'>
            <label className='text-cyan-300 font-mono'>SORT BY:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='px-4 py-2 bg-purple-950 border-2 border-cyan-400 rounded text-cyan-300 font-mono focus:outline-none focus:border-yellow-400'
            >
              <option value='featured'>Featured</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
              <option value='name'>Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-4 gap-6 mb-12'>
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className='bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6 hover:border-cyan-400 transition-all group'
            >
              {/* Product Image */}
              <div className='bg-purple-950 rounded-lg p-8 mb-4 flex items-center justify-center h-40 border-2 border-purple-800 group-hover:border-cyan-400 transition-all'>
                <span className='text-7xl'>{product.image}</span>
              </div>

              {/* Product Info */}
              <div className='mb-4'>
                <h3 className='text-lg font-bold text-cyan-300 font-mono mb-2'>
                  {product.name}
                </h3>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-purple-300 text-sm font-mono'>{product.year}</span>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    product.condition === 'Mint' ? 'bg-green-500 text-black' :
                    product.condition === 'Excellent' ? 'bg-blue-500 text-white' :
                    product.condition === 'Very Good' ? 'bg-cyan-500 text-black' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {product.condition}
                  </span>
                </div>
              </div>

              {/* Price and Action */}
              <div className='border-t-2 border-purple-700 pt-4'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-2xl font-bold text-yellow-300 font-mono'>
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => addToCartHandler(product)}
                  disabled={isInCart(product.id)}
                  className={`w-full py-2 rounded font-mono font-bold transition-all ${
                    isInCart(product.id)
                      ? 'bg-green-500 text-black cursor-not-allowed'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-purple-950'
                  }`}
                >
                  {isInCart(product.id) ? '✓ IN CART' : '🛒 ADD TO CART'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className='text-center py-16 border-4 border-purple-700 rounded-lg bg-purple-900/30'>
            <div className='text-8xl mb-4'>😢</div>
            <h3 className='text-3xl font-bold text-cyan-300 font-mono mb-2'>
              NO ITEMS FOUND
            </h3>
            <p className='text-purple-300 font-mono'>
              Try selecting a different category
            </p>
          </div>
        )}

        {/* Info Banner */}
        <div className='grid grid-cols-3 gap-6 mt-12'>
          <div className='border-2 border-cyan-400 rounded-lg p-6 bg-purple-900/30 text-center'>
            <div className='text-4xl mb-3'>✓</div>
            <h3 className='text-lg font-bold text-cyan-300 font-mono mb-2'>AUTHENTICATED</h3>
            <p className='text-purple-300 text-sm font-mono'>All items verified for authenticity</p>
          </div>
          <div className='border-2 border-cyan-400 rounded-lg p-6 bg-purple-900/30 text-center'>
            <div className='text-4xl mb-3'>📦</div>
            <h3 className='text-lg font-bold text-cyan-300 font-mono mb-2'>FREE SHIPPING</h3>
            <p className='text-purple-300 text-sm font-mono'>On orders over $100</p>
          </div>
          <div className='border-2 border-cyan-400 rounded-lg p-6 bg-purple-900/30 text-center'>
            <div className='text-4xl mb-3'>↩️</div>
            <h3 className='text-lg font-bold text-cyan-300 font-mono mb-2'>30 DAY RETURNS</h3>
            <p className='text-purple-300 text-sm font-mono'>Easy return policy</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShopPage
