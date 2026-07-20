export const site = {
  "domain": "WebsiteDesignOutsource.com",
  "slug": "websitedesignoutsource",
  "brand": "Website Design Outsource",
  "primary": "website design outsource",
  "audience": "businesses outsourcing website design, updates, and production work",
  "angle": "design briefs, page production, QA, SEO handoff, and revision cycles",
  "style": "Creative studio grid",
  "dark": "#3f0716",
  "color": "#e11d48",
  "accent": "#0891b2",
  "heroImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "alt": "web designer building landing page on large monitor",
  "badge": "Design pod"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using website design outsource with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using website design outsource with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using website design outsource with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using website design outsource with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;
export const blogPosts = [
  {
    "slug": "website-design-outsource-planning",
    "title": "Website Design Outsource: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "website-design-outsource-tasks-to-outsource",
    "title": "Website Design Outsource: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "website-design-outsource-provider-questions",
    "title": "Website Design Outsource: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "website-design-outsource-onboarding-checklist",
    "title": "Website Design Outsource: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const blogDetails = {
  'website-design-outsource-provider-questions': {
    shortAnswer: 'Ask how the provider protects access, reviews design quality, fixes missed briefs, and hands over files. A nice portfolio helps, but the daily handoff rules matter more once work starts.',
    answerRows: [
      {
        question: 'Who owns the source files?',
        weak: '"You get everything after the project."',
        useful: '"You get Figma, image exports, font notes, page copy, and handoff links in your workspace before final signoff."',
      },
      {
        question: 'How do you handle revisions?',
        weak: '"We include unlimited edits."',
        useful: '"We collect feedback in one board, confirm what is in scope, and show the owner what changed before the next page starts."',
      },
      {
        question: 'How is quality checked?',
        weak: '"Our team reviews everything."',
        useful: '"We check mobile layout, forms, page speed basics, SEO fields, links, and brand rules before sending the page back."',
      },
      {
        question: 'How do you protect logins?',
        weak: '"You can send us the password."',
        useful: '"Use role-based access, a password manager, and remove access when the work is done. No shared owner login."',
      },
    ],
    scriptIntro: 'Use this plain script when a sales call starts to sound too broad.',
    callScript: [
      '"Can you walk me through the first page you would take from brief to live review?"',
      '"What files and links will we own if we stop after the pilot?"',
      '"Who checks mobile, forms, metadata, accessibility basics, and broken links before handoff?"',
      '"What should we never give your team direct access to?"',
      '"If the first draft misses the brief, what happens in the next 48 hours?"',
    ],
    checks: [
      {
        title: 'Brief quality',
        body: 'Give one real page, one target customer, three competitor links, and the conversion action. If they cannot repeat the brief back in plain words, pause.',
      },
      {
        title: 'Access control',
        body: 'Use named accounts and the least access needed. NIST and the FTC both push simple access rules for small businesses.',
      },
      {
        title: 'SEO handoff',
        body: 'Ask for titles, meta descriptions, headings, redirects, image alt text, and index checks. Google says helpful pages need clear structure and crawlable links.',
      },
      {
        title: 'Accessibility basics',
        body: 'Ask how they check contrast, keyboard use, alt text, labels, and readable layouts. WCAG is the right baseline, even for small sites.',
      },
    ],
    sources: [
      {
        name: 'Google Search Central SEO starter guide',
        url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
        note: 'Used for crawlable links, titles, headings, and helpful page basics.',
      },
      {
        name: 'W3C Web Accessibility Initiative WCAG overview',
        url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
        note: 'Used for the accessibility baseline in design QA.',
      },
      {
        name: 'NIST Small Business Cybersecurity Corner',
        url: 'https://www.nist.gov/itl/smallbusinesscyber',
        note: 'Used for access-control and small business security checks.',
      },
      {
        name: 'FTC Cybersecurity for Small Business',
        url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity',
        note: 'Used for simple password, access, and vendor safety rules.',
      },
    ],
    faqs: [
      {
        question: 'Should I hire a freelancer or a managed design team?',
        answer: 'Use a freelancer when the work is small and you can review it closely. Use a managed team when you need coverage, QA, backup, and steady page production.',
      },
      {
        question: 'What should be in the first website design outsource brief?',
        answer: 'Include the page goal, audience, brand rules, examples, must-have sections, tool access, review owner, and launch checklist.',
      },
      {
        question: 'Should I give full website admin access on day one?',
        answer: 'No. Start with the lowest access that lets the person do the task. Add access only when the work and review process are stable.',
      },
    ],
  },
} as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
