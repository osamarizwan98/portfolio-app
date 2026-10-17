const repo = (name) => `https://github.com/osamarizwan98/${name}`;

export const flagship = {
  label: "Flagship · Shopify app · Launched Jun 2026",
  title: "SmartBundle",
  description:
    "Product bundles, cart offers, quantity breaks and post-purchase upsells from one app, with flexible discounts and storefront widgets merchants can style to match their store.",
  bullets: [
    "Fixed, percentage, BOGO and quantity discounts",
    "Upsells on product, cart and after purchase",
    "Offer styling plus click, conversion and revenue tracking",
    "Hides or updates offers when products become unavailable",
  ],
  role: "Designed, built, and published end to end.",
  stack: ["Remix", "React", "Shopify GraphQL"],
  cta: "View on App Store",
  screens: [
    "Dashboard",
    "Tiered volume discount",
    "Cart bundle nudge",
    "Frequently bought together",
    "Style controls",
    "Post-purchase upsell",
  ],
};

export const clientWork = [
  {
    id: "forrist",
    meta: "Shopify · Client work",
    source: "Fiverr",
    title: "Forrist: upgrade to",
    accent: "Online Store 2.0",
    description: "Moved an existing store onto sections-everywhere architecture.",
    result: "Delivered as a theme update merchants can manage from the theme editor.",
    pills: ["Liquid", "OS 2.0", "Sections"],
  },
  {
    id: "rug-store",
    meta: "Shopify · Client work",
    source: "Fiverr portfolio",
    title: "Rug & carpet store,",
    accent: "custom build",
    description: "New pages, redesigned sections and added features for an e-commerce rug business.",
    result: "Custom pages and sections built to match the brand, editable in the theme editor.",
    pills: ["Liquid", "JavaScript", "Theme sections"],
  },
];

export const labTiles = [
  {
    name: "ghost-ai",
    year: "2026",
    description: "Next.js (App Router) and TypeScript application.",
    href: repo("ghost-ai"),
    linkLabel: "GitHub",
  },
  {
    name: "sportz-websocket",
    year: "2026",
    description: "Real-time WebSocket project in JavaScript.",
    href: repo("sportz-websocket"),
    linkLabel: "GitHub",
  },
  {
    name: "portfolio-app",
    year: "2026",
    description: "Web app deployed on Vercel.",
    href: "https://portfolio-app-nu-rosy.vercel.app",
    linkLabel: "Live",
  },
];

export const labRows = [
  { year: "2026", name: "ghost-ai", lang: "TypeScript" },
  { year: "2026", name: "sportz-websocket", lang: "JavaScript" },
  { year: "2026", name: "trpc-apis", lang: "TypeScript" },
  { year: "2026", name: "vibe-code-editor", lang: "TypeScript" },
  { year: "2025", name: "travel-dashboard-app", lang: "TypeScript" },
  { year: "2024", name: "hydrogen-quickstart", lang: "JavaScript" },
].map((row) => ({ ...row, href: repo(row.name) }));
