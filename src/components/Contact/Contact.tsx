"use client"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import SectionHeading from "../Helper/SectionHeading"
import { Zap, Star } from "lucide-react"

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-black relative overflow-hidden" id="Contacts">
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-32 left-0 w-full h-1 bg-white transform rotate-3 opacity-5"></div>
        <div className="absolute bottom-32 left-0 w-full h-1 bg-white transform -rotate-3 opacity-5"></div>

        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-white transform rotate-45 opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white transform rotate-45 opacity-10"></div>
        <div className="absolute top-60 left-40 w-8 h-8 bg-white rounded-full opacity-10"></div>

        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="contact-dots" patternUnits="userSpaceOnUse" width="15" height="15">
                <circle cx="7.5" cy="7.5" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#contact-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <SectionHeading>Contact</SectionHeading>

        <div className="flex justify-center mt-8 mb-16">
          <div className="relative bg-white text-black px-8 py-4 font-black text-xl tracking-wider transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]">
            LET&apos;S CONNECT!
            <Star className="absolute -top-3 -right-3 w-6 h-6 text-white bg-black rounded-full p-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-start gap-12 mt-10">
          <div>
            <ContactForm />
          </div>
          <div className="xl:mx-auto">
            <ContactInfo />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-1 bg-white"></div>
            <Zap className="w-8 h-8 text-white" />
            <div className="w-16 h-1 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
