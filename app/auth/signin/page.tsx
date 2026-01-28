'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SignIn() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else {
        router.push('/profile')
        router.refresh()
      }
    } catch (error) {
      setError('Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-purple-950'>
      <Navbar />

      <div className='flex items-center justify-center py-20 px-4'>
        <div className='w-full max-w-md'>
          {/* Sign In Box */}
          <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
            <div className='text-center mb-8'>
              <h1 className='text-5xl font-bold text-cyan-300 font-mono mb-2'>
                🎮 SIGN IN 🎮
              </h1>
              <p className='text-purple-300 font-mono'>Enter your credentials to continue</p>
            </div>

            {error && (
              <div className='bg-red-500 border-2 border-red-400 p-4 rounded mb-6'>
                <p className='text-white font-mono text-center'>❌ {error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-cyan-300 font-mono mb-2'>EMAIL *</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300'
                  placeholder='player@retro.com'
                />
              </div>

              <div>
                <label className='block text-cyan-300 font-mono mb-2'>PASSWORD *</label>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300'
                  placeholder='••••••••'
                />
              </div>

              <button
                type='submit'
                disabled={isLoading}
                className={`w-full ${
                  isLoading ? 'bg-purple-700' : 'bg-yellow-300 hover:bg-yellow-400'
                } text-purple-950 font-bold py-4 font-mono text-xl transition-all border-4 border-yellow-400`}
              >
                {isLoading ? '⌛ LOADING...' : '🚀 SIGN IN 🚀'}
              </button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-purple-300 font-mono mb-2'>Don't have an account?</p>
              <Link href='/auth/signup'>
                <button className='text-cyan-300 font-mono font-bold hover:text-cyan-400 underline'>
                  CREATE NEW ACCOUNT →
                </button>
              </Link>
            </div>
          </div>

          {/* Guest Option */}
          <div className='mt-6 bg-purple-900 border-2 border-purple-700 p-6 rounded-lg text-center'>
            <p className='text-purple-300 font-mono mb-3'>Or continue as guest</p>
            <Link href='/'>
              <button className='bg-purple-950 border-2 border-cyan-400 text-cyan-300 px-6 py-2 rounded font-mono hover:bg-purple-800 transition-all'>
                ← BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
