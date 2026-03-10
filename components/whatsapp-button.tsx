'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  // TODO: Replace with real phone number (e.g. 917123456789)
  const whatsappNumber = '91XXXXXXXXXX'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Shivsarvam%20Enterprises`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2, boxShadow: "0 20px 25px -5px rgb(16, 185, 129, 0.4)" }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
    </motion.a>
  )
}
