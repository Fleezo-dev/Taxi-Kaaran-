export interface RoutePrice {
  id: string;
  from: string;
  to: string;
  category: 'oneway' | 'airport' | 'hillstation' | 'outstation' | 'local';
  distanceKm: number;
  duration: string;
  calculatedPrice: number;
  fareType: string;
  popular?: boolean;
}

export interface HourlyPackage {
  id: string;
  hours: number;
  freeKm: number;
  price: number;
  recommendedFor: string;
}

export interface VehicleOption {
  id: string;
  name: string;
  category: string;
  seats: number;
  luggage: number;
  features: string[];
  tag?: string;
  recommendedFor: string;
  isSpecialFleet?: boolean;
}

export interface DestinationCard {
  id: string;
  name: string;
  tagline: string;
  distanceFromCbe: string;
  driveTime: string;
  isHillStation: boolean;
  description: string;
  highlights: string[];
}

export const COIMBATORE_LOCATIONS = [
  'Coimbatore Airport (CJB)',
  'Coimbatore Junction Railway Station (CBE)',
  'Gandhipuram Central Bus Stand',
  'RS Puram',
  'Peelamedu / TIDEL Park',
  'Saravanampatti / IT Corridor',
  'Ukkadam Bus Stand',
  'Singanallur',
  'Eachanari / Malumichampatti',
  'Vadavalli / Marudhamalai Road',
  'Thudiyalur / Mettupalayam Road',
  'Kovaipudur',
  'Podanur',
  'Chinthamani / Collectorate',
  'Custom Location in Coimbatore'
];

export const DESTINATION_LOCATIONS = [
  'Ooty / Nilgiris',
  'Coonoor / Nilgiris',
  'Isha Yoga Center (Adiyogi)',
  'Kodaikanal Lake',
  'Valparai Hill Station',
  'Pollachi Town',
  'Tiruppur / Garment Hub',
  'Palani Murugan Temple',
  'Munnar (Kerala)',
  'Salem',
  'Mysore Palace',
  'Bangalore City',
  'Madurai',
  'Trichy',
  'Custom Destination'
];

/*
ROUNDED FINAL PRICES:
- Out of city locations like Isha Yoga Center include +150 out-of-city charges.
- All prices are strictly rounded up to clean round hundreds (e.g. 1060 -> 1100, 1650 -> 1700).
- No background calculations or per-km formulas shown to the customer.
*/

export const POPULAR_ROUTES: RoutePrice[] = [
  {
    id: 'r1',
    from: 'Coimbatore Airport (CJB)',
    to: 'Ooty (Nilgiris)',
    category: 'hillstation',
    distanceKm: 88,
    duration: '3.0 Hrs',
    calculatedPrice: 3300, // 88*30 + 600 = 3240 -> rounded 3300
    fareType: 'All Inclusive (Hills & Toll)',
    popular: true
  },
  {
    id: 'r2',
    from: 'Coimbatore City',
    to: 'Isha Yoga Center (Adiyogi)',
    category: 'local',
    distanceKm: 32,
    duration: '1.0 Hr',
    calculatedPrice: 1100, // (32*30 + 100 = 1060) -> rounded clean 1100 as specified!
    fareType: 'All Inclusive (Out of City Charge Incl.)',
    popular: true
  },
  {
    id: 'r3',
    from: 'Coimbatore Junction',
    to: 'Pollachi Town',
    category: 'outstation',
    distanceKm: 45,
    duration: '1.0 Hr',
    calculatedPrice: 1700, // 45*30 + 300 = 1650 -> rounded 1700
    fareType: 'Fixed One-Way Fare',
    popular: true
  },
  {
    id: 'r4',
    from: 'Coimbatore Airport (CJB)',
    to: 'Valparai Hill Station',
    category: 'hillstation',
    distanceKm: 105,
    duration: '3.5 Hrs',
    calculatedPrice: 3800, // 105*30 + 600 = 3750 -> rounded 3800
    fareType: 'All Inclusive (Hills & Toll)',
    popular: true
  },
  {
    id: 'r5',
    from: 'Coimbatore Airport (CJB)',
    to: 'Kodaikanal Lake',
    category: 'hillstation',
    distanceKm: 175,
    duration: '4.5 Hrs',
    calculatedPrice: 5900, // 175*30 + 600 = 5850 -> rounded 5900
    fareType: 'All Inclusive (Hills & Toll)',
    popular: true
  },
  {
    id: 'r6',
    from: 'Coimbatore Airport (CJB)',
    to: 'Gandhipuram / RS Puram',
    category: 'airport',
    distanceKm: 12,
    duration: '25 Min',
    calculatedPrice: 500, // 12*30 + 100 = 460 -> rounded 500
    fareType: 'Fixed Airport Transfer',
    popular: true
  },
  {
    id: 'r7',
    from: 'Coimbatore',
    to: 'Coonoor (Nilgiris)',
    category: 'hillstation',
    distanceKm: 70,
    duration: '2.5 Hrs',
    calculatedPrice: 2700, // 70*30 + 600 = 2700
    fareType: 'All Inclusive (Hills & Toll)',
    popular: false
  },
  {
    id: 'r8',
    from: 'Coimbatore',
    to: 'Tiruppur',
    category: 'outstation',
    distanceKm: 55,
    duration: '1.2 Hrs',
    calculatedPrice: 2000, // 55*30 + 300 = 1950 -> rounded 2000
    fareType: 'Fixed One-Way Fare',
    popular: false
  },
  {
    id: 'r9',
    from: 'Coimbatore',
    to: 'Palani Murugan Temple',
    category: 'outstation',
    distanceKm: 105,
    duration: '2.5 Hrs',
    calculatedPrice: 3500, // 105*30 + 300 = 3450 -> rounded 3500
    fareType: 'Fixed One-Way Fare',
    popular: false
  },
  {
    id: 'r10',
    from: 'Coimbatore',
    to: 'Munnar (Kerala)',
    category: 'hillstation',
    distanceKm: 160,
    duration: '4.5 Hrs',
    calculatedPrice: 5400, // 160*30 + 600 = 5400
    fareType: 'All Inclusive (Hills & Toll)',
    popular: false
  },
  {
    id: 'r11',
    from: 'Coimbatore',
    to: 'Salem',
    category: 'outstation',
    distanceKm: 165,
    duration: '3.0 Hrs',
    calculatedPrice: 5300, // 165*30 + 300 = 5250 -> rounded 5300
    fareType: 'Fixed One-Way Fare',
    popular: false
  },
  {
    id: 'r12',
    from: 'Coimbatore',
    to: 'Mysore Palace',
    category: 'outstation',
    distanceKm: 200,
    duration: '5.0 Hrs',
    calculatedPrice: 6300, // 200*30 + 300 = 6300
    fareType: 'Fixed One-Way Fare',
    popular: false
  },
  {
    id: 'r13',
    from: 'Coimbatore',
    to: 'Bangalore City',
    category: 'outstation',
    distanceKm: 365,
    duration: '6.5 Hrs',
    calculatedPrice: 11300, // 365*30 + 300 = 11250 -> rounded 11300
    fareType: 'Fixed One-Way Fare',
    popular: false
  }
];

