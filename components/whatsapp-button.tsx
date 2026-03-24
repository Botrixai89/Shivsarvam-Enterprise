'use client'

import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const whatsappNumber = '918412909297'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Shivsarvam%20Enterprises`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.07, boxShadow: '0 14px 24px -8px rgba(7, 94, 84, 0.5)' }}
      className="fixed bottom-4 right-5 z-40 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#13a36f] text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#0f9968]"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        className="h-[38px] w-[38px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.61 2 2.2 6.35 2.2 11.7c0 1.88.55 3.73 1.58 5.31L2 22l5.17-1.65a9.95 9.95 0 0 0 4.87 1.26h.01c5.43 0 9.84-4.35 9.84-9.7C21.89 6.35 17.47 2 12.04 2Zm0 17.8h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.07.98.99-2.97-.2-.31a7.82 7.82 0 0 1-1.25-4.2c0-4.33 3.58-7.86 7.98-7.86 4.39 0 7.97 3.53 7.97 7.86 0 4.33-3.58 7.86-7.97 7.86Zm4.37-5.88c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.11-.49.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.76-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.64 4.08 3.59.57.24 1.02.38 1.37.48.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </motion.a>
  )
}
