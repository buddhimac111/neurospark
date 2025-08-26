'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Leaf, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                NEUROFUEL
              </span>
              <br />
              <span className="text-white text-4xl lg:text-5xl">Energy Bar</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Scientifically formulated nutritional bar designed to enhance brain function, 
              improve focus, and boost energy levels with natural nootropic ingredients.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/buy-now">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <span>Order Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
                            <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <Brain className="text-purple-400" size={16} />
                <span className="sm:inline">Cognitive Enhancement</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <Zap className="text-cyan-400" size={16} />
                <span className="sm:inline">Sustained Energy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <Leaf className="text-green-400" size={16} />
                <span className="sm:inline">100% Natural</span>
        </div>
            </motion.div>
          </motion.div>

                    {/* Right Content - Product Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main product image with glow effect */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
        >
          <Image
                  src="/product-glowing-image.jpg"
                  alt="Neurofuel Energy Bar"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl"></div>
              </motion.div>

              {/* Floating product images */}
              <motion.div
                animate={{ 
                  x: [0, 15, 0],
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 z-0 hidden sm:block"
        >
          <Image
                  src="/product-img-1.jpg"
                  alt="Neurofuel Bar"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-xl shadow-lg opacity-80 object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 z-0 hidden sm:block"
        >
          <Image
                  src="/product-img-2.jpg"
                  alt="Neurofuel Bar"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-xl shadow-lg opacity-80 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Neurofuel?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the perfect blend of science and nature with our premium energy bars
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Cognitive Enhancement",
                description: "Natural nootropic compounds enhance brain function, concentration, and memory.",
                icon: Brain,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Balanced Energy Release",
                description: "Combines slow sugar release with fast energy to avoid spikes and crashes.",
                icon: Zap,
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "100% Natural & Healthy",
                description: "No preservatives, refined sugar, or synthetic chemicals. Made with locally sourced ingredients.",
                icon: Leaf,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Gluten-Free & Vegan",
                description: "Suitable for a wide range of consumers with dietary restrictions.",
                icon: Star,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Eco-Conscious",
                description: "Eco-friendly, low-cost packaging reducing environmental impact.",
                icon: Leaf,
                color: "from-teal-500 to-green-500"
              },
              {
                title: "Nutrient-Dense",
                description: "Provides protein, healthy fats, antioxidants, vitamins, and minerals.",
                icon: Star,
                color: "from-rose-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${feature.color} mb-4 sm:mb-6`}>
                  <feature.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Premium Natural Ingredients
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Each Neurofuel bar is crafted with carefully selected, locally sourced ingredients 
              that work synergistically to fuel your mind and body.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Kurakkan",
                description: "Provides long-lasting energy without sudden spikes. Rich in carbohydrates and protein for sustained performance.",
                benefits: "Carbohydrate & Protein",
                image: "/Kurakkan.jpg"
              },
              {
                name: "Peanuts",
                description: "Supporting muscle repair and long-lasting satiety with high-quality protein and healthy fats.",
                benefits: "Protein & Unsaturated Fat",
                image: "/peanut.jpg"
              },
              {
                name: "Green Gram",
                description: "Plant-based protein powerhouse aiding in energy metabolism and promoting gut health.",
                benefits: "Plant-based Protein",
                image: "/Green Gram.jpg"
              },
              {
                name: "Bee Honey",
                description: "Natural sweetener and binding agent offering quick energy with powerful antioxidant benefits.",
                benefits: "Natural Sweetener",
                image: "/Bee Honey.jpg"
              },
              {
                name: "Sesame Seeds",
                description: "Contribute to memory retention and brain protection while delivering essential minerals.",
                benefits: "Calcium, Antioxidants, Minerals",
                image: "/Sesame Seeds.jpg"
              },
              {
                name: "Coconut",
                description: "Essential healthy fats for optimal brain health while adding authentic tropical taste.",
                benefits: "Healthy Fats",
                image: "/coconut.jpg"
              }
            ].map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-green-400 transition-colors">
                  {ingredient.name}
                </h3>
                
                <div className="inline-block px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {ingredient.benefits}
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {ingredient.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Fuel Your Mind?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands who have already experienced the power of Neurofuel. 
              Enhance your cognitive performance naturally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/buy-now">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl flex items-center space-x-2 sm:space-x-3 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>Order Neurofuel Now</span>
                  <ArrowRight size={20} className="sm:w-6 sm:h-6" />
                </motion.button>
              </Link>
              
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
