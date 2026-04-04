import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Laundry Chemicals — Distributors in Chhattisgarh | Shivsarvam Enterprises',
  description:
    'Commercial laundry chemicals, fabric softeners, stain removers & dosing system support for commercial laundries and dry cleaners in Chhattisgarh. Authorized Chemtex & Indokem distributor.',
  keywords: [
    'laundry chemicals Chhattisgarh',
    'commercial laundry chemicals Raipur',
    'dry cleaning chemicals supplier',
    'laundry detergent distributor',
    'fabric softener bulk supply',
    'industrial laundry chemicals',
    'Chemtex laundry chemicals',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions/laundry',
  },
  openGraph: {
    title: 'Commercial Laundry Chemicals | Shivsarvam Enterprises Chhattisgarh',
    description:
      'Laundry chemicals, fabric care, and dosing support for commercial laundries across Chhattisgarh.',
    url: 'https://www.shivsarvam.in/solutions/laundry',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function LaundryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
