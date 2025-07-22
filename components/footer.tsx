"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ]

  const services = [
    "Accounting & Bookkeeping",
    "Tax Services",
    "Payroll Management",
    "B-BBEE Advisory",
    "Financial Planning",
    "Business Consulting",
  ]

  const industries = [
    "Construction",
    "Retail & Wholesale",
    "Manufacturing",
    "Transport & Logistics",
    "Technology",
    "Financial Services",
  ]

  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest industry insights and updates
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
                />
                <Button 
                  className="bg-white text-[#2C1810] hover:bg-[#F8F5F3] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
              Mphemba Ziyanda Solutions
            </Link>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner in financial excellence. Providing comprehensive accounting, tax, and advisory services across South Africa.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-1" />
                <span className="text-white/80">
                  123 Business Street
                  <br />
                  Johannesburg, 2000
                  <br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">+27 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80" />
                <span className="text-white/80">info@mphembaziyanda.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Mphemba Ziyanda Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
