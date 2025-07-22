"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Users, Award, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "Accounting & Financial Services",
      description: "Complete bookkeeping, financial statements, and management reporting solutions for your business.",
      image: "/images/accounting-team.jpg",
      features: [
        "Bookkeeping and General Ledger Maintenance",
        "Monthly and Annual Financial Statements",
        "Management Accounts and Financial Reporting",
        "Cash Flow Management and Budgeting",
        "Accounting Software Setup (Sage, Xero, QuickBooks)",
      ],
      pricing: "From R2,500/month",
    },
    {
      icon: FileText,
      title: "Taxation Services",
      description: "Comprehensive tax compliance and optimization for individuals and businesses.",
      image: "/images/tax.jpg",
      features: [
        "Company and Individual Income Tax Returns",
        "VAT, PAYE, and Provisional Tax Submissions",
        "Tax Clearance Certificates",
        "SARS Registrations and Objection Handling",
      ],
      pricing: "From R1,800/return",
    },
    {
      icon: Users,
      title: "Payroll Administration",
      description: "Efficient payroll processing and compliance management services.",
      image: "/images/pay.jpg",
      features: [
        "Monthly Payroll Processing",
        "EMP201 & EMP501 Submissions",
        "IRP5 Certificate Preparation",
        "UIF and Compensation Fund Compliance",
      ],
      pricing: "From R150/employee",
    },
    {
      icon: Award,
      title: "B-BBEE Services",
      description: "Strategic B-BBEE advisory and certification support services.",
      image: "/images/bee.png",
      features: [
        "B-BBEE Advisory and Strategy Formulation",
        "Enterprise and Supplier Development Planning",
        "Skills Development Programs",
        "Ownership and Management Control Consulting",
        "Preparation for Verification and Certificate Acquisition",
      ],
      pricing: "From R15,000/project",
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic business consulting and growth planning services.",
      image: "/images/business.jpg",
      features: [
        "Business Planning and Strategy",
        "Financial Analysis and Forecasting",
        "Growth Strategy Development",
        "Performance Metrics and KPIs",
        "Investment and Funding Advice",
      ],
      pricing: "From R3,500/consultation",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Comprehensive regulatory compliance and risk management solutions.",
      image: "/images/compliance.png",
      features: [
        "Regulatory Compliance Audits",
        "Risk Assessment and Management",
        "Audit Support and Preparation",
        "Documentation and Record Keeping",
        "Compliance Training and Support",
      ],
      pricing: "From R5,000/audit",
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
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive financial and business solutions tailored to meet your specific needs and drive your
              success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-pampas">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
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
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover image-hover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-tobacco-brown" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2 text-tobacco-brown">{service.title}</CardTitle>
                        <CardDescription className="text-natural-gray">{service.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-tobacco-brown/10 text-tobacco-brown">
                        {service.pricing}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-natural-gray">
                          <CheckCircle className="h-4 w-4 text-tobacco-brown mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-tobacco-brown mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-natural-gray mb-8">
              Contact us today for a free consultation and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-tobacco-brown hover:bg-zorba button-hover">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-tobacco-brown text-tobacco-brown hover:bg-tobacco-brown hover:text-white bg-transparent button-hover"
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
