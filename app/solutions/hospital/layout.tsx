import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospital Disinfectants & Healthcare Hygiene Chemicals | Shivsarvam Enterprises Chhattisgarh',
  description:
    'Certified hospital-grade disinfectants, OT & ICU cleaning chemicals, surface disinfection solutions for hospitals in Chhattisgarh. Authorized Chemtex & Indokem distributor.',
  keywords: [
    'hospital disinfectant Chhattisgarh',
    'hospital grade disinfectant Raipur',
    'OT ICU disinfection chemicals',
    'healthcare hygiene chemicals',
    'hospital cleaning chemicals supplier',
    'infection control chemicals',
    'Chemtex hospital chemicals',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions/hospital',
  },
  openGraph: {
    title: 'Hospital Disinfectants & Healthcare Hygiene Chemicals | Shivsarvam Enterprises',
    description:
      'Certified hospital-grade disinfectants and cleaning chemicals for healthcare facilities in Chhattisgarh.',
    url: 'https://www.shivsarvam.in/solutions/hospital',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function HospitalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
