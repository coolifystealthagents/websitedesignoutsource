import './globals.css';
import './home.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://websitedesignoutsource.com'), title: { default: 'Website Design Outsource | Philippines web design production', template: '%s | Website Design Outsource' }, description: 'Plan and hand off website design, page production, responsive QA, and source-file delivery to a Philippines-based web team.', openGraph: { title: 'Website Design Outsource', description: 'A Philippines-based production desk for outsourced website design, build, and QA.', url: 'https://websitedesignoutsource.com', siteName: 'Website Design Outsource', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
