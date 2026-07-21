/* =============================================================
   Site copy — single source of truth (placeholder brand "Quantly").
   Structure mirrors the Ternic template; content is original,
   written for a no-code algorithmic trading product.
   ============================================================= */

export const brand = {
  name: "Quantly",
  tagline: "No-code algorithmic trading",
};

export const nav = {
  links: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Get Started", href: "#" },
  login: { label: "Log in", href: "#" },
};

export const hero = {
  eyebrow: "The New Era of Algo Trading",
  titleLead: "Automate Every Trade",
  titleMuted: "No Code, No Guesswork.",
  subtitle:
    "Build, backtest, and deploy algorithmic strategies with AI-driven insights, a visual builder, and crystal-clear pricing.",
  cta: "Start Trading Now",
  demo: "Book a Demo",
};

export const logos = {
  title: "Trusted by more than",
  highlight: "10,000+",
  titleAfter: "traders and teams",
  // Placeholder wordmarks until real partner logos are supplied.
  items: ["Binance", "Coinbase", "Kraken", "Bybit", "OKX", "Alpaca", "Kucoin"],
};

export const features = {
  eyebrow: "Powerful & easy to use",
  titleLead: "A powerful toolkit",
  titleMuted: "for traders.",
  subtitle:
    "No noise. No clutter. Just the features that make every trade smarter, safer, and fully automated.",
  items: [
    {
      icon: "BrainCircuit",
      title: "AI That Learns You",
      desc: "Personalised strategy suggestions built from your own trading patterns.",
      large: true,
      featured: true,
    },
    {
      icon: "ShieldCheck",
      title: "Bank-Grade Security",
      desc: "End-to-end encryption, cold storage, and always-on protection for your funds.",
      large: true,
    },
    {
      icon: "Blocks",
      title: "Visual Strategy Builder",
      desc: "Drag-and-drop blocks to design entry, exit, and risk logic — no code required.",
    },
    {
      icon: "SlidersHorizontal",
      title: "Smart Risk Controls",
      desc: "Live risk alerts with automated stop-loss and position sizing on every strategy.",
    },
    {
      icon: "BadgeDollarSign",
      title: "Zero Hidden Fees",
      desc: "Total transparency in every trade. Keep 100% of what your strategies earn.",
    },
  ],
};

export const steps = {
  titleLead: "Start trading in three",
  titleMuted: "simple steps.",
  subtitle: "We've stripped away the noise — automated trading, reimagined for clarity.",
  cta: "Start Trading Now",
  items: [
    {
      icon: "UserPlus",
      title: "Sign Up",
      desc: "Create your account in under 2 minutes. No long forms, no delays — just verify and you're in.",
    },
    {
      icon: "Link2",
      title: "Connect Exchange",
      desc: "Securely link your exchange with read/trade-only keys. Your funds never leave your account.",
    },
    {
      icon: "Rocket",
      title: "Deploy Strategy",
      desc: "Backtest, then flip to live. Quantly executes your strategy 24/7 while you sleep.",
    },
  ],
};

export const showcase = {
  titleLead: "A modern & smarter",
  titleMuted: "trading experience.",
  cta: "Start Trading Now",
  items: [
    {
      icon: "LayoutDashboard",
      title: "All-in-One Dashboard",
      desc: "Monitor every asset, open position, and running strategy from one clean view built for speed.",
      tags: ["All-in-One View", "Customizable Layout"],
      mockup: "dashboard",
    },
    {
      icon: "Activity",
      title: "Real-Time Market Data",
      desc: "Millisecond price feeds across every connected venue power decisions you can trust.",
      tags: ["Live Price Updates", "Market Alerts & Signals"],
      mockup: "allocation",
    },
    {
      icon: "LineChart",
      title: "Instant Backtesting",
      desc: "Validate any strategy against years of historical data before risking a single dollar.",
      tags: ["10+ Years History", "Walk-Forward Testing"],
      mockup: "backtest",
    },
  ],
};

export const benefits = {
  titleLead: "Smarter trading starts",
  titleMuted: "with insight.",
  subtitle:
    "Discover a platform that automates strategies, manages risk, and helps you trade like a pro — powered by AI and real-time analytics.",
  ctaPrimary: "Start Trading Now",
  ctaSecondary: "Book a Demo",
  exploreLabel: "What you'll explore in the demo",
  items: [
    {
      title: "AI Trade Insights",
      desc: "See how our algorithms predict optimal entry and exit points.",
    },
    {
      title: "Smart Risk Controls",
      desc: "Experience live risk management and stop-loss automation.",
    },
    {
      title: "Bank-Grade Security",
      desc: "Learn how your funds and data stay protected 24/7.",
    },
  ],
};

