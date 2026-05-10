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
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "artist-solo-tours",
        title: "Artist Solo Tours",
        description: "Strategically designed experiences around artist vision and create deeper audience connection across regions.",
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "concert-experiences",
        title: "Concert Experiences",
        description: "Building immersive concert experiences that bring artists and audiences closer through music, emotion, and live energy.",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "festival-curation",
        title: "Festival Curation",
        description: "Concept-driven festival experiences designed around unique themes, communities and immersive experiences.",
        image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "artist-management",
        title: "Artist Management",
        description: "From live bookings to strategic collaborations, we connect artists and clients through curated entertainment experiences.",
        image: "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        id: "cultural-ip-experiences",
        title: "Cultural & IP Experiences",
        description: "Innovative live IPs and cultural experiences inspired by tradition, creativity, and artistic performances.",
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
    title: "At Exp Live Entertainment, we turn events into powerful live experiences.",
    descriptions: [
      "Built on a strong background in events, we are focused on delivering high quality shows that connect with audiences.",
      "We work across music concerts, festivals, IP events, and curated shows. Whether it’s a large festival or a more personal performance, our aim is to create experiences that people enjoy and remember.",
      "Driven by creativity and the evolving energy of live entertainment, Exp Live Entertainment is focused on shaping the future of India’s festivals and live entertainment culture."
    ]
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
