import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel & Resort Cleaning Chemicals — Kitchen, Pool, Hygiene | Shivsarvam Enterprises',
  description:
    'Hotel-grade cleaning chemicals, kitchen care solutions, swimming pool & water park chemicals for hotels and resorts in Chhattisgarh. Authorized distributor of Chemtex & Indokem.',
  keywords: [
    'hotel cleaning chemicals Chhattisgarh',
    'resort hygiene chemicals',
    'swimming pool chemicals Raipur',
    'kitchen care chemicals hotel',
    'hospitality chemicals supplier',
    'commercial cleaning chemicals',
    'water park chemicals Chhattisgarh',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions/water',
  },
  openGraph: {
    title: 'Hotel & Resort Cleaning Chemicals | Shivsarvam Enterprises Chhattisgarh',
    description:
      'Premium hotel hygiene and cleaning chemical solutions for hospitality businesses in Chhattisgarh.',
    url: 'https://www.shivsarvam.in/solutions/water',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function WaterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
