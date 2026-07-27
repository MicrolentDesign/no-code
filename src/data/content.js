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
    { label: "Home", href: "/#home", match: "/" },
    { label: "Platform", href: "/platform", match: "/platform" },
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
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
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop&crop=faces",
    },
    {
      quote:
        "The backtesting alone paid for itself. I caught a flaw before it ever touched real money.",
      name: "Daniel R.",
      role: "Prop desk, Austin",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=faces",
    },
    {
      quote:
        "Finally an automation tool my whole team can use without waiting on engineering.",
      name: "Mei L.",
      role: "Fund analyst, Singapore",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop&crop=faces",
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
  avatars: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=140&auto=format&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=140&auto=format&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=140&auto=format&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=140&auto=format&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=140&auto=format&fit=crop&crop=faces",
  ],
};

export const platform = {
  hero: {
    eyebrow: "Platform",
    titleLead: "Everything You Need to Build, Test and",
    titleMuted: "Execute Trading Strategies",
    subtitle:
      "Design professional algorithmic trading strategies without writing code. Validate your ideas with historical data, simulate trades safely and connect your broker when you're ready to trade.",
    cta: "Get Started",
    demo: "Book a Demo",
  },

  overview: {
    eyebrow: "Platform Overview",
    titleLead: "One Platform.",
    titleMuted: "Every Stage of Your Trading Workflow.",
    desc: "From building strategies to analysing performance, the platform brings together every essential tool into a single intuitive workspace. Whether you're validating an idea or preparing for live execution, every workflow is designed to minimise complexity while giving you complete control over your trading process.",
    cards: [
      {
        icon: "Blocks",
        title: "Visual Strategy Builder",
        desc: "Create sophisticated rule-based trading strategies through an intuitive visual interface without writing code.",
      },
      {
        icon: "LineChart",
        title: "Historical Backtesting",
        desc: "Validate strategies using historical market data before deploying them in real market conditions.",
      },
      {
        icon: "Activity",
        title: "Paper Trading",
        desc: "Monitor strategy performance using virtual capital and real-time market simulations.",
      },
      {
        icon: "Link2",
        title: "Broker Connectivity",
        desc: "Connect your preferred brokerage account and manage trading workflows from one place.",
      },
      {
        icon: "Globe",
        title: "Market Monitoring",
        desc: "Track market movements, receive alerts and stay informed through a unified trading dashboard.",
      },
      {
        icon: "BarChart3",
        title: "Performance Analytics",
        desc: "Review strategy performance through comprehensive reports, trade history and visual analytics.",
      },
    ],
  },

  stickyNav: [
    { id: "strategy-builder", label: "Strategy Builder" },
    { id: "backtesting", label: "Backtesting" },
    { id: "paper-trading", label: "Paper Trading" },
    { id: "live-trading", label: "Live Trading" },
    { id: "broker", label: "Broker" },
    { id: "scanner", label: "Scanner" },
    { id: "reports", label: "Reports" },
  ],

  strategyBuilder: {
    eyebrow: "Strategy Builder",
    titleLead: "Turn Trading Logic into",
    titleMuted: "Visual Workflows",
    desc: "Design rule-based strategies using an intuitive visual builder that replaces complex programming with simple building blocks. Combine conditions, indicators and trading rules into reusable strategies that are easy to understand and refine.",
    features: [
      "Create entry conditions",
      "Create exit conditions",
      "Combine rules using logical operators",
      "Organise reusable strategies",
      "Manage versions confidently",
      "Configure risk parameters",
    ],
    gridTitle: "Designed for Flexibility",
    grid: [
      { icon: "Blocks", title: "Rule Builder", desc: "Build entry and exit conditions visually." },
      {
        icon: "SlidersHorizontal",
        title: "Indicator Library",
        desc: "Access commonly used technical indicators through a simple interface.",
      },
      {
        icon: "Layers",
        title: "Portfolio Support",
        desc: "Create strategies for single instruments or diversified portfolios.",
      },
      {
        icon: "ShieldCheck",
        title: "Risk Controls",
        desc: "Define position sizing and trade management parameters.",
      },
      {
        icon: "Clock",
        title: "Version History",
        desc: "Iterate confidently by saving and managing strategy versions.",
      },
      {
        icon: "Copy",
        title: "Reusable Templates",
        desc: "Create reusable strategy templates to accelerate new ideas.",
      },
    ],
    workflow: {
      title: "From Idea to Strategy in Four Steps",
      steps: [
        { icon: "Lightbulb", title: "Create" },
        { icon: "SlidersHorizontal", title: "Configure" },
        { icon: "CheckCircle", title: "Validate" },
        { icon: "Rocket", title: "Deploy" },
      ],
    },
  },

  backtesting: {
    eyebrow: "Backtesting",
    titleLead: "Validate Every Strategy",
    titleMuted: "Before You Risk Capital",
    desc: "Explore how strategies would have performed under historical market conditions. Compare outcomes, analyse trade behaviour and refine ideas through a structured validation workflow before moving into simulated or live environments.",
    metrics: [
      { icon: "Database", label: "Historical Data" },
      { icon: "BarChart3", label: "Performance Metrics" },
      { icon: "ListChecks", label: "Trade History" },
      { icon: "LineChart", label: "Equity Curve" },
      { icon: "Percent", label: "Win Rate" },
      { icon: "TrendingDown", label: "Drawdown Analysis" },
    ],
    grid: [
      {
        icon: "History",
        title: "Historical Analysis",
        desc: "Review historical strategy behaviour over selected periods.",
      },
      {
        icon: "BarChart3",
        title: "Performance Metrics",
        desc: "Understand strategy outcomes through meaningful trading statistics.",
      },
      { icon: "ListChecks", title: "Trade Log", desc: "Inspect every executed trade with complete transparency." },
      {
        icon: "GitCompare",
        title: "Scenario Comparison",
        desc: "Compare iterations and refine strategies with confidence.",
      },
    ],
    workflow: {
      title: "Backtest with Confidence in Four Steps",
      steps: [
        { icon: "Search", title: "Choose Market" },
        { icon: "Play", title: "Run Test" },
        { icon: "BarChart3", title: "Review Results" },
        { icon: "Repeat", title: "Refine Strategy" },
      ],
    },
  },

  paperTrading: {
    eyebrow: "Paper Trading",
    titleLead: "Test Strategies in Live Markets",
    titleMuted: "Without Financial Risk",
    desc: "Deploy your validated strategies into a simulated trading environment powered by live market data. Observe behaviour, monitor performance and gain confidence before placing a single real order.",
    grid: [
      {
        icon: "Wallet",
        title: "Virtual Capital",
        desc: "Trade using configurable paper funds that mirror real market behaviour.",
      },
      {
        icon: "Activity",
        title: "Real-Time Simulation",
        desc: "Monitor trades against live market conditions with realistic execution flows.",
      },
      {
        icon: "LayoutDashboard",
        title: "Open Positions",
        desc: "Track active trades, unrealised profit & loss and position health.",
      },
      {
        icon: "ListChecks",
        title: "Trade Journal",
        desc: "Review every simulated execution and identify opportunities for refinement.",
      },
      {
        icon: "BarChart3",
        title: "Performance Dashboard",
        desc: "Analyse paper trading performance over time through visual reports.",
      },
      {
        icon: "ShieldCheck",
        title: "Risk-Free Learning",
        desc: "Experiment with new strategies without exposing real capital.",
      },
    ],
    workflow: {
      title: "From Strategy to Simulated Execution",
      steps: [
        { icon: "Rocket", title: "Deploy Strategy" },
        { icon: "Globe", title: "Receive Market Data" },
        { icon: "Activity", title: "Monitor Positions" },
        { icon: "BarChart3", title: "Review Performance" },
      ],
    },
  },

  liveTrading: {
    eyebrow: "Live Trading",
    titleLead: "Move from Simulation to",
    titleMuted: "Real Market Execution",
    desc: "When you're ready, transition selected strategies into live trading with confidence. Maintain complete control over every order while monitoring execution from a single workspace.",
    grid: [
      {
        icon: "CheckCircle",
        title: "Manual Confirmation",
        desc: "Every trade remains under your control before submission.",
      },
      {
        icon: "Activity",
        title: "Execution Tracking",
        desc: "Monitor pending, filled and cancelled orders in real time.",
      },
      {
        icon: "LayoutDashboard",
        title: "Position Monitoring",
        desc: "View open positions, exposure and account activity from one dashboard.",
      },
      {
        icon: "History",
        title: "Order History",
        desc: "Access complete trading records with detailed execution information.",
      },
      { icon: "Zap", title: "Notifications", desc: "Receive instant alerts whenever action is required." },
      {
        icon: "Layers",
        title: "Unified Dashboard",
        desc: "Manage multiple trading workflows from a single interface.",
      },
    ],
    stats: [
      { value: "128,450", label: "Orders Executed" },
      { value: "342", label: "Strategies Running" },
      { value: "1,204", label: "Open Positions" },
      { value: "18", label: "Alerts Today" },
    ],
  },

  broker: {
    eyebrow: "Broker Integrations",
    titleLead: "Connect Your Preferred",
    titleMuted: "Brokerage",
    desc: "Connect your brokerage account securely to streamline order management and portfolio monitoring without leaving the platform. The platform follows a bring-your-own-broker approach — Interactive Brokers is supported as the initial integration, with more brokers planned over time.",
    grid: [
      { icon: "Link2", title: "Interactive Brokers", desc: "Connect your account securely." },
      { icon: "LayoutDashboard", title: "Portfolio Sync", desc: "View positions inside one dashboard." },
      { icon: "ListChecks", title: "Order Management", desc: "Monitor execution lifecycle." },
      {
        icon: "Activity",
        title: "Connection Status",
        desc: "Know when accounts are connected and healthy.",
      },
      { icon: "Lock", title: "Secure Authentication", desc: "Credentials remain encrypted." },
      { icon: "Copy", title: "Future Integrations", desc: "Designed to support additional brokers over time." },
    ],
  },

  scanner: {
    eyebrow: "Market Scanner",
    titleLead: "Discover Trading",
    titleMuted: "Opportunities Faster",
    desc: "Scan the market using predefined or custom conditions to identify opportunities that match your trading approach.",
    grid: [
      { icon: "Search", title: "Pre-built Scanners", desc: "Access commonly used market scanning templates." },
      { icon: "SlidersHorizontal", title: "Custom Filters", desc: "Define personalised scanning conditions." },
      { icon: "Activity", title: "Real-Time Results", desc: "Review opportunities as market conditions change." },
      { icon: "Copy", title: "Saved Scanners", desc: "Reuse frequently used market filters." },
      { icon: "Globe", title: "Multi-Market Support", desc: "Search across supported exchanges." },
      { icon: "Layers", title: "Smart Organisation", desc: "Keep watchlists and scanners organised." },
    ],
    workflow: {
      title: "From Filter to Opportunity in Four Steps",
      steps: [
        { icon: "Search", title: "Choose Market" },
        { icon: "SlidersHorizontal", title: "Apply Filters" },
        { icon: "ListChecks", title: "Review Matches" },
        { icon: "ArrowUpRight", title: "Open Opportunity" },
      ],
    },
  },

  reports: {
    eyebrow: "Analytics",
    titleLead: "Measure Performance with",
    titleMuted: "Actionable Insights",
    desc: "Understand how every strategy performs through detailed analytics, historical reports and visual performance dashboards that help refine future trading decisions.",
    grid: [
      { icon: "BarChart3", title: "Performance Reports", desc: "Review historical strategy outcomes." },
      { icon: "ListChecks", title: "Trade History", desc: "Explore every executed trade with filters." },
      { icon: "GitCompare", title: "Strategy Comparison", desc: "Compare multiple strategy versions." },
      { icon: "TrendingDown", title: "Risk Metrics", desc: "Understand exposure and drawdowns." },
      {
        icon: "LayoutDashboard",
        title: "Portfolio Summary",
        desc: "Track overall performance across strategies.",
      },
      { icon: "LineChart", title: "Visual Charts", desc: "Transform trading data into meaningful insights." },
    ],
    stats: [
      { value: "48", label: "Strategies" },
      { value: "12,600+", label: "Reports Generated" },
      { value: "2.4M+", label: "Historical Records" },
      { value: "20+", label: "Markets Tracked" },
    ],
  },
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
