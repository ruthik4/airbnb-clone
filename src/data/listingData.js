// Dynamically import all images from demo-building folder
const imageModules = import.meta.glob('../assets/demo-building/*.avif', { eager: true, import: 'default' });

export const allImages = Object.keys(imageModules).sort().map((path, idx) => {
  return {
    id: idx + 1,
    url: imageModules[path],
    fileName: path.split('/').pop(),
    title: `Photo ${idx + 1}`
  };
});

// Primary Hero 5 Images grid (1 large + 4 right side)
export const heroImages = [
  { ...allImages[0], category: 'Living room 1', caption: 'Spacious air-conditioned living room with comfortable sofa & TV' },
  { ...allImages[1], category: 'Living room 2', caption: 'Dining area and open layout living room' },
  { ...allImages[2], category: 'Full kitchen', caption: 'Modern kitchen equipped with refrigerator, microwave & kettle' },
  { ...allImages[3], category: 'Bedroom', caption: 'Cozy king-size bed with premium linen' },
  { ...allImages[4], category: 'Full bathroom', caption: 'Clean bathroom with hot water & Jacuzzi access' },
];

// Photo Tour category breakdown
export const photoCategories = [
  {
    name: 'Living room 1',
    description: 'Sofa · Air conditioning · Ceiling fan · TV',
    images: [allImages[0], allImages[1], allImages[5], allImages[10]]
  },
  {
    name: 'Living room 2',
    description: 'Dining area and lounge workspace',
    images: [allImages[1], allImages[6], allImages[11]]
  },
  {
    name: 'Full kitchen',
    description: 'Stove, microwave, refrigerator, cooking basics',
    images: [allImages[2], allImages[7], allImages[12], allImages[17]]
  },
  {
    name: 'Bedroom',
    description: 'King bed, wardrobe, ambient lighting, blackout curtains',
    images: [allImages[3], allImages[8], allImages[13], allImages[18]]
  },
  {
    name: 'Full bathroom',
    description: 'Walk-in shower, fresh towels, toiletries, hot shower',
    images: [allImages[4], allImages[9], allImages[14]]
  },
  {
    name: 'Gym',
    description: 'Shared fitness center equipped with dumbbells and treadmill',
    images: [allImages[15], allImages[19]]
  },
  {
    name: 'Exterior',
    description: 'Building facade, lush greenery and private entrance',
    images: [allImages[16], allImages[20], allImages[21]]
  },
  {
    name: 'Pool & Jacuzzi',
    description: 'Outdoor swimming pool and private Jacuzzi tub',
    images: [allImages[22], allImages[0]]
  }
];

export const categorizedAmenities = [
  {
    category: "Bathroom",
    items: [
      { name: "Hairdryer", icon: "Wind" },
      { name: "Cleaning products", icon: "Sparkles" },
      { name: "Shampoo", icon: "Droplets" },
      { name: "Hot water", icon: "Flame" },
      { name: "Shower gel", icon: "Droplets" }
    ]
  },
  {
    category: "Bedroom and laundry",
    items: [
      { name: "Washing machine", icon: "Shirt" },
      { name: "Essentials (towels, bed sheets, soap, toilet paper)", icon: "Sparkles" },
      { name: "Hangers", icon: "Shirt" },
      { name: "Bed linen", icon: "Sparkles" },
      { name: "Extra pillows and blankets", icon: "Sparkles" },
      { name: "Room-darkening shades", icon: "Sun" },
      { name: "Iron", icon: "Shirt" }
    ]
  },
  {
    category: "Entertainment & Internet",
    items: [
      { name: "HD TV with Netflix", icon: "Tv" },
      { name: "Fast Wi-Fi (150 Mbps)", icon: "Wifi" }
    ]
  },
  {
    category: "Heating and cooling",
    items: [
      { name: "Air conditioning", icon: "Wind" },
      { name: "Ceiling fan", icon: "Wind" }
    ]
  },
  {
    category: "Home safety",
    items: [
      { name: "Smoke alarm", icon: "ShieldCheck" },
      { name: "Carbon monoxide alarm", icon: "ShieldCheck" },
      { name: "First aid kit", icon: "ShieldCheck" }
    ]
  },
  {
    category: "Kitchen and dining",
    items: [
      { name: "Kitchen", icon: "Utensils" },
      { name: "Refrigerator", icon: "Utensils" },
      { name: "Microwave", icon: "Utensils" },
      { name: "Cooking basics (pots, pans, oil, salt)", icon: "Utensils" },
      { name: "Dishes and cutlery", icon: "Utensils" },
      { name: "Stove", icon: "Flame" },
      { name: "Hot water kettle", icon: "Utensils" }
    ]
  },
  {
    category: "Services & Facilities",
    items: [
      { name: "Free parking on premises", icon: "Car" },
      { name: "Shared Outdoor Pool", icon: "Waves" },
      { name: "Private Jacuzzi", icon: "Sparkles" },
      { name: "Dedicated Workspace", icon: "Laptop" },
      { name: "Elevator access", icon: "Building" }
    ]
  }
];