export const HOURLY_RENTAL_PACKAGES: HourlyPackage[] = [
  {
    id: 'hr-2',
    hours: 2,
    freeKm: 20,
    price: 700,
    recommendedFor: 'Quick city visits, doctor visits, airport pick & drop with short waiting'
  },
  {
    id: 'hr-4',
    hours: 4,
    freeKm: 40,
    price: 1400,
    recommendedFor: 'Shopping in RS Puram & Cross Cut Road, business meetings in TIDEL Park'
  },
  {
    id: 'hr-8',
    hours: 8,
    freeKm: 80,
    price: 2800,
    recommendedFor: 'Full day city tour, Marudhamalai Temple & Isha Yoga Center visit'
  },
  {
    id: 'hr-12',
    hours: 12,
    freeKm: 120,
    price: 4200,
    recommendedFor: 'Extended city exploration, industrial site visits in Tiruppur / Pollachi'
  }
];

export const VEHICLE_FLEET: VehicleOption[] = [
  {
    id: 'sedan',
    name: 'Executive Sedan',
    category: 'Swift Dzire / Toyota Etios',
    seats: 4,
    luggage: 3,
    tag: 'Standard Sedan',
    recommendedFor: 'Comfortable family journeys, airport transfers & outstation highway trips.',
    features: ['Spacious Boot Space', 'Chilled Air Conditioning', 'Ample Legroom', 'Smooth Highway Ride']
  },
  {
    id: 'suv',
    name: 'Prime SUV',
    category: 'Ertiga / Scorpio / 6-7 Seater',
    seats: 6,
    luggage: 4,
    tag: 'Spacious SUV',
    recommendedFor: 'Hill station tours (Ooty/Kodaikanal), group trips & mountain roads.',
    features: ['Comfortable 6-7 Seater', 'Dual AC Climate Control', 'High Ground Clearance', 'Mountain Climbing Power']
  },
  {
    id: 'crysta_hycross',
    name: 'Innova Crysta / Hycross',
    category: 'Luxury MPV (Call for Rates)',
    seats: 7,
    luggage: 5,
    tag: 'Call For Best Rates',
    recommendedFor: 'VIP corporate guests, family vacationers & luxury travel.',
    features: ['Captain Seat Layout', 'Dual Blowers AC', 'Extra Luggage Capacity', 'Available on Direct Call Request'],
    isSpecialFleet: true
  },
  {
    id: 'tempo_urbania',
    name: 'Force Urbania / Tempo Traveller',
    category: 'Minibus (Call for Rates)',
    seats: 12,
    luggage: 10,
    tag: 'Group Booking',
    recommendedFor: 'Group tours, office outings, pilgrimage & wedding passenger drops.',
    features: ['Pushback Recliner Seats', 'High Capacity AC Unit', 'LED Ambient Lighting', 'Custom Group Quotation'],
    isSpecialFleet: true
  }
];

