// Portfolio Data
// Navigation Items
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

// Social Links
export const socialLinks = [
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/victor-munene-359137225/',
    icon: 'fab fa-linkedin'
  }
];

// Hero Section Data
export const heroData = {
  name: 'Victor Munene',
  title: 'Senior Data Analyst',
  tagline: 'Transforming data into actionable business insights',
  socialLinks,
  backgroundImage: `${process.env.PUBLIC_URL}/assets/img/hero-bg.jpeg`
};

// About Section Data
export const aboutData = {
  bio: 'A Senior Data Analyst with expertise in transforming complex data into clear, actionable insights. Specializing in Power BI, Tableau, and SQL to deliver business intelligence solutions that drive strategic decisions.',
  yearsExperience: 5,
  specializations: [
    'Business Intelligence',
    'Dashboard Development',
    'Data Modeling',
    'Predictive Analytics'
  ],
  photo: `${process.env.PUBLIC_URL}/assets/img/victor-profile.webp`,
  backgroundImage: `${process.env.PUBLIC_URL}/assets/img/about-bg.jpeg`
};


// Skills Data (card-based layout)
export const skillsData = [
  {
    icon: 'fas fa-chart-bar',
    title: 'Power BI',
    description: 'Interactive dashboards and business intelligence reporting solutions.'
  },
  {
    icon: 'fas fa-chart-pie',
    title: 'Tableau',
    description: 'Data visualization and analytics platform expertise.'
  },
  {
    icon: 'fas fa-database',
    title: 'SQL',
    description: 'Complex queries, data extraction, and database management.'
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'Data Modeling',
    description: 'Designing efficient data structures and relationships.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'BC Central',
    description: 'Business Central integration and reporting solutions.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Analytics',
    description: 'Transforming raw data into actionable business insights.'
  }
];

