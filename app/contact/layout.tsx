import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Let\'s Connect | Shivsarvam Enterprises — Chemical Supplier Raipur Chhattisgarh',
  description:
    'Contact Shivsarvam Enterprises in Raipur for industrial chemicals, hospital disinfectants, boiler chemicals, laundry chemicals & RO water treatment. Call +91 84129 09297.',
  keywords: [
    'contact Shivsarvam Enterprises',
    'chemical supplier Raipur',
    'industrial chemical distributor Chhattisgarh',
    'Chemtex dealer Raipur',
    'Indokem dealer Raipur',
    'buy boiler chemicals Raipur',
    'hospital disinfectant supplier Chhattisgarh',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/contact',
  },
  openGraph: {
    title: 'Contact Shivsarvam Enterprises | Industrial Chemical Supplier Raipur',
    description:
      'Get in touch with Shivsarvam Enterprises — authorized distributor of Chemtex & Indokem in Chhattisgarh.',
    url: 'https://www.shivsarvam.in/contact',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
