"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "MPE,BE Ziyanda Solutions has transformed our financial operations. Their expertise in B-BBEE compliance has been invaluable for our business growth.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Tech Innovations SA",
      image: "/images/1.jpg"
    },
    {
      quote: "The team's attention to detail and proactive approach to tax planning has saved us both time and money. They're truly invested in our success.",
      author: "Michael van der Merwe",
      position: "Finance Director",
      company: "Construction Plus",
      image: "/images/2.jpg"
    },
    {
      quote: "Their payroll services are exceptional. They've streamlined our processes and ensure we're always compliant with the latest regulations.",
      author: "Thabo Molefe",
      position: "HR Manager",
      company: "Retail Solutions",
      image: "/images/3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-[#F8F5F3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2C1810] mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[#4A3427] max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our valued clients about their experience working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white border border-[#E5DCD3] hover:border-[#2C1810] transition-all duration-300 hover:shadow-xl group">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-[#2C1810] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-[#4A3427] leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[#2C1810]">{testimonial.author}</div>
                      <div className="text-sm text-[#4A3427]">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gradient-to-br from-[#2C1810]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-gradient-to-tr from-[#2C1810]/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
