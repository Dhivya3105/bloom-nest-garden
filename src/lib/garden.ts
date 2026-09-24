import heroGarden from "@/assets/hero-garden.jpg";
import imgRose from "@/assets/flower-rose.jpg";
import imgSunflower from "@/assets/flower-sunflower.jpg";
import imgTulip from "@/assets/flower-tulip.jpg";
import imgHibiscus from "@/assets/flower-hibiscus.jpg";
import imgOrchid from "@/assets/flower-orchid.jpg";
import imgLavender from "@/assets/flower-lavender.jpg";
import imgGreenhouse from "@/assets/gallery-greenhouse.jpg";

export const images = {
  heroGarden,
  greenhouse: imgGreenhouse,
};

export interface Flower {
  name: string;
  latin: string;
  image: string;
  description: string;
  sun: string;
  water: string;
  bloom: string;
  difficulty: "Easy" | "Moderate" | "Attentive";
  tags: string[];
}

export const flowers: Flower[] = [
  {
    name: "Rose",
    latin: "Rosa",
    image: imgRose,
    description:
      "The timeless garden classic. Roses reward a little care with months of layered, fragrant blooms in every shade from blush to deep crimson.",
    sun: "Full sun, 6+ hours",
    water: "Deep soak once a week",
    bloom: "Late spring to autumn",
    difficulty: "Moderate",
    tags: ["Fragrant", "Cut flower", "Perennial"],
  },
  {
    name: "Sunflower",
    latin: "Helianthus annuus",
    image: imgSunflower,
    description:
      "A cheerful giant that follows the sun across the sky. Sow the seeds directly in warm soil and watch them race upward in a single season.",
    sun: "Full sun",
    water: "Regular, at the base",
    bloom: "Summer",
    difficulty: "Easy",
    tags: ["Annual", "Pollinator magnet", "Fast growing"],
  },
  {
    name: "Tulip",
    latin: "Tulipa",
    image: imgTulip,
    description:
      "Spring's softest announcement. Plant the bulbs in autumn, forget them through winter, and enjoy cup after cup of pastel colour come spring.",
    sun: "Full sun to partial shade",
    water: "Moderate while growing",
    bloom: "Spring",
    difficulty: "Easy",
    tags: ["Bulb", "Cold-loving", "Cut flower"],
  },
  {
    name: "Hibiscus",
    latin: "Hibiscus rosa-sinensis",
    image: imgHibiscus,
    description:
      "Tropical flair with dinner-plate sized blooms. Give it warmth and bright light and it will flower generously through the warm months.",
    sun: "Bright, direct light",
    water: "Keep evenly moist",
    bloom: "Summer to early autumn",
    difficulty: "Moderate",
    tags: ["Tropical", "Indoor or out", "Statement bloom"],
  },
  {
    name: "Orchid",
    latin: "Phalaenopsis",
    image: imgOrchid,
    description:
      "An elegant houseplant that blooms for months with almost no effort. Ignore it a little, water it less than you think, and it thrives.",
    sun: "Bright, indirect light",
    water: "Every 7–10 days",
    bloom: "Winter to spring",
    difficulty: "Attentive",
    tags: ["Houseplant", "Long blooming", "Low water"],
  },
  {
    name: "Lavender",
    latin: "Lavandula",
    image: imgLavender,
    description:
      "Silvery foliage, purple spires and the calmest scent in the garden. Lavender loves poor, sandy soil and a spot with blazing sun.",
    sun: "Full sun",
    water: "Sparse — let it dry out",
    bloom: "Early to mid summer",
    difficulty: "Easy",
    tags: ["Drought tolerant", "Pollinator magnet", "Fragrant"],
  },
];

export interface PlantCategory {
  name: string;
  icon: "leaf" | "sun" | "flower" | "sprout";
  examples: string;
  description: string;
  care: { label: string; value: string }[];
}

export const plantCategories: PlantCategory[] = [
  {
    name: "Foliage Plants",
    icon: "leaf",
    examples: "Monstera · Pothos · Boston fern",
    description:
      "Grown for sculptural leaves rather than flowers. Foliage plants turn a dim corner into a green focal point and are wonderfully forgiving of missed waterings.",
    care: [
      { label: "Light", value: "Bright, indirect" },
      { label: "Water", value: "When the top inch is dry" },
      { label: "Humidity", value: "Moderate to high" },
      { label: "Difficulty", value: "Easy — great first plant" },
    ],
  },
  {
    name: "Succulents & Cacti",
    icon: "sun",
    examples: "Echeveria · Haworthia · Golden barrel",
    description:
      "Plump-leaved survivors from arid regions. They store water in their tissues, so the kindest thing you can do is leave them alone between waterings.",
    care: [
      { label: "Light", value: "Direct sun, 4–6 hours" },
      { label: "Water", value: "Every 2–3 weeks" },
      { label: "Humidity", value: "Low" },
      { label: "Difficulty", value: "Very easy" },
    ],
  },
  {
    name: "Flowering Houseplants",
    icon: "flower",
    examples: "Orchid · Peace lily · African violet",
    description:
      "Indoor bloomers that bring colour to windowsills year-round. Consistent light and gentle feeding matter more than frequent watering here.",
    care: [
      { label: "Light", value: "Bright, filtered" },
      { label: "Water", value: "Keep lightly moist, never soggy" },
      { label: "Humidity", value: "High — group or mist" },
      { label: "Difficulty", value: "Moderate" },
    ],
  },
  {
    name: "Herbs",
    icon: "sprout",
    examples: "Basil · Mint · Rosemary · Thyme",
    description:
      "The most rewarding category of all — grow them on a sunny sill and harvest dinner from your own plant. Each herb has its own rhythm, but all love light.",
    care: [
      { label: "Light", value: "6+ hours of sun" },
      { label: "Water", value: "When topsoil feels dry" },
      { label: "Humidity", value: "Average room" },
      { label: "Difficulty", value: "Easy" },
    ],
  },
];

