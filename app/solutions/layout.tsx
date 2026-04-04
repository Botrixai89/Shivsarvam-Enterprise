import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chemical Solutions for Every Sector | Shivsarvam Enterprises',
  description:
    'Industrial utility chemicals, hospital disinfectants, hotel hygiene, and laundry chemical solutions in Chhattisgarh. Authorized distributor of Chemtex & Indokem.',
  keywords: [
    'industrial chemical solutions Chhattisgarh',
    'boiler chemicals supplier Raipur',
    'hospital disinfectants Chhattisgarh',
    'laundry chemicals distributor',
    'hotel hygiene chemicals',
    'RO water treatment chemicals Raipur',
    'Chemtex utility chemicals',
    'Indokem specialty chemicals',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions',
  },
  openGraph: {
    title: 'Chemical Solutions for Every Sector | Shivsarvam Enterprises',
    description:
      'Authorized distributor of Chemtex & Indokem industrial and specialty chemicals across industrial, healthcare, hospitality and laundry sectors.',
    url: 'https://www.shivsarvam.in/solutions',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
