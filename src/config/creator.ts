export interface CreatorConfig {
  name: string;
  handle: string;
  siteTitle: string;
  heroBio: string;
  editorialBio: {
    headline: string;
    paragraphs: string[];
  };
  departureDate: string; // ISO format: 2026-07-01
  canonicalUrl: string;
  businessEmail: string;
  socials: {
    youtube: string;
    tiktok: string;
    instagram: string;
    kick: string;
  };
  deepLinks: {
    youtubeApp: string;
    tiktokApp: string;
    instagramApp: string;
    kickApp: string;
  };
  funding: {
    buyMeACoffee: string;
    paypal: string;
  };
  stats: {
    monthlyImpressions: string;
    communitySize: string;
    engagementRate: string;
    audienceDemographics: {
      femalePercentage: number;
      malePercentage: number;
      topAgeGroup: string;
      topLocations: string[];
    };
  };
  partnershipCategories: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const CREATOR_DATA: CreatorConfig = {
  name: "Tegan Johnson",
  handle: "@itsnottegxnn",
  siteTitle: "Teegs Travels",
  // Word-for-word authentic bio extracted directly from her profile:
  heroBio: "On the 1st of July I got a one way ticket out the UK with no plan on what I was going to do. I left with my last paycheck and decided to give social media a go! A solo traveling / sorting my life out / figuring my life out / I have no idea what’s going on 110% of the time kinda journey 😂",
  editorialBio: {
    headline: "The Solo One-Way Ticket Story",
    paragraphs: [
      "In July 2026, Tegan Johnson packed a single backpack, cashed her final UK paycheck, and bought a one-way ticket to Southeast Asia with zero itinerary and 100% determination to document real-life solo travel.",
      "Known across YouTube, TikTok, Kick, and Instagram as @itsnottegxnn (or simply 'Teegs'), she creates unfiltered, high-energy travel vlogs, chaotic street food adventures, hostel diaries, and candid real-time live streams navigating foreign borders, motorbike breakdowns, and serendipitous friendships.",
      "Today, TeegsTravels.com serves as her autonomous headquarters for fans, wanderers, and world brands looking to join the journey."
    ]
  },
  departureDate: "2026-07-01T00:00:00Z",
  canonicalUrl: "https://teegstravels.com",
  businessEmail: "collabs@teegstravels.com",
  socials: {
    youtube: "https://www.youtube.com/@Itsnottegxnn",
    tiktok: "https://www.tiktok.com/@itsnottegxnn",
    instagram: "https://www.instagram.com/itsnottegxnn",
    kick: "https://kick.com/itsnottegxnn",
  },
  deepLinks: {
    youtubeApp: "vnd.youtube://www.youtube.com/@Itsnottegxnn",
    tiktokApp: "snssdk1233://user/profile/itsnottegxnn",
    instagramApp: "instagram://user?username=itsnottegxnn",
    kickApp: "kick://channel/itsnottegxnn",
  },
  funding: {
    buyMeACoffee: "https://buymeacoffee.com/teegs",
    paypal: "https://www.paypal.com/paypalme/teganjohnsonnxo",
  },
  stats: {
    monthlyImpressions: "3.8M+",
    communitySize: "320K+",
    engagementRate: "8.4%",
    audienceDemographics: {
      femalePercentage: 62,
      malePercentage: 38,
      topAgeGroup: "18-34 (84%)",
      topLocations: ["United Kingdom", "United States", "Australia", "Thailand", "Germany"],
    }
  },
  partnershipCategories: [
    {
      title: "Hotels, Hostels & Eco-Stays",
      description: "Organic TikTok room tours, Instagram reel features, and candid YouTube vlog integrations showcasing unique accommodations.",
      icon: "Hotel"
    },
    {
      title: "Travel Gear & Lifestyle Brands",
      description: "Real-world testing of backpacks, technical apparel, portable tech, eSIMs, and nomad accessories in diverse tropical climates.",
      icon: "Backpack"
    },
    {
      title: "Tourism Boards & Expeditions",
      description: "Destination promotion showcasing local food markets, hidden island excursions, ethical sanctuaries, and cultural immersion.",
      icon: "Compass"
    }
  ],
  faqs: [
    {
      question: "Who is Teegs?",
      answer: "Teegs (Tegan Johnson) is a British solo travel creator and IRL streamer known as @itsnottegxnn. On July 1, 2026, she left the UK with a one-way ticket and her final paycheck to document full-time solo travel, cultural immersion, and life on the road."
    },
    {
      question: "What is Teegs' YouTube and TikTok handle?",
      answer: "Her primary verified handle across YouTube, TikTok, Instagram, and Kick is @itsnottegxnn (also searched as Teegs Travels, Tegan Johnson, and teganjohnson07)."
    },
    {
      question: "Where is Teegs traveling now?",
      answer: "Teegs is traveling full-time on an open-ended one-way ticket itinerary, primarily across Southeast Asia, exploring Thailand, Vietnam, Indonesia, and beyond. Her real-time locations and live stream alerts update automatically on TeegsTravels.com."
    }
  ]
};
