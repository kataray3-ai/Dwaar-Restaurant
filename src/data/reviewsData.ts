export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedLocalGuide: boolean;
  category: 'Family Dining' | 'Rooftop & Couples' | 'Unlimited Buffet' | 'Party & Events';
  reviewText: string;
  highlightDish: string;
  photos?: string[];
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Sunil & Meenakshi Grover',
    location: 'Dwarka Sector 9, Delhi',
    rating: 5,
    date: '3 days ago',
    verifiedLocalGuide: true,
    category: 'Family Dining',
    reviewText: 'Hands down the best restaurant in Dwarka for family dining! We celebrated my mother’s 65th birthday here. The separate pure vegetarian and Jain prep station gave our elders total peace of mind. The Dal Bukhara is cooked for 24 hours and is truly on par with ITC Maurya.',
    highlightDish: '24-Hour Dal Bukhara & Shahi Subz Handi'
  },
  {
    id: 'rev-2',
    author: 'Aakash Verma & Ria Saxena',
    location: 'Dwarka Sector 14, Delhi',
    rating: 5,
    date: '1 week ago',
    verifiedLocalGuide: true,
    category: 'Rooftop & Couples',
    reviewText: 'If you are looking for a romantic rooftop cafe in Dwarka Delhi, Dwaar’s Sky Lounge is unbelievable. We reserved a sunset cabana on Level 2. The aesthetic fairy lights, live acoustic guitarist playing old Hindi melodies, and the Jamun Gin Fizz made our anniversary unforgettable.',
    highlightDish: 'Kakori Murgh Galouti & Jamun Gin Fizz'
  },
  {
    id: 'rev-3',
    author: 'Rohan Malhotra (Corporate Lead)',
    location: 'Janakpuri / Dwarka Expressway',
    rating: 5,
    date: '2 weeks ago',
    verifiedLocalGuide: true,
    category: 'Unlimited Buffet',
    reviewText: 'Tried their Sunday Grand Buffet with 18 of my team members. The unlimited buffet with live music in Dwarka usually gets chaotic elsewhere, but Dwaar manages table service of hot kebabs and fresh chur-chur naans seamlessly. Best buffet value in West Delhi.',
    highlightDish: 'Sunday Grand Buffet & Live Chaat Counter'
  },
  {
    id: 'rev-4',
    author: 'Pooja Aggarwal',
    location: 'Dwarka Sector 12, Delhi',
    rating: 5,
    date: '3 weeks ago',
    verifiedLocalGuide: true,
    category: 'Party & Events',
    reviewText: 'Hosted my son’s 1st birthday party in the Darbar Hall. The management took care of everything from custom pastel balloon decor to warm buffet presentation. Every guest commented that this is the best restaurant for birthday party celebration in Dwarka.',
    highlightDish: 'Afghani Mutton Seekh & Shahi Tukda Brioche'
  },
  {
    id: 'rev-5',
    author: 'Dr. Vivek Sharma',
    location: 'Dwarka Sector 11, Delhi',
    rating: 5,
    date: 'Last month',
    verifiedLocalGuide: true,
    category: 'Family Dining',
    reviewText: 'Just 2 minutes walk from Dwarka Sector 12 Metro Station and they provide complimentary valet parking which is a huge blessing on weekend evenings. Impeccable hygiene and royal hospitable staff.',
    highlightDish: 'Dum Pukht Biryani & Truffle Garlic Naan'
  }
];

export const GOOGLE_RATING_METRICS = {
  overallScore: 4.9,
  totalReviews: 2840,
  foodScore: 4.9,
  ambianceScore: 4.95,
  serviceScore: 4.88,
  valueScore: 4.85,
  fiveStarPercentage: 94
};
