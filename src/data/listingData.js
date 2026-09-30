const imageModules = import.meta.glob('../assets/demo-building/*.avif', { eager: true, import: 'default' });
const moreBuildingModules = import.meta.glob('../assets/more-buildings/*.avif', { eager: true, import: 'default' });

// Create filename -> URL map
const imageMap = {};
Object.keys(imageModules).forEach((path) => {
  const filename = path.split('/').pop();
  imageMap[filename] = imageModules[path];
});

// Desired Hero 5 images order
const heroFileNames = [
  'livingroom-1.avif',
  'livingroom-2.avif',
  'bedroom-1.avif',
  'kitchen-1.avif',
  'bathroom-1.avif'
];

// Categorized file lists
const livingRoomFiles = Object.keys(imageMap).filter(f => f.startsWith('livingroom-')).sort();
const bedroomFiles = Object.keys(imageMap).filter(f => f.startsWith('bedroom-')).sort();
const kitchenFiles = Object.keys(imageMap).filter(f => f.startsWith('kitchen-')).sort();
const bathroomFiles = Object.keys(imageMap).filter(f => f.startsWith('bathroom-')).sort();

// Complete ordered file list: Hero 5 first, followed by category groups
const orderedFileNames = Array.from(new Set([
  ...heroFileNames,
  ...livingRoomFiles,
  ...bedroomFiles,
  ...kitchenFiles,
  ...bathroomFiles,
  ...Object.keys(imageMap).sort()
])).filter(f => imageMap[f]);

export const allImages = orderedFileNames.map((fileName, idx) => ({
  id: idx + 1,
  url: imageMap[fileName],
  fileName: fileName,
  title: fileName.replace('.avif', '').replace('-', ' ')
}));

export const moreBuildingImages = Object.keys(moreBuildingModules).sort().map((path) => moreBuildingModules[path]);

const getImageByFile = (fileName) => allImages.find(img => img.fileName === fileName) || allImages[0];

// Categorized photo groups for Photo Tour Modal ("Show all photos")
export const photoCategories = [
  {
    name: 'Living room',
    description: 'Spacious seating area, TV, and open lounge layout',
    images: livingRoomFiles.map(getImageByFile)
  },
  {
    name: 'Bedroom',
    description: 'King bed, ambient lighting, blackout curtains, and wardrobe',
    images: bedroomFiles.map(getImageByFile)
  },
  {
    name: 'Kitchen',
    description: 'Fully equipped kitchen, stove, microwave, kettle, refrigerator & cookware',
    images: kitchenFiles.map(getImageByFile)
  },
  {
    name: 'Bathroom',
    description: 'Modern bathroom with shower, hot water, and toiletries',
    images: bathroomFiles.map(getImageByFile)
  }
].filter(cat => cat.images && cat.images.length > 0);;

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
  rating: 4.95,
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

export const moreStaysData = [
  {
    id: 1,
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: 4.91,
    image: moreBuildingImages[0] || allImages[0].url
  },
  {
    id: 2,
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: 4.95,
    image: moreBuildingImages[1] || allImages[1].url
  },
  {
    id: 3,
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: 4.94,
    image: moreBuildingImages[2] || allImages[2].url
  },
  {
    id: 4,
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: 4.96,
    image: moreBuildingImages[3] || allImages[3].url
  },
  {
    id: 5,
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: 4.95,
    image: moreBuildingImages[4] || allImages[4].url
  },
  {
    id: 6,
    title: "Candolim Serenity Studio with Garden View",
    price: "₹26,400",
    rating: 4.93,
    image: moreBuildingImages[5] || allImages[5].url
  },
  {
    id: 7,
    title: "La Maison Sunset Villa | Private Balcony",
    price: "₹34,800",
    rating: 4.97,
    image: moreBuildingImages[6] || allImages[6].url
  },
  {
    id: 8,
    title: "Azure Cove Luxury 1BHK near Beach",
    price: "₹29,150",
    rating: 4.92,
    image: moreBuildingImages[7] || allImages[7].url
  },
  {
    id: 9,
    title: "The Palms Modern Studio with Pool Access",
    price: "₹31,200",
    rating: 4.96,
    image: allImages[8].url
  },
  {
    id: 10,
    title: "Celeste Luxury Flat in Heart of Candolim",
    price: "₹37,800",
    rating: 4.90,
    image: allImages[9].url
  }
];