export interface Tip {
  title: string;
  body: string;
}

export const gardeningTips: Tip[] = [
  {
    title: "Start with the soil, not the plant",
    body: "Healthy soil is ninety percent of gardening. Mix compost into beds before planting and choose a well-draining potting mix for containers — roots need air as much as water.",
  },
  {
    title: "Learn your light before you buy",
    body: "Spend one day noticing where sun actually falls in your space. Match plants to the light you have — a sun-loving lavender will sulk in a shaded corner no matter how well you water it.",
  },
  {
    title: "Water deeply, less often",
    body: "A long soak once or twice a week grows deeper roots than a daily sprinkle. Always check first: press a finger two centimetres into the soil, and water only if it feels dry.",
  },
  {
    title: "Feed lightly during the growing season",
    body: "Plants only need extra food when they are actively growing. A diluted, balanced fertiliser every few weeks in spring and summer is plenty — skip feeding entirely in winter.",
  },
  {
    title: "Deadhead to keep flowers coming",
    body: "Snipping spent blooms tells the plant to make more instead of setting seed. Five minutes of deadheading each week keeps roses, geraniums and daisies flowering for months.",
  },
  {
    title: "Mulch is a quiet miracle",
    body: "A layer of bark, straw or leaf mould around plants holds moisture, blocks weeds and feeds the soil as it breaks down. Keep it a hand's width from stems to prevent rot.",
  },
  {
    title: "Check for pests before they spread",
    body: "Turn leaves over when you water. Spotting aphids or spider mites early means a spray of water or a dab of soapy water fixes it — no chemicals needed.",
  },
  {
    title: "Keep a simple garden journal",
    body: "Note what you planted, when, and how it did. Next season you'll know which corner is too shady for tomatoes and which rose blooms its heart out — and why.",
  },
];

export interface Season {
  name: string;
  months: string;
  accent: "blush" | "butter" | "sage" | "sage-deep";
  headline: string;
  blooms: string[];
  tasks: string[];
}

export const seasons: Season[] = [
  {
    name: "Spring",
    months: "March – May",
    accent: "blush",
    headline: "The garden wakes up",
    blooms: ["Tulips", "Daffodils", "Early roses", "Hellebores"],
    tasks: [
      "Prune roses just as buds swell",
      "Sow hardy annuals directly outdoors",
      "Divide crowded perennials",
      "Feed beds with fresh compost",
    ],
  },
  {
    name: "Summer",
    months: "June – August",
    accent: "butter",
    headline: "Peak colour and long evenings",
    blooms: ["Sunflowers", "Lavender", "Hibiscus", "Dahlias"],
    tasks: [
      "Deadhead weekly for endless blooms",
      "Water deeply in the early morning",
      "Harvest herbs regularly to keep them bushy",
      "Watch for aphids on new growth",
    ],
  },
  {
    name: "Autumn",
    months: "September – November",
    accent: "sage-deep",
    headline: "Planting for next year",
    blooms: ["Late roses", "Chrysanthemums", "Asters", "Japanese anemones"],
    tasks: [
      "Plant tulip bulbs before the first frost",
      "Mulch beds to protect roots",
      "Collect and label seeds",
      "Pot up tender plants to bring indoors",
    ],
  },
  {
    name: "Winter",
    months: "December – February",
    accent: "sage",
    headline: "Rest, plan and dream",
    blooms: ["Orchids", "Winter pansies", "Hellebores", "Camellias"],
    tasks: [
      "Protect tender plants with fleece",
      "Prune dormant trees and shrubs",
      "Order seeds and sketch next year's beds",
      "Let orchids bloom on the windowsill",
    ],
  },
];

export interface GalleryItem {
  image: string;
  caption: string;
  sub: string;
  height: string;
}

export const galleryItems: GalleryItem[] = [
  {
    image: imgGreenhouse,
    caption: "The potting shed",
    sub: "A sunlit greenhouse full of ferns",
    height: "h-96",
  },
  {
    image: imgRose,
    caption: "Blush at dawn",
    sub: "Garden roses before the heat",
    height: "h-64",
  },
  {
    image: imgSunflower,
    caption: "Following the sun",
    sub: "Helianthus in the summer bed",
    height: "h-72",
  },
  {
    image: imgLavender,
    caption: "Purple haze",
    sub: "Lavender rows in hazy light",
    height: "h-80",
  },
  {
    image: imgTulip,
    caption: "Spring whisper",
    sub: "Pastel tulips in soft focus",
    height: "h-64",
  },
  {
    image: heroGarden,
    caption: "The long border",
    sub: "Peonies, roses and cream cosmos",
    height: "h-56",
  },
  {
    image: imgHibiscus,
    caption: "Tropical afternoon",
    sub: "Hibiscus in full bloom",
    height: "h-72",
  },
  {
    image: imgOrchid,
    caption: "Windowsill grace",
    sub: "Phalaenopsis on the sill",
    height: "h-80",
  },
];
