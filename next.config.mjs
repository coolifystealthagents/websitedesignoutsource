/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://cdn.oncehub.com https://js.oncehub.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://leads.stealthagents.com https://acrtracking.stealthagents.us https://*.oncehub.com; frame-src https://go.oncehub.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const retiredBlogSlugs = [
  'cultural-differences-in-remote-teams',
  'hiring-freelance-web-designers-vs-agencies',
  'negotiating-web-design-contracts',
  'onboarding-new-web-design-team',
  'outsourced-website-design-accessibility-brief',
  'outsourced-website-design-accessibility-test-plan',
  'outsourced-website-design-animation-spec',
  'outsourced-website-design-checkout-flow-brief',
  'outsourced-website-design-component-inventory',
  'outsourced-website-design-content-qa-handoff',
  'outsourced-website-design-date-time-input-brief',
  'outsourced-website-design-error-message-guide',
  'outsourced-website-design-form-autocomplete-brief',
  'outsourced-website-design-form-validation-brief',
  'outsourced-website-design-handoff-acceptance-log',
  'outsourced-website-design-launch-readiness',
  'outsourced-website-design-live-chat-handoff',
  'outsourced-website-design-metadata-brief',
  'outsourced-website-design-notification-permission-brief',
  'outsourced-website-design-privacy-consent-interface-brief',
  'outsourced-website-design-project-kickoff-agenda',
  'outsourced-website-design-reduced-motion-brief',
  'outsourced-website-design-responsive-content-priority-brief',
  'outsourced-website-design-site-search-brief',
  'outsourced-website-design-sitemap-review',
  'outsourced-website-design-third-party-integration-brief',
  'outsourced-website-design-third-party-script-inventory',
  'outsourced-website-design-third-party-script-register',
  'outsourced-website-design-utm-link-handoff',
  'project-management-for-outsourced-projects',
  'red-flags-outsourcing-partners',
  'roi-of-professional-web-design',
  'understanding-web-design-pricing-models',
  'web-design-trends-2024',
  'website-content-qa-outsourced-production',
  'website-design-acceptance-criteria',
  'website-design-access-control-matrix',
  'website-design-accessibility-checklist',
  'website-design-carousel-review',
  'website-design-content-hierarchy-guide',
  'website-design-focus-order-review',
  'website-design-handoff-checklist',
  'website-design-heading-hierarchy-brief',
  'website-design-image-delivery-checklist',
  'website-design-image-license-handoff-checklist',
  'website-design-keyboard-navigation-review',
  'website-design-microcopy-review',
  'website-design-navigation-label-workshop',
  'website-design-performance-budget',
  'website-design-privacy-review-checklist',
  'website-design-responsive-qa-checklist',
  'website-ownership-handoff',
];
const retiredResearchSlugs = [
  'multilingual-typography-website-outsourcing',
  'website-content-migration-findability-2026',
  'website-release-notes',
];
const contactAliases = ['/contact', '/get-a-quote', '/request-a-quote', '/schedule-consultation', '/start-your-project'];
const serviceAliases = [
  ['/services/ecommerce-web-design', '/services/shopify-store-design'],
  ['/services/ecommerce-website-development', '/services/shopify-store-design'],
  ['/services/seo', '/services/core-web-vitals-optimization'],
  ['/services/website-design', '/services/website-ui-design'],
  ['/services/website-development', '/services/nextjs-website-development'],
  ['/agency-partnerships', '/services'],
  ['/our-process', '/services'],
  ['/small-business-solutions', '/services'],
];

const nextConfig = {
  async redirects() {
    return [
      ...contactAliases.map((source) => ({ source, destination: '/contact-us', permanent: true })),
      ...retiredBlogSlugs.map((slug) => ({ source: `/blog/${slug}`, destination: '/blog', permanent: true })),
      ...retiredResearchSlugs.map((slug) => ({ source: `/research/${slug}`, destination: '/research', permanent: true })),
      ...serviceAliases.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/logo.svg' }];
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