export const TOP_DESTINATIONS: DestinationCard[] = [
  {
    id: 'ooty',
    name: 'Ooty & Coonoor',
    tagline: 'Queen of Hill Stations in Nilgiris',
    distanceFromCbe: '88 KM',
    driveTime: '3.0 Hours',
    isHillStation: true,
    description: 'Breathe crisp mountain air surrounded by rolling tea plantations, pine forests, and misty blue Nilgiri hills.',
    highlights: ['36 Hairpin Bend Experience', 'Sim\'s Park Coonoor', 'Tea Factory Tour', 'Doddabetta Peak']
  },
  {
    id: 'adiyogi',
    name: 'Isha Yoga Center & Adiyogi',
    tagline: 'World\'s Largest Bust Sculpture at Velliangiri Foothills',
    distanceFromCbe: '32 KM',
    driveTime: '1.0 Hour',
    isHillStation: false,
    description: 'Experience spiritual peace and grandeur at the foot of Velliangiri Mountains. Evening 3D laser light show.',
    highlights: ['112-foot Adiyogi Shiva Statue', 'Dhyanalinga Meditation Space', 'Theerthakund Holy Bath', 'Velliangiri Foothills Views']
  },
  {
    id: 'valparai',
    name: 'Valparai & Sholayar',
    tagline: 'Unspoiled Wildlife & Tea Paradise',
    distanceFromCbe: '105 KM',
    driveTime: '3.5 Hours',
    isHillStation: true,
    description: 'Drive through 40 exhilarating hairpin bends surrounded by dense rainforests and tea estates in Anamalai hills.',
    highlights: ['40 Hairpin Bend Thrill', 'Sholayar Dam Viewpoint', 'Nirar Dam & Waterfalls', 'Wildlife Spotting']
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    tagline: 'Princess of Hill Stations',
    distanceFromCbe: '175 KM',
    driveTime: '4.5 Hours',
    isHillStation: true,
    description: 'A serene mountain getaway with star-shaped lake, evergreen forests, and breathtaking cloud vistas.',
    highlights: ['Star-Shaped Kodai Lake', 'Pillar Rocks Viewpoint', 'Pine Tree Forest', 'Bryant Park']
  }
];

export const SERVICE_STANDARDS = [
  {
    title: 'Guaranteed Fixed Fares',
    description: 'Every route has a clear, upfront fixed final rate. No meter surprises, no hidden extras.'
  },
  {
    title: 'Sedan & SUV Focused Fleet',
    description: 'Specialized comfort fleet with clean Swift Dzire / Etios Sedans and 6-7 Seater SUVs. Larger fleets (Innova Crysta, Urbania) arranged upon direct call.'
  },
  {
    title: 'Experienced Hill Drivers',
    description: 'Skilled drivers familiar with the 36 hairpin bends of Ooty, 40 hairpin bends of Valparai, and Western Ghats routes.'
  },
  {
    title: 'Convenient Hourly Rentals',
    description: 'Fixed hourly city rental packages with free kilometers included for hassle-free shopping, meetings, and local errands.'
  }
];

export const FAQS = [
  {
    question: 'Are your taxi fares fixed or metered?',
    answer: 'All our fares are 100% fixed upfront. What is quoted for your destination is the final amount you pay, with no unexpected meter increments.'
  },
  {
    question: 'Are there any extra charges for hill station trips?',
    answer: 'All hill station routes (such as Ooty, Kodaikanal, and Valparai) already include the ghat charges in the final displayed fare.'
  },
  {
    question: 'How do local hourly rentals work in Coimbatore?',
    answer: 'We provide 2, 4, 8, and 12-hour rental packages with free kilometers included in each tier. You can keep the cab with you for shopping, temple visits, and multiple city stops.'
  },
  {
    question: 'Which vehicle categories can I book?',
    answer: 'We provide Executive Sedans (Swift Dzire / Toyota Etios) and Prime SUVs (Ertiga / Scorpio 6-7 Seaters). For larger family or group vehicles such as Toyota Innova Crysta, Hycross, or Force Urbania Tempo Travellers, please call us directly for customized rates and availability.'
  },
  {
    question: 'How do I book an airport pickup at Coimbatore Airport (CJB)?',
    answer: 'Enter your pickup and destination in the quote form or connect directly with us on WhatsApp or phone. Provide your flight details and our driver will be at the CJB arrival gate on time.'
  }
];
