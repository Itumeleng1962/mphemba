"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Store, Factory, Truck, Server, Landmark, Users } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "Construction & Engineering",
      description: "Specialized financial solutions for construction companies, contractors, and engineering firms.",
      image: "/images/construction-team.jpg"
    },
    {
      icon: Store,
      title: "Retail & Wholesale",
      description: "Comprehensive services for retail businesses, from small shops to large wholesale operations.",
      image: "/images/retail-team.jpg"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Expert financial management and compliance services for manufacturing businesses.",
      image: "/images/manufacturing.jpg"
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Tailored solutions for transport companies and logistics service providers.",
      image: "/images/business-meeting.jpg"
    },
    {
      icon: Server,
      title: "Technology",
      description: "Financial services adapted for tech companies and digital service providers.",
      image: "/images/4.jpg"
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Specialized support for financial service providers and institutions.",
      image: "/images/money.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#004E8F] mb-4">Industries We Serve</h2>
          <p className="text-lg text-[#F7941E] max-w-3xl mx-auto">
            Our expertise spans across multiple industries, providing specialized financial solutions tailored to your sector's unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border border-[#F7941E]/20 hover:border-[#004E8F] backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004E8F]/80 via-[#F7941E]/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <industry.icon className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">{industry.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-[#004E8F]/70 mb-4">
                    {industry.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="btn btn-outline w-full font-semibold group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-[#F7941E] to-[#004E8F] text-white border-none inline-block">
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Don't see your industry?</h3>
                <p className="text-white/90 mb-4">
                  We work with businesses across many sectors. Contact us to discuss your specific needs.
                </p>
                <Button 
                  className="bg-white text-[#F7941E] hover:text-[#004E8F] transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
