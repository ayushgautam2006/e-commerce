'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className='min-h-screen bg-purple-950'>
      <Navbar />

      {/* Hero Section */}
      <div className='bg-linear-to-r from-purple-900 to-purple-950 py-20 px-4 border-b-4 border-cyan-400'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-6xl font-bold text-cyan-300 mb-6 font-mono'>
            📧 CONTACT US 📧
          </h1>
          <p className='text-2xl text-purple-300 font-mono'>
            NEED HELP? WE'RE HERE TO ASSIST!
          </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Contact Form */}
          <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold text-yellow-300 font-mono mb-6'>SEND A MESSAGE</h2>
            
            {submitted ? (
              <div className='bg-green-500 border-4 border-green-400 p-8 rounded text-center'>
                <div className='text-6xl mb-4'>✅</div>
                <h3 className='text-2xl font-bold text-black font-mono mb-2'>MESSAGE SENT!</h3>
                <p className='text-black font-mono'>We'll get back to you soon. Press START to continue...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label className='block text-cyan-300 font-mono mb-2'>YOUR NAME *</label>
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
                  <label className='block text-cyan-300 font-mono mb-2'>EMAIL ADDRESS *</label>
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
                  <label className='block text-cyan-300 font-mono mb-2'>SUBJECT *</label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300'
                    placeholder='Question about order #RT001'
                  />
                </div>

                <div>
                  <label className='block text-cyan-300 font-mono mb-2'>MESSAGE *</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300 resize-none'
                    placeholder='Tell us how we can help...'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-yellow-300 hover:bg-yellow-400 text-purple-950 font-bold py-4 font-mono text-xl transition-all border-4 border-yellow-400'
                >
                  🚀 SEND MESSAGE 🚀
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            {/* Quick Contact */}
            <div className='bg-purple-900 border-4 border-yellow-300 p-8 rounded-lg'>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>QUICK CONTACT</h2>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <span className='text-4xl'>📧</span>
                  <div>
                    <h3 className='text-xl font-bold text-yellow-300 font-mono mb-1'>EMAIL</h3>
                    <p className='text-cyan-300 font-mono'>support@retrowaveshop.com</p>
                    <p className='text-cyan-300 font-mono'>orders@retrowaveshop.com</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='text-4xl'>📞</span>
                  <div>
                    <h3 className='text-xl font-bold text-yellow-300 font-mono mb-1'>PHONE</h3>
                    <p className='text-cyan-300 font-mono'>+1 (555) RETRO-90</p>
                    <p className='text-purple-300 font-mono text-sm'>Mon-Fri: 9AM - 6PM PST</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='text-4xl'>📍</span>
                  <div>
                    <h3 className='text-xl font-bold text-yellow-300 font-mono mb-1'>LOCATION</h3>
                    <p className='text-cyan-300 font-mono'>123 Synthwave Boulevard</p>
                    <p className='text-cyan-300 font-mono'>Neon City, CA 90210</p>
                    <p className='text-cyan-300 font-mono'>United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className='bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
              <h2 className='text-3xl font-bold text-yellow-300 font-mono mb-6'>FOLLOW US</h2>
              
              <div className='grid grid-cols-2 gap-4'>
                <a href='#' className='bg-purple-950 border-2 border-cyan-400 p-4 rounded hover:bg-cyan-400 hover:text-purple-950 transition-all text-center'>
                  <div className='text-3xl mb-2'>📘</div>
                  <p className='text-cyan-300 font-mono font-bold'>FACEBOOK</p>
                </a>

                <a href='#' className='bg-purple-950 border-2 border-cyan-400 p-4 rounded hover:bg-cyan-400 hover:text-purple-950 transition-all text-center'>
                  <div className='text-3xl mb-2'>🐦</div>
                  <p className='text-cyan-300 font-mono font-bold'>TWITTER</p>
                </a>

                <a href='#' className='bg-purple-950 border-2 border-cyan-400 p-4 rounded hover:bg-cyan-400 hover:text-purple-950 transition-all text-center'>
                  <div className='text-3xl mb-2'>📸</div>
                  <p className='text-cyan-300 font-mono font-bold'>INSTAGRAM</p>
                </a>

                <a href='#' className='bg-purple-950 border-2 border-cyan-400 p-4 rounded hover:bg-cyan-400 hover:text-purple-950 transition-all text-center'>
                  <div className='text-3xl mb-2'>🎮</div>
                  <p className='text-cyan-300 font-mono font-bold'>DISCORD</p>
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className='bg-purple-900 border-4 border-yellow-300 p-8 rounded-lg'>
              <h2 className='text-3xl font-bold text-cyan-300 font-mono mb-6'>SUPPORT HOURS</h2>
              
              <div className='space-y-3'>
                <div className='flex justify-between items-center border-b border-purple-700 pb-2'>
                  <span className='text-cyan-300 font-mono'>Monday - Friday</span>
                  <span className='text-yellow-300 font-mono font-bold'>9AM - 6PM</span>
                </div>
                <div className='flex justify-between items-center border-b border-purple-700 pb-2'>
                  <span className='text-cyan-300 font-mono'>Saturday</span>
                  <span className='text-yellow-300 font-mono font-bold'>10AM - 4PM</span>
                </div>
                <div className='flex justify-between items-center border-b border-purple-700 pb-2'>
                  <span className='text-cyan-300 font-mono'>Sunday</span>
                  <span className='text-purple-400 font-mono font-bold'>CLOSED</span>
                </div>
              </div>

              <div className='mt-6 bg-purple-950 border-2 border-purple-700 p-4 rounded'>
                <p className='text-purple-300 font-mono text-sm text-center'>
                  ⚡ Average response time: 2-4 hours ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className='mt-16 bg-purple-900 border-4 border-cyan-400 p-8 rounded-lg'>
          <h2 className='text-3xl font-bold text-yellow-300 font-mono mb-6 text-center'>FREQUENTLY ASKED</h2>
          
          <div className='grid md:grid-cols-3 gap-6'>
            <a href='/faq' className='bg-purple-950 border-2 border-purple-700 p-6 rounded hover:border-cyan-400 transition-all'>
              <div className='text-4xl mb-3'>📦</div>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>SHIPPING INFO</h3>
              <p className='text-purple-300 font-mono text-sm'>Learn about delivery times and tracking</p>
            </a>

            <a href='/faq' className='bg-purple-950 border-2 border-purple-700 p-6 rounded hover:border-cyan-400 transition-all'>
              <div className='text-4xl mb-3'>↩️</div>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>RETURNS</h3>
              <p className='text-purple-300 font-mono text-sm'>30-day return policy details</p>
            </a>

            <a href='/faq' className='bg-purple-950 border-2 border-purple-700 p-6 rounded hover:border-cyan-400 transition-all'>
              <div className='text-4xl mb-3'>💳</div>
              <h3 className='text-xl font-bold text-cyan-300 font-mono mb-2'>PAYMENT</h3>
              <p className='text-purple-300 font-mono text-sm'>Accepted payment methods</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
