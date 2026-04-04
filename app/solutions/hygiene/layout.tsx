import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Utility Chemicals — Boiler, Cooling Tower, RO, Oil & Gas | Shivsarvam Enterprises',
  description:
    'Boiler treatment chemicals, cooling tower chemicals, RO antiscalants, ETP/STP chemicals, oil & gas chemicals, and solar panel cleaning chemicals in Chhattisgarh. Authorized Chemtex & Indokem distributor.',
  keywords: [
    'boiler chemicals Raipur Chhattisgarh',
    'cooling tower chemicals supplier',
    'RO water treatment chemicals',
    'industrial utility chemicals distributor',
    'DM plant chemicals',
    'ETP STP chemicals',
    'solar panel cleaning chemicals',
    'Chemtex utility chemicals',
    'Indokem industrial chemicals',
  ],
  alternates: {
    canonical: 'https://www.shivsarvam.in/solutions/hygiene',
  },
  openGraph: {
    title: 'Industrial Utility Chemicals — Boiler, Cooling Tower, RO | Shivsarvam Enterprises',
    description:
      'Specialized industrial water treatment chemicals for power plants, steel mills & process industries in Chhattisgarh.',
    url: 'https://www.shivsarvam.in/solutions/hygiene',
    images: [{ url: 'https://www.shivsarvam.in/favicon.png' }],
  },
}

export default function HygieneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
