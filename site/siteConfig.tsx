import { Award, BarChart3, Lightbulb, Target, Zap } from "lucide-react";

// --- Types ---
interface NavItem {
  label: string;
  path: string;
}

interface ServiceItem {
  title: string;
  items: string[];
}

interface AdvantageItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ValueItem {
  title: string;
  description: string;
}

interface CaseStudy {
  client: string;
  campaigns: string[];
  tagline?: string;
  contact?: string;
}

interface ClientItem {
  name: string;
}

// --- Data ---
const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "What We Do", path: "/services" },
  { label: "Our Approach", path: "/approach" },
  { label: "Media & PR", path: "/media-pr" },
  { label: "Adventures", path: "/adventures" },
  { label: "Team", path: "/team" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

const SERVICES: ServiceItem[] = [
  {
    title: "Strategy & Planning",
    items: [
      "Brand Strategy Development",
      "Marketing Communication Strategy",
      "Brand Acculturation Sessions",
      "Retail Channel Planning",
      "Marketing Project Management",
      "Market Research & Competitive Analysis",
    ],
  },
  {
    title: "Marketing Communications",
    items: [
      "Creative Development/Execution",
      "Public/Media Relations",
      "Social/Digital Marketing",
      "Events Management",
      "Experiential Marketing",
    ],
  },
  {
    title: "Media Services",
    items: [
      "Media Strategy & Planning",
      "Media Buying and Management",
      "Measurement and Evaluation",
    ],
  },
  {
    title: "Production",
    items: [
      "TV Commercials",
      "Documentary",
      "Radio Commercial",
      "Corporate Publications",
    ],
  },
];

const ADVANTAGES: AdvantageItem[] = [
  {
    title: "Applied Insight",
    description: "We build strategies based on real market and audience insight.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Deep Sector Understanding",
    description: "In-depth industry knowledge across key markets.",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "Executional Excellence",
    description: "Beyond creativity—we deliver flawless execution.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Strategic Thinking",
    description: "Every activity tied to a bigger strategic objective.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Agile Delivery",
    description: "We move quickly, adapt, and pivot without losing focus.",
    icon: <Zap className="h-6 w-6" />,
  },
];

const VALUES: ValueItem[] = [
  { title: "Passion", description: "Driven by genuine enthusiasm for every project" },
  { title: "Excellence", description: "Committed to delivering outstanding results" },
  { title: "Teamwork", description: "Collaborative efforts that multiply success" },
  { title: "Relationship", description: "Building lasting partnerships with clients" },
  { title: "Innovation", description: "Creative solutions that push boundaries" },
  { title: "Accountability", description: "Taking ownership of every outcome" },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Leadway Assurance / Leadway Health",
    campaigns: [
      "Explore the power of more with Leadway",
      "Health is Happiness",
      "Make the smarter choice – choose the HMO that offers more",
    ],
    tagline: "#TheSmarterChoice",
    contact: "(01) 2700700 | www.leadwayhealth.com",
  },
  {
    client: "FirstBank",
    campaigns: [
      "FirstLounge: Your summer experiences begin at FirstLounge",
      "FirstMonie: Making extra income as a FirstMonie Agent",
      "Dad, our first hero – Father's Day campaign",
    ],
    tagline: "You First",
    contact: "SMS: 30012 | 0700-FIRSTCONTACT",
  },
  {
    client: "FBNQuest Trustees",
    campaigns: [
      "Don't leave tomorrow to chance",
      "Building a legacy is just the starting point",
      "Wealth preservation and transfer is just as important",
    ],
    tagline: "#LegacySeries",
    contact: "trustees@fbnquest.com",
  },
  {
    client: "FCMB – Flexx",
    campaigns: [
      "FlexxZone: Digital hub for young Nigerians",
      "The Flexxer's Guide",
      "#FCMBFlexxtern internship program",
    ],
    tagline: "70,000+ unique visitors",
  },
  {
    client: "WEMA Bank – ALAT",
    campaigns: [
      "Two Millionaires Every Month",
      "Fund account with ₦5,000+, transact 5+ times",
      "Download ALAT or dial *945#",
    ],
    tagline: "ALATrybe",
  },
  {
    client: "Toyota Nigeria",
    campaigns: [
      "Go New. Go Ahead",
      "Free 1-year/20,000km maintenance",
      "Armoured Toyota Hilux 4x4 – The Ultimate Bodyguard",
    ],
    tagline: "Superior Quality",
  },
  {
    client: "Mikano Motors (Changan)",
    campaigns: [
      "Buy Smart. Own Smarter",
      "Why Settle? Better Than Used. Drive New. Same Price!",
      "Now offering Mikano Electric Vehicles",
    ],
    tagline: "Go Electric Today!",
  },
  {
    client: "Black Knight Whisky",
    campaigns: [
      "Spirit of the Brave",
      "Blended Scotch Whisky – 40% ABV",
      "Not for the average drinker",
    ],
    tagline: "GO CONQUER!",
  },
];

const CLIENTS: ClientItem[] = [
  { name: "FBN Trustees" },
  { name: "Leadway Assurance" },
  { name: "W Health (Leadway Health)" },
  { name: "WEMA Bank / ALAT" },
  { name: "FirstBank" },
  { name: "FBNQuest" },
  { name: "FCMB (Flexx)" },
  { name: "Toyota (Nigeria) Limited" },
  { name: "Mikano Motors (Changan)" },
  { name: "Enterprise Life" },
  { name: "Health Partners HMO" },
  { name: "Black Knight Whisky" },
  { name: "New Look Drinks" },
  { name: "May & Baker Nigeria" },
  { name: "The Meadows (Ibeju-Lekki)" },
  { name: "Greenwich Capital" },
];

const TEAM_ROLES = [
  { role: "Brand & Communications Strategists", count: "21" },
  { role: "Art Director & Creative Whiz", count: "1" },
  { role: "Copy and Content Marketing Mavericks", count: "4" },
  { role: "Social Media Specialists", count: "3" },
  { role: "Media & PR Experts", count: "5" },
  { role: "Digital Ads Marksmen", count: "3" },
  { role: "UI/UX Ninjas", count: "2" },
  { role: "Client-Service Men", count: "4" },
];