export const listingInfo = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: "Candolim, Goa, India",
  rating: 4.92,
  reviewsCount: 38,
  isGuestFavorite: true,
  host: {
    name: "Mirashya",
    avatar: allImages[0].url,
    isSuperhost: true,
    yearsHosting: 4,
    coHosts: ["Alex", "Rahul"]
  },
  details: {
    guests: 5,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    propertyType: "Entire serviced apartment"
  },
  pricing: {
    pricePerNight: 4850,
    cleaningFee: 850,
    serviceFee: 620,
    taxes: 580,
    discountPercent: 10,
    promoCode: "NEXTSTAY10"
  },
  highlights: [
    {
      title: "Dedicated workspace",
      description: "A room with wifi that is well-suited for working."
    },
    {
      title: "Self check-in",
      description: "Check yourself in with the smart lock / keypad."
    },
    {
      title: "Free cancellation for 48 hours",
      description: "Get a full refund if you change your mind within 48 hours."
    }
  ],
  description: `Welcome to Mirashya UG10 – a luxury 1BHK sanctuary nestled in the heart of Candolim, Goa. Featuring a private balcony, access to a refreshing swimming pool, a state-of-the-art gym, and high-speed Wi-Fi, this apartment is perfect for couples, digital nomads, or small families.

Located just 5 minutes away from Candolim beach, top-rated shacks, vibrant cafes, and nightlife, you get the perfect balance of serenity and excitement.`,
  amenities: [
    { name: "Private Jacuzzi", icon: "Sparkles" },
    { name: "Fast Wi-Fi (150 Mbps)", icon: "Wifi" },
    { name: "Free parking on premises", icon: "Car" },
    { name: "Shared Outdoor Pool", icon: "Waves" },
    { name: "Air conditioning", icon: "Wind" },
    { name: "Dedicated Workspace", icon: "Laptop" },
    { name: "HD TV with Netflix", icon: "Tv" },
    { name: "Washing machine", icon: "Shirt" },
    { name: "Fully equipped Kitchen", icon: "Utensils" },
    { name: "Elevator access", icon: "Building" }
  ],
  reviews: [
    {
      id: 1,
      name: "Siddharth",
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      comment: "The place is absolutely stunning! The Jacuzzi and pool area were immaculate. Mirashya was super responsive and helpful throughout our stay."
    },
    {
      id: 2,
      name: "Ananya",
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      comment: "Super comfortable 1BHK in Candolim! Close to everything yet quiet. The Wi-Fi speed was great as I had to take work calls."
    },
    {
      id: 3,
      name: "David & Sarah",
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      comment: "10/10 recommendation! Modern interiors, super clean bathroom, and very smooth self check-in process."
    }
  ],
  ratingScores: {
    cleanliness: 4.9,
    accuracy: 5.0,
    communication: 4.9,
    location: 4.8,
    checkIn: 5.0,
    value: 4.9
  }
};
