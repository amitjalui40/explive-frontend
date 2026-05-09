export const homepageData = {
  hero: {
    video: {
      webm: "https://res.cloudinary.com/dgrmsleyc/video/upload/w_1080,q_auto,f_webm/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.webm",
      mp4: "https://res.cloudinary.com/dgrmsleyc/video/upload/w_1080,q_auto,f_mp4/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.mp4",
      poster: "https://res.cloudinary.com/dgrmsleyc/video/upload/so_0,w_800,q_auto/v1776357410/Dancing_Club_Stock_Video_Free_qeyiim.jpg",
    },
    headline: {
      line1: "Experience",
      line2: "it live.",
    },
    description: "",
    button: {
      visible: false,
      text: "Explore Our Capabilities",
      targetId: "event-types",
    }
  },

  eventCategories: {
    header: {
      kicker: "Capabilities",
      titleLine1: "Event",
      titleLine2: "Categories",
      description: "From intimate underground comedy clubs to massive audiovisual stadium festivals, we build experiences that resonate.",
    },
    cards: [
      {
        id: "music",
        title: "Live Music & Festivals",
        description: "High-energy, immersive audiovisual experiences curated for massive crowds and unforgettable nights.",
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1 md:row-span-2",
      },
      {
        id: "comedy",
        title: "Standup Comedy",
        description: "Intimate, perfectly lit environments designed to highlight world-class talent and connect with audiences.",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1000&auto=format&fit=crop",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "speech",
        title: "Keynotes & Speeches",
        description: "Professional, acoustically tuned setups for industry leaders, visionaries, and corporate summits.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      }
    ]
  },

  featuredSpotlight: {
    header: {
      kicker: "Upcoming Events",
      titleLine1: "Featured",
      titleLine2: "Spotlight",
    },
    buttonText: "View More Upcoming",
  },

  about: {
    kicker: "The Agency",
    title: "We don't just host events. We architect culture.",
    description1: "Founded on the belief that live entertainment should be an immersive, visceral experience. Explive has spent the last decade curating the world's most exclusive and breathtaking shows.",
    description2: "From hidden underground bunkers to massive stadium festivals, our production value is unmatched. We handle the talent, the venue, the lighting, and the aesthetic. You just show up and experience it.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Events Hosted" },
      { value: "2M+", label: "Tickets Sold" }
    ],
    buttonText: "Read Our Story"
  },

  footer: {
    ctaHeading: "Ready to create",
    ctaHighlight: "history?",
    ctaButton: "Start a Project",
    brandText: "EXP.LIVE",
    description: "The premier global agency for immersive live entertainment and cultural architecture.",
    socials: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "YouTube", url: "#" },
      { name: "LinkedIn", url: "#" }
    ],
    links: [
      {
        title: "Company",
        items: [
          { name: "About Us", url: "#" },
          { name: "Careers", url: "#" },
          { name: "Press", url: "#" },
          { name: "Contact", url: "#" }
        ]
      },
      {
        title: "Services",
        items: [
          { name: "Event Production", url: "#" },
          { name: "Talent Booking", url: "#" },
          { name: "Venue Management", url: "#" },
          { name: "Brand Activations", url: "#" }
        ]
      }
    ],
    copyright: "© 2026 Explive Entertainment. All rights reserved."
  }
};
