"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ChevronDown, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B6D5C] to-[#A89386] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">MZ</span>
              </div>
              <div>
                <div className="text-[#5C4B42] font-bold text-lg leading-tight">
                  Mphemba Ziyanda
                  <br />
                  Solutions
                </div>
                <div className="text-xs text-[#8B6D5C] uppercase tracking-wider">Excellence in Financial Services</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[#5C4B42] hover:text-[#8B6D5C] font-medium transition-colors duration-300 group"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B6D5C] transition-all duration-300 group-hover:w-full opacity-70"></span>
              </Link>
            ))}
            <Button 
              className="bg-[#8B6D5C] text-white hover:bg-[#A89386] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="lg:hidden border-[#8B6D5C] text-[#8B6D5C] hover:bg-[#8B6D5C] hover:text-white transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent 
              className="w-80 bg-[#FAF7F5] border-l border-[#E5DCD3]"
              side="right"
            >
              <div className="flex flex-col space-y-8 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8B6D5C] to-[#A89386] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MZ</span>
                  </div>
                  <div className="text-[#5C4B42] font-bold text-sm">
                    Mphemba Ziyanda Solutions
                  </div>
                </div>
                <nav className="flex flex-col space-y-4">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#5C4B42] hover:text-[#8B6D5C] font-medium py-2 transition-all duration-300 hover:translate-x-2 flex items-center justify-between group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                      <ChevronDown className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                  ))}
                </nav>
                <Button 
                  className="bg-[#8B6D5C] text-white hover:bg-[#A89386] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg w-full flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
