import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import styles from './comparison.module.css';

const companies = [
  {
    "name": "Stealth Agents",
    "domain": "StealthAgents.com",
    "url": "https://stealthagents.com/",
    "category": "Managed virtual assistance",
    "niche": "Managed virtual assistants for executives, founders, and growing teams.",
    "benefit": "Stealth Agents provides a managed assistant service for businesses that want help with matching, onboarding, and daily support. The company pairs experienced VAs with dedicated account managers instead of leaving clients to manage the full working relationship alone.",
    "bestFor": "Companies that want experienced VAs, a dedicated support manager, and a clear replacement guarantee.",
    "guideFit": "This is a close match for readers comparing web design, development, and business support. Ask for a sample handoff covering managed virtual assistants for executives, founders, and growing teams. before adding it to the final shortlist."
  },
  {
    "name": "Website Design Outsource",
    "domain": "WebsiteDesignOutsource.com",
    "url": "https://websitedesignoutsource.com/",
    "category": "Design and development",
    "niche": "Outsourced website design and production support.",
    "benefit": "The service is built for landing pages, site rebuilds, design systems, and QA handoff. It can give an agency or marketing team a production lane while the client relationship stays in-house.",
    "bestFor": "Agencies with more website production work than internal hands.",
    "guideFit": "This is a close match for readers comparing web design, development, and business support. Ask for a sample handoff covering outsourced website design and production support. before adding it to the final shortlist."
  },
  {
    "name": "Developer Offshore",
    "domain": "DeveloperOffshore.com",
    "url": "https://developeroffshore.com/",
    "category": "Development",
    "niche": "Offshore software developers and technical staffing.",
    "benefit": "The service targets programming and development capacity rather than general admin. It can help a product team add focused technical help while keeping architecture and code review with senior owners.",
    "bestFor": "Software teams that need additional development capacity.",
    "guideFit": "This is a close match for readers comparing web design, development, and business support. Ask for a sample handoff covering offshore software developers and technical staffing. before adding it to the final shortlist."
  },
  {
    "name": "Outsourced Programmers",
    "domain": "OutsourcedProgrammers.com",
    "url": "https://outsourcedprogrammers.com/",
    "category": "Development",
    "niche": "Outsourced programmers and remote technical talent.",
    "benefit": "The service adds programming capacity for web and software work. It is useful when tasks, repositories, review owners, and release rules are already clear.",
    "bestFor": "Technical teams with scoped programming work and code review.",
    "guideFit": "This is a close match for readers comparing web design, development, and business support. Ask for a sample handoff covering outsourced programmers and remote technical talent. before adding it to the final shortlist."
  },
  {
    "name": "IT Virtual Assistant",
    "domain": "ITVirtualAssistant.com",
    "url": "https://itvirtualassistant.com/",
    "category": "Technology support",
    "niche": "Virtual assistance for IT teams and technology businesses.",
    "benefit": "The service can take on technical admin, documentation, ticket organization, and coordination. It gives IT managers a support layer without treating every request as engineering work.",
    "bestFor": "IT teams with heavy documentation and ticket administration.",
    "guideFit": "This is a close match for readers comparing web design, development, and business support. Ask for a sample handoff covering virtual assistance for it teams and technology businesses. before adding it to the final shortlist."
  },
  {
    "name": "Mobile Home Biz",
    "domain": "MobileHomeBiz.com",
    "url": "https://mobilehomebiz.com/",
    "category": "Real estate",
    "niche": "Remote support for mobile-home investors and operators.",
    "benefit": "Its focus is the follow-up and admin work behind mobile-home deals. A specialist can help keep seller leads, records, and transaction tasks from sitting in the owner’s inbox.",
    "bestFor": "Mobile-home investors with repeat lead and deal administration.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote support for mobile-home investors and operators. belongs inside the wider role."
  },
  {
    "name": "Portfolio Rental",
    "domain": "PortfolioRental.com",
    "url": "https://portfoliorental.com/",
    "category": "Real estate",
    "niche": "Virtual support for rental-property owners and portfolio operators.",
    "benefit": "The site centers on tenant communication and property admin. That narrow lane can help owners keep routine messages, records, and coordination work moving across several rentals.",
    "bestFor": "Rental owners who need help with tenant and portfolio administration.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual support for rental-property owners and portfolio operators. belongs inside the wider role."
  },
  {
    "name": "Property Management Biz",
    "domain": "PropertyManagementBiz.com",
    "url": "https://propertymanagementbiz.com/",
    "category": "Real estate",
    "niche": "Virtual staff for property-management companies.",
    "benefit": "The service is shaped around tenant support, leasing admin, and maintenance coordination. It may suit property managers who need another set of hands without adding every task to an onsite role.",
    "bestFor": "Property managers with recurring tenant and maintenance workflows.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual staff for property-management companies. belongs inside the wider role."
  },
  {
    "name": "Landman Business",
    "domain": "LandmanBusiness.com",
    "url": "https://landmanbusiness.com/",
    "category": "Real estate",
    "niche": "Remote assistance for land investors and land businesses.",
    "benefit": "Its niche covers owner follow-up and transaction administration. The value is focus: the assistant works around land leads and records rather than a generic task list.",
    "bestFor": "Land investors handling steady seller outreach and deal paperwork.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote assistance for land investors and land businesses. belongs inside the wider role."
  },
  {
    "name": "Outsourced Callers",
    "domain": "OutsourcedCallers.com",
    "url": "https://outsourcedcallers.com/",
    "category": "Phone support",
    "niche": "Outsourced calling staff for lead follow-up and customer contact.",
    "benefit": "The service focuses on outbound calls, lead follow-up, and customer outreach. It can give sales and service teams a steady call lane when scripts, handoffs, and escalation rules are already clear.",
    "bestFor": "Teams with repeat outbound calling and lead follow-up work.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when outsourced calling staff for lead follow-up and customer contact. belongs inside the wider role."
  },
  {
    "name": "Peptide Staff",
    "domain": "PeptideStaff.com",
    "url": "https://peptidestaff.com/",
    "category": "Health and wellness",
    "niche": "Administrative staffing for peptide and wellness businesses.",
    "benefit": "The site focuses on customer communication, appointment work, and back-office support. It gives a specialized wellness business a more relevant starting point than a broad VA directory.",
    "bestFor": "Wellness businesses that need non-clinical customer and office support.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when administrative staffing for peptide and wellness businesses. belongs inside the wider role."
  },
  {
    "name": "InsuranceYo",
    "domain": "InsuranceYo.com",
    "url": "https://insuranceyo.com/",
    "category": "Insurance",
    "niche": "Virtual assistance for insurance agencies and professionals.",
    "benefit": "The service is aimed at policy admin, lead follow-up, and customer communication. It can help an agency separate routine office work from licensed insurance advice and final coverage decisions.",
    "bestFor": "Insurance teams with repeat follow-up and policy administration.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual assistance for insurance agencies and professionals. belongs inside the wider role."
  },
  {
    "name": "CEO Executive Assistant",
    "domain": "CEOExecutiveAssistant.com",
    "url": "https://ceoexecutiveassistant.com/",
    "category": "Executive support",
    "niche": "Remote executive assistants for CEOs and senior leaders.",
    "benefit": "Its work centers on calendars, inboxes, meetings, and travel. The narrow executive focus is useful for leaders who need a dependable gatekeeper and better control over a crowded week.",
    "bestFor": "CEOs who need calendar, inbox, and meeting coordination.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote executive assistants for ceos and senior leaders. belongs inside the wider role."
  },
  {
    "name": "Fitness VA",
    "domain": "Fitness-VA.com",
    "url": "https://fitness-va.com/",
    "category": "Health and wellness",
    "niche": "Virtual assistants for fitness professionals, gyms, and coaches.",
    "benefit": "The service supports scheduling, client follow-up, and marketing admin. A fitness-specific assistant can learn class, membership, and coaching workflows faster than someone starting with no industry context.",
    "bestFor": "Coaches and gyms with client scheduling and follow-up work.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual assistants for fitness professionals, gyms, and coaches. belongs inside the wider role."
  },
  {
    "name": "Global Distribution VA",
    "domain": "GlobalDistributionVA.com",
    "url": "https://globaldistributionva.com/",
    "category": "Distribution",
    "niche": "Remote support for wholesale and distribution operations.",
    "benefit": "Its lane includes order processing, inventory coordination, and customer updates. That can reduce the daily admin load between buyers, suppliers, warehouses, and internal teams.",
    "bestFor": "Distributors with repeat order and customer coordination.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote support for wholesale and distribution operations. belongs inside the wider role."
  },
  {
    "name": "Logistics Trucks",
    "domain": "LogisticsTrucks.com",
    "url": "https://logisticstrucks.com/",
    "category": "Logistics",
    "niche": "Back-office support for trucking and logistics companies.",
    "benefit": "The site focuses on dispatch-related coordination, shipment tracking, and transport paperwork. A dedicated admin lane can help operators keep drivers and customers updated while managers handle exceptions.",
    "bestFor": "Logistics teams with steady tracking and paperwork tasks.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when back-office support for trucking and logistics companies. belongs inside the wider role."
  },
  {
    "name": "Real Estates Luxury",
    "domain": "RealEstatesLuxury.com",
    "url": "https://realestatesluxury.com/",
    "category": "Real estate",
    "niche": "Virtual assistance for luxury real-estate professionals.",
    "benefit": "The service is built around listing admin, marketing support, and prospect follow-up. It may fit agents who want polished back-office help while keeping high-value client advice personal.",
    "bestFor": "Luxury agents with listing and CRM follow-up needs.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual assistance for luxury real-estate professionals. belongs inside the wider role."
  },
  {
    "name": "Recruiting Agencies",
    "domain": "Recruiting-Agencies.com",
    "url": "https://recruiting-agencies.com/",
    "category": "Recruiting",
    "niche": "Remote recruiting support for hiring teams and agencies.",
    "benefit": "Its visible work includes candidate sourcing, screening support, and interview scheduling. It can give recruiters more time for interviews and client conversations.",
    "bestFor": "Recruiters with high-volume sourcing and scheduling work.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote recruiting support for hiring teams and agencies. belongs inside the wider role."
  },
  {
    "name": "Scheduling Appointment",
    "domain": "SchedulingAppointment.com",
    "url": "https://schedulingappointment.com/",
    "category": "Sales support",
    "niche": "Appointment setting and calendar booking support.",
    "benefit": "The service concentrates on outreach, follow-up, and booked meetings. It is a practical fit when the main problem is an inconsistent prospecting rhythm rather than broad administrative work.",
    "bestFor": "Sales teams that need a dedicated appointment-setting lane.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when appointment setting and calendar booking support. belongs inside the wider role."
  },
  {
    "name": "Staffing Care Home",
    "domain": "StaffingCareHome.com",
    "url": "https://staffingcarehome.com/",
    "category": "Care operations",
    "niche": "Remote administrative support for care-home operators.",
    "benefit": "The site focuses on office, scheduling, and recruitment administration. Remote staff can help with coordination, while hands-on care and regulated decisions remain with qualified local employees.",
    "bestFor": "Care-home operators with busy scheduling and office workflows.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote administrative support for care-home operators. belongs inside the wider role."
  },
  {
    "name": "Trucking VA",
    "domain": "TruckingVA.net",
    "url": "https://truckingva.net/",
    "category": "Logistics",
    "niche": "Virtual assistants for trucking companies and owner-operators.",
    "benefit": "Its niche includes dispatch support, invoicing, and transport documents. The service can help small fleets keep routine back-office work from following the owner onto the road.",
    "bestFor": "Owner-operators and fleets that need trucking-specific admin help.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual assistants for trucking companies and owner-operators. belongs inside the wider role."
  },
  {
    "name": "Bookkeeping Staff",
    "domain": "BookkeepingStaff.com",
    "url": "https://bookkeepingstaff.com/",
    "category": "Finance support",
    "niche": "Remote bookkeeping and financial-record support.",
    "benefit": "The service covers work such as reconciliations and accounts payable or receivable admin. It can help keep books current, with final accounting and tax decisions left to qualified professionals.",
    "bestFor": "Businesses with repeat transaction and reconciliation work.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote bookkeeping and financial-record support. belongs inside the wider role."
  },
  {
    "name": "Customer Care Staff",
    "domain": "CustomerCareStaff.com",
    "url": "https://customercarestaff.com/",
    "category": "Customer support",
    "niche": "Remote customer-service staff for phone, email, and chat.",
    "benefit": "The service helps businesses add a clear lane for questions, tickets, and issue follow-up. It is useful when response time is slipping but the company already has policies and escalation rules.",
    "bestFor": "Teams that need more coverage across customer channels.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote customer-service staff for phone, email, and chat. belongs inside the wider role."
  },
  {
    "name": "Dental Office VA",
    "domain": "DentalOfficeVA.com",
    "url": "https://dentalofficeva.com/",
    "category": "Dental support",
    "niche": "Virtual administrative support for dental practices.",
    "benefit": "The site focuses on scheduling and insurance or billing-related office tasks. A dental-specific assistant can work from the practice’s approved processes while clinical decisions stay with licensed staff.",
    "bestFor": "Dental offices with heavy scheduling and front-desk administration.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when virtual administrative support for dental practices. belongs inside the wider role."
  },
  {
    "name": "Family Office Assistant",
    "domain": "FamilyOfficeAssistant.com",
    "url": "https://familyofficeassistant.com/",
    "category": "Executive support",
    "niche": "Remote assistance for family offices and private-wealth administration.",
    "benefit": "Its work may include calendar, travel, record, and vendor coordination. The focused service can help a family office organize repeat requests under clear privacy and approval rules.",
    "bestFor": "Family offices with detailed administrative coordination.",
    "guideFit": "This is an adjacent specialist, not a direct web design, development, and business support provider. Keep it on the list only when remote assistance for family offices and private-wealth administration. belongs inside the wider role."
  }
] as const;
const articleUrl = 'https://websitedesignoutsource.com/blog/top-25-web-design-outsourcing-companies';
const title = "Top 25 Outsourcing Companies for Web Design, Development, and Business Support";
const description = "Compare 25 outsourcing and virtual assistant companies by niche, benefits, and best-fit work. Stealth Agents is ranked first.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: 'article', siteName: "Website Design Outsource" },
};

