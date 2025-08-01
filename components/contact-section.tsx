import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004E8F] mb-4">Get In Touch</h2>
          <p className="text-xl text-[#F7941E] max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for a free consultation and discover how we
            can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-[#F7941E]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[#004E8F]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#004E8F] font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#004E8F] font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#004E8F] font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#004E8F] font-medium">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#004E8F] font-medium">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter your company name" 
                    className="border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#004E8F] font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your needs..." 
                    className="min-h-[120px] border-[#F7941E]/20 focus:border-[#004E8F] hover:border-[#F7941E] transition-colors bg-white/80 focus:bg-white" 
                  />
                </div>
                <Button 
                  className="btn btn-primary w-full font-semibold"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-[#F7941E]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[#004E8F]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Phone className="h-5 w-5 text-[#F7941E] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#004E8F]">Phone</div>
                    <div className="text-[#004E8F]/70 group-hover:text-[#F7941E] transition-colors">+27 11 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Mail className="h-5 w-5 text-[#F7941E] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#004E8F]">Email</div>
                    <div className="text-[#004E8F]/70 group-hover:text-[#F7941E] transition-colors">info@mphembaziyanda.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-[#F7941E] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#004E8F]">Address</div>
                    <div className="text-[#004E8F]/70 group-hover:text-[#F7941E] transition-colors">
                      123 Business Street
                      <br />
                      Johannesburg, 2000
                      <br />
                      South Africa
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Clock className="h-5 w-5 text-[#F7941E] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#004E8F]">Business Hours</div>
                    <div className="text-[#004E8F]/70 group-hover:text-[#F7941E] transition-colors">
                      Mon - Fri: 8:00 AM - 5:00 PM
                      <br />
                      Sat: 9:00 AM - 1:00 PM
                      <br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F7941E] to-[#004E8F] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-white/90 mb-4">
                  Schedule a free consultation to discuss your business needs and how we can help.
                </p>
                <Button 
                  className="btn btn-secondary w-full font-semibold"
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
