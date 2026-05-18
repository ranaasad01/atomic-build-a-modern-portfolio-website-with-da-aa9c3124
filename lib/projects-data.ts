export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  highlights: string[];
}

export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  tags: string[];
  doi?: string;
  pdfUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live data visualization, team management, and customizable widgets.",
    longDescription:
      "Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It provides real-time insights into user behavior, revenue metrics, and team performance. The dashboard features a drag-and-drop widget system, allowing teams to customize their view and focus on the metrics that matter most to their business.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Tailwind CSS"],
    category: "Full-Stack",
    image: "https://www.cisco.com/c/dam/en/us/td/i/500001-600000/500001-510000/adoc-ndi-641/ta-tcp.jpg",
    liveUrl: "https://nexus-dashboard.demo",
    githubUrl: "https://github.com/alexmorgan/nexus-dashboard",
    featured: true,
    year: 2024,
    highlights: [
      "Real-time data streaming with WebSockets",
      "Drag-and-drop widget customization",
      "Multi-tenant architecture with row-level security",
      "Export reports as PDF or CSV",
    ],
  },
  {
    slug: "luminary-ai",
    title: "Luminary AI",
    description:
      "An AI-powered writing assistant that helps content creators draft, edit, and optimize articles with GPT-4 integration.",
    longDescription:
      "Luminary AI is a next-generation writing tool that leverages the power of GPT-4 to help content creators produce high-quality articles faster. It features intelligent suggestions, tone adjustment, SEO optimization hints, and a distraction-free writing environment. The app integrates seamlessly with popular CMS platforms.",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "Stripe"],
    category: "AI/ML",
    image: "https://mma.prnewswire.com/media/2559732/Luminary_AI_Onboarding.jpg?p=facebook",
    liveUrl: "https://luminary-ai.demo",
    githubUrl: "https://github.com/alexmorgan/luminary-ai",
    featured: true,
    year: 2024,
    highlights: [
      "GPT-4 powered content generation",
      "Real-time grammar and style suggestions",
      "SEO score analysis and keyword optimization",
      "One-click publish to WordPress and Ghost",
    ],
  },
  {
    slug: "orbit-commerce",
    title: "Orbit Commerce",
    description:
      "A headless e-commerce platform with a blazing-fast storefront, inventory management, and multi-currency support.",
    longDescription:
      "Orbit Commerce is a modern headless e-commerce solution designed for performance and flexibility. Built with Next.js and a custom GraphQL API, it delivers sub-second page loads and a seamless shopping experience. The platform supports multiple currencies, advanced inventory tracking, and integrates with major payment gateways.",
    tags: ["Next.js", "GraphQL", "Stripe", "Redis", "Cloudinary", "TypeScript"],
    category: "E-Commerce",
    image: "https://www.adorbit.com/wp-content/uploads/2023/07/ad-orbit-email-automation.png",
    liveUrl: "https://orbit-commerce.demo",
    githubUrl: "https://github.com/alexmorgan/orbit-commerce",
    featured: true,
    year: 2023,
    highlights: [
      "Sub-100ms page loads with ISR",
      "Multi-currency and multi-language support",
      "Advanced inventory and order management",
      "Stripe and PayPal payment integration",
    ],
  },
  {
    slug: "pulse-social",
    title: "Pulse Social",
    description:
      "A developer-focused social platform for sharing code snippets, projects, and technical articles with syntax highlighting.",
    longDescription:
      "Pulse Social is a community platform built specifically for developers. It allows users to share code snippets with beautiful syntax highlighting, post technical articles, and discover interesting open-source projects. The platform features a reputation system, code execution sandbox, and GitHub integration.",
    tags: ["Next.js", "Supabase", "Prisma", "Tailwind CSS", "Shiki", "TypeScript"],
    category: "Social",
    image: "https://pulseorg.us/wp-content/uploads/2024/07/cropped-de3214b2-32ff-449e-882d-38bd1d26b08d.jpeg",
    liveUrl: "https://pulse-social.demo",
    githubUrl: "https://github.com/alexmorgan/pulse-social",
    featured: false,
    year: 2023,
    highlights: [
      "Syntax highlighting for 100+ languages",
      "In-browser code execution sandbox",
      "GitHub OAuth and repository import",
      "Real-time notifications and messaging",
    ],
  },
  {
    slug: "terra-maps",
    title: "Terra Maps",
    description:
      "An interactive geospatial visualization tool for exploring environmental data, climate trends, and geographic insights.",
    longDescription:
      "Terra Maps is a powerful geospatial data visualization platform that makes complex environmental and geographic data accessible to everyone. Built with Mapbox GL and D3.js, it renders millions of data points smoothly and allows users to create custom map layers, apply filters, and export visualizations.",
    tags: ["React", "Mapbox GL", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Data Viz",
    image: "https://terratech.app/img/undraw_connected-world_anke.png",
    liveUrl: "https://terra-maps.demo",
    githubUrl: "https://github.com/alexmorgan/terra-maps",
    featured: false,
    year: 2023,
    highlights: [
      "Renders 10M+ data points with WebGL",
      "Custom layer builder with filters",
      "Climate trend analysis tools",
      "Export maps as SVG or PNG",
    ],
  },
  {
    slug: "codeflow-ide",
    title: "CodeFlow IDE",
    description:
      "A browser-based collaborative IDE with real-time pair programming, AI code completion, and integrated terminal.",
    longDescription:
      "CodeFlow IDE brings the power of a full development environment to the browser. It supports real-time collaboration with multiple cursors, AI-powered code completion, and an integrated terminal powered by WebContainers. Teams can spin up isolated development environments in seconds without any local setup.",
    tags: ["React", "Monaco Editor", "WebSockets", "WebContainers", "Node.js", "Redis"],
    category: "Developer Tools",
    image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F01r7oyup0i9wgd415te8.png",
    liveUrl: "https://codeflow-ide.demo",
    githubUrl: "https://github.com/alexmorgan/codeflow-ide",
    featured: false,
    year: 2022,
    highlights: [
      "Real-time multi-cursor collaboration",
      "AI code completion with context awareness",
      "Integrated terminal with WebContainers",
      "Support for 20+ programming languages",
    ],
  },
];

