'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
        setIsLoading(false)
        return
      }

      // Auto sign in after successful registration
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Account created but sign in failed. Please sign in manually.')
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
          {/* Sign Up Box */}
          <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
            <div className='text-center mb-8'>
              <h1 className='text-5xl font-bold text-cyan-300 font-mono mb-2'>
                🎮 SIGN UP 🎮
              </h1>
              <p className='text-purple-300 font-mono'>Create your retro account</p>
            </div>

            {error && (
              <div className='bg-red-500 border-2 border-red-400 p-4 rounded mb-6'>
                <p className='text-white font-mono text-center'>❌ {error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-cyan-300 font-mono mb-2'>NAME *</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300'
                  placeholder='Player One'
                />
              </div>

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
                  minLength={6}
                  className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300'
                  placeholder='••••••••'
                />
                <p className='text-purple-400 font-mono text-xs mt-1'>Min 6 characters</p>
              </div>

              <div>
                <label className='block text-cyan-300 font-mono mb-2'>CONFIRM PASSWORD *</label>
                <input
                  type='password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
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
                {isLoading ? '⌛ CREATING...' : '🚀 CREATE ACCOUNT 🚀'}
              </button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-purple-300 font-mono mb-2'>Already have an account?</p>
              <Link href='/auth/signin'>
                <button className='text-cyan-300 font-mono font-bold hover:text-cyan-400 underline'>
                  SIGN IN →
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
