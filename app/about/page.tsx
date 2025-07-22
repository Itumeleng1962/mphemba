"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Heart, Award, Star, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100%", label: "Black Women Owned" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every service we deliver, maintaining the highest standards of quality and professionalism."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Our business is built on trust, transparency, and unwavering ethical practices in all our client relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, forming lasting partnerships that drive mutual success and growth."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern solutions and continuously adapt to meet evolving business needs."
    }
  ]

  const achievements = [
    "Certified B-BBEE Level 1 Contributor",
    "SAICA Accredited Training Office",
    "SARS Registered Tax Practitioner",
    "Member of SAIPA",
    "ISO 9001:2015 Certified",
    "CIPC Accredited"
  ]

  return (
    <main className="min-h-screen bg-[#FAF7F5] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/accounting-team.jpg"
            alt="Our professional team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B6D5C]/90 to-[#8B6D5C]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B6D5C]/80 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              About Mphemba Ziyanda Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A leading South African financial services firm dedicated to empowering businesses through expert accounting, taxation, and B-BBEE services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center bg-white border border-[#E5DCD3] hover:border-[#8B6D5C] transition-all duration-300 hover:shadow-xl group">
                  <div className="text-4xl font-bold text-[#8B6D5C] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[#5C4B42]">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#8B6D5C] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#5C4B42] max-w-3xl mx-auto">
              These principles guide our work and shape our relationships with clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white border border-[#E5DCD3] hover:border-[#8B6D5C] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-12 h-12 bg-[#8B6D5C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#8B6D5C] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#5C4B42] leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#8B6D5C]">Our Story</h2>
              <div className="space-y-4 text-[#5C4B42] leading-relaxed">
                <p>
                  Founded with a vision to transform the financial services landscape in South Africa, Mphemba Ziyanda Solutions has grown to become a trusted partner for businesses seeking comprehensive financial and advisory services.
                </p>
                <p>
                  As a 100% black women-owned company, we bring a unique perspective and deep understanding of the local business environment, helping our clients navigate complex financial challenges while promoting economic transformation.
                </p>
                <p>
                  Our team of qualified professionals combines industry expertise with personalized attention to help your business thrive in today's competitive environment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-[#5C4B42]"
                  >
                    <CheckCircle className="h-5 w-5 text-[#8B6D5C] flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="bg-[#8B6D5C] text-white hover:bg-[#A89386] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/4.jpg"
                  alt="Our team at work"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B6D5C]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6">
                <Card className="p-6 bg-white shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-[#8B6D5C]" />
                    <div className="text-[#8B6D5C] font-bold">Trusted by 500+ Clients</div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
