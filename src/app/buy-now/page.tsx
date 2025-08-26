'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Minus, Plus, ShoppingCart, CreditCard, Shield, Check } from 'lucide-react';

export default function BuyNowPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const pricePerBar = 29.99;
  const totalPrice = quantity * pricePerBar;

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 50) {
      setQuantity(newQuantity);
    }
  };

  const handlePurchase = async () => {
    if (!selectedPayment || !customerName || !email) {
      alert('Please fill in all required fields and select a payment method.');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 3000);
  };

  const paymentMethods = [
    { id: 'visa', name: 'Visa', icon: '💳' },
    { id: 'mastercard', name: 'Mastercard', icon: '💳' },
    { id: 'amex', name: 'American Express', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' }
  ];

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-12 rounded-3xl border border-green-500/30 text-center max-w-2xl mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check size={40} className="text-white" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Thank You for Your Purchase!
          </h1>
          
          <div className="bg-gray-800/50 p-6 rounded-2xl mb-8">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Order Confirmation</h2>
            <div className="space-y-2 text-left">
              <p className="text-gray-300"><span className="font-medium">Customer:</span> {customerName}</p>
              <p className="text-gray-300"><span className="font-medium">Email:</span> {email}</p>
              <p className="text-gray-300"><span className="font-medium">Quantity:</span> {quantity} Neurofuel Energy Bar{quantity > 1 ? 's' : ''}</p>
              <p className="text-gray-300"><span className="font-medium">Total:</span> ${totalPrice.toFixed(2)}</p>
              <p className="text-gray-300"><span className="font-medium">Payment:</span> {paymentMethods.find(p => p.id === selectedPayment)?.name}</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-8">
            Your order has been confirmed! You will receive your Neurofuel Energy Bars soon 
            and we'll keep you updated via email with tracking information.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Get Your Neurofuel Energy Bars
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Premium natural nootropic energy bars delivered to your doorstep
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700"
          >
            <div className="text-center mb-8">
              <Image
                src="/product-buy-now.png"
                alt="Neurofuel Energy Bar"
                width={400}
                height={300}
                className="mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Neurofuel Energy Bar</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Scientifically formulated with natural nootropic ingredients to enhance brain function, 
              improve focus, and provide sustained energy throughout your day.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-green-400">
                <Check size={20} className="mr-3" />
                <span>100% Natural Ingredients</span>
              </div>
              <div className="flex items-center text-green-400">
                <Check size={20} className="mr-3" />
                <span>Gluten-Free & Vegan Friendly</span>
              </div>
              <div className="flex items-center text-green-400">
                <Check size={20} className="mr-3" />
                <span>No Artificial Preservatives</span>
              </div>
              <div className="flex items-center text-green-400">
                <Check size={20} className="mr-3" />
                <span>Locally Sourced from Sri Lanka</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-white">Price per bar:</span>
                <span className="text-3xl font-bold text-purple-400">${pricePerBar}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-white">Quantity:</span>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <Minus size={20} />
                  </motion.button>
                  <span className="text-2xl font-bold text-white w-12 text-center">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <Plus size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">Total:</span>
                  <span className="text-3xl font-bold text-cyan-400">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Shield className="mr-3 text-green-400" />
              Secure Checkout
            </h2>

            <div className="space-y-6">
              {/* Customer Information */}
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-white font-semibold mb-4">Payment Method *</label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedPayment === method.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-gray-600 bg-gray-700/50 hover:border-purple-400'
                      }`}
                    >
                      <div className="text-3xl mb-2">{method.icon}</div>
                      <div className="text-white font-medium">{method.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center text-green-400 mb-2">
                  <Shield size={20} className="mr-2" />
                  <span className="font-semibold">Secure Payment</span>
                </div>
                <p className="text-green-300 text-sm">
                  Your payment information is encrypted and secure. This is a demo checkout - 
                  no actual payment will be processed.
                </p>
              </div>

              {/* Purchase Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white py-4 rounded-xl font-bold text-xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={24} />
                    <span>Complete Purchase - ${totalPrice.toFixed(2)}</span>
                  </>
                )}
              </motion.button>

              <p className="text-gray-400 text-sm text-center">
                By completing your purchase, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
