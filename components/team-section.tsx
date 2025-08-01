"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Managing Director",
      image: "/placeholder-user.jpg",
      description: "CA(SA) with 15+ years of experience in financial management and business advisory.",
      linkedin: "#",
      email: "sarah@example.com",
      phone: "+27 123 456 789"
    },
    {
      name: "David Nkosi",
      role: "Head of Taxation",
      image: "/placeholder-user.jpg",
      description: "Tax specialist with extensive experience in corporate and personal taxation.",
      linkedin: "#",
      email: "david@example.com",
      phone: "+27 123 456 789"
    },
    {
      name: "Michelle van der Berg",
      role: "B-BBEE Specialist",
      image: "/placeholder-user.jpg",
      description: "Expert in B-BBEE compliance and transformation strategies.",
      linkedin: "#",
      email: "michelle@example.com",
      phone: "+27 123 456 789"
    },
    {
      name: "Thabo Molefe",
      role: "Senior Accountant",
      image: "/placeholder-user.jpg",
      description: "Certified accountant specializing in financial reporting and analysis.",
      linkedin: "#",
      email: "thabo@example.com",
      phone: "+27 123 456 789"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#004E8F] mb-6">Meet Our Team</h2>
          <p className="text-xl text-[#F7941E] max-w-4xl mx-auto leading-relaxed">
            Our experienced professionals are dedicated to providing exceptional service and expertise to help your business thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-white border border-[#F7941E]/20 hover:border-[#004E8F] transition-all duration-300 hover:shadow-xl backdrop-blur-sm overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <h3 className="text-xl font-bold text-[#004E8F] group-hover:text-[#F7941E] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[#004E8F]/70 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#004E8F]/70 text-center">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-[#F7941E] hover:text-[#004E8F] hover:scale-110 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[#F7941E] hover:text-[#004E8F] hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="text-[#F7941E] hover:text-[#004E8F] hover:scale-110 transition-all duration-300"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 