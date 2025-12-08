'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Order {
  id: string
  items: {
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }[]
  total: number
  date: string
  status: 'Processing' | 'Shipped' | 'Delivered'
  shippingAddress: string
}

interface OrderContextType {
  orders: Order[]
  addOrder: (items: Order['items'], total: number, shippingAddress: string) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '#RT001',
      items: [{ id: 1, name: 'Nintendo Game Boy Color', price: 99.99, quantity: 1, image: '🎮' }],
      total: 99.99,
      date: '2024-12-01',
      status: 'Delivered',
      shippingAddress: '123 Retro Street, Gaming City, CA 90210, USA'
    },
    {
      id: '#RT002',
      items: [{ id: 7, name: 'Sony Walkman', price: 149.99, quantity: 1, image: '📻' }],
      total: 149.99,
      date: '2024-11-28',
      status: 'Shipped',
      shippingAddress: '123 Retro Street, Gaming City, CA 90210, USA'
    },
    {
      id: '#RT003',
      items: [{ id: 8, name: 'Vintage Calculator', price: 49.99, quantity: 1, image: '🖩' }],
      total: 49.99,
      date: '2024-11-20',
      status: 'Processing',
      shippingAddress: '123 Retro Street, Gaming City, CA 90210, USA'
    }
  ])

  const addOrder = (items: Order['items'], total: number, shippingAddress: string) => {
    const newOrder: Order = {
      id: `#RT${String(orders.length + 1).padStart(3, '0')}`,
      items,
      total,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      shippingAddress
    }
    setOrders([newOrder, ...orders])
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrders = () => {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}