export const slider = {
  titleLead: "Everything you need to",
  titleMuted: "trade crypto.",
  slides: [
    {
      icon: "Zap",
      title: "Fast Order Execution",
      desc: "Place trades confidently with low-latency execution that responds instantly to market moves.",
      cta: "Start Trading Now",
    },
    {
      icon: "Layers",
      title: "Multi-Asset Trading",
      desc: "Trade crypto, forex, and indices from one account with unified risk controls and reporting.",
      cta: "Start Trading Now",
    },
    {
      icon: "LineChart",
      title: "Market Insights",
      desc: "AI-surfaced signals and analytics help you spot opportunities before the rest of the market.",
      cta: "Start Trading Now",
    },
  ],
};

export const integrations = {
  titleLead: "Built on trusted",
  titleMuted: "networks.",
  subtitle:
    "We integrate with leading exchanges and chains to give you deep liquidity, faster trades, and global reach — all from one dashboard.",
  cta: "Start Trading Now",
  nodesLeft: ["Globe", "Coins", "ShieldCheck", "Layers", "Zap"],
  nodesRight: ["Hexagon", "Wallet", "Network", "Gem", "Boxes"],
};

export const testimonials = {
  eyebrow: "Loved by traders",
  titleLead: "What our",
  titleAccent: "traders say",
  items: [
    {
      quote:
        "I replaced three spreadsheets and a Python script with one Quantly strategy. It runs while I sleep.",
      name: "Amara O.",
      role: "Swing trader, Lagos",
      rating: 5,
    },
    {
      quote:
        "The backtesting alone paid for itself. I caught a flaw before it ever touched real money.",
      name: "Daniel R.",
      role: "Prop desk, Austin",
      rating: 5,
    },
    {
      quote:
        "Finally an automation tool my whole team can use without waiting on engineering.",
      name: "Mei L.",
      role: "Fund analyst, Singapore",
      rating: 5,
    },
  ],
};

export const pricing = {
  eyebrow: "Simple, honest pricing",
  titleLead: "Pick a plan that",
  titleAccent: "scales with you",
  subtitle: "Start free. Upgrade only when your strategies do.",
  monthlyLabel: "Monthly",
  yearlyLabel: "Yearly",
  yearlyNote: "Save 20%",
  plans: [
    {
      name: "Starter",
      price: { monthly: 0, yearly: 0 },
      blurb: "For exploring the builder and paper trading.",
      cta: "Start for free",
      features: ["1 live strategy", "Paper trading", "3 exchange connections", "Community support"],
    },
    {
      name: "Pro",
      price: { monthly: 29, yearly: 23 },
      blurb: "For active traders running strategies live.",
      cta: "Start Pro trial",
      featured: true,
      features: [
        "Unlimited strategies",
        "Live + paper trading",
        "20+ exchange connections",
        "Advanced backtesting",
        "Priority support",
      ],
    },
    {
      name: "Elite",
      price: { monthly: 79, yearly: 63 },
      blurb: "For teams and professional desks.",
      cta: "Talk to sales",
      features: [
        "Everything in Pro",
        "Team seats & roles",
        "API + webhooks",
        "Dedicated success manager",
      ],
    },
  ],
};

export const faq = {
  eyebrow: "Good to know",
  titleLead: "Frequently asked",
  titleAccent: "questions",
  items: [
    {
      q: "Do I need to know how to code?",
      a: "Not at all. Quantly's visual builder lets you assemble strategies from blocks — the code is generated for you behind the scenes.",
    },
    {
      q: "Is my money safe?",
      a: "Your funds stay on your own exchange. Quantly connects with encrypted, permission-scoped API keys and never has withdrawal access.",
    },
    {
      q: "Which exchanges are supported?",
      a: "Binance, Coinbase, Kraken, Bybit, OKX, KuCoin and 20+ others, with more added regularly.",
    },
    {
      q: "Can I test a strategy before going live?",
      a: "Yes — backtest against years of historical data and run it in paper-trading mode before committing real capital.",
    },
    {
      q: "How fast can I get started?",
      a: "Most traders deploy their first strategy within 10 minutes of signing up.",
    },
  ],
};

export const finalCta = {
  titleLead: "Join thousands of traders",
  titleMuted: "already winning smarter.",
  subtitle: "No setup fees. No hidden catches. Just start.",
  cta: "Start Trading Now",
};

export const footer = {
  blurb:
    "Quantly gives every trader the power of a quant desk — build, backtest, and automate strategies without writing a line of code.",
  columns: [
    {
      title: "Product",
      links: ["Features", "How it works", "Pricing", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Contact"],
    },
    {
      title: "Resources",
      links: ["Docs", "Support center", "Status", "Terms & privacy"],
    },
  ],
  socials: ["X", "Instagram", "Telegram", "LinkedIn"],
  copyright: "© 2026 Quantly. All rights reserved.",
};
