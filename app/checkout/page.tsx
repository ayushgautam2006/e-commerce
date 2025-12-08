'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Validate form
    const { fullName, email, address, city, state, zipCode, country } = shippingInfo;
    if (!fullName || !email || !address || !city || !state || !zipCode || !country) {
      alert('Please fill in all shipping information!');
      return;
    }

    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      // Create order
      addOrder(cart, getCartTotal(), `${address}, ${city}, ${state} ${zipCode}, ${country}`);
      
      // Clear cart
      clearCart();
      
      setIsProcessing(false);
      
      // Redirect to profile
      alert('🎮 ORDER PLACED SUCCESSFULLY! 🎮\nCheck your profile to track your order.');
      router.push('/profile');
    }, 1500);
  };

  const subtotal = getCartTotal();
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-purple-950 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-purple-900 border-4 border-cyan-400 p-12 font-mono">
              <h1 className="text-4xl text-cyan-300 mb-4">🛒 CART IS EMPTY</h1>
              <p className="text-purple-300 mb-6">Add some items to your cart before checking out!</p>
              <button
                onClick={() => router.push('/shop')}
                className="bg-cyan-400 text-purple-950 px-8 py-3 font-bold hover:bg-cyan-300 transition-colors"
              >
                ← BACK TO SHOP
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-purple-950 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-cyan-300 font-bold mb-8 font-mono text-center border-4 border-cyan-400 bg-purple-900 p-6">
            💾 CHECKOUT 💾
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shipping Information Form */}
            <div className="bg-purple-900 border-4 border-cyan-400 p-6">
              <h2 className="text-2xl text-yellow-300 font-bold mb-6 font-mono">SHIPPING INFO</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-cyan-300 font-mono mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleChange}
                    className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                    placeholder="Player One"
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 font-mono mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                    className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                    placeholder="player@retro.com"
                  />
                </div>

                <div>
                  <label className="block text-cyan-300 font-mono mb-2">ADDRESS *</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                    className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                    placeholder="123 Retro Street"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-300 font-mono mb-2">CITY *</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleChange}
                      className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                      placeholder="Neon City"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-300 font-mono mb-2">STATE *</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleChange}
                      className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                      placeholder="CA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-300 font-mono mb-2">ZIP CODE *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleChange}
                      className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                      placeholder="90210"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-300 font-mono mb-2">COUNTRY *</label>
                    <input
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleChange}
                      className="w-full bg-purple-950 border-2 border-cyan-400 text-cyan-300 p-3 font-mono focus:outline-none focus:border-yellow-300"
                      placeholder="USA"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-purple-900 border-4 border-yellow-300 p-6 mb-6">
                <h2 className="text-2xl text-yellow-300 font-bold mb-6 font-mono">ORDER SUMMARY</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-cyan-300 font-mono border-b border-purple-700 pb-2">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-cyan-400 pt-4 space-y-2">
                  <div className="flex justify-between text-purple-300 font-mono">
                    <span>SUBTOTAL:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-purple-300 font-mono">
                    <span>SHIPPING:</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-purple-300 font-mono">
                    <span>TAX (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-yellow-300 font-mono text-xl font-bold pt-2 border-t border-yellow-300">
                    <span>TOTAL:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className={`w-full ${
                  isProcessing ? 'bg-purple-700' : 'bg-yellow-300 hover:bg-yellow-400'
                } text-purple-950 px-8 py-4 font-bold text-xl font-mono transition-colors border-4 border-yellow-400`}
              >
                {isProcessing ? '⌛ PROCESSING...' : '🎮 PLACE ORDER 🎮'}
              </button>

              <button
                onClick={() => router.push('/Cart')}
                className="w-full mt-4 bg-purple-800 text-cyan-300 px-8 py-3 font-bold font-mono hover:bg-purple-700 transition-colors border-2 border-cyan-400"
              >
                ← BACK TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
