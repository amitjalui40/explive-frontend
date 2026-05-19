
export const siteConfig = {
  theme: {
    default: "dark" as "light" | "dark" | "system",
    enableSystem: false,
  },
};

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

  upcomingShowsGrid: {
    header: {
      titleLine1: "Upcoming",
      titleLine2: "Shows",
      description: "Discover our upcoming live experiences.",
    },
    heading: {
      kicker: "Live Events",
      line1: "Upcoming",
      line2: "Shows",
      description: "Discover unforgettable live experiences. Don't miss what's coming next.",
    },
    stats: [
      { icon: "MapPin", value: "Dombivli", label: "Location" },
      { icon: "Zap",    value: "Live",     label: "Experiences" },
    ],
    featureBar: [
      { icon: "Star",        iconColor: "#B6FF3B", bgColor: "rgba(182, 255, 59, 0.10)",  title: "Curated Events",   desc: "Handpicked experiences\njust for you." },
      { icon: "ShieldCheck", iconColor: "#FF9A00", bgColor: "rgba(255, 154, 0, 0.10)",   title: "Secure Booking",   desc: "100% safe & hassle\nfree payments." },
      { icon: "Headphones",  iconColor: "#FF3C7D", bgColor: "rgba(255, 60, 125, 0.10)",  title: "24/7 Support",     desc: "We're here to help\nanytime." },
      { icon: "Ticket",      iconColor: "#4DA3FF", bgColor: "rgba(77, 163, 255, 0.10)",  title: "Exclusive Access", desc: "Early bird & member\nonly deals." },
      { icon: "Globe",       iconColor: "#B6FF3B", bgColor: "rgba(182, 255, 59, 0.10)",  title: "Multiple Cities",  desc: "Experience events\nacross India." },
    ],
    items: [
      {
        id: "seasona-festival",
        title: "Seasona Festival 2026",
        date: "23rd May 2026",
        location: "Summer Edition",
        venue: "Bandra Fort, Mumbai",
        badge: "Live Soon",
        image: "/images/seasona_festival.jpeg",
        glowColor: "rgba(251, 146, 60, 0.4)",
        buttonText: "Get Tickets",
        buttonLink: "#"
      },
      {
        id: "ehsaas-e-shaam",
        title: "Ehsaas e Shaam",
        date: "10th July 2026",
        location: "Ek shaam, kahi ehsaas",
        venue: "Dome at NSCI, Mumbai",
        badge: "Coming Soon",
        image: "/images/ehsaas_e_shaam.jpeg",
        glowColor: "rgba(159, 18, 57, 0.4)",
        buttonText: "Get Tickets",
        buttonLink: "#"
      }
    ],
    stackSettings: {
      autoPlay: true,
      intervalMs: 9000,
      transitionSpeed: 1000,
    }
  },

  eventCategories: {
    settings: {
      autoPlay: true,
      autoPlayIntervalMs: 6000, // 6 seconds per slide
    },
    header: {
      kicker: "",
      titleLine1: "EXPERIENCES",
      titleLine2: "WE CURATE",
      description: "Celebrating music, art, and culture through bold live experiences.",
    },
    cards: [
      {
        id: "music-festivals",
        title: "Music Festivals",
        description: "Creating next-generation music festivals where live performances, artist discovery, and culture shape every audience experience.",
        tags: ["Outdoor", "Multi-Stage", "Multi-Day"],
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "artist-solo-tours",
        title: "Artist Solo Tours",
        description: "Strategically designed experiences around artist vision and create deeper audience connection across regions.",
        tags: ["Touring", "Regional", "Headline"],
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "concert-experiences",
        title: "Concert Experiences",
        description: "Building immersive concert experiences that bring artists and audiences closer through music, emotion, and live energy.",
        tags: ["Immersive", "Intimate", "Live Energy"],
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "artist-management",
        title: "Artist Management",
        description: "From live bookings to strategic collaborations, we connect artists and clients through curated entertainment experiences.",
        tags: ["Booking", "Strategic", "Collaboration"],
        image: "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "cultural-ip-experiences",
        title: "IP Experiences",
        description: "Innovative live IPs experiences inspired by tradition, creativity, and artistic performances.",
        tags: ["Cultural", "Tradition", "Creative IP"],
        image: "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

  aboutSummary: {
    kicker: "About us",
    title: "We turn events into powerful live experiences.",
    descriptions: [
      "Built on a strong background in events, we are focused on delivering high quality shows that connect with audiences.",
      "We work across music concerts, festivals, IP events, and curated shows. Whether it’s a large festival or a more personal performance, our aim is to create experiences that people enjoy and remember.",
      "Driven by creativity and the evolving energy of live entertainment, Exp Live Entertainment is focused on shaping the future of India’s festivals and live entertainment culture."
    ],
    mission: "Shaping the future of India's festivals and live entertainment culture."
  },

  aboutFull: {
    kicker: "About us",
    title: "At Exp Live Entertainment, we turn events into powerful live experiences.",
    descriptions: [
      "Built on a strong background in events, we are focused on delivering high quality shows that connect with audiences.",
      "We work across music concerts, festivals, IP events, and curated shows. Whether it’s a large festival or a more personal performance, our aim is to create experiences that people enjoy and remember.",
      "We take care of everything, from planning ideas to production, logistics, hospitality, and artist management. Every detail is handled with care to make sure the event runs smoothly and gives the audience a complete and memorable experience.",
      "We also work closely with artists, helping manage and present them in the right way for every show. With a strong network across the industry, we bring together the right talent and teams to deliver impactful events.",
      "Alongside live concerts and touring, our aim is to build unique music festivals and immersive experiences across genres, communities, and artistic formats.",
      "Driven by creativity and the evolving energy of live entertainment, Exp Live Entertainment is focused on shaping the future of India’s festivals and live entertainment culture."
    ]
  },

  contact: {
    title: "CONTACT US",
    email: {
      label: "Email",
      value: "info@explive.in"
    },
    location: {
      label: "Location",
      value: "Shop 2 Bldg 46 Deep Jyoti, CHS Vartak Nagar, Jekegram, Vartak Nagar Police Station, Thane, Thane- 400606, Maharashtra, India"
    },
    form: {
      tagline: "Reach out through the form below, and let us help you plan an incredible event.",
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Your Email",
        phone: "Your Number",
        message: "Tell us how we can help..."
      },
      submitText: "Contact Us"
    }
  },

  footer: {
    ctaHeading: "Ready to create",
    ctaHighlight: "history?",
    ctaButton: "Start a Project",
    brandText: "EXP.LIVE",
    description: "The premier global agency for immersive live entertainment and cultural architecture.",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/expliveent/" },
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579060607829" },
      { name: "Twitter", url: "https://x.com/expliveent" },
      { name: "YouTube", url: "https://www.youtube.com/@expliveent" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/exp-live-entertainment/" }
    ],
    links: [
      {
        title: "Company",
        items: [
          { name: "Experiences We Curate", url: "#event-types" },
          { name: "About Us", url: "/about" },
          { name: "Careers", url: "#" },
          { name: "Contact Us", url: "/contact" }
        ]
      },
      // {
      //   title: "Services",
      //   items: [
      //     { name: "Event Production", url: "#" },
      //     { name: "Talent Booking", url: "#" },
      //     { name: "Venue Management", url: "#" },
      //     { name: "Brand Activations", url: "#" }
      //   ]
      // }
    ],
    copyright: "© 2026 Exp live Entertainment LLP. All rights reserved."
  }
};
