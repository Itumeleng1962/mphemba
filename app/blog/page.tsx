"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "Understanding B-BBEE Compliance in 2024",
      excerpt: "A comprehensive guide to B-BBEE compliance requirements and how businesses can achieve optimal ratings.",
      image: "/images/bee.png",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Compliance"
    },
    {
      title: "Tax Season 2024: What You Need to Know",
      excerpt: "Key updates and changes to South African tax regulations that businesses should be aware of this year.",
      image: "/images/tax.jpg",
      author: "Michael van der Merwe",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Taxation"
    },
    {
      title: "Digital Transformation in Accounting",
      excerpt: "How modern accounting software and digital tools are revolutionizing financial management.",
      image: "/images/accounting-team.jpg",
      author: "Thabo Molefe",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "Effective Payroll Management Tips",
      excerpt: "Best practices for streamlining your payroll processes and ensuring compliance with regulations.",
      image: "/images/pay.jpg",
      author: "Lisa Naidoo",
      date: "March 1, 2024",
      readTime: "4 min read",
      category: "Payroll"
    }
  ]

  return (
    <main className="min-h-screen bg-[#F8F5F3] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2C1810] overflow-hidden">
        <div className="absolute inset-0 bg-[#2C1810]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] to-transparent"></div>
          <img
            src="/images/business-meeting.jpg"
            alt="Business insights"
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
              Insights & Updates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stay informed with the latest insights, industry trends, and expert advice on accounting, taxation, and business compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border border-[#E5DCD3] hover:border-[#2C1810]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#2C1810] px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-[#4A3427] mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2C1810] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h3>
                    <p className="text-[#4A3427] mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-[#4A3427]">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Button 
                        variant="outline"
                        className="border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all duration-300 group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-[#4A3427] mb-8">
              Get the latest insights and updates delivered directly to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-[#E5DCD3] focus:border-[#2C1810] focus:outline-none"
              />
              <Button 
                className="bg-[#2C1810] text-white hover:bg-[#4A3427] transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
