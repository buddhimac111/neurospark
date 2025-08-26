'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Leaf, Users, Award, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              About NEUROSPARK
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Pioneering the future of natural cognitive enhancement through scientifically formulated 
              nutritional solutions that fuel both mind and body.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="NEUROSPARK Company"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Founded with a vision to revolutionize the way people fuel their minds and bodies, 
                NEUROSPARK Nutritional Pvt. LTD emerged from a deep understanding that optimal 
                cognitive performance requires more than just caffeine and sugar.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our journey began with extensive research into natural nootropic compounds found 
                in traditional Sri Lankan ingredients. We discovered that combining these ancient 
                wisdom elements with modern nutritional science could create something truly extraordinary.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Today, we&apos;re proud to offer Neurofuel Energy Bars - a testament to our commitment 
                to natural, sustainable, and effective cognitive enhancement solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-3xl border border-purple-500/30"
            >
              <div className="flex items-center mb-6">
                <Target className="text-purple-400 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower individuals with natural, scientifically-backed nutritional solutions 
                that enhance cognitive performance, support brain health, and provide sustained 
                energy - all while maintaining our commitment to environmental sustainability 
                and supporting local Sri Lankan communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-3xl border border-cyan-500/30"
            >
              <div className="flex items-center mb-6">
                <Brain className="text-cyan-400 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become the global leader in natural cognitive enhancement products, 
                setting new standards for quality, sustainability, and effectiveness. 
                We envision a world where everyone has access to clean, natural energy 
                that supports both mental clarity and overall well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at NEUROSPARK
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Natural & Pure",
                description: "We believe in the power of nature. Our products contain only natural, locally sourced ingredients without artificial additives or preservatives.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Brain,
                title: "Science-Backed",
                description: "Every ingredient is carefully selected based on scientific research and proven benefits for cognitive enhancement and overall health.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Community First",
                description: "We support local Sri Lankan farmers and communities, ensuring fair trade practices and sustainable sourcing methods.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We maintain the highest standards in manufacturing, testing, and quality control to deliver consistently excellent products.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Heart,
                title: "Customer Care",
                description: "Your health and satisfaction are our top priorities. We&apos;re committed to providing exceptional customer service and support.",
                color: "from-rose-500 to-pink-500"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Environmental responsibility is at our core. We use eco-friendly packaging and sustainable production methods.",
                color: "from-teal-500 to-green-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-6`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Making a difference in people&apos;s lives and communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10,000+",
                label: "Happy Customers",
                description: "People who trust Neurofuel for their daily energy needs"
              },
              {
                number: "100%",
                label: "Natural Ingredients",
                description: "Pure, locally sourced components in every bar"
              },
              {
                number: "50+",
                label: "Local Farmers",
                description: "Sri Lankan farmers we support through fair trade"
              },
              {
                number: "95%",
                label: "Customer Satisfaction",
                description: "Based on customer reviews and feedback"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/30 p-8 rounded-2xl border border-gray-700"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Join the Neurofuel Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that natural, scientifically-backed nutrition can make 
              in your cognitive performance and overall well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/buy-now"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-12 py-4 rounded-full font-bold text-xl inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <span>Try Neurofuel Today</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
