export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  runtime: string;
  featured: boolean;
  wip?: boolean;
  logline: string;
  objective: string;
  concept: string;
  role: string;
  tools: string[];
  process: { t: string; d: string }[];
  poster: string;
  video: string;
  aspect: "video" | "portrait";
};

export const projects: Project[] = [
  {
    slug: "claude-makes-videos",
    title: "Claude Can Make Videos?!",
    kicker: "AI Workflow · Explainer",
    year: "2026",
    runtime: "0:30",
    featured: true,
    logline:
      "A retro paper-craft breakdown of how Claude plugs into video tools — proving the AI you know for text can direct a finished film.",
    objective:
      "Show a non-technical audience that Claude isn't just a chatbot — it's a creative director. The film had to land one idea in thirty seconds: Claude + the right plugins = cinematic video, no code required.",
    concept:
      "Ransom-note typography on craft paper, vintage colour blocks, and a tactile collage aesthetic. The plug literally connects on screen — two prongs meeting inside a teal circle — so the integration feels physical, not abstract. Every frame is designed to screenshot well.",
    role: "Director · Editor · Motion Design",
    tools: ["Claude", "invideo Agent", "After Effects", "CapCut"],
    process: [
      { t: "Hook", d: "Led with the question the audience is already asking: 'Claude can make videos?!'" },
      { t: "Design", d: "Built a paper-craft collage style — warm stock, torn edges, stamp type — so each frame feels handmade." },
      { t: "Connect", d: "Animated the plug metaphor to land the idea physically: two tools click together, video comes out." },
      { t: "Cut", d: "Kept it under thirty seconds — every beat earns its frame, nothing outstays." },
    ],
    poster: "/images/Claude-Makes-Videos.png",
    video: "/videos/Claude-Makes-Videos_854x480.mp4",
    aspect: "video",
  },
  {
    slug: "double-slit",
    title: "The Double-Slit",
    kicker: "Quantum Mechanics",
    year: "2026",
    runtime: "1:07",
    featured: true,
    logline:
      "A minute inside the experiment that broke classical certainty — and why the simple act of watching changes the answer.",
    objective:
      "Make quantum measurement legible to a scrolling feed. The brief was a single, honest goal: a viewer with no physics background should finish the film understanding why observation collapses possibility — and want to argue about it.",
    concept:
      "Paper-craft physics. The set is a single sheet of warm stock; electrons are dots, slits are cuts, and the observer becomes a character — a lone teal eye that turns the wave into a particle the moment it looks. Every idea earns exactly one frame, so nothing crowds the mystery.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Premise", d: "Cut the concept to one testable sentence: watching changes the outcome." },
      { t: "Board", d: "Storyboarded on paper first — the aesthetic came from the medium, not a filter." },
      { t: "Generate", d: "Built shot continuity in invideo, held the palette flat with a locked style key." },
      { t: "Cut", d: "Scored the reveal so the pattern collapses on the beat the eye opens." },
    ],
    poster: "/images/Quantum-Double-Slit.jpg",
    video: "/videos/Quantum-Double-Slit_1080x1920.mp4",
    aspect: "portrait",
  },
  {
    slug: "electromagnetism",
    title: "Fields in Motion",
    kicker: "Electromagnetism",
    year: "2026",
    runtime: "1:18",
    featured: true,
    logline:
      "Magnets, motors and the invisible field between them — the hidden handshake that turns electricity into movement.",
    objective:
      "Take four ideas that usually need a textbook — field, force, current and the motor effect — and connect them into one continuous visual argument the viewer can feel in under ninety seconds.",
    concept:
      "The invisible, made physical. A horseshoe magnet breathes a field into the paper; current and field meet and the frame literally pushes. North and South are cast as two characters with weight and intent, so an abstract law reads as a relationship rather than an equation.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Premise", d: "One through-line: every motor is just current arguing with a field." },
      { t: "Board", d: "Mapped the four beats so each visual hands off cleanly to the next." },
      { t: "Generate", d: "Kept iconography consistent across shots — same magnet, same weight, every cut." },
      { t: "Cut", d: "Timed the 'push' to a low hit so the force lands physically, not just visually." },
    ],
    poster: "/images/Electromagnetism-Motors-Magnets.jpg",
    video: "/videos/Electromagnetism-Motors-Magnets_1080x1920.mp4",
    aspect: "portrait",
  },
  {
    slug: "the-sailor",
    title: "The Sailor",
    kicker: "Claymation · Short Film",
    year: "2026",
    runtime: "1:39",
    featured: true,
    logline:
      "A lonely sailor with gold teeth and a good heart looks for love on a claymation street where the sea meets the sky.",
    objective:
      "Step away from the explainer format and prove range: a character-driven narrative short with real emotion, timing and comedy — the kind of story that usually takes a stop-motion studio, made solo with AI.",
    concept:
      "Handmade in feel, generated in fact. Every surface reads like fingerprinted clay — the cobblestones, the crooked houses, the sailor's weathered face. The whole film leans into that tactile, stop-motion charm so the technology disappears and the character is all that's left.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Character", d: "Locked the sailor's look first — gold grille, pipe, sailor blues — so he stayed consistent shot to shot." },
      { t: "World", d: "Built the claymation street as a persistent set: same houses, same light, believable depth." },
      { t: "Beats", d: "Storyboarded the little love story so each expression and pause earns its screen time." },
      { t: "Cut", d: "Edited for comic and emotional timing, then graded warm to sell the handmade, sunlit feel." },
    ],
    poster: "/images/The-Sailor.jpg",
    video: "/videos/The-Sailor_1254x720.mp4",
    aspect: "video",
  },
  {
    slug: "invideo-agent",
    title: "invideo Agent",
    kicker: "AI Platform · Showcase",
    year: "2026",
    runtime: "0:33",
    featured: true,
    logline:
      "A cinematic showcase of invideo's AI agent — the creative platform that turns a single prompt into a finished, production-ready video.",
    objective:
      "Demonstrate the feel and finish of AI-generated video by letting the platform itself be the subject. The goal: a viewer should see the output and stop asking whether AI video is ready.",
    concept:
      "The interface becomes the set. A woman reaches through a glass UI, selecting the agent; the film then lives inside the generation — smooth, polished, human. The tech disappears into the result.",
    role: "Director · Editor",
    tools: ["invideo Agent", "After Effects", "CapCut"],
    process: [
      { t: "Brief", d: "Centred the film on one claim: prompt in, cinematic video out." },
      { t: "Capture", d: "Let invideo generate the hero shots, then selected for continuity and tone." },
      { t: "Cut", d: "Edited tight — every cut reinforces speed and quality, nothing lingers without purpose." },
      { t: "Polish", d: "Graded warm, matched the platform's own palette so product and output feel unified." },
    ],
    poster: "/images/Invideo-Agent-Showcase.jpg",
    video: "/videos/Invideo-Agent-Showcase_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "higgsfield-explainer",
    title: "Higgsfield Explainer",
    kicker: "2D Explainer · Product",
    year: "2026",
    runtime: "0:30",
    featured: true,
    logline:
      "A punchy 2D explainer that breaks down Higgsfield's AI video platform — from prompt to finished cinematic video in seconds.",
    objective:
      "Translate a product pitch into motion. The brief was clarity at scroll-speed: anyone should understand what Higgsfield does within thirty seconds, without pausing or re-watching.",
    concept:
      "Flat, bold, animated. A laptop opens, the logo lands, and the rest is kinetic typography and clean iconography on an electric-blue field. No live footage — the 2D style keeps focus on the message, not the messenger.",
    role: "Director · Motion Design · Edit",
    tools: ["After Effects", "CapCut"],
    process: [
      { t: "Script", d: "Distilled the product story to three beats: problem, platform, proof." },
      { t: "Design", d: "Locked a flat 2D style with a single accent colour so every frame reads instantly." },
      { t: "Animate", d: "Built kinetic type and icon transitions that move with the voiceover rhythm." },
      { t: "Deliver", d: "Rendered at 720p for fast-loading social embeds; the style holds at any size." },
    ],
    poster: "/images/Higgsfield-Explainer.jpg",
    video: "/videos/Higgsfield-Explainer_1280x720.mp4",
    aspect: "video",
  },
  {
    slug: "the-bandits",
    title: "The Bandits",
    kicker: "Voxel · Animated Short",
    year: "2026",
    runtime: "0:30",
    featured: true,
    logline:
      "Two block-headed bandits crack a vault, grab the cash, and sprint through a voxel underworld — a heist film built entirely from cubes.",
    objective:
      "Push AI-generated animation into stylised 3D territory. The goal was a complete heist narrative — setup, break-in, escape — in thirty seconds, with enough character and atmosphere to feel like a real animated short, not a tech demo.",
    concept:
      "Voxel noir. Every character and prop is built from hard-edged blocks, but the lighting, smoke and camera work sell weight and danger. The cigar glows, cash stacks shimmer, and the vault door looms — all within a low-poly world that reads as intentional style, not limitation.",
    role: "Director · Editor · Motion Design",
    tools: ["Minimax", "After Effects", "CapCut"],
    process: [
      { t: "World", d: "Designed the vault set in a voxel style — heavy metal, stacked cash, moody overhead light." },
      { t: "Characters", d: "Gave each bandit a distinct silhouette and accessory (glasses + cigar, bandana + cap) for instant read." },
      { t: "Action", d: "Choreographed the heist beat by beat — door, grab, run — so every second drives the story forward." },
      { t: "Cut", d: "Edited for pace and punch, layered in bass-heavy score to sell the weight of the world." },
    ],
    poster: "/images/The-Bandits-Heist.jpg",
    video: "/videos/The-Bandits-Heist_1280x720.mp4",
    aspect: "video",
  },
  {
    slug: "arcade-of-speculation",
    title: "The Arcade of Speculation",
    kicker: "Motion Type · Conceptual",
    year: "2026",
    runtime: "0:32",
    featured: true,
    logline:
      "A kinetic-type short that turns crypto speculation into an arcade — bold typography, a ticking clock, and the question no one can answer: when do you cash out?",
    objective:
      "Take the language and anxiety of speculative markets and make it feel visceral. The film had to land in under a minute on a feed, using motion typography and minimal iconography to hold attention without live footage.",
    concept:
      "Dark field, hot orange. An arcade cabinet becomes the metaphor — speculation as a game with real stakes and a timer running down. Every word earns its frame: big type hits hard, then dissolves before the viewer can settle. The style borrows from retro interfaces and brutalist poster design.",
    role: "Director · Motion Design · Edit",
    tools: ["After Effects", "CapCut"],
    process: [
      { t: "Script", d: "Wrote the narration as a series of punches — short, declarative, timed to land on the beat." },
      { t: "Design", d: "Locked a dark-on-orange palette with a single line-art arcade cabinet as the recurring motif." },
      { t: "Animate", d: "Built kinetic type that scales, fades and snaps in rhythm with the voiceover." },
      { t: "Cut", d: "Mixed the audio bed low and percussive so the words carry the energy, not the music." },
    ],
    poster: "/images/Arcade-Of-Speculation.jpg",
    video: "/videos/Arcade-Of-Speculation_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "in-production",
    title: "Untitled — In Production",
    kicker: "Next Film",
    year: "2026",
    runtime: "—",
    featured: false,
    wip: true,
    logline: "The next short film is in the cut. Follow along on X to see it first.",
    objective: "",
    concept: "",
    role: "Director",
    tools: ["invideo Agent", "Minimax"],
    process: [],
    poster: "",
    video: "",
    aspect: "portrait",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featured = projects.filter((p) => p.featured);
export const archive = projects;