// Projects Data
export const projectsData = [
  {
    id: '7',
    slug: 'gaming-revenue-analysis',
    title: 'Gaming Revenue Analysis',
    category: ['Power BI', 'Data Modeling'],
    description: 'Monthly revenue and payout analysis dashboard for gaming industry',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/gaming-revenue.jpeg`,
    caseStudy: {
      background: [
        'A gaming company needed comprehensive visibility into monthly revenue trends and payout percentages. The existing reporting system provided only basic summaries without the ability to identify seasonal patterns or anomalies.',
        'Management required detailed insights into GGR (Gross Gaming Revenue) fluctuations and payout ratios to optimize operations and forecast future performance.'
      ],
      methods: {
        approach: 'Developed an interactive Power BI dashboard with dual-axis visualizations showing revenue trends and payout percentages. Implemented drill-down capabilities for monthly analysis and created automated alerts for significant variations.',
        tools: ['Power BI', 'DAX', 'SQL Server', 'Data Modeling']
      },
      results: {
        description: 'The dashboard revealed clear seasonal patterns with peak revenues in May (14.4bn) and July (13.7bn). Payout analysis showed optimal ranges between 80-84%, enabling better margin management and operational decisions.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/gaming-revenue.jpeg`, alt: 'Gaming revenue dashboard', caption: 'Monthly revenue and payout analysis' }
        ]
      },
      recommendations: [
        'I can design and deploy predictive revenue models so your team can forecast GGR and payouts with confidence',
        'I can build player segmentation to surface high-value cohorts and tailor incentives that grow lifetime value',
        'I can implement automated payout anomaly alerts to protect margins and flag unusual behavior in real time',
        'I can connect marketing and gaming data to show which campaigns actually drive incremental revenue'
      ]
    }
  },
  {
    id: '8',
    slug: 'financial-status-breakdown',
    title: 'Financial Status Breakdown',
    category: ['Power BI', 'Tableau'],
    description: 'Comprehensive financial analysis dashboard with multi-dimensional breakdowns',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/financial-status-1.jpeg`,
    caseStudy: {
      background: [
        'A financial services company needed detailed visibility into their financial status across multiple dimensions. The existing reporting lacked the granularity needed for strategic decision-making.',
        'Leadership required real-time insights into financial performance metrics with the ability to drill down by various categories and time periods.'
      ],
      methods: {
        approach: 'Built comprehensive financial dashboards with interactive visualizations showing status breakdowns across key metrics. Implemented dynamic filtering and drill-through capabilities for detailed analysis.',
        tools: ['Power BI', 'Tableau', 'SQL Server', 'Excel']
      },
      results: {
        description: 'Delivered multi-view financial dashboards providing instant visibility into financial status. Enabled data-driven decision making with real-time insights and improved financial planning accuracy.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/financial-status-1.jpeg`, alt: 'Financial status overview', caption: 'Primary financial status dashboard' },
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/financial-status-2.jpeg`, alt: 'Financial breakdown details', caption: 'Detailed financial breakdown analysis' }
        ]
      },
      recommendations: [
        'I can build predictive financial models to forecast revenue, costs, and cash flow for planning',
        'I can implement automated variance alerts so finance leaders are notified when KPIs drift from plan',
        'I can design executive summary views tailored for C-level and board reporting',
        'I can integrate budget vs actual tracking to highlight overspend and savings opportunities'
      ]
    }
  },
  {
    id: '9',
    slug: 'procurement-plan-report',
    title: 'Procurement Plan Report',
    category: ['Power BI', 'BC Central'],
    description: 'Comprehensive procurement budget tracking and actuals reporting system',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/procurement plan.jpeg`,
    caseStudy: {
      background: [
        'A large organization needed to track procurement budgets across multiple departments with real-time visibility into budget utilization, commitments, and actual spending.',
        'The finance team struggled with manual consolidation of procurement data from various sources, leading to delayed reporting and budget overruns.'
      ],
      methods: {
        approach: 'Developed an integrated procurement reporting system with dynamic filters for plan year, department, and actuals period. Created summarized views showing total budget, supplementary amounts, actual spent, commitments, and final budget calculations. Implemented detailed drill-through reports for transaction-level analysis.',
        tools: ['Power BI', 'Business Central', 'SQL Server', 'DAX']
      },
      results: {
        description: 'Delivered a comprehensive procurement tracking system managing 2.9B+ in total budget across multiple departments. The system provides real-time visibility into budget utilization (2.2B actual spent, 170M commitments) with detailed transaction tracking and variance analysis.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/procurement plan.jpeg`, alt: 'Procurement plan report', caption: 'Summarized procurement budget and actuals detail report' }
        ]
      },
      recommendations: [
        'I can build predictive budget-consumption models to flag departments at risk of overspending',
        'I can set up automated alerts when commitments or actuals approach key thresholds',
        'I can create vendor performance scorecards using delivery, quality, and cost metrics',
        'I can integrate purchase requisition workflow data to uncover process bottlenecks',
        'I can add year-over-year spend comparisons to show how procurement efficiency is improving'
      ]
    }
  },
  {
    id: '4',
    slug: 'performance-analysis',
    title: 'Performance Analysis Dashboard',
    category: ['Power BI', 'Data Modeling'],
    description: 'Comprehensive financial performance analysis with variance tracking and cost breakdown',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/perfomance analysis.jpeg`,
    caseStudy: {
      background: [
        'Saracen KE needed detailed visibility into financial performance across multiple time periods with variance analysis against budgets and prior periods.',
        'The organization required insights into cost structures across different categories including direct costs, employment, administrative, distribution, and other operating costs.'
      ],
      methods: {
        approach: 'Built a comprehensive performance analysis dashboard with multi-period comparisons (YTD, PYTD, HYTD, QTD, MTD) and variance tracking. Implemented color-coded heat maps for quick identification of variances and created detailed cost breakdown visualizations with monthly trending.',
        tools: ['Power BI', 'DAX', 'SQL Server', 'Data Modeling']
      },
      results: {
        description: 'Delivered real-time performance tracking showing YTD net actual of -526.0M against budget, with detailed line-item analysis across all expense categories. The cost breakdown dashboard revealed 1.33bn in direct costs, 389.82M in employment costs, and 1.94bn in administrative expenses, enabling data-driven cost optimization decisions.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/perfomance analysis.jpeg`, alt: 'Performance analysis summary', caption: 'Net actual summary with variance analysis by line items' },
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/perfomance analysis1.jpeg`, alt: 'Cost breakdown analysis', caption: 'Detailed cost breakdown with monthly direct costs trending' }
        ]
      },
      recommendations: [
        'I can build cost-forecasting models that incorporate trend and seasonality',
        'I can configure automated variance alerts so managers see issues before month-end close',
        'I can add department-level drill-through so leaders can own and investigate their numbers',
        'I can integrate budget reforecasting workflows directly into the dashboards',
        'I can enable scenario planning and what-if analysis to test cost-reduction or growth strategies'
      ]
    }
  },
  {
    id: '5',
    slug: 'billings-analysis',
    title: 'Billings Analysis Dashboard',
    category: ['Power BI', 'Tableau'],
    description: 'Comprehensive billings tracking with customer analysis and media distribution insights',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/billings.jpeg`,
    caseStudy: {
      background: [
        'Saracen KE needed real-time visibility into billings performance across multiple customers and media channels. The existing system lacked the ability to track period-over-period changes and identify trends.',
        'Management required detailed insights into customer contribution, media distribution, and monthly billing patterns to optimize revenue strategies.'
      ],
      methods: {
        approach: 'Developed an interactive billings dashboard with multi-period comparisons (YTD, H1, Q2, Apr) and variance tracking against prior year. Implemented customer-level analysis with share of billings and YoY change indicators. Created visualizations for monthly billing trends and media channel distribution analysis.',
        tools: ['Power BI', 'Tableau', 'DAX', 'SQL Server']
      },
      results: {
        description: 'Delivered comprehensive billings tracking showing YTD billings of 668.5M (+23.25% vs prior year). The dashboard revealed top customers like Udv Kenya Ltd (146.8M, 22% share) and Kenya Breweries Ltd (80.4M, 12% share). Media analysis showed Digital leading at 35.42%, followed by TV (27.19%) and Radio (20.41%). Monthly trending identified January as peak billing month at 307M.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/billings.jpeg`, alt: 'Billings summary by customer', caption: 'YTD billings summary table by company with variance analysis' },
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/billings1.jpeg`, alt: 'Billings trends and media distribution', caption: 'Monthly billings trend and media channel distribution analysis' }
        ]
      },
      recommendations: [
        'I can implement customer segmentation to target high-growth and at-risk accounts',
        'I can build billing-forecast models to support capacity and revenue planning',
        'I can configure automated alerts when key customers change their billing patterns',
        'I can link campaign performance data to billings so you see ROI by channel and client',
        'I can add competitive and media benchmarking to show where to shift spend for impact'
      ]
    }
  },
  {
    id: '6',
    slug: 'customer-payment-dashboard',
    title: 'Customer Payment Dashboard',
    category: ['Tableau', 'Data Modeling'],
    description: 'Sales and payment analytics with geographic distribution and customer insights',
    thumbnail: `${process.env.PUBLIC_URL}/assets/img/projects/customer payment.jpeg`,
    caseStudy: {
      background: [
        'A sales organization needed comprehensive visibility into payment transactions across multiple geographic regions and customer segments.',
        'The team required insights into settlement patterns, customer behavior, authorization trends, and monthly transaction volumes to optimize payment processing and identify growth opportunities.'
      ],
      methods: {
        approach: 'Built an interactive Tableau sales dashboard with key metrics tracking total revenue (12.41K), transactions (50 total, 50 successful), and unique customers (24). Implemented multi-dimensional analysis including geographic distribution by city and state, customer segmentation, and temporal trending by year and month.',
        tools: ['Tableau', 'SQL Server', 'Data Modeling', 'Excel']
      },
      results: {
        description: 'Delivered a comprehensive payment analytics dashboard showing average settlement amount of 248.26 across 24 unique customers. Geographic analysis revealed Utah leading in authorization amounts (1.17K, 33.1%), followed by California (2.53K, 20.8%). Customer analysis identified top performers like Uganda (0.81K, 14.9%) and Diamond (1.88K, 32.62%). Monthly trending showed peak settlement in October at 3.5K.',
        visualizations: [
          { type: 'dashboard', src: `${process.env.PUBLIC_URL}/assets/img/projects/customer payment.jpeg`, alt: 'Sales dashboard overview', caption: 'Comprehensive sales and payment analytics dashboard' }
        ]
      },
      recommendations: [
        'I can build payment-forecasting models using seasonality and customer behavior',
        'I can calculate and track customer lifetime value to prioritize retention efforts',
        'I can configure automated alerts for unusual payment patterns or potential churn',
        'I can integrate fraud-detection rules and risk scores directly into the dashboards',
        'I can analyze payment-method performance to optimize fees and conversion rates',
        'I can create customer retention and risk scores based on payment and engagement behavior'
      ]
    }
  }
];

// Contact Section Data
export const contactData = {
  email: 'Princevick361@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/victormunene',
  ctaText: "Let's work ?"
};

// Footer Data
export const footerData = {
  copyright: `© ${new Date().getFullYear()} Victor Munene. All rights reserved.`,
  tagline: 'Senior Data Analyst · Business Intelligence · Data Analytics',
  socialLinks
};

// Export all data as a single object for convenience
export const portfolioData = {
  navItems,
  socialLinks,
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
  footerData
};

export default portfolioData;
