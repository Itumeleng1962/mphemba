"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Hammer, ShoppingCart, Heart, Factory, Truck, Smartphone, ArrowRight } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Small to Medium Enterprises (SMEs)",
      description:
        "Tailored solutions for growing businesses and startups looking to establish strong financial foundations.",
      image: "/images/business-meeting.jpg",
      services: ["Startup Accounting Setup", "Growth Planning", "Cash Flow Management", "Tax Optimization"],
      caseStudy: "Helped 200+ SMEs achieve 40% average growth in their first 3 years.",
    },
    {
      icon: Hammer,
      title: "Construction & Engineering",
      description: "Specialized services for construction and engineering firms with complex project accounting needs.",
      image: "/images/construction-team.jpg",
      services: ["Project Accounting", "Contract Management", "Equipment Depreciation", "Progress Billing"],
      caseStudy: "Streamlined accounting for 50+ construction projects worth over R500M.",
    },
    {
      icon: ShoppingCart,
      title: "Retail & Wholesale",
      description: "Comprehensive support for retail and wholesale operations with inventory and sales management.",
      image: "/images/retail-team.jpg",
      services: [
        "Inventory Management",
        "Point of Sale Integration",
        "Multi-location Accounting",
        "Supplier Management",
      ],
      caseStudy: "Optimized inventory management for retail chains, reducing costs by 25%.",
    },
    {
      icon: Heart,
      title: "Non-Profit Organizations",
      description: "Dedicated services for non-profit and charitable organizations with specialized reporting needs.",
      image: "/images/3.jpg",
      services: ["Grant Management", "Donor Reporting", "Compliance Monitoring", "Impact Measurement"],
      caseStudy: "Supported 30+ NPOs in achieving 100% compliance with regulatory requirements.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Expert solutions for manufacturing and production companies with complex cost accounting.",
      image: "/images/manufacturing.jpg",
      services: ["Cost Accounting", "Production Planning", "Quality Control Metrics", "Supply Chain Finance"],
      caseStudy: "Reduced manufacturing costs by 15% through improved cost accounting systems.",
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Specialized services for transport and logistics companies with fleet and route management.",
      image: "/images/4.jpg",
      services: ["Fleet Management", "Route Optimization", "Fuel Cost Analysis", "Driver Payroll"],
      caseStudy: "Optimized fleet operations for logistics companies, improving efficiency by 30%.",
    },
    {
      icon: Smartphone,
      title: "ICT & Financial Services",
      description: "Modern solutions for technology and financial service providers with digital-first approaches.",
      image: "/images/money.jpg",
      services: ["Digital Accounting", "Fintech Compliance", "Software Integration", "Data Analytics"],
      caseStudy: "Enabled digital transformation for 40+ fintech startups and tech companies.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tobacco-brown via-zorba to-natural-gray text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We provide specialized accounting and financial services across diverse industries, understanding the
              unique challenges and requirements of each sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-pampas">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover overflow-hidden bg-white border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      className="w-full h-full object-cover image-hover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-tobacco-brown" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl mb-2 text-tobacco-brown">{industry.title}</CardTitle>
                    <CardDescription className="text-natural-gray">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-tobacco-brown mb-2">Specialized Services:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="text-sm text-natural-gray flex items-center">
                            <div className="w-1.5 h-1.5 bg-tobacco-brown rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-tobacco-brown/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-tobacco-brown mb-1">Success Story:</h4>
                      <p className="text-sm text-natural-gray">{industry.caseStudy}</p>
                    </div>
                    <Button className="w-full bg-tobacco-brown hover:bg-zorba button-hover group text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tobacco-brown mb-4">Our Industry Impact</h2>
            <p className="text-xl text-natural-gray max-w-3xl mx-auto">
              Numbers that showcase our commitment to excellence across all industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Clients Served", description: "Across all industries" },
              { value: "7", label: "Key Industries", description: "Specialized expertise" },
              { value: "R2B+", label: "Transactions Processed", description: "Annual volume" },
              { value: "98%", label: "Client Retention", description: "Long-term partnerships" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-tobacco-brown to-zorba text-white rounded-2xl p-8 card-hover">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