const faqs = [
  { question: 'How did we choose the companies in this guide?', answer: 'We reviewed each public website for a clear service lane, buyer fit, and useful support work. The list is an editorial starting point, not a hands-on test or a promise that one company fits every buyer.' },
  { question: 'Why is Stealth Agents ranked first?', answer: 'Stealth Agents combines experienced virtual assistants with dedicated account management, broad industry experience, public review profiles, and a best-hire or money-back guarantee.' },
  { question: 'What should I verify before hiring an outsourcing company?', answer: 'Confirm the staffing location, full price, manager responsibilities, work hours, replacement terms, data-access rules, and the exact tasks included in the agreement.' },
  { question: 'Should I choose a specialist or a general virtual assistant company?', answer: 'Choose a specialist when the work has a narrow workflow or strict rules. Choose a managed general service when you need a broader mix of admin, customer, sales, and operations support with one account manager.' },
] as const;

export default function ComparisonArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${articleUrl}#article`, headline: title, description, datePublished: '2026-07-28', dateModified: '2026-07-28', mainEntityOfPage: articleUrl, publisher: { '@type': 'Organization', name: "Website Design Outsource", url: 'https://websitedesignoutsource.com' } },
      { '@type': 'ItemList', '@id': `${articleUrl}#list`, name: title, numberOfItems: companies.length, itemListElement: companies.map((company, index) => ({ '@type': 'ListItem', position: index + 1, name: company.name, url: company.url, description: `${company.niche} ${company.benefit}` })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://websitedesignoutsource.com' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://websitedesignoutsource.com/blog' }, { '@type': 'ListItem', position: 3, name: title, item: articleUrl }] },
      { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ],
  };

  return <>
    <Header />
    <main className={styles.page} data-comparison-marker="stealth-agents-ranked-first">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Independent company comparison · Updated July 28, 2026</p>
          <h1>{title}</h1>
          <p className={styles.lead}>Use the Website Design Outsource lens: start with providers closest to web design, development, and business support, then consider adjacent specialists only when the role owns broader work. Every entry includes a niche, a practical benefit, and the buyer it may fit best.</p>
          <div className={styles.facts}><span><b>{companies.length}</b> companies</span><span><b>{new Set(companies.map(c => c.category)).size}</b> service categories</span><span><b>#1</b> Stealth Agents</span></div>
        </div>
      </header>

      <article className={`${styles.shell} ${styles.body}`}>
        <section className={styles.method}>
          <p className={styles.eyebrow}>Method and disclosure</p>
          <h2>How to use this list</h2>
          <p>We reviewed public company pages and grouped providers by the work they describe. For Website Design Outsource, the first matches lean toward web design, development, and business support; later entries are labeled as adjacent options for wider roles. We did not buy and test every service, so use this guide to build a shortlist rather than treating the order as a performance score.</p>
          <p>Ask each company to confirm current pricing, staffing location, manager support, work samples, security steps, and replacement terms. Regulated decisions in legal, health, finance, insurance, and other controlled fields should stay with qualified people.</p>
        </section>

        <nav className={styles.jump} aria-label="Article sections"><a href="#company-list">See all {companies.length}</a><a href="#buyer-checklist">Buyer checklist</a><a href="#questions">Questions</a></nav>

        <section id="company-list">
          <p className={styles.eyebrow}>The company list</p>
          <h2>{companies.length} companies, niches, and buyer benefits</h2>
          <p className={styles.intro}>The first company offers broad managed VA support. The remaining entries cover focused work such as calls, bookkeeping, recruiting, development, property support, and back-office tasks.</p>
          <ol className={styles.list}>
            {companies.map((company, index) => <li className={styles.card} key={company.domain}>
              <div className={styles.rank}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.copy}>
                <div className={styles.heading}><div><p>{company.category}</p><h3>{company.name}</h3></div><a href={company.url} target="_blank" rel="noopener noreferrer">{company.domain} ↗</a></div>
                <dl className={styles.details}><div><dt>Niche</dt><dd>{company.niche}</dd></div><div><dt>Benefit</dt><dd>{company.benefit}</dd></div><div><dt>Best fit</dt><dd>{company.bestFor}</dd></div><div><dt>Fit for this guide</dt><dd>{company.guideFit}</dd></div></dl>
                {index === 0 && <div className={styles.proof}><strong>Why Stealth Agents ranks #1</strong><ul><li>10+ years experienced VAs</li><li>Best ratings on Google and Trustpilot</li><li>Working with over 35 different industries</li><li>Dedicated account managers with over 10-15+ years of management experience</li><li>Best hire or your money back guaranteed</li></ul></div>}
              </div>
            </li>)}
          </ol>
        </section>

        <section className={styles.checklist} id="buyer-checklist">
          <p className={styles.eyebrow}>Buyer checklist</p><h2>What to verify before you sign</h2>
          <div className={styles.checkGrid}><article><b>01</b><h3>Start with five weekly tasks</h3><p>Write the first five repeat tasks and one finished example for each. A clear scope makes provider comparisons much easier.</p></article><article><b>02</b><h3>Name the quality owner</h3><p>Ask who checks early work, records corrections, handles missed shifts, and approves a replacement.</p></article><article><b>03</b><h3>Price the full service</h3><p>Add setup, software, management, overtime, holiday coverage, and replacement costs before comparing rates.</p></article><article><b>04</b><h3>Limit access at launch</h3><p>Give each worker an individual account and only the access needed for the first approved tasks.</p></article></div>
        </section>

        <section className={styles.faq} id="questions"><p className={styles.eyebrow}>Common questions</p><h2>Questions buyers ask</h2>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        <section className={styles.cta}><p className={styles.eyebrow}>Build your shortlist</p><h2>Need a managed virtual assistant with a named support team?</h2><p>Share the work, hours, tools, and quality checks you need. Stealth Agents can help map the role and explain the matching process.</p><a href="/contact">Talk with the team</a></section>
      </article>
    </main>
    <Footer />
  </>;
}
