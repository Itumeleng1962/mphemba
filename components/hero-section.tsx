"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F5F3]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2C1810]/20 to-[#4A3427]/20 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#4A3427]/20 to-[#2C1810]/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight"
              >
                Strategic Financial Solutions
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-light text-[#4A3427]"
              >
                Supercharge your growth
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-[#4A3427] leading-relaxed max-w-2xl"
              >
                Mphemba Ziyanda Solutions (Pty) Ltd is a 100% black women-owned South African company providing comprehensive Accounting, Tax, Payroll, and B-BBEE advisory services. Our goal is to support businesses in achieving financial clarity, regulatory compliance, and economic transformation in line with South Africa's national development goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-4"
            >
              <Button
                size="lg"
                  className="bg-[#2C1810] text-white hover:bg-[#4A3427] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg px-8 py-6 text-lg rounded-lg"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
                <img
                  src="/images/bg.jpg"
                  alt="Diverse team of professionals"
                  className="w-full h-auto object-cover rounded-[2rem] shadow-2xl"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                  }}
                />
                <div className="absolute inset-0 rounded-[2rem] shadow-inner bg-gradient-to-tr from-[#2C1810]/10 to-transparent"></div>
                        </motion.div>
              <div className="absolute top-0 right-0 -mr-4 -mt-4">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#2C1810] rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-8">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-2 h-2 bg-[#4A3427] rounded-full opacity-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
