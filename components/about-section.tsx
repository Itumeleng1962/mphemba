"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Heart, Users, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every service we deliver, ensuring the highest standards of quality and professionalism."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Our business is built on trust, transparency, and ethical practices in all our client relationships."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with our clients, forming lasting partnerships that drive mutual success and growth."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to deliver consistent, accurate, and timely services that meet your needs."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#004E8F]">
                About Our Company
              </h2>
              <p className="text-lg text-[#004E8F]/70 leading-relaxed">
                MPE,BE Ziyanda Solutions is a leading South African financial services firm dedicated to empowering businesses through expert accounting, taxation, and B-BBEE services. As a 100% black women-owned company, we bring a unique perspective and deep understanding of the local business landscape.
              </p>
              <p className="text-lg text-[#004E8F]/70 leading-relaxed">
                Our team of qualified professionals combines industry expertise with personalized attention to help your business thrive in today's competitive environment.
              </p>
                            <Button
                className="btn btn-primary font-semibold"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/images/values.jpg"
                alt="Our team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941E]/20 via-[#004E8F]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6">
              <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="text-[#004E8F] font-bold text-4xl">15+</div>
                <div className="text-[#F7941E]">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#004E8F] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#F7941E] max-w-3xl mx-auto">
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
                <Card className="p-6 bg-white border border-[#F7941E]/20 hover:border-[#004E8F] transition-all duration-300 hover:shadow-xl group backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F7941E] to-[#004E8F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#004E8F] mb-3 group-hover:text-[#F7941E] transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#004E8F]/70 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
