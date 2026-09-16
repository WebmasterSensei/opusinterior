export const uimg = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export type Service = {
  icon: string;
  title: string;
  blurb: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: "kitchen",
    title: "Fitted Kitchens",
    blurb: "Floor-to-ceiling kitchens designed around the way you cook and live.",
    description:
      "From handleless German-style systems to warm, painted shaker kitchens, we design and fit complete kitchens with stone worktops, integrated appliances and lighting.",
    features: ["Design & CAD visuals", "Stone & quartz worktops", "Integrated appliances", "Project-managed install"],
  },
  {
    icon: "joinery",
    title: "Bespoke Joinery & Furniture",
    blurb: "Custom cabinetry, wardrobes and storage built for your exact space.",
    description:
      "Our in-house joiners craft fitted wardrobes, media walls, alcove units and built-in furniture in oak, walnut, veneer and sprayed finishes.",
    features: ["Fitted wardrobes", "Media & TV walls", "Alcove & recessed units", "Sprayed & veneered finishes"],
  },
  {
    icon: "office",
    title: "Home Offices & Studies",
    blurb: "Quiet, productive work-from-home spaces with clean cable management.",
    description:
      "Smart home offices with built-in desks, shelving, acoustic panelling and structured data wiring — designed to work as hard as you do.",
    features: ["Built-in desks & shelving", "Acoustic panels", "Structured data & power", "Biophilic daylight design"],
  },
  {
    icon: "bathroom",
    title: "Bathrooms & Wet Rooms",
    blurb: "Statement bathrooms and water-tight wet rooms, done properly first time.",
    description:
      "Complete bathroom transformations including walk-in showers, freestanding baths, wet-room tanking and flawless tiling.",
    features: ["Full re-fit & decoration", "Wet-room tanking", "Porcelain & natural stone", "Rain & concealed showers"],
  },
  {
    icon: "loft",
    title: "Loft Conversions",
    blurb: "New usable space flooding with light — bedrooms, studies or studios.",
    description:
      "We plan, build and finish loft conversions with dormers, Velux runs, structural work and full interior packages under one roof.",
    features: ["Dormer & roof window", "Structural engineering", "Staircase design", "Full insulation & finishes"],
  },
  {
    icon: "flooring",
    title: "Flooring & Cladding",
    blurb: "Oak, stone and tile flooring installed to a true, level, finish.",
    description:
      "Engineered oak, herringbone, large-format porcelain and lime-washed panels — with perfect subfloor prep and threshold detailing.",
    features: ["Engineered oak & herringbone", "Large-format porcelain", "Underfloor heating", "Feature wall cladding"],
  },
  {
    icon: "lighting",
    title: "Lighting & Electrical",
    blurb: "Layered lighting that makes rooms feel bigger, warmer and calmer.",
    description:
      "Architectural lighting design with recessed spots, coves, pendants and smart dimming, fully rewired and certified.",
    features: ["Lighting design", "Coves & LED strips", "Smart dimming", "Rewires & consumer units"],
  },
  {
    icon: "smart",
    title: "Smart Home Infrastructure",
    blurb: "Fitted infrastructure for a connected, future-proofed home.",
    description:
      "Structured cabling, gigabit networking, AV, media storage and whole-house automation — the hidden backbone of a modern interior.",
    features: ["Structured data cabling", "Whole-home Wi-Fi", "Audio & AV", "Automation & control"],
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: "Kitchens" | "Living" | "Bedrooms" | "Offices" | "Bathrooms";
};

export const galleryItems: GalleryItem[] = [
  { src: uimg("photo-1552321554-5fefe8c9ef14", 1200), title: "Shaker Kitchen with Stone Island", category: "Kitchens" },
  { src: uimg("photo-1595526114035-0d45ed16cfbf", 1200), title: "Oak Kitchen & Breakfast Bar", category: "Kitchens" },
  { src: uimg("photo-1600585154340-be6161a56a0c", 1200), title: "Modern Rear Extension", category: "Kitchens" },
  { src: uimg("photo-1618221195710-dd6b41faaea6", 1200), title: "Open-Plan Living Space", category: "Living" },
  { src: uimg("photo-1616486338812-3dadae4b4ace", 1200), title: "Family Sitting Room", category: "Living" },
  { src: uimg("photo-1600607687939-ce8a6c25118c", 1200), title: "Interior Detailing", category: "Living" },
  { src: uimg("photo-1505693416388-ac5ce068fe85", 1200), title: "Linen Bedroom Feature Wall", category: "Bedrooms" },
  { src: uimg("photo-1616594039964-ae9021a400a0", 1200), title: "Primary Suite", category: "Bedrooms" },
  { src: uimg("photo-1493809842364-78817add7ffb", 1200), title: "Guest Bedroom Styling", category: "Bedrooms" },
  { src: uimg("photo-1497366754035-f200968a6e72", 1200), title: "Home Office with Built-In Desk", category: "Offices" },
  { src: uimg("photo-1586105251261-72a756497a11", 1200), title: "Study Nook & Shelving", category: "Offices" },
  { src: uimg("photo-1524758631624-e2822e304c36", 1200), title: "Greenhouse Home Office", category: "Offices" },
  { src: uimg("photo-1600566753190-17f0baa2a6c3", 1200), title: "Spa-Style En-Suite", category: "Bathrooms" },
  { src: uimg("photo-1584622650111-993a426fbf0a", 1200), title: "Walk-In Wet Room", category: "Bathrooms" },
];

export const galleryCategories = ["All", "Kitchens", "Living", "Bedrooms", "Offices", "Bathrooms"] as const;

export const videos = [
  {
    src: "https://videos.pexels.com/video-files/7533207/7533207-hd_1920_1080_30fps.mp4",
    poster: uimg("photo-1618221195710-dd6b41faaea6", 1400),
    title: "Open-Plan Living Room",
    label: "Living",
  },
  {
    src: "https://videos.pexels.com/video-files/15857227/15857227-hd_1920_1080_30fps.mp4",
    poster: uimg("photo-1600607687939-ce8a6c25118c", 1400),
    title: "Living Room with Fireplace",
    label: "Feature",
  },
  {
    src: "https://videos.pexels.com/video-files/7614533/7614533-hd_1920_1080_30fps.mp4",
    poster: uimg("photo-1586105251261-72a756497a11", 1400),
    title: "Interior Walkthrough",
    label: "Walkthrough",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    text: "We visit your home, listen to how you live, and measure every corner. No hard sell — just honest options.",
  },
  {
    step: "02",
    title: "Design & Proposal",
    text: "Concepts, CAD visuals and a transparent quote. You see exactly what you'll get before we cut a single board.",
  },
  {
    step: "03",
    title: "Craft & Build",
    text: "Our own fitters and joiners carry out the works site-managed to fit your diary, with daily progress updates.",
  },
  {
    step: "04",
    title: "Handover & Care",
    text: "A dust-free finish, snag-free handover, and a workmanship guarantee that stays valid well after we leave.",
  },
];

export const stats = [
  { value: 14, suffix: "+", label: "Years in the trade" },
  { value: 480, suffix: "+", label: "Projects completed" },
  { value: 96, suffix: "%", label: "Clients who recommend us" },
  { value: 9, suffix: "", label: "UK regions covered" },
];

export const serviceAreas = [
  "London",
  "Home Counties",
  "Birmingham & Midlands",
  "Manchester & North West",
  "Bristol & South West",
  "Leeds & Yorkshire",
  "Edinburgh & Scotland",
];