export type ArticleSource = {
  id: number;
  name: string;
  url: string;
  note: string;
};

export const philippinesAccessibleHandoff = {
  slug: 'philippines-website-design-outsourcing-accessible-handoff',
  title: 'Philippines Website Design Outsourcing: An Accessible Handoff Plan',
  excerpt: 'A practical way to brief, review, and take ownership of website design work completed by a Philippines-based team.',
  published: '2026-07-25',
  revision: '2026-07-25-accessible-handoff-v1',
  banners: [
    {
      label: 'Brief check',
      title: 'Start with one page and one owner',
      body: 'Give the team a real page, a clear goal, and one person who can approve the work.',
      href: '/services/website-ui-design',
      cta: 'See website UI design',
    },
    {
      label: 'Access check',
      title: 'Make accessibility part of the brief',
      body: 'Ask for keyboard, contrast, label, alt text, and zoom checks before the page reaches final review.',
      href: '/services/website-accessibility-remediation',
      cta: 'Review accessibility support',
    },
    {
      label: 'Launch check',
      title: 'Keep the final approval with your team',
      body: 'Your owner should approve the page, source files, access list, and launch notes before anything goes live.',
      href: '/contact',
      cta: 'Plan the handoff',
    },
  ],
  sources: [
    {
      id: 1,
      name: 'World Bank: Individuals using the Internet, Philippines',
      url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2023&per_page=1',
      note: 'The World Bank data record reports 77.86699677% for the Philippines in 2023. The article rounds this to 77.9%.',
    },
    {
      id: 2,
      name: 'World Health Organization: Disability fact sheet',
      url: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health',
      note: 'The March 7, 2023 fact sheet says an estimated 1.3 billion people, or 16% of the world population, experience a significant disability.',
    },
    {
      id: 3,
      name: 'WebAIM: The WebAIM Million',
      url: 'https://webaim.org/projects/million/',
      note: 'The study page reports that 94.8% of the one million tested homepages had detected WCAG failures in 2025, with 51 detected errors per page.',
    },
    {
      id: 4,
      name: 'W3C Web Accessibility Initiative: Introduction to web accessibility',
      url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
      note: 'Source for the exact Tim Berners-Lee quote and the plain explanation of web accessibility.',
    },
    {
      id: 5,
      name: 'W3C: How to meet WCAG 2.2',
      url: 'https://www.w3.org/WAI/WCAG22/quickref/',
      note: 'A filterable reference for WCAG 2.2 success criteria and techniques used during page review.',
    },
    {
      id: 6,
      name: 'Google Search Central: SEO starter guide',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      note: 'Google explains descriptive alt text, logical site organization, and useful link text.',
    },
  ],
  faqs: [
    {
      question: 'What should I outsource first to a Philippines web design team?',
      answer: 'Start with one repeatable page type that already has approved copy, brand rules, and a working example. A landing page, service page, or blog layout is easier to judge than a full site redesign with an open brief.',
    },
    {
      question: 'Who should approve the work?',
      answer: 'Name one person on your team who can accept the layout, content order, accessibility checks, and final files. Other people may comment, but one owner should decide when the page is ready.',
    },
    {
      question: 'Does a WCAG check guarantee that a site is accessible?',
      answer: 'No. Automated checks can find many common problems, but they do not replace keyboard review, zoom checks, screen reader testing, and feedback from people with disabilities. Use WCAG 2.2 as a baseline, then test the real page.',
    },
    {
      question: 'What files should be included in the handoff?',
      answer: 'Ask for editable design files, image exports, font and license notes, page copy, component notes, source code or CMS records, redirect notes, and a list of accounts that still have access. Keep these in a workspace your company owns.',
    },
  ],
} as const;

