"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Clock, MapPin, Users, Heart, Target, Award } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Accountant",
      type: "Full-time",
      location: "Johannesburg",
      department: "Finance",
      description: "We're looking for an experienced Senior Accountant to join our growing team. The ideal candidate will have strong technical skills and experience in managing client relationships."
    },
    {
      title: "Tax Consultant",
      type: "Full-time",
      location: "Pretoria",
      department: "Tax Services",
      description: "Join our tax team to help clients navigate complex tax regulations and optimize their tax positions. Strong knowledge of South African tax laws required."
    },
    {
      title: "Payroll Specialist",
      type: "Full-time",
      location: "Johannesburg",
      department: "Payroll",
      description: "Looking for a detail-oriented Payroll Specialist to manage end-to-end payroll processing for our clients. Experience with payroll software required."
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented professionals in a collaborative environment"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive medical aid and health insurance coverage"
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Clear career progression and professional development"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding performance"
    }
  ]

  return (
    <main className="min-h-screen bg-[#F8F5F3] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2C1810] overflow-hidden">
        <div className="absolute inset-0 bg-[#2C1810]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] to-transparent"></div>
          <img
            src="/images/Job.jpg"
            alt="Career opportunities"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Be part of a dynamic team that's shaping the future of financial services in South Africa. We're always looking for talented individuals who share our passion for excellence.
            </p>
            <Button 
              className="bg-white text-[#2C1810] hover:bg-[#F8F5F3] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Why Work With Us</h2>
            <p className="text-lg text-[#4A3427] max-w-3xl mx-auto">
              We offer more than just a job - we provide a career with growth opportunities and great benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white border border-[#E5DCD3] hover:border-[#2C1810] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-12 h-12 bg-[#2C1810] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C1810] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[#4A3427] leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Open Positions</h2>
            <p className="text-lg text-[#4A3427] max-w-3xl mx-auto">
              Explore our current opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white border border-[#E5DCD3] hover:border-[#2C1810] transition-all duration-300 hover:shadow-xl group">
                  <div className="flex items-center space-x-2 mb-4">
                    <Briefcase className="h-5 w-5 text-[#2C1810]" />
                    <span className="font-semibold text-[#2C1810]">{job.department}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C1810] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {job.title}
                  </h3>
                  <p className="text-[#4A3427] mb-4">
                    {job.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-[#4A3427]">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all duration-300 group"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
