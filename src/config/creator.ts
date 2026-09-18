export interface CreatorConfig {
  name: string;
  handle: string;
  siteTitle: string;
  heroBio: string;
  departureDate: string; // ISO format: 2026-07-01
  canonicalUrl: string;
  contactEmail: string;
  youtubeChannelId: string;
  socials: {
    youtube: string;
    tiktok: string;
    instagram: string;
  };
  deepLinks: {
    youtubeApp: string;
    tiktokApp: string;
    instagramApp: string;
  };
  funding: {
    buyMeACoffee: string;
    paypal: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const CREATOR_DATA: CreatorConfig = {
  name: "Tegan Johnson",
  handle: "@itsnottegxnn",
  siteTitle: "Tegan Johnson",
  // Word-for-word authentic bio extracted directly from her profile:
  heroBio: "On the 1st of July I got a one way ticket out the UK with no plan on what I was going to do. I left with my last paycheck and decided to give social media a go! A solo traveling / sorting my life out / figuring my life out / I have no idea what’s going on 110% of the time kinda journey 😂",
  departureDate: "2026-07-01T00:00:00Z",
  canonicalUrl: "https://teganjohnson.com",
  contactEmail: "contact@teganjohnson.com",
  youtubeChannelId: "UCaEPHBE_WrG58Uf2nj2sLgg",
  socials: {
    youtube: "https://www.youtube.com/@Itsnottegxnn",
    tiktok: "https://www.tiktok.com/@itsnottegxnn",
    instagram: "https://www.instagram.com/itsnottegxnn",
  },
  deepLinks: {
    youtubeApp: "vnd.youtube://www.youtube.com/@Itsnottegxnn",
    tiktokApp: "snssdk1233://user/profile/itsnottegxnn",
    instagramApp: "instagram://user?username=itsnottegxnn",
  },
  funding: {
    buyMeACoffee: "https://buymeacoffee.com/teegs",
    paypal: "https://www.paypal.com/paypalme/teganjohnsonnxo",
  },
  faqs: [
    {
      question: "Who is Teegs (@itsnottegxnn)?",
      answer: "Teegs (known online as @itsnottegxnn / Tegan Johnson) is a British digital creator and vlogger. On July 1, 2026, she left the UK on a one-way ticket to explore the world, sharing candid YouTube vlogs and TikTok Lives as she figures out life on the road."
    },
    {
      question: "What are Teegs' social handles?",
      answer: "Her primary verified handle across YouTube, TikTok, and Instagram is @itsnottegxnn."
    },
    {
      question: "Where is Teegs traveling now?",
      answer: "Teegs is currently traveling on an open-ended one-way ticket journey. To see where she is right now, check out her latest YouTube vlogs and TikTok Lives to stay up to date!"
    }
  ]
};