export const philippinesRedesignMigration = {
  slug: 'philippines-website-redesign-outsourcing-migration-checklist',
  title: 'Philippines Website Redesign Outsourcing: A Safe Migration Checklist',
  excerpt: 'A plain plan for moving pages, search signals, accounts, and approvals when a Philippines-based team helps redesign an existing website.',
  published: '2026-07-28',
  revision: '2026-07-28-redesign-migration-v1',
  banners: [
    { label: 'Map first', title: 'Keep every useful URL accounted for', body: 'Match each old page to a kept page, a new destination, or a clear removal decision. Finish the map before design work begins.', href: '/services/website-content-migration', cta: 'Review migration support' },
    { label: 'Test before launch', title: 'Review the working site, not a screenshot', body: 'Check redirects, forms, keyboard use, and mobile layouts on a private release candidate. Check the search files there too.', href: '/services/website-accessibility-remediation', cta: 'Check accessibility support' },
    { label: 'Owner signoff', title: 'Keep launch approval inside your company', body: 'Your owner should accept the URL map, access list, and recovery plan. Public checks should pass before the owner closes the move.', href: '/contact', cta: 'Plan the redesign handoff' },
  ],
  sources: [
    { id: 1, name: 'World Bank: Individuals using the Internet, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2023&per_page=1', note: 'The World Bank record, last updated July 13, 2026, reports 77.86699677% for the Philippines in 2023. The article rounds it to 77.9%.' },
    { id: 2, name: 'WebAIM: The WebAIM Million 2026', url: 'https://webaim.org/projects/million/', note: 'The February 2026 study reports detected WCAG failures on 95.9% of one million homepages, 56,114,377 distinct errors, and an average of 56.1 errors per page.' },
    { id: 3, name: 'Google Search Central: Site moves with URL changes', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes', note: 'Google documents URL mapping, permanent server-side redirects, canonical updates, sitemap submission, and Search Console checks for site moves.' },
    { id: 4, name: 'W3C Web Accessibility Initiative: Introduction to web accessibility', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', note: 'Source for the exact Tim Berners-Lee quote and the explanation that accessible websites work across different abilities and situations.' },
    { id: 5, name: 'NIST: Least privilege', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'NIST defines least privilege as limiting access to the minimum needed to complete assigned tasks.' },
    { id: 6, name: 'Google Search Central: Core Web Vitals report', url: 'https://support.google.com/webmasters/answer/9205520', note: 'Google explains how Search Console groups URL performance as Poor, Need improvement, or Good using field data.' },
  ],
  faqs: [
    { question: 'What should a Philippines website redesign team receive first?', answer: 'Give the team a crawl or page list, the current sitemap, analytics landing-page notes, approved brand rules, a list of forms and integrations, and one owner for final decisions. Add a URL map before anyone removes or renames a page.' },
    { question: 'Should the redesign change every URL?', answer: 'No. Keep useful URLs when the page purpose is still the same. When a URL must change, map it to the closest useful destination and test the permanent redirect on the working site.' },
    { question: 'Who should control the launch?', answer: 'A named person inside your company should approve the launch window, DNS or hosting change, redirect map, rollback decision, and public checks. The outside team can prepare and test the release, but it should not make the final business decision alone.' },
    { question: 'How long should redirects stay in place?', answer: 'Keep permanent redirects for as long as old URLs may still receive visits or links. Review logs and Search Console after launch rather than removing redirects on an arbitrary date.' },
  ],
} as const;

export const philippinesMobileQa = {
  slug: 'philippines-website-design-outsourcing-mobile-qa-signoff-sheet',
  title: 'Philippines Website Design Outsourcing: A Mobile QA Signoff Sheet',
  excerpt: 'A task-based signoff sheet for checking phone layouts, forms, accessibility, search details, and owner approval with a Philippines-based website team.',
  published: '2026-07-28',
  revision: '2026-07-28-mobile-qa-signoff-v1',
  banners: [
    { label: 'Test set', title: 'Choose real visitor tasks before review', body: 'Name the page, browser, phone view, action, expected result, and owner. The team can then repeat the same test after each fix.', href: '/services/website-ui-design', cta: 'Review UI design support' },
    { label: 'Access check', title: 'Test keyboard, zoom, labels, and errors', body: 'A working mobile page needs more than a tidy screenshot. Use the page and record every failed task while fixes are still easy.', href: '/services/website-accessibility-remediation', cta: 'Check accessibility support' },
    { label: 'Owner signoff', title: 'Close the job on the public page', body: 'Your owner should repeat the main phone task, confirm the expected content, and save the final signoff sheet with the release note.', href: '/contact', cta: 'Plan the QA handoff' },
  ],
  sources: [
    { id: 1, name: 'Statcounter Global Stats: Desktop vs mobile vs tablet market share, Philippines', url: 'https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/philippines', note: 'The June 2026 page reports desktop at 54.04%, mobile at 44.99%, and tablet at 0.97% of measured page views in the Philippines, based on more than 3 billion monthly page views.' },
    { id: 2, name: 'World Bank: Individuals using the Internet, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2023&per_page=1', note: 'The World Bank record, last updated July 13, 2026, reports 77.86699677% for the Philippines in 2023. The article rounds this to 77.9%.' },
    { id: 3, name: 'WebAIM: The WebAIM Million 2026', url: 'https://webaim.org/projects/million/', note: 'The February 2026 study reports detected WCAG failures on 95.9% of one million homepages, 56,114,377 distinct errors, 56.1 errors per page, and a 10.1% increase in average errors from 2025.' },
    { id: 4, name: 'W3C Web Accessibility Initiative: Introduction to web accessibility', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/', note: 'Source for the exact Tim Berners-Lee quotation and the explanation of web access across different abilities and situations.' },
    { id: 5, name: 'Google Search Central: Mobile site and mobile-first indexing best practices', url: 'https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing', note: 'Google explains that it uses the mobile version of site content for indexing and ranking and documents content, metadata, image, and structured-data parity checks.' },
  ],
  faqs: [
    { question: 'What phone sizes should a website design team test?', answer: 'Start with the device and browser records from the current site. When those records are missing, use one narrow phone view, one wider phone view, and one desktop view, then add Safari, Chrome, keyboard, zoom, slow loading, and failed-form checks.' },
    { question: 'Who should approve a mobile website page?', answer: 'Name one person inside your company to approve the message, form destination, account access, and launch. The outside team can build, test, and fix the page, but it should not make the final business decision alone.' },
    { question: 'Is a screenshot enough for mobile QA?', answer: 'No. The reviewer should open the menu, follow links, submit the form, trigger errors, zoom the page, use a keyboard, and check wide tables or graphics. Record the exact steps so another person can repeat the result.' },
    { question: 'What should happen after a mobile defect is fixed?', answer: 'A different reviewer should rerun the failed task and one nearby task on the same test setup. Keep the fix and retest result on the original defect record, then include the closed sheet with the release note.' },
  ],
} as const;
