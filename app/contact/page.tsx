"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 10 880 0000"],
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mpeziyanda.co.za"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: By Appointment", "Sun: Closed"],
      description: "We're here when you need us",
    },
  ]

  const offices = [
    {
      city: "Johannesburg (Head Office)",
      address: "Sandton Business District",
      phone: "+27 10 880 0000",
      email: "jhb@mpeziyanda.co.za",
      manager: "Vuyelwa Happiness Ntuli (CA) SA",
      image: "/placeholder.jpg",
    },
    {
      city: "Cape Town",
      address: "Century City Business Hub",
      phone: "+27 10 880 0001",
      email: "cpt@mpeziyanda.co.za",
      manager: "Regional Manager",
      image: "/placeholder.jpg",
    },
    {
      city: "Durban",
      address: "Umhlanga Business Park",
      phone: "+27 10 880 0002",
      email: "dbn@mpeziyanda.co.za",
      manager: "Regional Manager",
      image: "/placeholder.jpg",
    },
  ]

  const industries = [
    "Small to Medium Enterprises (SMEs)",
    "Construction & Engineering",
    "Retail & Wholesale",
    "Non-Profit Organizations",
    "Manufacturing",
    "Transport & Logistics",
    "ICT & Financial Services"
  ]

  const services = [
    {
      title: "Accounting & Financial Services",
      items: [
        "Bookkeeping and General Ledger",
        "Financial Statements",
        "Management Accounts",
        "Cash Flow Management",
        "Software Setup"
      ]
    },
    {
      title: "Taxation Services",
      items: [
        "Income Tax Returns",
        "VAT & PAYE Submissions",
        "Tax Clearance",
        "SARS Registrations"
      ]
    },
    {
      title: "Payroll Administration",
      items: [
        "Monthly Payroll",
        "EMP201 & EMP501",
        "IRP5 Certificates",
        "UIF Compliance"
      ]
    },
    {
      title: "B-BBEE Services",
      items: [
        "B-BBEE Strategy",
        "Enterprise Development",
        "Skills Development",
        "Verification Support"
      ]
    }
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
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mphemba Ziyanda Solutions (Pty) Ltd is a 100% black women-owned South African company providing comprehensive Accounting, Tax, Payroll, and B-BBEE advisory services. Our goal is to support businesses in achieving financial clarity, regulatory compliance, and economic transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-pampas">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl bg-white border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center text-tobacco-brown">
                      <MessageSquare className="h-6 w-6 mr-2 text-tobacco-brown" />
                      Send us a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.title.toLowerCase().replace(/\s+/g, '-')}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-tobacco-brown hover:bg-zorba button-hover text-lg py-3">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tobacco-brown/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-tobacco-brown" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-tobacco-brown mb-1">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="text-natural-gray">
                                {detail}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-natural-gray/70 mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-tobacco-brown to-zorba text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 mr-2" />
                      <h3 className="text-xl font-semibold">Free Consultation</h3>
                    </div>
                    <p className="text-white/90 mb-4">
                      Schedule a free consultation to discuss your business needs and how we can help.
                    </p>
                    <Button className="w-full bg-white text-tobacco-brown hover:bg-pampas button-hover">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tobacco-brown mb-4">Our Offices</h2>
            <p className="text-xl text-natural-gray max-w-3xl mx-auto">
              Visit us at any of our convenient locations across South Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden card-hover bg-white border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={office.image}
                      alt={`${office.city} Office`}
                      className="w-full h-full object-cover image-hover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-tobacco-brown mb-4">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-tobacco-brown mt-1 flex-shrink-0" />
                        <span className="text-natural-gray text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-tobacco-brown flex-shrink-0" />
                        <span className="text-natural-gray text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-tobacco-brown flex-shrink-0" />
                        <span className="text-natural-gray text-sm">{office.email}</span>
                      </div>
                      <div className="pt-2 border-t border-pampas">
                        <p className="text-sm text-natural-gray/70">
                          Office Manager: <span className="font-medium text-tobacco-brown">{office.manager}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-pampas">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-tobacco-brown mb-4">Industries We Serve</h2>
            <p className="text-xl text-natural-gray">
              Our expertise spans across multiple industries, providing specialized solutions for each sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-tobacco-brown" />
                  <span className="text-natural-gray">{industry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-tobacco-brown mb-4">Our Compliance & Memberships</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-natural-gray">
              <p>✓ Registered with SARS and CIPC</p>
              <p>✓ B-BBEE Compliant (Level 1)</p>
              <p>✓ Professional Memberships: SAICA</p>
              <p>✓ POPIA Compliant</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
