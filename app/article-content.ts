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
