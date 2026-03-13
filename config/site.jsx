export const siteConfig = {
  // seo
  name: "ADESA MEDIA",
  description:
    "ADESA MEDIA is a full service marketing agency in Lagos, Nigeria. We deliver brand strategy, media buying, PR, digital marketing, and experiential campaigns built for measurable growth.",
  url: "https://adesamedia.com",
  ogImage: "/Adesa-media-logo-black.png",
  links: {
    twitter: "https://twitter.com/adesamedia",
    linkedin: "https://linkedin.com/company/adesa-media",
  },

  // Navigation links
  navigation: {
    primary: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "What We Do" },
      { href: "/approach", label: "Our Approach" },
      { href: "/media", label: "Media & PR" },
    ],
    secondary: [
      { href: "/adventures", label: "Our Adventures" },
      { href: "/team", label: "Team" },
      { href: "/clients", label: "Clients" },
    ],
    cta: { href: "/contact", label: "PARTNER WITH US" },
    navigationItems: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "What We Do", href: "/services" },
      { label: "Our Approach", href: "/approach" },
      { label: "Media & PR", href: "/media" },
      { label: "Adventures", href: "/adventures" },
      { label: "Team", href: "/team" },
      { label: "Clients", href: "/clients" },
      { label: "Contact", href: "/contact" },
    ],
    navigationPrompt: "Click Menu to Navigate",
  },

  //social media links
  socialMedia: {
    linkedin: {
      label: "LinkedIn",
      href: "https://ng.linkedin.com/company/adesa-media",
    },

    twitter: {
      label: "Twitter",
      href: "https://x.com/AdesaMedia",
    },

    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/adesamedia/",
    },
    facebook: {
      label: "Facebook",
      href: "https://www.facebook.com/61551745417738/?locale=en_GB",
    },

    tiktok: {
      label: "TikTok",
      href: "https://www.tiktok.com/@adesa.media",
      icon: "/icons/tiktok.svg",
    },
  },
  // Homepage content
  homepage: {
    hero: {
      headline: "We are a Leading Full-Service Agency",
      description:
        "We empower brands with media, marketing, and PR systems built for growth, visibility, and long-term relevance.",
      backgroundImages: [
        "/speed-boat-aerial-shot-laa7nlc87rsmxvqk.jpg",
        "https://yellowgroup.asia/wp-content/uploads/2019/02/01.jpg",
      ],
      logoColor: "white",
      ctaPrimary: {
        label: "Partner With Us",
        href: "/contact",
      },
      ctaSecondary: {
        label: "View Our Work",
        href: "/adventures",
      },
    },

    // Adesa Advantage Section
    adesaAdvantage: {
      theAdvantage: [
        {
          id: "1",
          letter: "A",
          title: "pplied Insight",
          description:
            "We build strategies based on real market and audience insight.",
        },
        {
          id: "2",
          letter: "D",
          title: "eep Sector Understanding",
          description:
            "We possess in-depth industry knowledge across key markets.",
        },
        {
          id: "3",
          letter: "E",
          title: "xecutional Excellence",
          description:
            "We go beyond creativity delivering flawless execution for our clients.",
        },
        {
          id: "4",
          letter: "S",
          title: "trategic Thinking",
          description:
            "Every activity is tied to a bigger strategic objective.",
        },
        {
          id: "5",
          letter: "A",
          title: "gile Delivery",
          description:
            "We move quickly, adapt, and pivot without losing focus on results.",
        },
      ],
      adesaAdvantageCta: {
        backgroundImage:
          "/golden-gate-bridge-california-usa-sunset-colorful-sky-5390x3594-4292.jpg",
        label: "Learn more about our process",
        href: "/approach",
      },
      backgroundImage:
        "/golden-gate-bridge-california-usa-sunset-colorful-sky-5390x3594-4292.jpg",
    },

    // Testimonials Section
    testimonials: [
      {
        id: 1,
        title: "Documentary Excellence",
        quote:
          "Adesa Media planned and shot our documentary for our business clinic, and they delivered an excellent job. We use them for all of our media needs.",
        author: "Dr. Ndudirana Bowei",
        role: "Country Manager, Rose of Sharon Foundation",
        image: "",
        stars: 5,
      },
      {
        id: 2,
        title: "Consistent Service Delivery",
        quote:
          "We have been working with Adesa Media for our social media management, strategy, and printing needs, and they have consistently provided high-quality services on time. We highly recommend their services.",
        author: "Hon. Jamiu Akande Omoniyi",
        role: "Commissioner for Housing, Ogun State",
        image: "",
        stars: 5,
      },
      {
        id: 3,
        title: "Digital Transformation",
        quote:
          "Adesa Media transformed our online presence with their exceptional digital marketing services. Their team is professional, innovative, and always delivers on their promises.",
        author: "Emmanuel Omale",
        role: "CodeCradle Africa C.E.O",
        image: "",
        stars: 5,
      },
    ],

    //Footer Section
    footer: {
      brand: {
        description:
          "We Are A Marketing Agency, Where Creativity, Innovation, Strategic Insight and Storytelling converge seamlessly",
        logoColor: "white",
        socialLinks: [
          {
            icon: "Facebook",
            href: "https://www.facebook.com/61551745417738/?locale=en_GB",
          },
          { icon: "Twitter", href: "https://x.com/AdesaMedia" },
          { icon: "Instagram", href: "https://www.instagram.com/adesamedia/" },
          {
            icon: "Linkedin",
            href: "https://ng.linkedin.com/company/adesa-media",
          },
        ],
      },
      quickNavigation: [
        { label: "Our Services", href: "#services" },
        { label: "Case Studies", href: "#work" },
        { label: "About Us", href: "#about" },
        { label: "Resource Hub", href: "#blog" },
        { label: "Get Started", href: "#contact" },
      ],
      services: [
        { title: "Strategy & Planning", link: "/service/strategy" },
        { title: "Production", link: "/service/production" },
        { title: "Marketing Communications", link: "/service/marketing" },
        { title: "Media Services", link: "/service/media" },
      ],
      newsletter: {
        title: "Weekly Insights",
        description:
          "Join 5,000+ subscribers receiving our weekly growth insights.",
        placeholder: "Email address",
        submitLabel: "Subscribe",
        url: "https://www.linkedin.com/newsletters/the-adesa-lens-7352962421847638016/",
      },
      contact: {
        address:
          "2, Isheri Road (2nd Floor), by Berger Roundabout, Ojodu Berger, Lagos, 101233",
        phone: "+234 701 234 5154",
        email: "info@adesahq.com",
      },
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Settings", href: "#" },
      ],
    },

    // Slogan Section
    slogan: [
      "Great brands don't just happen.",
      "It takes time, patience and great",
      "strategies to build a brand that the",
      "consumer falls in love with, One amazing experience at a time",
    ],
    sloganHighlights: {
      brands: "red-500",
      dont: "underline decoration-[#FFA205]/60",
      time: "font-semibold text-[#151E47]",
      patience: "font-semibold text-[#151E47]",
      strategies: "font-semibold text-red-500",
      consumer: "font-semibold text-[#151E47]",
      love: "italic text-red-500",
      experience: "font-semibold underline decoration-[#FFA205]/60",
    },
  },

  // What We Do Section
  whatWeDo: {
    strategy: [
      "Brand Strategy Development",
      "Marketing Communication Strategy Development",
      "Brand Acculturation Sessions",
      "Retail Channel Planning",
      "Marketing Project Management",
      "New Product Feasibility Assessment",
      "Market Research & Competitive Analysis",
      "CSR Initiative Concept Development & Planning",
      "Customer Feedback Management",
      "Media Strategy & Planning",
      "Measurement and Evaluation",
    ],
    marketing: [
      "Creative Development/ Execution",
      "Media Buying and Management",
      "Public/Media Relations",
      "Social/Digital Marketing",
      "Events Management/Experiential Marketing",
    ],
    production: [
      "TV Commercials",
      "Documentary",
      "Radio Commercial",
      "Corporate Publications",
    ],
  },

  // Featured Work / Adventures
  features: {
    // Featured Work Section
    featuredWork: [
      {
        id: 1,
        brand: "LEADWAY",
        title: "Lagos International Trade Fair Experience",
        description:
          "Integrated brand and media campaigns driving strong recall and engagement at the Lagos International Trade Fair.",
        category: "Insurance / Financial Services",
        tags: ["Experiential", "Brand", "Engagement"],
        image: "/clients/leadway-assurance.png",
        caseStudyId: 3, // Links to AdventureWork[2]
        slug: "leadway-trade-fair",
      },
      {
        id: 2,
        brand: "OGSGRAHomes",
        title: "Ogun State GRA Regeneration Scheme",
        description:
          "Strategic communications and campaign materials for the Ogun State GRA urban regeneration and housing initiative.",
        category: "Public Sector / Urban Development",
        tags: ["Campaign", "Strategy", "Urban Development"],
        image: "/case-studies/ogra-regeneration/image1.png",
        caseStudyId: 2, // Links to AdventureWork[1]
        slug: "ogra-regeneration-scheme",
      },

      {
        id: 3,
        brand: "inDrive",
        title: "Campus Market Penetration Campaign",
        description:
          "Campus ambassador program and on-ground activations to drive app adoption among students.",
        category: "Mobility / Ride-Hailing",
        tags: ["Campus", "Activation", "Youth"],
        image: "/clients/indrive-logo.svg",
        caseStudyId: 6, // Links to AdventureWork[5]
        slug: "indrive-campus-campaign",
      },
    ],

    // Featured Work CTA
    featuredWorkCta: {
      label: "View All Case Studies",
      href: "/adventures",
    },
  },

  // Clients Section
  client: {
    clients: [
      {
        name: "Leadway Assurance",
        logo: "/clients/leadway-assurance.png",
        width: 120,
        height: 60,
      },
      {
        name: "Fab & Luxe",
        logo: "/clients/fab-and-luxe-combined.png",
        width: 120,
        height: 60,
      },
      {
        name: "inDrive",
        logo: "/clients/indrive-logo.svg",
        width: 120,
        height: 60,
      },
      {
        name: "Leadway Pensure",
        logo: "/clients/leadway-pensure.png",
        width: 120,
        height: 60,
      },
      {
        name: "Ogun State Government",
        logo: "/clients/nigeria-ogun-state.png",
        width: 120,
        height: 60,
      },
      {
        name: "Rose of Sharon Foundation",
        logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiVB2BdidbWAwVmd2r7Aaj67xrU8FNuxGr2TzgTtlMF1jg93kt",
        width: 120,
        height: 60,
      },
      {
        name: "Nigeria For Women Project",
        logo: "https://radionigeriaibadan.gov.ng/wp-content/uploads/2023/07/Nigeria-for-Women-Project-NFWP-2.jpg",
        width: 120,
        height: 60,
      },
    ],

    clientsSection: {
      eyebrow: "Our Clients",
      title: "Trusted by Leading Brands",
      description:
        "We partner with great brands across finance, healthcare, mobility, and consumer markets.",
    },
  },

  // FAQ Section
  faq: [
    {
      id: 1,
      question: "What does Adesa Media do?",
      answer:
        "Adesa Media runs end-to-end marketing services. Strategy and planning. Production. Marketing communications. Media buying and management. The focus stays on growth, audience connection, and measurable results.",
    },
    {
      id: 2,
      question: "What industries does Adesa Media work with?",
      answer:
        "Finance. Insurance. FMCG. Automotive. Real estate. Healthcare. Alcohol and beverage brands. The team works across startups, growing businesses, and large enterprises.",
    },
    {
      id: 3,
      question: "What makes Adesa Media different?",
      answer:
        "Applied insight. Deep sector understanding. Strong execution. Clear strategy. Fast delivery. Every activity ties back to a defined business objective.",
    },
    {
      id: 4,
      question: "How does Adesa Media approach projects?",
      answer:
        "Projects follow co-creation, creative storytelling, empathy for the audience, and data-led decisions. Clients stay involved from idea stage to delivery.",
    },
    {
      id: 5,
      question: "Does Adesa Media handle media buying and verification?",
      answer:
        "Yes. Media buying, monitoring, and verification across TV, radio, OOH, print, and digital. Performance tracking uses tools like MediaStar, AMPS, and MediaXpress.",
    },
    {
      id: 6,
      question: "What digital marketing services are offered?",
      answer:
        "Social media management. Community building. Digital ads. Media planning. Technology integration. Digital commerce. Tools include Google, Mobihunter, and Sprout Social.",
    },
    {
      id: 7,
      question: "Who are some brands Adesa Media has worked with?",
      answer:
        "FirstBank. Leadway. WEMA Bank ALAT. FCMB Flexx. Toyota Nigeria. Mikano Motors. Enterprise Life. Greenwich Capital. May and Baker. Health Partners HMO.",
    },
    {
      id: 8,
      question: "How can brands contact or partner with Adesa Media?",
      answer:
        "Office at 2 Isheri Road, Ojodu Berger, Lagos. Phone +234 701 234 5154. Email info@adesahq.com. Partnerships focus on long-term growth and shared goals.",
    },
  ],

  // Mission and Vision Section
  missionVision: {
    vision: {
      headline: "Visin",
      highlightLetter: "o",
      description:
        "To cultivate a collaborative ecosystem where creativity, innovation, and strategic insight converge seamlessly, redefining how brands connect with their audiences and creating lasting impressions.",
      backgroundImage: "/planet-orbit-outer-space-cosmos-4096x3112-8768.jpg",
      logoColor: "white",
    },
    mission: {
      headline: "Missin",
      highlightLetter: "o",
      description:
        "To empower our clients with dynamic solutions that ignite growth, captivate audiences, and deliver exceptional results.",
      backgroundImage: "/jonathan-francis-U1OdQbMi6ys-unsplash.jpg",
      logoColor: "white",
    },
  },

  // Our Core Values Section
  coreValues: {
    colors: {
      "value-passion": "#A3D133",
      "value-teamwork": "#36C59E",
      "value-innovation": "#47D1E9",
      "value-excellence": "#43A5E2",
      "value-relationship": "#4178D2",
      "value-accountability": "#4A67A2",
    },
    left: [
      { label: "EXCELLENCE", color: "value-excellence", icon: "Star", ml: "" },
      {
        label: "RELATIONSHIP",
        color: "value-relationship",
        icon: "Users",
        ml: "lg:ml-10",
      },
      {
        label: "ACCOUNTABILITY",
        color: "value-accountability",
        icon: "ShieldCheck",
        ml: "",
      },
    ],
    right: [
      { label: "PASSION", color: "value-passion", icon: "Flame", ml: "" },
      {
        label: "TEAMWORK",
        color: "value-teamwork",
        icon: "Handshake",
        mr: "lg:mr-10",
      },
      { label: "INNOVATION", color: "value-innovation", icon: "Brain", ml: "" },
    ],
    svg: [
      "M500 300 C400 300, 350 120, 310 120",
      "M500 300 C380 300, 370 300, 310 300",
      "M500 300 C400 300, 350 480, 310 480",
      "M500 300 C600 300, 650 120, 690 120",
      "M500 300 C620 300, 630 300, 690 300",
      "M500 300 C600 300, 650 480, 690 480",
    ],
  },

  // Why Choose Us section
  whyChooseUs: {
    badge: "Who We Are",

    title: "A Leading Full-Service Agency",

    description:
      "Adesa Media builds brands through strategy, creativity, and execution. We help organizations grow, connect, and win in competitive markets.",

    features: [
      {
        title: "Applied Insight",
        description:
          "We build strategies from real market research, audience data, and competitive analysis.",
        icon: "Rocket",
      },
      {
        title: "Executional Excellence",
        description:
          "From media buying to production and digital campaigns, every project meets high delivery standards.",
        icon: "Star",
      },
      {
        title: "True Partnership",
        description:
          "We co-create with clients and stay invested in long-term business success.",
        icon: "Heart",
      },
    ],

    profile: {
      title: "Our Profile",

      stats: [
        {
          value: "21+",
          label: "Strategic Experts",
          icon: "Heart",
        },
        {
          value: "25+",
          label: "Major Brands",
          icon: "Building",
        },
        {
          value: "300+",
          label: "Campaigns Delivered",
          icon: "Rocket",
        },
        {
          value: "10+",
          label: "Years Experience",
          icon: "Star",
        },
      ],
    },

    cta: {
      label: "Partner With Adesa Media",
      href: "#contact",
    },
  },

  // Our Approach Section
  approach: {
    heading: {
      eyebrow: "Our approach",
      title: "Planning, tools, and standards built for accountability",
      description:
        "Professional, data-focused workflows across media planning, verification, and public relations execution.",
    },

    sectionTitle: "How We Do This",

    centerBadge: "OUR\nAPPROACH",

    steps: [
      {
        number: "01",
        title: "Co-Creation",
        description:
          "We actively involve our clients in the ideation and creation process, ensuring that the solutions we develop are not only aligned with their objectives, but truly reflect their vision and unlock meaningful results.",
      },
      {
        number: "02",
        title: "Creative Storytelling",
        description:
          "We transform ideas into compelling narratives that connect with people on an emotional level, translating brand messages into stories that inspire, engage, and drive action.",
      },
      {
        number: "03",
        title: "Empathy",
        description:
          "We take the time to understand your audience, their needs, motivations, and pain points, so we can create experiences and communications that truly resonate and deliver real value.",
      },
      {
        number: "04",
        title: "Data-Driven",
        description:
          "We rely on insights, not assumptions, using data to inform our decisions, optimise performance, and ensure every initiative delivers measurable impact and meaningful growth.",
      },
    ],
    approach: {
      title: "Approach To Briefs",
      paragraphs: [
        "Once we receive a detailed brief from the Client, our first step is to run a comprehensive review using Media-Star software. This allows us to analyse the latest platform ratings, including TV viewership, radio listenership, print circulation and time-belt performance, ensuring we stay aligned with evolving media consumption patterns and base our planning on real data, not assumptions.",

        "Leveraging our strong relationships with local, regional and global media partners, we interrogate the data to determine the most effective media mix for the brief.",

        "Based on these insights, we select the most appropriate platforms and issue media orders to the relevant stations, while simultaneously notifying our media monitoring team to ensure seamless execution and reporting.",
      ],
    },

    tools: [
      {
        name: "MediaStar",
        purpose: "Tracks GRP-driven delivery for terrestrial TV.",
      },
      {
        name: "AMPS",
        purpose: "National database on audience media habits.",
      },
      {
        name: "MediaXpress",
        purpose:
          "Scheduling and contracting tool for spend transparency by medium and region.",
      },
    ],

    measurement: {
      heading: {
        eyebrow: "Measurement",
        title: "Compliance and verification benchmarks",
        description: "Clear targets by medium with defined proof standards.",
      },

      compliance: [
        {
          medium: "TV",
          target: "90–95%",
          proof: "Third-party monitoring",
        },
        {
          medium: "Radio",
          target: "80–85%",
          proof: "Off-air dubs plus third-party validation",
        },
        {
          medium: "OOH",
          target: "95%",
          proof: "Monthly alphanumeric codes plus compliance photos",
        },
        {
          medium: "Print",
          target: "95%",
          proof: "Weekly scanned tear sheets",
        },
        {
          medium: "Online",
          target: "95%",
          proof: "Digital verification",
        },
      ],

      oohCodes: [
        "Agency generates monthly codes",
        "Codes placed on boards by suppliers",
        "Photos serve as proof of display",
      ],
    },

    pr: {
      heading: {
        eyebrow: "Public relations",
        title: "PR toolkit",
        description:
          "Execution-focused tools built for control, credibility, and crisis readiness.",
      },

      toolkit: [
        "In-house media team",
        "Stakeholders’ forums",
        "Press releases",
        "Strategic photo placement",
        "News analysis",
        "Columnists’ endorsement",
        "E-PR and online media deployment",
        "Issues and crisis management",
        "Press and media conferences",
      ],
    },
  },

  // Media & PR Section
  mediaPR: {
    hero: {
      eyebrow: "Media and PR",
      title: "Latest Articles",
      description:
        "Strategy, media, branding, and execution from real campaigns.",
    },
  },

  // Contact Section
  contact: {
    sectionId: "contact",

    badge: "Contact Us",

    heading: "Partner With Us Today",

    description:
      "We work with value-driven brands focused on growth, clarity, and long-term impact.",

    address: {
      title: "Office Address",

      lines: [
        "2, Isheri Road (2nd Floor)",
        "By Berger Roundabout",
        "Ojodu Berger, Lagos, 101233",
      ],
    },

    email: {
      title: "Email",
      value: "info@adesahq.com",
    },

    phone: {
      title: "Phone",
      value: "+234 701 234 5154",
    },

    followLabel: "Follow Us",

    form: {
      heading: "Start the Conversation",

      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Business Email",
        message: "Tell us what you want to build",
      },

      services: [
        "Brand Strategy",
        "Marketing Communications",
        "Media Planning",
        "Digital Marketing",
        "Integrated Campaigns",
      ],

      submitLabel: "Send Message",
    },
  },

  // Team Section
  team: [
    {
      name: "David Okoye",
      role: "Creative Director",
      slug: "david-okoye",
      image: "/Adesa-media-logo-black.png",
      bio: "Leads brand strategy and visual direction.",
      skills: ["Branding", "Design", "Leadership"],
    },
    {
      name: "Aisha Bello",
      role: "UX Lead",
      slug: "aisha-bello",
      image: "/Adesa-media-logo-black.png",
      bio: "Designs human-centered digital products.",
      skills: ["UX", "Research", "Prototyping"],
    },
  ],

  // Adventures carousel
  adventureImages: [
    "/hot-air-balloons-6144x4096-12393.jpg",
    "/sunset-adventure.jpg",
    "/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg",
  ],
};
