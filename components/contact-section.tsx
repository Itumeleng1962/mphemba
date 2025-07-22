import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-[#F8F5F3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Get In Touch</h2>
          <p className="text-xl text-[#4A3427] max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for a free consultation and discover how we
            can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-[#E5DCD3] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#2C1810]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#2C1810] font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#2C1810] font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2C1810] font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#2C1810] font-medium">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      className="border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#2C1810] font-medium">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter your company name" 
                    className="border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#2C1810] font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your needs..." 
                    className="min-h-[120px] border-[#E5DCD3] focus:border-[#2C1810] hover:border-[#4A3427] transition-colors bg-white/80 focus:bg-white" 
                  />
                </div>
                <Button 
                  className="w-full bg-[#2C1810] hover:bg-[#4A3427] text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-[#E5DCD3] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#2C1810]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Phone className="h-5 w-5 text-[#2C1810] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#2C1810]">Phone</div>
                    <div className="text-[#4A3427] group-hover:text-[#2C1810] transition-colors">+27 11 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Mail className="h-5 w-5 text-[#2C1810] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#2C1810]">Email</div>
                    <div className="text-[#4A3427] group-hover:text-[#2C1810] transition-colors">info@mphembaziyanda.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-[#2C1810] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#2C1810]">Address</div>
                    <div className="text-[#4A3427] group-hover:text-[#2C1810] transition-colors">
                      123 Business Street
                      <br />
                      Johannesburg, 2000
                      <br />
                      South Africa
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Clock className="h-5 w-5 text-[#2C1810] mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-[#2C1810]">Business Hours</div>
                    <div className="text-[#4A3427] group-hover:text-[#2C1810] transition-colors">
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

            <Card className="bg-[#2C1810] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-white/90 mb-4">
                  Schedule a free consultation to discuss your business needs and how we can help.
                </p>
                <Button 
                  className="w-full bg-white text-[#2C1810] hover:bg-[#F8F5F3] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
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
