import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://websitedesignoutsource.com'), title: { default: 'Website Design Outsource | Offshore outsourcing guides', template: '%s | Website Design Outsource' }, description: 'Stealth Agents-style guides for website design outsource: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Website Design Outsource', description: 'Practical outsourcing guides for business teams.', url: 'https://websitedesignoutsource.com', siteName: 'Website Design Outsource', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
