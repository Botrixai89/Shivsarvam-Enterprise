import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Shivsarvam Enterprises | Industrial & Chemical Solutions',
  description: 'Authorized distributor of Chemtex & Indokem. Premium industrial utility, cleaning, hygiene & disinfection chemical solutions in Chhattisgarh.',
  openGraph: {
    title: 'Shivsarvam Enterprises | Industrial & Chemical Solutions',
    description: 'Authorized distributor of Chemtex & Indokem. Premium industrial utility, cleaning, hygiene & disinfection chemical solutions in Chhattisgarh.',
  },
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png', type: 'image/png' }],
  },
}

import { ScrollProgress } from '@/components/ui/scroll-progress'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { QuoteModalProvider } from '@/components/quote-modal-provider'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${_geist.className} ${_geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ScrollProgress />
        <QuoteModalProvider>
          {children}
          <WhatsAppButton />
        </QuoteModalProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
