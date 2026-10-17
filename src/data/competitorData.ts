export interface CompetitorComparison {
  name: string;
  sector: string;
  category: string;
  rating: number;
  reviewsCount: string;
  avgCostForTwo: string;
  rooftopSkyLounge: boolean;
  separateJainVegKitchen: boolean;
  unlimitedBuffetLiveCounter: boolean;
  metroWalkMinutes: string;
  valetParking: boolean;
  liveAcousticGhazal: boolean;
  directBookingPerk: string;
  verdict: string;
}

export const COMPETITOR_ANALYSIS: CompetitorComparison[] = [
  {
    name: "Dwaar Heritage & Sky Lounge",
    sector: "Sector 12 (City Centre)",
    category: "Royal Heritage Dining & Open-Air Sky Lounge",
    rating: 4.9,
    reviewsCount: "2,840+",
    avgCostForTwo: "₹1,400",
    rooftopSkyLounge: true,
    separateJainVegKitchen: true,
    unlimitedBuffetLiveCounter: true,
    metroWalkMinutes: "2 min (Sector 12)",
    valetParking: true,
    liveAcousticGhazal: true,
    directBookingPerk: "Free Chef's Dessert + 10% Cashback + Zero Booking Fee",
    verdict: "Top-ranked destination for both royal family dining and romantic rooftop sunsets.",
  },
  {
    name: "Pavilion - Club City",
    sector: "Sector 14",
    category: "Standard Multi-Cuisine Diner",
    rating: 4.2,
    reviewsCount: "1,450+",
    avgCostForTwo: "₹1,650",
    rooftopSkyLounge: false,
    separateJainVegKitchen: false,
    unlimitedBuffetLiveCounter: false,
    metroWalkMinutes: "9 min",
    valetParking: false,
    liveAcousticGhazal: false,
    directBookingPerk: "None",
    verdict: "Decent indoor seating, but lacks open-air sky terrace and dedicated vegetarian kitchen separation.",
  },
  {
    name: "Cafe After Hours",
    sector: "Sector 12",
    category: "Lounge & Bar",
    rating: 4.3,
    reviewsCount: "2,100+",
    avgCostForTwo: "₹1,900",
    rooftopSkyLounge: true,
    separateJainVegKitchen: false,
    unlimitedBuffetLiveCounter: false,
    metroWalkMinutes: "4 min",
    valetParking: true,
    liveAcousticGhazal: false,
    directBookingPerk: "Occasional 5% coupon",
    verdict: "Good nightlife vibe for youth, but overly loud for multi-generational family dinners.",
  },
  {
    name: "Barbeque Nation",
    sector: "Sector 13 (Vegas Mall)",
    category: "Chain Buffet Outlet",
    rating: 4.4,
    reviewsCount: "3,800+",
    avgCostForTwo: "₹1,800",
    rooftopSkyLounge: false,
    separateJainVegKitchen: false,
    unlimitedBuffetLiveCounter: true,
    metroWalkMinutes: "7 min",
    valetParking: true,
    liveAcousticGhazal: false,
    directBookingPerk: "Club points",
    verdict: "Standardized mall-based buffet; noisy, crowded weekend queues with no private romantic ambiance.",
  },
  {
    name: "Drool Kitchen",
    sector: "Sector 10 (Near Metro)",
    category: "Casual Garden Bistro",
    rating: 4.1,
    reviewsCount: "1,120+",
    avgCostForTwo: "₹1,750",
    rooftopSkyLounge: false,
    separateJainVegKitchen: false,
    unlimitedBuffetLiveCounter: false,
    metroWalkMinutes: "3 min",
    valetParking: true,
    liveAcousticGhazal: true,
    directBookingPerk: "None",
    verdict: "Pleasant outdoor ground courtyard, but limited Awadhi authentic recipes and higher pricing.",
  },
];

export const COMPETITOR_KEY_ADVANTAGES = [
  {
    title: "Dual Dining Concept",
    desc: "Level 1 Royal Heritage Courtyard for family dining & Level 2 Panoramic Sky Terrace for couples and sundowners.",
    icon: "layers"
  },
  {
    title: "Certified 100% Pure Veg & Jain Line",
    desc: "Completely separated prep line, tandoor, and utensils guaranteeing zero cross-contamination for discerning dietary diners.",
    icon: "leaf"
  },
  {
    title: "24-Hour Charcoal Dal Bukhara",
    desc: "Cooked overnight with hand-churned Makhan using 100-year-old Lucknowi brass utensils, unmatched by generic multi-cuisine menus.",
    icon: "flame"
  },
  {
    title: "Prime Sector 12 Metro Connectivity",
    desc: "Just 200 meters from Dwarka Sector 12 Metro Station (Blue Line) with 150+ free valet parking slots.",
    icon: "train"
  }
];