export const categories = ["All", "Full-Stack", "AI/ML", "E-Commerce", "Social", "Data Viz", "Developer Tools"];

export const publications: Publication[] = [
  {
    slug: "scalable-realtime-architectures",
    title: "Scalable Real-Time Architectures for Modern Web Applications",
    authors: ["Alex Morgan", "Sarah Chen", "James Patel"],
    journal: "Journal of Web Engineering & Technology",
    year: 2024,
    abstract:
      "This paper explores architectural patterns for building highly scalable real-time web applications. We examine WebSocket-based communication, event-driven microservices, and CRDT-based conflict resolution strategies. Our benchmarks demonstrate up to 10x throughput improvements over traditional polling approaches, with sub-50ms latency at 100,000 concurrent connections.",
    tags: ["WebSockets", "Microservices", "Real-Time", "Scalability", "CRDT"],
    doi: "10.1234/jwet.2024.001",
    pdfUrl: "https://example.com/papers/scalable-realtime.pdf",
    featured: true,
  },
  {
    slug: "llm-code-completion-study",
    title: "Evaluating Large Language Models for Context-Aware Code Completion in Production IDEs",
    authors: ["Alex Morgan", "Priya Nair"],
    journal: "ACM Transactions on Software Engineering and Methodology",
    year: 2023,
    abstract:
      "We present a comprehensive evaluation of six large language models applied to real-world code completion tasks across five programming languages. Our study introduces a novel benchmark suite of 12,000 curated completion scenarios and finds that fine-tuned models with repository-level context outperform zero-shot GPT-4 by 18% on functional correctness. We also analyze latency trade-offs for production deployment.",
    tags: ["LLM", "Code Completion", "AI", "Benchmarking", "Developer Tools"],
    doi: "10.1145/tosem.2023.0892",
    pdfUrl: "https://example.com/papers/llm-code-completion.pdf",
    featured: true,
  },
  {
    slug: "headless-ecommerce-performance",
    title: "Performance Implications of Headless Commerce: A Comparative Analysis of Rendering Strategies",
    authors: ["Alex Morgan", "Liu Wei", "Nina Okafor"],
    journal: "International Journal of Electronic Commerce Research",
    year: 2023,
    abstract:
      "Headless commerce architectures decouple the frontend presentation layer from backend commerce services, promising greater flexibility and performance. This paper conducts a controlled comparative study of four rendering strategies — SSR, SSG, ISR, and CSR — across three major headless commerce platforms. Our findings show that ISR-based storefronts achieve median Largest Contentful Paint (LCP) values 62% lower than fully client-rendered alternatives, directly correlating with measurable conversion rate improvements.",
    tags: ["Headless Commerce", "Next.js", "ISR", "Web Performance", "E-Commerce"],
    doi: "10.5678/ijecr.2023.0441",
    pdfUrl: "https://example.com/papers/headless-ecommerce-performance.pdf",
    featured: false,
  },
];