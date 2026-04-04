import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Panel Cleaning Chemicals & Industrial Solutions | Shivsarvam Enterprises',
  description:
    'Neutral-pH solar panel cleaning chemicals and industrial utility chemicals for photovoltaic installations in Chhattisgarh. Authorized Chemtex & Indokem distributor.',
  keywords: [
    'solar panel cleaning chemicals India',
    'solar panel cleaner Chhattisgarh',
    'photovoltaic panel cleaning solution',
    'industrial solar chemicals Raipur',
    'Chemtex solar cleaning',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions/solar',
  },
  openGraph: {
    title: 'Solar Panel Cleaning Chemicals | Shivsarvam Enterprises',
    description:
      'Neutral pH solar panel cleaning chemicals for solar installations in Chhattisgarh.',
    url: 'https://www.shivsarvam.in/solutions/solar',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function SolarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
