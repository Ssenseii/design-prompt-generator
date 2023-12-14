const themes = [
    "Minimalist Elegance",
    "Vintage Vibes",
    "Futuristic",
    "Nature-Inspired",
    "Dark Mode Delight",
    "Watercolor Wonderland",
    "Cinematic Experience",
    "Gaming Fantasy",
    "Whimsical Wonderland",
    "Art Deco Glam",
    "High-Contrast Monochrome",
    "Tech-Savvy",
    "Retro Gaming Fun",
    "Botanical Bliss",
    "Typography-Centric",
    "Space Exploration",
    "Cyberpunk Aesthetics",
    "Candy-Colored Dreams",
    "Tropical Paradise",
    "Sci-Fi Noir",
    "Urban Jungle",
    "Dreamy Pastels",
    "Nautical Adventure",
    "Collage Artistry",
    "Steampunk Marvel",
    "Galactic Opulence",
    "Geometric Harmony",
    "Cozy Comfort",
    "Magical Realism",
    "Neon Nights",
    "Graffiti Street Art",
    "Ethereal Elegance",
    "Celestial Serenity",
    "Rustic Charm",
    "Dynamic Duotone",
    "Digital Nomad",
    "Mystical Moonlight",
    "Colorful Contrasts",
    "High-Tech Industrial",
    "Jungle Adventure",
    "Dreamy Watercolors",
    "Dynamic Data",
    "Coastal Bliss",
    "Streetwear Chic",
    "Monochromatic Marvel",
    "Surreal Sci-Fi",
    "Aurora Borealis",
    "Vintage Travelogue",
    "Culinary Delights",
    "Dynamic Lines",
    "Isometric Illusions",
    "Whispers of Wisdom",
    "Neon Wilderness",
    "Festival Vibes",
    "Interactive Learning",
    "Enchanted Forest",
    "Abstract Realism",
    "Sunset Serenade",
    "Avant-Garde Elegance",
    "Cybernetic Organics",
    "Folklore Fusion",
    "Pixel Perfection",
    "Oceanic Odyssey",
    "Cityscape Symphony"
];


const websiteTypes = [
    "E-commerce Website",
    "Blog",
    "Portfolio Website",
    "News Website",
    "Social Media Platform",
    "Educational Website",
    "Corporate Website",
    "Personal Website",
    "Forum",
    "Entertainment Website",
    "Government Website",
    "Nonprofit Website",
    "Job Board",
    "Review Website",
    "Wiki",
    "Health and Fitness Website",
    "Travel Website",
    "Real Estate Website",
    "Food and Recipe Website",
    "Technology Blog",
    "Fashion and Lifestyle Blog",
    "Dating Website",
    "Photography Portfolio",
    "Job Search Engine",
    "Video Streaming Platform",
    "Music Streaming Service",
    "Freelance Marketplace",
    "E-learning Platform",
    "Financial News Website",
    "Pet Adoption Website",
    "Political Blog",
    "Gaming Community",
    "Tech Support Forum",
    "Virtual Reality Platform",
    "Language Learning Website",
    "Freelance Writing Marketplace",
    "Science News Portal",
    "DIY Crafts and Projects Blog",
    "Fitness Challenge Community",
    "Green Living and Sustainability Website",
    "Online Art Gallery",
    "Book Review Blog",
    "Web Development Agency Portfolio",
    "Virtual Assistant Services Marketplace",
    "Parenting Advice Blog",
    "Culinary Arts Community",
    "Motivational Quotes Repository",
    "History and Heritage Website",
    "Online Marketplace for Handmade Crafts",
    "Astronomy and Space Exploration Blog",
    "Car Enthusiast Forum",
    "Home Renovation and Decor Website",
    "Local Community Events Calendar",
    "Fashion Trends and Styling Blog",
    "Mindfulness and Meditation Platform",
    "Human Rights Advocacy Website",
    "Pet Health and Wellness Forum",
    "Investment and Finance Blog",
    "Travel Photography Portfolio",
    "Coding Bootcamp Information Hub",
    "Gardening Tips and Tricks Blog",
    "Personal Finance Management Tool",
    "Sustainable Living Marketplace",
    "Virtual Book Club"
];

const designErrors = [
    "Glitch Art",
    "VHS Distortion",
    "Pixelation",
    "Anaglyph 3D",
    "Double Exposure",
    "Overprinting",
    "Chiaroscuro and High Contrast",
    "Halftone Patterns",
    "Letterpress Effect",
    "Ink Bleed",
    "Paper Texture Overlay",
    "Data Moshing",
    "Posterization",
    "Decay Effect",
    "Retro Futurism",
    "Cinematic Color Grading",
    "Chromatic Aberration",
    "Databending",
    "Torn Paper Effect",
    "Digital Noise",
    "Scanlines",
    "Decollage",
    "Glitch Typography",
    "Moiré Pattern",
    "Juxtaposed Elements",
    "Pixel Sorting",
    "Distorted Reflections",
    "Color Bleed",
    "Dithering",
    "Light Leaks",
    "CRT Monitor Scan",
    "Risograph Printing",
    "Tape Artifacts",
    "Analog Glitch",
    "Watercolor Bleed",
    "Rough Edges",
    "Mismatched Fonts",
    "Upside-Down Perspective",
    "Overexposure Effect",
    "Color Channel Separation",
    "Lens Flare",
    "Vignetting",
    "Old Film Effect",
    "Scratched Texture",
    "Hand-Drawn Doodles",
    "Warped Geometry",
    "Exaggerated Shadows",
    "Broken Glass Effect",
    "Light Streaks",
    "Ghosting",
    "Handwritten Annotations",
    "Faded Polaroid Look",
    "Collage Montage",
    "Light and Shadow Play",
    "Negative Space Manipulation",
    "Layered Cutouts",
    "Sun Flares",
    "Urban Decay Aesthetics",
    "Disrupted Grid Layout",
    "Oil Painting Texture",
    "Glitchy UI Elements",
    "Distorted Reflections",
    "Futuristic Holography",
    "Muted Color Palette"
];


const htmlPrompt = document.getElementById("prompt");
const htmlGenerator = document.getElementById("generator");

const localStorageKey = "website-prompt";

function generatePrompt() {
    const pWeb = websiteTypes[Math.floor(Math.random() * websiteTypes.length)];
    const pTheme = themes[Math.floor(Math.random() * themes.length)];
    const pDesign = designErrors[Math.floor(Math.random() * designErrors.length)];

    let aOrAn = isVowel(pWeb[0]) ? "an" : "a";

    const promptText = `Make ${aOrAn} <span class="p_web">${pWeb}</span> under the <span class="p_theme">${pTheme}</span> theme using the <span class="p_design">${pDesign}</span> aesthetic.`;

    htmlPrompt.innerHTML = promptText;
    localStorage.setItem(localStorageKey, promptText);
}

function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

let savedPrompt = localStorage.getItem(localStorageKey);

if (savedPrompt) {
    htmlPrompt.innerHTML = savedPrompt;
} else {
    generatePrompt();
}

htmlGenerator.addEventListener("click", generatePrompt);