import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shivsarvam Enterprises',
  description:
    'Authorized distributor of industrial and specialty chemicals in Chhattisgarh and Maharashtra',
  url: 'https://www.shivsarvam.in',
  telephone: '+918412909297',
  email: 'info@shivsarvam.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C-6, Sector 3, Jagriti Nagar, Devendra Nagar',
    addressLocality: 'Raipur',
    addressRegion: 'Chhattisgarh',
    postalCode: '492009',
    addressCountry: 'IN',
  },
  areaServed: ['Chhattisgarh', 'Maharashtra', 'Jharkhand', 'Odisha', 'Madhya Pradesh'],
  openingHours: 'Mo-Sa 11:00-18:00',
}

export const metadata: Metadata = {
  title: 'Industrial & Chemical Solutions in Raipur, Chhattisgarh | Shivsarvam Enterprises',
  description:
    'Authorized distributor of Chemtex & Indokem chemicals in Chhattisgarh. Boiler chemicals, hospital disinfectants, laundry chemicals, RO treatment — serving Raipur, Bilaspur, Durg, Bhilai & nearby states.',
  keywords: "industrial chemical supplier Chhattisgarh, boiler treatment chemicals Raipur, hospital disinfectant supplier Bilaspur, cooling tower chemicals Durg Bhilai, RO water treatment Korba, laundry chemicals Raigarh, Chemtex distributor Chhattisgarh, Indokem distributor Chhattisgarh, chemical supplier Nagpur Maharashtra, industrial chemicals Jharkhand Ranchi, specialty chemicals Odisha Rourkela, water treatment chemicals Jabalpur Madhya Pradesh, boiler scale inhibitor Chhattisgarh, ETP STP chemicals Chhattisgarh, solar panel cleaning chemicals, hospital grade disinfectant OT ICU, swimming pool chemicals hotel resort, commercial laundry detergent supplier, chemical distributor Dantewada Jagdalpur Ambikapur, authorized Chemtex dealer central India, authorized Indokem dealer Chhattisgarh Maharashtra",
  alternates: {
    canonical: 'https://www.shivsarvam.in',
  },
  openGraph: {
    title: 'Industrial & Chemical Solutions in Raipur, Chhattisgarh | Shivsarvam Enterprises',
    description:
      'Authorized distributor of Chemtex & Indokem chemicals in Chhattisgarh. Boiler chemicals, hospital disinfectants, laundry chemicals, RO treatment — serving Raipur, Bilaspur, Durg, Bhilai & nearby states.',
    url: 'https://www.shivsarvam.in',
    siteName: 'Shivsarvam Enterprises',
    type: 'website',
    images: [
      {
        url: 'https://www.shivsarvam.in/favicon.png',
        width: 512,
        height: 512,
        alt: 'Shivsarvam Enterprises — Industrial Chemical Supplier Chhattisgarh',
      },
    ],
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
import { SchemaLd } from '@/components/schema-ld'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${_geist.className} ${_geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <SchemaLd data={LOCAL_BUSINESS_SCHEMA} />
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
