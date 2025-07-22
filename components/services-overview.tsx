"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileText, Users, Award } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Financial Services",
      description: "Comprehensive bookkeeping, financial statements, and management accounts to keep your business financially sound.",
      features: [
        "Monthly Financial Statements",
        "Cash Flow Management",
        "Budgeting & Forecasting",
        "Financial Analysis"
      ]
    },
    {
      icon: FileText,
      title: "Taxation Services",
      description: "Expert tax planning and compliance services to optimize your tax position and ensure regulatory compliance.",
      features: [
        "Tax Returns & Planning",
        "VAT Submissions",
        "Tax Clearance",
        "SARS Liaison"
      ]
    },
    {
      icon: Users,
      title: "Payroll Administration",
      description: "End-to-end payroll solutions ensuring accurate and timely processing of your employee payments.",
      features: [
        "Payroll Processing",
        "Statutory Submissions",
        "Employee Benefits",
        "Leave Management"
      ]
    },
    {
      icon: Award,
      title: "B-BBEE Services",
      description: "Strategic B-BBEE consulting to help you achieve and maintain optimal compliance levels.",
      features: [
        "Compliance Strategy",
        "Certificate Acquisition",
        "Skills Development",
        "Enterprise Development"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#2C1810] mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#4A3427] max-w-3xl mx-auto"
          >
            Comprehensive financial solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border border-[#E5DCD3] hover:border-[#2C1810] transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-[#2C1810] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C1810] group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#4A3427] leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#4A3427]">
                        <ArrowRight className="h-4 w-4 mr-2 text-[#2C1810]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-[#2C1810] text-white hover:bg-[#4A3427] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
