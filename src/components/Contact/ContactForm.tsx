"use client"
import { Message } from "@/lib/actions"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Sparkles } from "lucide-react"

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    success: boolean | null
    message: string
  }>({ success: null, message: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ success: null, message: "" })
    setIsLoading(true)

    try {
      await Message(form)
      setStatus({
        success: true,
        message: "Message sent successfully!",
      })
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
      })
    } catch {
      setStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Main form container */}
      <div className="relative bg-white border-4 border-black p-8 transform hover:scale-105 transition-all duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="relative mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-wider uppercase">
            Let&apos;s Work Together!
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-black opacity-20 transform skew-x-12"></div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-black" />
        </div>

        <div className="relative bg-black text-white p-4 mb-8 transform rotate-1">
          <p className="text-white font-bold">I am available for freelance work. Connect with me via email:</p>
        </div>

        {/* Status message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 font-black text-center transform -rotate-1 border-4 ${
              status.success ? "bg-white text-black border-black" : "bg-black text-white border-white"
            }`}
          >
            {status.message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full bg-black text-white placeholder:text-gray-400 px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black focus:placeholder:text-gray-600 transition-all duration-200 outline-none"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
            </div>
            <div className="flex-1 relative group">
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full bg-black text-white placeholder:text-gray-400 px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black focus:placeholder:text-gray-600 transition-all duration-200 outline-none"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-black text-white placeholder:text-gray-400 px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black focus:placeholder:text-gray-600 transition-all duration-200 outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
            </div>
            <div className="flex-1 relative group">
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="w-full bg-black text-white placeholder:text-gray-400 px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black focus:placeholder:text-gray-600 transition-all duration-200 outline-none"
                value={form.phoneNumber}
                onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
            </div>
          </div>

          <div className="relative group">
            <select
            title="SERVICE"
              name="service"
              className="w-full bg-black text-white px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black transition-all duration-200 outline-none appearance-none cursor-pointer"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="" disabled>
                SELECT SERVICE
              </option>
              <option value="frontend">FRONTEND DEVELOPMENT</option>
              <option value="backend">BACKEND DEVELOPMENT</option>
              <option value="fullstack">FULLSTACK DEVELOPMENT</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white group-focus-within:border-t-black transition-colors duration-200"></div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
          </div>

          <div className="relative group">
            <textarea
              rows={6}
              placeholder="YOUR MESSAGE HERE..."
              className="w-full bg-black text-white placeholder:text-gray-400 px-6 py-4 border-4 border-black font-black tracking-wider uppercase focus:bg-white focus:text-black focus:placeholder:text-gray-600 transition-all duration-200 outline-none resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black group-focus-within:bg-white transition-colors duration-200"></div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="group relative bg-black text-white font-black text-lg px-12 py-4 transform hover:scale-110 transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] border-4 border-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center space-x-3 tracking-wider uppercase">
                <span>{isLoading ? "SENDING..." : "SEND MESSAGE"}</span>
                <Send className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 tracking-wider uppercase">
                FIRE AWAY!
              </span>
            </button>
          </div>
        </form>

        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-black opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-black opacity-50"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-black opacity-50"></div>
      </div>

      <div className="absolute -top-6 -right-6 bg-black text-white px-4 py-2 font-black text-sm transform rotate-12">
        CONTACT
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black transform rotate-45"></div>
    </motion.div>
  )
}

export default ContactForm
