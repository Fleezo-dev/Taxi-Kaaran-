export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
  tips?: string;
}

export interface HotelRecommendation {
  name: string;
  tier: 'Luxury Resort' | 'Boutique Hotel' | 'Heritage Stay' | 'Comfort & Budget';
  area: string;
  highlight: string;
}

export interface RestStop {
  name: string;
  location: string;
  features: string; // e.g. Clean Restrooms, Food Court, EV Charger
}

export interface FoodSpecialty {
  dish: string;
  famousAt: string;
  description: string;
}

export interface DestinationDetail {
  id: string;
  name: string;
  title: string;
  tagline: string;
  distanceFromCbe: string;
  driveTime: string;
  isHillStation: boolean;
  category: 'hillstation' | 'spiritual' | 'wildlife' | 'heritage';
  fixedFareSedan: number;
  fixedFareSUV: number;
  aboutCity: string;
  highlights: string[];
  itinerary: ItineraryStep[];
  onTheWaySightseeing: { name: string; distance: string; description: string }[];
  niceHotels: HotelRecommendation[];
  restRoomsAndStops: RestStop[];
  favoriteFoods: FoodSpecialty[];
  cultureAndTips: string[];
}

export const ALL_DESTINATIONS: DestinationDetail[] = [
  {
    id: 'ooty',
    name: 'Ooty & Coonoor',
    title: 'Ooty & Coonoor Travel Guide & Cab Itinerary',
    tagline: 'Queen of Hill Stations in the Nilgiris',
    distanceFromCbe: '88 KM',
    driveTime: '3.0 Hours',
    isHillStation: true,
    category: 'hillstation',
    fixedFareSedan: 3300,
    fixedFareSUV: 4500,
    aboutCity: 'Nestled in the Nilgiri Hills at an altitude of 2,240 meters, Udhagamandalam (Ooty) was once the summer capital of the Madras Presidency. Famous for emerald green tea slopes, towering eucalyptus trees, colonial bungalows, and the UNESCO Heritage Nilgiri Mountain Railway, it offers refreshing weather year-round.',
    highlights: ['36 Hairpin Bends Thrill', 'Sim\'s Park Coonoor', 'Tea Factory & Chocolate Tasting', 'Doddabetta Peak View'],
    itinerary: [
      { time: '06:00 AM', title: 'Pickup from Coimbatore', description: 'Early morning pickup from Coimbatore Airport or hotel. Enjoy the cool morning breeze through Mettupalayam foothills.' },
      { time: '07:30 AM', title: 'Breakfast Stop in Mettupalayam / Burliar', description: 'Enjoy steaming hot idlis and crisp vadas with Nilgiri filter coffee at highway vegetarian restaurants.' },
      { time: '08:30 AM', title: 'Drive up the 36 Hairpin Bends', description: 'Ascend the scenic ghat road through Kallar fruit gardens and Coonoor valley with photo stops at Kattery Dam.' },
      { time: '10:30 AM', title: 'Explore Sim\'s Park & Dolphin\'s Nose (Coonoor)', description: 'Stroll through the 12-hectare botanical park featuring rare tree species, followed by breathtaking views of Catherine Falls.' },
      { time: '01:00 PM', title: 'Authentic Badaga & South Indian Lunch', description: 'Relish lunch at traditional Nilgiri eateries or hillside restaurants with panoramic valley views.' },
      { time: '02:30 PM', title: 'Tea Museum & Chocolate Factory', description: 'See orthodox tea processing from leaf to cup and sample freshly tempered Ooty chocolates.' },
      { time: '04:30 PM', title: 'Ooty Lake & Botanical Garden', description: 'Boating at the star attraction Ooty Lake and relaxed walking across the lush Victorian Botanical Garden.' },
      { time: '06:30 PM', title: 'Return Drive or Hotel Check-in', description: 'Comfortable downhill journey back to Coimbatore or drop at your hillside resort.' }
    ],
    onTheWaySightseeing: [
      { name: 'Kallar Horticulture Farm', distance: '38 KM from CBE', description: 'Sprawling government fruit orchards and exotic spice plants at the base of the ghats.' },
      { name: 'Kattery Waterfalls & Park', distance: '65 KM from CBE', description: 'Scenic mountain stop with bridge viewpoints and tea estate panoramas.' },
      { name: 'Lamb\'s Rock & Dolphin\'s Nose', distance: '78 KM from CBE', description: 'Stunning precipice with 180-degree vistas of the Coimbatore plains and Catherine Falls.' },
      { name: 'Valley Viewpoint Coonoor', distance: '72 KM from CBE', description: 'Famous viewpoint overlooking the emerald tea gardens and mountain railway track.' }
    ],
    niceHotels: [
      { name: 'Savoy - IHCL SeleQtions', tier: 'Luxury Resort', area: 'Ooty Town', highlight: 'Colonial heritage luxury with manicured lawns and fireplace cottages.' },
      { name: 'Sterling Ooty Fern Hill', tier: 'Luxury Resort', area: 'Fern Hill', highlight: 'Spectacular valley views, organic farm dining, and indoor recreation.' },
      { name: 'Gateway Coonoor (Taj)', tier: 'Heritage Stay', area: 'Upper Coonoor', highlight: 'Peaceful Nilgiri retreat surrounded by British-era gardens.' },
      { name: 'Hotel Gem Park', tier: 'Comfort & Budget', area: 'Sheddon Road, Ooty', highlight: 'Central location, heated indoor pool, and family-friendly suites.' }
    ],
    restRoomsAndStops: [
      { name: 'A2B (Adyar Ananda Bhavan)', location: 'Mettupalayam Highway (Near Karamadai)', features: 'Spacious clean restrooms, parking, pure veg dining, filter coffee' },
      { name: 'Sri Annapoorna', location: 'Mettupalayam Main Road', features: 'Spotless washrooms, famous sambar vada, quick takeaway snacks' },
      { name: 'Coonoor Hill Station Rest Point', location: 'Near Coonoor Bus Stand', features: 'Clean tourist facility, tea stalls, ATM' }
    ],
    favoriteFoods: [
      { dish: 'Ooty Varkey (Nilgiri Puff Biscuit)', famousAt: 'West Coast Bakery / Modern Stores', description: 'Crispy, layered flaky pastry biscuit best paired with hot cardamom tea.' },
      { dish: 'Handmade Nilgiri Chocolates', famousAt: 'King Star & Moddy\'s Confectionery', description: 'Rich dark chocolates infused with roasted almonds, rum raisins, and coffee.' },
      { dish: 'Traditional Badaga Sandhavai & Eragi Pittu', famousAt: 'Native Nilgiri Eateries', description: 'Steamed rice noodles and millet delicacies prepared with local hill spices.' },
      { dish: 'Fresh Nilgiri Tea & Masala Chai', famousAt: 'Doddabetta Tea Factory Outlet', description: 'Pure high-grown black orthodox and green tea brewed fresh on the mountainside.' }
    ],
    cultureAndTips: [
      'Nilgiris has a strict plastic-free ban: single-use plastic water bottles and carry bags are prohibited.',
      'Carry warm fleece jackets and rain umbrellas as mountain weather can shift quickly into fog and rain.',
      'Our drivers are seasoned with the 36 hairpin bends and drive at controlled, motion-sickness-friendly speeds.',
      'Pre-booking the Toy Train (NMR) from Mettupalayam to Ooty on IRCTC 30 days in advance is recommended.'
    ]
  },
  {
    id: 'adiyogi',
    name: 'Isha Yoga Center & Adiyogi',
    title: 'Isha Yoga Center & Adiyogi Shiva Statue Itinerary & Guide',
    tagline: 'World\'s Largest Bust Sculpture at Velliangiri Foothills',
    distanceFromCbe: '32 KM',
    driveTime: '1.0 Hour',
    isHillStation: false,
    category: 'spiritual',
    fixedFareSedan: 1100,
    fixedFareSUV: 1600,
    aboutCity: 'Set at the tranquil base of the sacred Velliangiri Mountains (known as the Southern Kailash), the Isha Yoga Center was founded by Sadhguru. It is home to the majestic 112-foot Adiyogi Shiva statue, consecrated by the Guinness World Records, alongside the uniquely consecrated Dhyanalinga and Linga Bhairavi meditation spaces.',
    highlights: ['112-foot Adiyogi Shiva Statue', 'Dhyanalinga Meditation Space', 'Holy Theerthakund Dips', 'Evening 3D Laser Projection Show'],
    itinerary: [
      { time: '02:30 PM', title: 'Pickup from Coimbatore City / Airport', description: 'Smooth direct drive through Siruvani Road surrounded by coconut groves and Western Ghat horizons.' },
      { time: '03:45 PM', title: 'Arrival & Theerthakund Holy Bath', description: 'Experience the energizing subterranean water body (Suryakund for men, Chandrakund for women) with consecrated rasalingas.' },
      { time: '04:45 PM', title: 'Dhyanalinga & Linga Bhairavi Meditation', description: 'Sit in silent contemplation beneath the massive brick dome of Dhyanalinga, followed by evening Aarti at Devi temple.' },
      { time: '06:15 PM', title: 'Walk to 112-ft Adiyogi Statue', description: 'Capture panoramic evening photographs in front of the colossal black steel bust as the sun sets over the mountains.' },
      { time: '07:00 PM', title: 'Adiyogi Divya Darshanam Light Show', description: 'Watch the spellbinding 14-minute 3D laser mapping projection on the face of the Adiyogi statue accompanied by music.' },
      { time: '08:00 PM', title: 'Dinner at Moondram Pirai / Peepal Cafe', description: 'Enjoy healthy organic multi-grain dosas, herbal drinks, and pure vegetarian South Indian dinner.' },
      { time: '09:00 PM', title: 'Comfortable Return to Coimbatore', description: 'Cab drops you safely back at your hotel, airport, or railway junction.' }
    ],
    onTheWaySightseeing: [
      { name: 'Perur Pateeswarar Temple', distance: '8 KM from CBE', description: '2,000-year-old Chola-era temple renowned for the Kanaka Sabha hall of intricately carved stone pillars.' },
      { name: 'Velliangiri Hills Foothills (Poondi)', distance: '28 KM from CBE', description: 'Sacred mountain base with centuries-old Shiva temple and refreshing stream breeze.' },
      { name: 'Madukkarai Forest Corridor Views', distance: '20 KM from CBE', description: 'Lush greenery, peacock crossings, and coconut plantations lining the countryside.' }
    ],
    niceHotels: [
      { name: 'Nadhi Isha Cottages & Chitra', tier: 'Heritage Stay', area: 'Inside / Near Ashram', highlight: 'Serene ashram-style stay with access to silent meditation areas.' },
      { name: 'Radisson Blu Coimbatore', tier: 'Luxury Resort', area: 'Peelamedu, CBE', highlight: 'Premium 5-star comfort near Coimbatore Airport with pool and multi-cuisine restaurants.' },
      { name: 'Le Meridien Coimbatore', tier: 'Luxury Resort', area: 'Avinashi Road', highlight: 'International luxury suites, spa, and seamless highway access to Isha.' },
      { name: 'Poondi Temple Guesthouses', tier: 'Comfort & Budget', area: 'Poondi Foothills', highlight: 'Affordable, simple devotee accommodations close to Velliangiri base.' }
    ],
    restRoomsAndStops: [
      { name: 'Isha Welcome Point Restrooms', location: 'Adiyogi Entry Plaza', features: 'Massive clean public facility, shoe counters, luggage lockers' },
      { name: 'Sri Krishna Sweets Highway Counter', location: 'Perur Bypass', features: 'Clean washrooms, fresh Mysorepak, filter coffee' },
      { name: 'Siruvani Road Highway Food Plaza', location: 'Thondamuthur Junction', features: 'Restrooms, parking, tea stalls, fresh tender coconut' }
    ],
    favoriteFoods: [
      { dish: 'Ragi Kali & Vendakkai Mandi', famousAt: 'Rural Thondamuthur Mess', description: 'Nutritious finger millet ball served with spicy sour okra curry.' },
      { dish: 'Organic Millets Dosa & Sukku Coffee', famousAt: 'Peepal Cafe (Isha Campus)', description: 'Crisp foxtail millet crepe served with peanut and mint chutneys and dry ginger tea.' },
      { dish: 'Coimbatore Siruvani Ghee Roast', famousAt: 'Hotel Anandhas / Annapoorna', description: 'Golden crepe roasted in fragrant desi ghee using sweet Siruvani water.' }
    ],
    cultureAndTips: [
      'Dress code for Dhyanalinga: Shoulders and knees must be fully covered (dhoti, salwar, or trousers recommended).',
      'Mobile phones must be deposited in silent lockers before entering the Dhyanalinga inner sanctum.',
      'The 3D Laser show begins promptly around 7:00 PM on weekends and special occasions; arriving by 6:00 PM secures prime seating.',
      'Taxi Kaaran drivers wait at the designated parking area and coordinate pickup right after the laser show.'
    ]
  },
  {
    id: 'valparai',
    name: 'Valparai & Sholayar',
    title: 'Valparai 40 Hairpin Bends & Tea Estate Safari Itinerary',
    tagline: 'Unspoiled Wildlife & Tea Paradise in Anamalai Hills',
    distanceFromCbe: '105 KM',
    driveTime: '3.5 Hours',
    isHillStation: true,
    category: 'wildlife',
    fixedFareSedan: 3800,
    fixedFareSUV: 5200,
    aboutCity: 'Situated 3,500 feet above sea level in the Anamalai mountain range, Valparai is a pristine hill station surrounded by evergreen rainforests, tea estates, and wildlife sanctuaries. The drive from Pollachi features 40 exhilarating hairpin bends offering panoramic views of Aliyar Dam and sightings of Lion-tailed Macaques and Nilgiri Tahr.',
    highlights: ['40 Hairpin Bends Road Trip', 'Sholayar Dam Reservoir', 'Aliyar Dam & Park', 'Lion-Tailed Macaque Sightings'],
    itinerary: [
      { time: '06:00 AM', title: 'Depart from Coimbatore', description: 'Drive past Pollachi coconut groves toward the forest checkpost of Anamalai Tiger Reserve.' },
      { time: '07:30 AM', title: 'Aliyar Dam & Breakfast', description: 'Stop by Aliyar Dam reservoir for morning photos and breakfast at Tamil Nadu Tourism restaurant.' },
      { time: '08:30 AM', title: 'Ascend the 40 Hairpin Bends', description: 'Climb through mist-covered tea gardens with scheduled viewpoints at the 9th, 27th, and 34th bends.' },
      { time: '11:00 AM', title: 'Carver Marsh Statue & Loam\'s Viewpoint', description: 'View the sweeping valley panorama named after the British pioneer who brought tea to Valparai.' },
      { time: '01:00 PM', title: 'Traditional Estate Lunch in Valparai Town', description: 'Enjoy hot Kongu style chicken or vegetarian curry with red rice at local town messes.' },
      { time: '02:30 PM', title: 'Majestic Sholayar Dam', description: 'Visit Asia\'s second deepest dam reservoir nestled deep inside thick tropical rainforest.' },
      { time: '04:30 PM', title: 'Nirar Dam & Waterfall Walk', description: 'Walk through dense wooden suspension pathways surrounded by singing cicadas and mist.' },
      { time: '05:30 PM', title: 'Return Drive with Sunset Over Aliyar', description: 'Golden sunset descent over the ghats back to Pollachi and Coimbatore.' }
    ],
    onTheWaySightseeing: [
      { name: 'Aliyar Dam & Aquarium', distance: '65 KM from CBE', description: 'Sprawling reservoir gardens with boating and aquarium at the base of the ghats.' },
      { name: 'Loam\'s Viewpoint (9th Hairpin Bend)', distance: '78 KM from CBE', description: 'Famous overlook directly framing the blue waters of Aliyar Dam below.' },
      { name: 'Monkey Falls', distance: '70 KM from CBE', description: 'Natural waterfall cascade cascading off rocky steps by the highway.' },
      { name: 'Koozhangal River View', distance: '108 KM from CBE', description: 'Shallow crystal river flowing through tea estates, popular for dipping feet.' }
    ],
    niceHotels: [
      { name: 'Briar Tea Bungalows', tier: 'Heritage Stay', area: 'Sirukundra Estate', highlight: 'Authentic British planter bungalows in the middle of working tea estates.' },
      { name: 'Stanmore Garden Bungalow', tier: 'Luxury Resort', area: 'Stanmore Estate', highlight: 'Riverfront luxury villa with private chef and guided wildlife treks.' },
      { name: 'Hotel Green Hill', tier: 'Comfort & Budget', area: 'Valparai Town', highlight: 'Clean comfortable rooms, restaurant, and convenient central parking.' },
      { name: 'Coco Lagoon by Great Mount', tier: 'Luxury Resort', area: 'Pollachi Foothills', highlight: 'Eco-luxury resort with swimming pool, ayurveda spa, and boat lake.' }
    ],
    restRoomsAndStops: [
      { name: 'TTDC Aliyar Restaurant', location: 'Aliyar Dam Gate', features: 'Public restrooms, parking, canteen, snacks' },
      { name: 'Valparai Town Central Complex', location: 'Main Bus Terminal', features: 'Basic clean facilities, pharmacy, ATM' },
      { name: 'Hotel Green Hill Rest Stop', location: 'Valparai Town', features: 'Clean restaurant washrooms, tea counter' }
    ],
    favoriteFoods: [
      { dish: 'Pollachi Country Chicken (Nattu Kozhi) Roast', famousAt: 'Kongu Mess Valparai', description: 'Free-range chicken slow-cooked with freshly ground shallots, pepper, and coconut oil.' },
      { dish: 'Estate Fresh Cardamom & Vanilla Tea', famousAt: 'Woodbriar Estate Outlets', description: 'Directly sourced whole-leaf mountain tea brewed with native hill spices.' },
      { dish: 'Pollachi Elaneer Payasam', famousAt: 'Local Pollachi Highway Stalls', description: 'Heavenly chilled dessert made with sweet tender coconut pulp and milk.' }
    ],
    cultureAndTips: [
      'Valparai is an active wildlife corridor: maintain quietness, avoid feeding monkeys, and stay inside the car during elephant crossings.',
      'Checkpost at Aliyar closes for uphill traffic after 6:00 PM; planning an early morning departure is mandatory.',
      'Mobile connectivity is limited to BSNL in interior estate areas; our drivers know every route intimately.',
      'Always carry rain gear and leeches repellent when stepping into tea estate walking trails.'
    ]
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    title: 'Kodaikanal Hill Station & Lake Tour Itinerary',
    tagline: 'Princess of Hill Stations in Palani Hills',
    distanceFromCbe: '175 KM',
    driveTime: '4.5 Hours',
    isHillStation: true,
    category: 'hillstation',
    fixedFareSedan: 5900,
    fixedFareSUV: 7800,
    aboutCity: 'Perched 2,133 meters high in the Palani Hills of the Western Ghats, Kodaikanal was established by American Christian missionaries in 1845. Celebrated for its star-shaped man-made lake, Pillar Rocks, rolling pine forests, and misty waterfalls, it offers a cool retreat with average temperatures rarely exceeding 20°C.',
    highlights: ['Star-Shaped Kodai Lake', 'Pillar Rocks Viewpoint', 'Dense Pine Forests', 'Coaker\'s Walk Valley Views'],
    itinerary: [
      { time: '05:30 AM', title: 'Departure from Coimbatore', description: 'Early morning start through Pollachi and Dharapuram or Palani bypass toward the ghat ascent.' },
      { time: '08:00 AM', title: 'Breakfast Stop in Palani / Batlagundu', description: 'Hearty South Indian breakfast with piping hot filter coffee.' },
      { time: '10:00 AM', title: 'Silver Cascade Waterfall', description: 'First scenic landmark greeting travelers on the ghat road with 180-foot plunging white water.' },
      { time: '11:00 AM', title: 'Coaker\'s Walk & Bryant Park', description: 'Walk along the edge of steep mountain slopes with telescopes providing vistas of the plains.' },
      { time: '01:00 PM', title: 'Lunch by Kodaikanal Lake', description: 'Dine at hillside cafes overlooking the iconic lake with warm soups, sizzlers, and thalis.' },
      { time: '02:30 PM', title: 'Pillar Rocks & Guna Caves', description: 'View the three dramatic 400-foot granite boulder pillars protruding out of the mountain cliff.' },
      { time: '04:00 PM', title: 'Pine Forest & Moir Point', description: 'Stroll among towering Scandinavian pine trees planted in 1906, popular for film shoots.' },
      { time: '05:30 PM', title: 'Pedal Boating on Kodai Lake', description: 'Gentle evening boating in misty waters followed by chocolate shopping at Tibetan market.' }
    ],
    onTheWaySightseeing: [
      { name: 'Silver Cascade Falls', distance: '165 KM from CBE', description: 'Rushing mountain waterfall formed from the outflow of Kodai Lake.' },
      { name: 'Dum Dum Rock Viewpoint', distance: '150 KM from CBE', description: 'Picturesque rest point overlooking the winding ghat road and Manjalar Dam.' },
      { name: 'Palani Temple Foothills', distance: '105 KM from CBE', description: 'View of the sacred Murugan hill temple rising dramatically above the plains.' }
    ],
    niceHotels: [
      { name: 'The Carlton Kodaikanal', tier: 'Luxury Resort', area: 'Lake Road', highlight: 'The only 5-star hotel situated directly on the banks of Kodai Lake.' },
      { name: 'Tamara Kodai', tier: 'Luxury Resort', area: 'St. Mary\'s Road', highlight: 'Luxury suites set inside a restored 1840s French heritage monastery.' },
      { name: 'Villa Retreat', tier: 'Heritage Stay', area: 'Coaker\'s Walk', highlight: 'Boutique heritage cottage directly overlooking the dramatic cliff edge.' },
      { name: 'Sterling Kodaikanal Lake', tier: 'Comfort & Budget', area: 'Gymkhana Road', highlight: 'Spacious family apartments and entertainment activities.' }
    ],
    restRoomsAndStops: [
      { name: 'Highway Grand Palace', location: 'Dharapuram / Palani Highway', features: 'Spacious parking, clean restrooms, veg restaurant' },
      { name: 'Ghat Foothill Toll Plaza Rest Area', location: 'Base of Kodai Ghats', features: 'Clean washrooms, snacks, puncture repair' },
      { name: 'Carlton Plaza Tourist Restrooms', location: 'Near Lake Gate', features: 'Convenient central facility' }
    ],
    favoriteFoods: [
      { dish: 'Warm Butter Spiced Corn & Thukpa', famousAt: 'Tibetan Market Kodaikanal', description: 'Steaming hot Tibetan noodle soup and freshly roasted buttered sweet corn.' },
      { dish: 'Homemade Fruit & Nut Fudge', famousAt: 'Eco Nut & Pastry Corner', description: 'Artisanal chocolate fudge made with pure mountain milk and honey.' },
      { dish: 'Wood-fired Sourdough Pizza', famousAt: 'Cloud Street Cafe', description: 'Freshly baked thin crust pizza with local hill vegetables and melted cheese.' }
    ],
    cultureAndTips: [
      'Night driving on the Kodaikanal ghats is restricted; plan your descent before dusk for safety.',
      'Rent a bicycle around the 5 km perimeter of Kodai Lake for an immersive morning tour.',
      'Carry valid government ID proofs required at forest checkpoints for Guna Caves and Berijam Lake.',
      'Our drivers know the alternative non-congested bypass roads during tourist peak weekends.'
    ]
  },
  {
    id: 'pollachi',
    name: 'Pollachi & Topslip',
    title: 'Pollachi & Anamalai Tiger Reserve Itinerary',
    tagline: 'Coconut Capital of Tamil Nadu & Wildlife Gateway',
    distanceFromCbe: '45 KM',
    driveTime: '1.0 Hour',
    isHillStation: false,
    category: 'wildlife',
    fixedFareSedan: 1700,
    fixedFareSUV: 2400,
    aboutCity: 'Situated at the southern base of the Western Ghats, Pollachi is world-famous for its endless coconut groves, tender coconut markets, jaggery trade, and pleasant climate. It serves as the primary gateway to Topslip, Parambikulam Tiger Reserve, and scenic Kollywood film shooting locations.',
    highlights: ['Endless Coconut Plantations', 'Topslip Forest Safari', 'Parambikulam Tiger Reserve', 'Masani Amman Temple'],
    itinerary: [
      { time: '06:30 AM', title: 'Pickup from Coimbatore', description: 'Short pleasant 45 km drive through Kinathukadavu on smooth 4-lane highway.' },
      { time: '07:30 AM', title: 'Breakfast in Pollachi Town', description: 'Try Pollachi\'s famous crispy idlis and hot parottas with spicy shallot salna.' },
      { time: '08:30 AM', title: 'Drive to Topslip Forest Entry', description: 'Pass through bamboo thickets and teak plantations into Anamalai Wildlife Sanctuary.' },
      { time: '09:30 AM', title: 'Forest Department Van Safari', description: '2-hour jungle safari spotting spotted deer, Indian gaur (bison), wild boars, and Asian elephants.' },
      { time: '01:00 PM', title: 'Traditional Kongu Lunch', description: 'Savor Pollachi\'s signature cuisine made with virgin coconut oil and country spices.' },
      { time: '02:30 PM', title: 'Aliyar Dam & Coconut Farm Walk', description: 'Visit a model organic coconut farm to see toddy tapping and coir rope making traditions.' },
      { time: '04:30 PM', title: 'Masani Amman & Anaimalai Temple', description: 'Visit the revered 17-foot reclining deity temple known for clearing disputes.' },
      { time: '06:30 PM', title: 'Return Drop at Coimbatore', description: 'Swift 1-hour highway drive back to Coimbatore.' }
    ],
    onTheWaySightseeing: [
      { name: 'Kinathukadavu Windmill Farm', distance: '25 KM from CBE', description: 'Hundreds of majestic wind energy turbines turning against mountain backdrop.' },
      { name: 'Sethumadai Village Trail', distance: '60 KM from CBE', description: 'Picture-postcard village famous as a shooting location for over 500 South Indian films.' },
      { name: 'Kozhikamuthi Elephant Camp', distance: '72 KM from CBE', description: 'Camp where kumki elephants are cared for by indigenous Kadar tribal mahouts.' }
    ],
    niceHotels: [
      { name: 'Coco Lagoon by Great Mount', tier: 'Luxury Resort', area: 'Meenkarai Road', highlight: '5-star village resort with private villas and lotus ponds.' },
      { name: 'Banyan Tree Farm Stay', tier: 'Heritage Stay', area: 'Sethumadai', highlight: 'Live in a working organic coconut plantation with home-cooked meals.' },
      { name: 'Hotel Nivetha\'s Grand', tier: 'Comfort & Budget', area: 'Pollachi Town', highlight: 'Modern clean rooms with multi-cuisine restaurant and easy parking.' }
    ],
    restRoomsAndStops: [
      { name: 'A2B Kinathukadavu Toll Plaza', location: 'NH 83 Highway', features: 'Spotless restrooms, EV charging, south Indian dining' },
      { name: 'Topslip Reception Center', location: 'Sethumadai Gate', features: 'Forest department restrooms, drinking water, ticketing' }
    ],
    favoriteFoods: [
      { dish: 'Pollachi Fresh Tender Coconut (Sevvazhai & Chowghat)', famousAt: 'Highway Roadside Stalls', description: 'World-renowned sweet natural coconut water with thick jelly meat.' },
      { dish: 'Kongu Kattu Soru (Variety Rice in Banana Leaf)', famousAt: 'Native Pollachi Farm Stays', description: 'Fragrant lemon, tomato, and curd rice tied in flame-wilted banana leaf.' },
      { dish: 'Pollachi Pallipalayam Mutton / Mushroom', famousAt: 'Classic Pollachi Mess', description: 'Cooked without masala powder using only dry red chilies, garlic, and coconut pieces.' }
    ],
    cultureAndTips: [
      'Topslip safaris operate on first-come-first-serve; arriving at the Sethumadai checkpost before 8:30 AM is ideal.',
      'Pollachi has India\'s largest market for jaggery and tender coconuts; Tuesday is the weekly cattle and coconut bazaar.',
      'Respect tribal traditions and wildlife regulations: plastic littering is strictly fined by forest guards.'
    ]
  },
  {
    id: 'munnar',
    name: 'Munnar (Kerala)',
    title: 'Munnar Tea Hills & Waterfalls Road Trip Guide',
    tagline: 'Kashmir of South India in God\'s Own Country',
    distanceFromCbe: '160 KM',
    driveTime: '4.5 Hours',
    isHillStation: true,
    category: 'hillstation',
    fixedFareSedan: 5400,
    fixedFareSUV: 7200,
    aboutCity: 'Situated at the confluence of three mountain streams (Mudhirapuzha, Nallathanni, and Kundaly), Munnar is South India\'s largest tea-growing hub. Famous for Anamudi Peak (the highest peak in South India at 2,695m), Neelakurinji blooms, and endangered Nilgiri Tahrs in Eravikulam National Park.',
    highlights: ['Eravikulam National Park (Nilgiri Tahr)', 'Mattupetty Dam & Speed Boating', 'Tata Tea Museum', 'Echo Point'],
    itinerary: [
      { time: '05:30 AM', title: 'Pickup from Coimbatore', description: 'Scenic drive through Pollachi, Udumalpet, and Chinnar Wildlife Sanctuary across the Kerala border.' },
      { time: '07:30 AM', title: 'Chinnar Wildlife Corridor', description: 'Spot wild elephants, star tortoises, and langurs on the picturesque dry thorn scrub road.' },
      { time: '09:00 AM', title: 'Marayoor Sandalwood Forest & Jaggery Farm', description: 'See India\'s only natural sandalwood forest and taste freshly prepared sugarcane jaggery.' },
      { time: '11:00 AM', title: 'Eravikulam National Park', description: 'Ascend by park bus to observe the wild mountain goats (Nilgiri Tahr) grazing near Anamudi Peak.' },
      { time: '01:30 PM', title: 'Kerala Sadhya / Malabar Fish Curry Lunch', description: 'Feast on authentic Kerala lunch with red matta rice, avial, and spicy karimeen.' },
      { time: '03:00 PM', title: 'Mattupetty Dam & Echo Point', description: 'Enjoy speed boating on the mountain reservoir and shout across the natural acoustic lake.' },
      { time: '05:00 PM', title: 'Tea Tasting & Spice Shopping', description: 'Purchase pure Munnar cardamom, cinnamon, clove, and orthodox tea directly from factory stalls.' }
    ],
    onTheWaySightseeing: [
      { name: 'Chinnar Wildlife Sanctuary', distance: '90 KM from CBE', description: 'Dense forest reserve home to the endangered grizzled giant squirrel.' },
      { name: 'Lakkam Waterfalls', distance: '135 KM from CBE', description: 'Crystal-clear waterfall cascading over smooth black boulders surrounded by vaga trees.' },
      { name: 'Marayoor Dolmens (Muniyaras)', distance: '110 KM from CBE', description: 'Prehistoric megalithic stone burial chambers dating back over 3,000 years.' }
    ],
    niceHotels: [
      { name: 'Fragrant Nature Munnar', tier: 'Luxury Resort', area: 'Pothamedu', highlight: '5-star hillside luxury with in-room fireplaces and panoramic tea valley views.' },
      { name: 'Windermere Estate', tier: 'Heritage Stay', area: 'Pallivasal', highlight: 'Charming planter estate home with handcrafted teak furniture and coffee walks.' },
      { name: 'Tea County Munnar (KTDC)', tier: 'Comfort & Budget', area: 'Munnar Town', highlight: 'Government-run trusted hotel situated between two hills in central Munnar.' }
    ],
    restRoomsAndStops: [
      { name: 'Udumalpet Bypass Food Mall', location: 'NH 83', features: 'Spacious restrooms, south & north Indian food, parking' },
      { name: 'Marayoor Kerala Tourism Rest Point', location: 'Near Forest Station', features: 'Clean washrooms, tea counter, ATM' }
    ],
    favoriteFoods: [
      { dish: 'Kerala Appam with Vegetable / Chicken Stew', famousAt: 'Saravana Bhavan Munnar', description: 'Soft fermented rice pancakes with coconut milk and whole spice stew.' },
      { dish: 'Malabar Parotta & Beef / Mushroom Roast', famousAt: 'Rapsy Restaurant', description: 'Flaky layered Kerala parotta with rich caramelized onion and pepper gravy.' },
      { dish: 'Pure Marayoor Sharkara (Jaggery)', famousAt: 'Marayoor Village Outlets', description: 'Golden chemical-free natural sugarcane jaggery, famous for distinct sweetness.' }
    ],
    cultureAndTips: [
      'Kerala State Border Tax: Our outstation quote handles state transport permits seamlessly.',
      'Eravikulam National Park closes for calving season between February and March; check availability.',
      'Carry motion sickness tablets if sensitive to ghat curves, though our drivers maintain gentle speeds.'
    ]
  },
  {
    id: 'palani',
    name: 'Palani Murugan Temple',
    title: 'Palani Murugan Hill Temple Pilgrimage Guide',
    tagline: 'Third Abode of Lord Murugan (Arupadaiveedu)',
    distanceFromCbe: '105 KM',
    driveTime: '2.5 Hours',
    isHillStation: false,
    category: 'spiritual',
    fixedFareSedan: 3500,
    fixedFareSUV: 4800,
    aboutCity: 'Palani is home to the world-renowned Dhandayuthapani Swamy Temple, one of the sacred Six Abodes (Arupadaiveedu) of Lord Murugan. Situated atop the Sivagiri hill, the consecrated deity was crafted from Navapashanam (a divine compound of nine medicinal minerals) by the ancient Siddha Bogar over 3,000 years ago.',
    highlights: ['Sivagiri Hill Temple Darshan', 'Winch & Rope Car Ascents', 'Bogar Samadhi Shrine', 'Famous Palani Panchamirtham'],
    itinerary: [
      { time: '05:30 AM', title: 'Pickup from Coimbatore', description: 'Early morning spiritual journey via Pollachi and Dharapuram to avoid afternoon heat.' },
      { time: '08:00 AM', title: 'Arrival at Palani & Breakfast', description: 'Traditional vegetarian breakfast near the Giri Veethi (temple circumambulation path).' },
      { time: '09:00 AM', title: 'Ascend by Rope Car or Winch Train', description: 'Enjoy the scenic aerial ropeway gliding above coconut trees to the hilltop temple.' },
      { time: '10:00 AM', title: 'Dhandayuthapani Swamy Special Darshan', description: 'Darshan of the idol of Lord Murugan in the ascetic pose with spear (Vel).' },
      { time: '11:30 AM', title: 'Visit Bogar Samadhi & Inner Shrines', description: 'Pay homage at the mystical shrine where Siddha Bogar entered eternal meditation.' },
      { time: '01:00 PM', title: 'Temple Prasadam & South Indian Lunch', description: 'Traditional plantain leaf meal at renowned vegetarian pilgrim restaurants.' },
      { time: '02:30 PM', title: 'Palani Devasthanam Panchamirtham Center', description: 'Purchase freshly packed authentic GI-tagged temple panchamirtham.' },
      { time: '04:00 PM', title: 'Comfortable Return to Coimbatore', description: 'Relaxed journey back with drop at hotel, home, or Coimbatore Junction.' }
    ],
    onTheWaySightseeing: [
      { name: 'Kudhiraiyar Dam', distance: '90 KM from CBE', description: 'Peaceful irrigation reservoir with water views tucked against mountain hills.' },
      { name: 'Periyanayaki Amman Temple', distance: '102 KM from CBE', description: 'Sprawling Chola-Nayakar architecture temple in downtown Palani.' }
    ],
    niceHotels: [
      { name: 'Hotel Ganpat Grand', tier: 'Comfort & Budget', area: 'Adivaram, Palani', highlight: 'Clean pilgrim hotel located walking distance to the winch station.' },
      { name: 'Vels Court', tier: 'Comfort & Budget', area: 'Near Bus Stand', highlight: 'Modern clean rooms, pure veg restaurant, and ample secure parking.' }
    ],
    restRoomsAndStops: [
      { name: 'Dharapuram Highway Food Court', location: 'State Highway', features: 'Spacious restrooms, pure veg thalis, parking' },
      { name: 'Palani Devasthanam Pilgrim Complex', location: 'Adivaram', features: 'Shoe stalls, luggage lockers, shower & wash facilities' }
    ],
    favoriteFoods: [
      { dish: 'Palani Panchamirtham (GI Tagged)', famousAt: 'Devasthanam Official Counters', description: 'Divine mixture of virupachi bananas, jaggery, cow ghee, honey, and cardamom.' },
      { dish: 'Kalkandu Pongal & Vada', famousAt: 'Hotel Nalapakam Palani', description: 'Sweet rock-sugar rice pudding with ghee cashews and savory pepper vada.' }
    ],
    cultureAndTips: [
      'Dress Code: Traditional attire is strictly enforced (Dhoti/Kurta for men; Saree/Salwar for women; no shorts).',
      'Rope car tickets often have queues; special darshan tickets (₹100/₹250) can be booked in advance.',
      'Buy Panchamirtham only from the official Devasthanam counters with tamper-evident seal.'
    ]
  },
  {
    id: 'siruvani',
    name: 'Siruvani & Marudhamalai',
    title: 'Siruvani Waterfalls & Marudhamalai Day Trip',
    tagline: 'World\'s Sweetest Water & Sacred Mountain Temple',
    distanceFromCbe: '36 KM',
    driveTime: '1.0 Hour',
    isHillStation: false,
    category: 'spiritual',
    fixedFareSedan: 1200,
    fixedFareSUV: 1800,
    aboutCity: 'Siruvani Waterfalls is famous for feeding Coimbatore with the second sweetest drinking water in the world, renowned for its mineral purity and natural taste. Nearby, Marudhamalai Temple is an ancient 12th-century shrine dedicated to Lord Murugan perched peacefully on the Western Ghats slope.',
    highlights: ['Siruvani Mineral Waterfalls', 'Marudhamalai Hilltop Temple', 'Medicinal Herb Garden', 'Dense Reserve Forest'],
    itinerary: [
      { time: '08:00 AM', title: 'Pickup from Coimbatore', description: 'Short scenic drive past agricultural farms and coconut groves.' },
      { time: '09:00 AM', title: 'Marudhamalai Murugan Temple', description: 'Ascend the peaceful hillock by temple bus or steps to seek blessings at the shrine.' },
      { time: '11:00 AM', title: 'Drive to Siruvani Forest Checkpost', description: 'Scenic drive through dense Western Ghats vegetation toward the dam gates.' },
      { time: '12:00 PM', title: 'Siruvani Waterfalls Bath & Walk', description: 'Dip in the cool, crystal-clear, sweet mineral mountain waters cascading through the forest.' },
      { time: '02:00 PM', title: 'Lunch at Thondamuthur Country Mess', description: 'Traditional Kongu country meal with fresh village vegetables and buttermilk.' },
      { time: '04:00 PM', title: 'Drop back in Coimbatore', description: 'Convenient afternoon return to your hotel or airport.' }
    ],
    onTheWaySightseeing: [
      { name: 'Pambar Falls & Trek Base', distance: '30 KM from CBE', description: 'Lush greenery and stream views at the base of Siruvani hills.' },
      { name: 'Marudhamalai Botanical Garden', distance: '12 KM from CBE', description: 'Collection of rare Siddha medicinal plants and herbal flora.' }
    ],
    niceHotels: [
      { name: 'Fairfield by Marriott', tier: 'Comfort & Budget', area: 'Coimbatore Airport', highlight: 'Business comfort with reliable dining and quick airport proximity.' },
      { name: 'The Residency Towers', tier: 'Luxury Resort', area: 'Avinashi Road', highlight: 'Premium 5-star hospitality in central Coimbatore.' }
    ],
    restRoomsAndStops: [
      { name: 'Thondamuthur Forest Information Center', location: 'Siruvani Road', features: 'Parking, restrooms, forest entry permits' }
    ],
    favoriteFoods: [
      { dish: 'Pure Siruvani Thannir (Sweet Water)', famousAt: 'Throughout Coimbatore', description: 'Legendary drinking water with natural sweetness and digestive minerals.' },
      { dish: 'Rava Kichadi & Ghee Podi Dosa', famousAt: 'Sree Annapoorna Sowbaghya', description: 'Coimbatore\'s iconic breakfast served with steaming drumstick sambar.' }
    ],
    cultureAndTips: [
      'Siruvani Forest entry requires permission from the Tamil Nadu Forest Department; check timings (usually open 10 AM to 3 PM).',
      'Marudhamalai has an electric vehicle service from foothill to temple top for senior citizens.'
    ]
  },
  {
    id: 'mysore',
    name: 'Mysore Palace & Bandipur',
    title: 'Coimbatore to Mysore & Bandipur Safari Tour',
    tagline: 'City of Palaces, Sandalwood & Royal Heritage',
    distanceFromCbe: '200 KM',
    driveTime: '5.0 Hours',
    isHillStation: false,
    category: 'heritage',
    fixedFareSedan: 6300,
    fixedFareSUV: 8500,
    aboutCity: 'Mysuru (Mysore), the cultural capital of Karnataka, is celebrated worldwide for the grand Mysore Palace, Chamundi Hills, fragrant sandalwood, silk sarees, and royal Dussehra celebrations. The road trip from Coimbatore takes you through Sathyamangalam tiger corridor and Bandipur National Park.',
    highlights: ['Grand Mysore Palace (Illuminated on Sundays)', 'Chamundi Hill Chamundeshwari Temple', 'Bandipur Tiger Safari Route', 'Brindavan Gardens Musical Fountain'],
    itinerary: [
      { time: '05:00 AM', title: 'Early Departure from Coimbatore', description: 'Cross through Bannari ghats and Sathyamangalam tiger reserve before forest checkpost.' },
      { time: '07:30 AM', title: 'Breakfast in Chamarajanagar', description: 'Savor Karnataka style fluffy Thatte Idlis with spicy red chutney and benne dosa.' },
      { time: '09:00 AM', title: 'Bandipur National Park Drive', description: 'Drive through the elephant corridor with chances of spotting wild tuskers, deer, and peacocks.' },
      { time: '11:00 AM', title: 'Chamundi Hills Temple', description: 'Panoramic view of Mysore city from the hill summit and visit to the 1,000-year-old temple.' },
      { time: '01:00 PM', title: 'Mysore Royal Lunch', description: 'Enjoy authentic Mysore cuisine featuring Bisi Bele Bath and Mysore Masala Dosa.' },
      { time: '02:30 PM', title: 'Tour of Mysore Palace (Amba Vilas)', description: 'Marvel at the gold throne, stained glass ceilings, Durbar Hall, and ivory-inlaid doors.' },
      { time: '05:30 PM', title: 'Brindavan Gardens & Musical Fountain', description: 'Stroll through the terrace gardens adjacent to the Krishnarajasagara Dam.' }
    ],
    onTheWaySightseeing: [
      { name: 'Bannari Amman Temple', distance: '70 KM from CBE', description: 'Revered temple at the base of the 27 Sathyamangalam hairpin bends.' },
      { name: 'Nanjangud Srikanteshwara Temple', distance: '175 KM from CBE', description: 'Ancient temple on the banks of Kapila river known as the Varanasi of the South.' }
    ],
    niceHotels: [
      { name: 'Grand Mercure Mysore', tier: 'Luxury Resort', area: 'Sayyaji Rao Road', highlight: '5-star contemporary luxury near palace with rooftop restaurant.' },
      { name: 'Lalitha Mahal Palace Hotel', tier: 'Heritage Stay', area: 'Chamundi Foothills', highlight: 'Stately Italian renaissance palace built by the Maharaja of Mysore.' }
    ],
    restRoomsAndStops: [
      { name: 'Chamarajanagar Highway Food Plaza', location: 'NH 209', features: 'Spacious restrooms, multi-cuisine restaurants, parking' }
    ],
    favoriteFoods: [
      { dish: 'Original Mysore Pak', famousAt: 'Guru Sweet Mart (Since 1935)', description: 'Melt-in-mouth royal sweet made with gram flour, pure ghee, and sugar by descendants of palace cooks.' },
      { dish: 'Mylari Dosa', famousAt: 'Original Vinayaka Mylari (Nazarbad)', description: 'Incredibly soft, butter-drenched cloud-like crepe served with coconut chutney.' }
    ],
    cultureAndTips: [
      'Interstate Permit: Taxi Kaaran handles all Karnataka border permits and toll clearance seamlessly.',
      'Mysore Palace is illuminated with 100,000 lights every Sunday and public holidays from 7:00 PM to 7:45 PM.'
    ]
  },
  {
    id: 'yercaud',
    name: 'Yercaud & Salem',
    title: 'Yercaud Jewel of Shevaroys Hill Tour',
    tagline: 'Quiet Coffee & Orange Hill Station in Eastern Ghats',
    distanceFromCbe: '165 KM',
    driveTime: '3.5 Hours',
    isHillStation: true,
    category: 'hillstation',
    fixedFareSedan: 5300,
    fixedFareSUV: 7000,
    aboutCity: 'Situated 1,515 meters above sea level in the Shevaroy Hills near Salem, Yercaud is an idyllic, less-crowded hill station known for its expansive coffee plantations, orange groves, spice gardens, and Emerald Lake.',
    highlights: ['Yercaud Emerald Lake', 'Lady\'s Seat & Pagoda Point', 'Shevaroy Temple (Highest Point)', 'Killiyur Falls'],
    itinerary: [
      { time: '06:00 AM', title: 'Pickup from Coimbatore', description: 'Smooth 4-lane highway drive through Tiruppur and Erode bypass toward Salem.' },
      { time: '08:30 AM', title: 'Breakfast in Salem', description: 'Salem\'s famous crispy roast dosas with spicy tomato chutney.' },
      { time: '09:30 AM', title: 'Ascend the 20 Hairpin Bends', description: 'Climb the gentle Shevaroy ghat road with panoramic viewpoints over Salem city.' },
      { time: '11:00 AM', title: 'Pagoda Point & Lady\'s Seat', description: 'Breathtaking lookouts offering cliffside views of the plains below.' },
      { time: '01:00 PM', title: 'Lunch at Coffee Estate Cafe', description: 'Hill station meals with freshly harvested organic pepper and cardamom flavors.' },
      { time: '02:30 PM', title: 'Yercaud Lake Boating & Anna Park', description: 'Paddle boating on the tranquil central lake followed by walk in the Japanese Garden.' },
      { time: '05:00 PM', title: 'Shevaroy Mountain Temple', description: 'Visit the cave shrine dedicated to Lord Shevaroyan at the highest point (1,620m).' }
    ],
    onTheWaySightseeing: [
      { name: 'Bhavani Sangameshwarar Temple', distance: '95 KM from CBE', description: 'Sacred confluence of Bhavani, Cauvery, and the invisible Amutha rivers.' },
      { name: 'Salem Mettur Dam View', distance: '140 KM from CBE', description: 'One of the oldest and largest dams in South India across the Cauvery River.' }
    ],
    niceHotels: [
      { name: 'Great Trails Yercaud by GRT Hotels', tier: 'Luxury Resort', area: 'Lady\'s Seat Road', highlight: 'Luxury hillside skywalk villas with views of Salem city lights.' },
      { name: 'Grand Palace Hotel & Spa', tier: 'Comfort & Budget', area: 'Killiyur Falls Road', highlight: 'Cliff-edge resort overlooking the valley with infinity pool.' }
    ],
    restRoomsAndStops: [
      { name: 'Saravana Bhavan Erode Tollway', location: 'NH 544', features: 'Pristine washrooms, parking, South Indian vegetarian meals' }
    ],
    favoriteFoods: [
      { dish: 'Estate Shade-Grown Arabica Coffee', famousAt: 'MSP Coffee Clinic', description: 'Freshly roasted single-estate filter coffee.' },
      { dish: 'Salem Thattu Vadai Set', famousAt: 'Salem Street Food Kiosks', description: 'Crisp lentil crackers sandwiched with grated beetroot, carrot, and spicy onion chutney.' }
    ],
    cultureAndTips: [
      'Yercaud has peaceful, unhurried traffic compared to other hill stations, making it ideal for relaxed weekend getaways.',
      'Best time to visit is October to June; carry light woolens for the cool evening breeze.'
    ]
  }
];
