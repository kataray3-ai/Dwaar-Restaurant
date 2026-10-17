export interface FAQItem {
  question: string;
  answer: string;
  category: 'General & Location' | 'Dining & Rooftop' | 'Buffet & Prices' | 'Diets & Parties';
  targetKeyword: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Why is Dwaar considered the best restaurant in Dwarka Delhi?",
    answer: "Dwaar Heritage & Sky Lounge holds an undisputed 4.9-star rating across 2,840+ reviews due to its unique dual dining concept: a royal Awadhi indoor heritage dining room on Level 1 paired with an open-air romantic Sky Lounge Terrace on Level 2. Signature 24-hour slow-cooked Dal Bukhara, authentic clay-tandoor kebabs, certified zero-contamination Jain kitchen, and dedicated valet parking make it the #1 dining venue in Dwarka.",
    category: "General & Location",
    targetKeyword: "best restaurant in Dwarka"
  },
  {
    question: "Is Dwaar suitable as a family restaurant in Dwarka with kids and elderly?",
    answer: "Yes, Dwaar is widely recognized as the premier family restaurant in Dwarka Sector 12. Level 1 features spacious royal booth seating, complete elevator access for seniors, high-chairs for toddlers, mild non-spicy children's meal options, and gentle live sitar or acoustic music that permits relaxed family conversation without loud club noise.",
    category: "Dining & Rooftop",
    targetKeyword: "family restaurant in Dwarka"
  },
  {
    question: "Does Dwaar offer a romantic rooftop cafe in Dwarka for couples?",
    answer: "Absolutely. Dwaar's Sky Lounge Terrace on Level 2 is the most requested romantic rooftop cafe in Dwarka Delhi. Featuring cozy curtained cabanas, panoramic city views, warm amber fairy lanterns, artisan botanic cocktails/mocktails, and weekend sunset acoustic performances, it is the top choice for candle-light dates and anniversary celebrations.",
    category: "Dining & Rooftop",
    targetKeyword: "romantic rooftop cafe in Dwarka Delhi"
  },
  {
    question: "What are the timings and prices for the unlimited buffet in Dwarka at Dwaar?",
    answer: "Our Unlimited Royal Buffet operates daily with live counter stations: Weekday Lunch Buffet (12:30 PM - 3:45 PM) at ₹799 (Veg) / ₹899 (Non-Veg); Weekend Grand Dinner Buffet with Live Music (Fri - Sun, 7:00 PM - 11:30 PM) at ₹999 (Veg) / ₹1,199 (Non-Veg). Kids below 6 years eat complimentary, and children aged 6-10 receive a 50% discount.",
    category: "Buffet & Prices",
    targetKeyword: "unlimited buffet with live music in Dwarka"
  },
  {
    question: "How do I reach Dwaar from the Dwarka metro station?",
    answer: "Dwaar Heritage & Sky Lounge is situated directly opposite Metro Pillar 1042, just 200 meters (2 minutes walk) from Dwarka Sector 12 Metro Station on the Blue Line (take Exit Gate 2). For guests driving from Gurgaon, Dwarka Expressway, or IGI Airport (12 mins away), we offer complimentary valet parking for 150+ cars.",
    category: "General & Location",
    targetKeyword: "top rated north indian restaurant near Dwarka metro"
  },
  {
    question: "Do you have pure vegetarian and Jain food options in Dwarka?",
    answer: "Yes. Dwaar maintains an independently certified Pure Vegetarian and Jain kitchen sector. All Jain delicacies are prepared strictly without onion, garlic, or root crops using isolated clay tandoors, brass handis, and separate chef teams to guarantee 0% cross-contact.",
    category: "Diets & Parties",
    targetKeyword: "pure vegetarian and jain food options in Dwarka"
  },
  {
    question: "Can I book Dwaar for a birthday party celebration or private gathering?",
    answer: "Yes, Dwaar is the best restaurant for birthday party celebration in Dwarka. We offer our Darbar Banquet Hall (indoor capacity up to 180 guests) and Rooftop Terrace (up to 100 guests) with custom decor, high-end sound systems, bespoke cakes, and multi-course buffet packages starting from ₹850 per person.",
    category: "Diets & Parties",
    targetKeyword: "best restaurant for birthday party celebration in Dwarka"
  },
  {
    question: "What is the average price for two at Dwaar restaurant Dwarka?",
    answer: "The average meal cost for two at Dwaar is ₹1,200 to ₹1,600 for family dining with appetizers, mains, breads, and dessert. For sky lounge dining with cocktails, the average spend is ₹1,600 to ₹2,200.",
    category: "Buffet & Prices",
    targetKeyword: "fine dining Dwarka"
  }
];
