const prompts = [
    "Parallel Universes",
    "Time Travel Dilemma",
    "City in the Clouds",
    "The Last Tree",
    "Memory Erasure Technology",
    "Dream Exchange",
    "Living Tattoos",
    "Elemental Civilization",
    "Emotion-Powered Magic",
    "Isolated Time Loop",
    "Sentient Technology Rebellion",
    "Bioluminescent Ecosystem",
    "Reverse Aging Serum",
    "Underwater Civilization",
    "Museum of Forgotten Dreams",
    "Infinite Library",
    "Invisible Society",
    "Language of the Stars",
    "Magnetic Imprints",
    "Sentient Plant Life",
    "Pandemic of Dreams",
    "Reality-Shifting Art",
    "Weather Manipulation Conspiracy",
    "Infinite Labyrinth",
    "Astral Projection Adventures",
    "Living Statues",
    "Whispering Forest",
    "Music-Based Magic",
    "Reincarnation Hub",
    "Memory Market",
    "Holographic Wildlife Reserve",
    "Magnetic Monuments",
    "Echoes of Eternity",
    "Whispering Shadows",
    "Digital Mirage",
    "Timeless Odyssey",
    "Chronicles of Lumina",
    "Quantum Threads",
    "Ephemeral Nexus",
    "Celestial Serenade",
    "Aetherial Alchemy",
    "Vivid Vortex",
    "Luminous Echo",
    "Synthetic Symphony",
    "Journey Across Zephyr",
    "Enigma of Echo",
    "Dreamscape Chronicles",
    "Infinite Reverie",
    "Sonic Stardust",
    "Vortex of Visions",
    "Reverberating Realms",
    "Eternal Enigma",
    "Stellar Harmony",
    "Cosmic Kaleidoscope",
    "Nebulaic Nomad",
    "Labyrinth of Luminosity",
    "Visions Beyond Veil",
    "Temporal Tides",
    "Whirlwind Wonders",
    "Harmony in Holography",
    "Lunar Lullaby",
    "Ripples in Reality",
    "Umbra Unveiled"
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


const html_prompt = document.getElementById("prompt");
const html_generator = document.getElementById("generator");


const localStorageKey = "website-prompt";


function generate_prompt(){
    const p_web = websiteTypes[Math.floor(Math.random() * websiteTypes.length)];
    const p_prompt = prompts[Math.floor(Math.random() * prompts.length)];
    const p_design = designErrors[Math.floor(Math.random() * designErrors.length)];
    
    let a_or_an = "a";
    
    if (p_web[0].toLowerCase() == "a" || p_web[0].toLowerCase() == "e" || p_web[0].toLowerCase() == "o" || p_web[0].toLowerCase() == "i" || p_web[0].toLowerCase() == "u"){
        a_or_an = "an"
    } 
    
    const prompt_text = `Make ${a_or_an} <span class="p_web"> ${p_web}</span> specializing in <span class="p_prompt">${p_prompt} </span> using the <span class="p_design">${p_design}</span> aesthetic.`
    
    html_prompt.innerHTML = prompt_text;

    localStorage.setItem(localStorageKey, prompt_text);
}

let savedPrompt = localStorage.getItem(localStorageKey);

if (savedPrompt) {
    html_prompt.innerHTML = savedPrompt;
} else {
    generate_prompt();
}

html_generator.addEventListener("click", generate_prompt);