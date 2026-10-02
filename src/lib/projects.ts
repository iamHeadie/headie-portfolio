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
  aspect: "video" | "portrait" | "square";
};

export const projects: Project[] = [
  {
    slug: "hyperbeat-beat-the-banks",
    title: "Hyperbeat — Beat the Banks",
    kicker: "Fintech · Product Ad",
    year: "2026",
    runtime: "0:20",
    featured: true,
    logline:
      "It opens like your bank's ad — then the screen glitches into a dot-matrix beat machine: passkey sign-up, up to 8% APY, no CEX, no bank, no waiting.",
    objective:
      "Sell a liquid-banking app to people who are tired of being told to wait. In twenty seconds the ad had to land four product claims, make them feel fast, and leave the viewer with one line and one URL.",
    concept:
      "A fake-out, then a beat. The first frame parodies a legacy bank spot — cream background, serif type, 'Serving you since forever' — before Hyperbeat hijacks it. Everything after is cut to 131 BPM: a recording HUD counts beats and timecode, dot-matrix type punches each claim on the downbeat, and orange tape notes heckle the old way. It ends on the pixel-heart logo and 'Beat the banks.'",
    role: "Director · Motion Design · Edit",
    tools: ["Claude", "Hyperframes", "After Effects", "CapCut"],
    process: [
      { t: "Hook", d: "Opened on a parody of a traditional bank ad, so the switch to Hyperbeat lands as a surprise." },
      { t: "Tempo", d: "Locked the edit to 131 BPM — 37 beats, every cut and type hit on the grid." },
      { t: "System", d: "Built a dot-matrix type and logo system with a REC/BPM HUD that frames the whole ad." },
      { t: "Payoff", d: "Closed on logo, tagline, URL and asset chips, with one last joke: 'your bank still has you on hold.'" },
    ],
    poster: "/images/Hyperbeat-Beat-The-Banks.jpg",
    video: "/videos/Hyperbeat-Beat-The-Banks_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "nothing-to-claim",
    title: "Nothing to Claim",
    kicker: "Cinematic · Poetry Film",
    year: "2026",
    runtime: "0:42",
    featured: true,
    logline:
      "Dark farmland, humming servers, and a voice that says what's left when there's nothing to claim — a visual poem on existence and the void.",
    objective:
      "Push AI film into poetry territory. No plot, no product, no explainer — just atmosphere, rhythm and a line of text that lands like a gut punch. The film had to prove that AI-generated imagery can carry weight without a narrative crutch.",
    concept:
      "Teal and black. Endless crop rows vanish into storm haze; server racks blink in a cathedral of data; bold serif type hits on a dark-green field. The palette never warms — every frame lives in shadow and cold light, so the words carry all the heat. The visual logic borrows from Tarkovsky's still landscapes and Fincher's server-room cool.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Write", d: "Wrote the narration as a single spoken thought — no chapters, no turns, just one breath that builds." },
      { t: "World", d: "Built two visual anchors — the open field and the server aisle — and cut between them as the idea deepens." },
      { t: "Grade", d: "Crushed the shadows and pushed the palette teal-green so every frame reads as nocturnal, even in daylight." },
      { t: "Cut", d: "Timed the type hits to the voiceover pauses — the silence between words does half the work." },
    ],
    poster: "/images/Nothing-To-Claim.jpg",
    video: "/videos/Nothing-To-Claim_1280x720.mp4",
    aspect: "video",
  },
  {
    slug: "tired-of-the-old-way",
    title: "Tired of the Old Way?",
    kicker: "Fintech · Product Ad",
    year: "2026",
    runtime: "0:34",
    featured: true,
    logline:
      "Transfer failed, long queues, card declined — a thirty-second fintech ad that turns banking frustration into a reason to switch.",
    objective:
      "Sell a feeling, not a feature list. The brief was to make everyday banking pain visceral — failed transfers, branch queues, declined cards — then resolve it all in one clean product reveal that says: there's a better way.",
    concept:
      "Dark purple gradient meets crisp UI cards. Pain points float in as notification badges the viewer already dreads, then the product sweeps them away with a teal-and-green palette that reads secure and modern. The shift from problem to solution mirrors the emotional arc: frustration to relief in under thirty seconds.",
    role: "Director · Motion Design · Edit",
    tools: ["After Effects", "CapCut"],
    process: [
      { t: "Hook", d: "Opened with the pain — 'Transfer failed,' 'Long queues' — so the viewer feels the frustration before the fix." },
      { t: "Design", d: "Built notification-style UI cards on a deep purple field; each badge is a real annoyance, not a generic icon." },
      { t: "Pivot", d: "Timed the brand reveal to land the moment the last pain point clears — relief as a beat." },
      { t: "Polish", d: "Graded the palette from warm warning tones to cool teal-green to mirror the emotional shift." },
    ],
    poster: "/images/Tired-Of-The-Old-Way.png",
    video: "/videos/Tired-Of-The-Old-Way_1920x1080.mp4",
    aspect: "video",
  },
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
    slug: "internet-of-blockchains",
    title: "The Internet of Blockchains",
    kicker: "Retro Explainer · Web3",
    year: "2026",
    runtime: "1:37",
    featured: true,
    logline:
      "A vintage film-grain explainer that breaks down how blockchains interconnect — told through retro typography and the warm haze of old celluloid.",
    objective:
      "Make blockchain interoperability feel approachable. The film needed to explain a dense technical idea — how separate chains talk to each other — in under two minutes, without jargon, using a visual style that keeps viewers watching instead of scrolling past.",
    concept:
      "Old film, new idea. The entire piece is graded to look like recovered 16mm footage — soft vignettes, film-gate flicker, and bold display type that punches through the grain. The retro aesthetic disarms the viewer so the concept lands before they realise it's a tech explainer.",
    role: "Director · Editor · Motion Design",
    tools: ["After Effects", "CapCut"],
    process: [
      { t: "Script", d: "Distilled interoperability to a single metaphor: chains as cities, bridges as roads between them." },
      { t: "Look", d: "Built a 16mm film-grain pipeline — vignette, flicker, and warm halation — so every frame feels archival." },
      { t: "Type", d: "Set key terms in heavy display type with glow edges so they read through the grain." },
      { t: "Cut", d: "Paced the edit slower than the other shorts — the subject needs a beat to breathe and land." },
    ],
    poster: "/images/Internet-Of-Blockchains.jpg",
    video: "/videos/Internet-Of-Blockchains_1440x1080.mp4",
    aspect: "video",
  },
  {
    slug: "binance-bridge-hack",
    title: "The Binance Bridge Hack",
    kicker: "Crypto · News Explainer",
    year: "2026",
    runtime: "1:21",
    featured: true,
    logline:
      "The $100 million bridge hack that shook Binance — broken down in eighty seconds with headlines, footage and a clear chain of cause and effect.",
    objective:
      "Turn a complex DeFi exploit into a story anyone can follow. The brief: a viewer who has never heard of a bridge hack should understand what happened, why it mattered, and what changed — all before they lose interest.",
    concept:
      "News-reel pacing on a paper-white backdrop. Real headlines scroll in, CZ appears in his hoodie, and the narrative builds from breach to hard fork in a tight, punchy sequence. The style borrows from broadcast news but strips the clutter — one idea per cut, no lower-thirds fighting for attention.",
    role: "Director · Editor",
    tools: ["After Effects", "CapCut"],
    process: [
      { t: "Research", d: "Mapped the hack timeline from breach to Moran hard fork — every claim sourced before scripting." },
      { t: "Script", d: "Wrote a narration that builds like a news bulletin: what, how, how much, what next." },
      { t: "Edit", d: "Cut headlines and footage to match the voiceover beat for beat — no dead air." },
      { t: "Grade", d: "Kept the palette neutral and clean so the red of the alert badges carries all the urgency." },
    ],
    poster: "/images/Binance-Bridge-Hack.jpg",
    video: "/videos/Binance-Bridge-Hack_640x360.mp4",
    aspect: "video",
  },
  {
    slug: "does-ai-think",
    title: "Does AI Think?",
    kicker: "Paper-Craft · Explainer",
    year: "2026",
    runtime: "0:40",
    featured: true,
    logline:
      "A paper-craft gear turns, teal strokes land on the beat, and forty seconds later you're not sure the answer is no.",
    objective:
      "Ask the question everyone argues about and make it feel genuine — not clickbait. The film needed to sit with the ambiguity: AI processes, patterns, responds — but does it think? Forty seconds to earn the doubt.",
    concept:
      "Tactile and minimal. A paper-cut gear on warm stock does the heavy lifting — mechanism as metaphor for cognition. Teal marker strokes highlight each step; the texture says handmade while the pacing says sharp. The style matches the Double-Slit and Electromagnetism shorts, extending the paper-craft universe into AI.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "After Effects", "CapCut"],
    process: [
      { t: "Question", d: "Started with the question, not the answer — the film's job is to make the viewer sit with it." },
      { t: "Design", d: "Kept the paper-craft palette: warm stock, teal accents, hand-drawn marker lines." },
      { t: "Animate", d: "The gear turns on the beat; each rotation advances the argument one step." },
      { t: "Cut", d: "Trimmed to forty seconds — tight enough for a feed, open enough to start a conversation." },
    ],
    poster: "/images/Does-AI-Think.jpg",
    video: "/videos/Does-AI-Think_854x480.mp4",
    aspect: "video",
  },
  {
    slug: "lagos-state",
    title: "Lagos State",
    kicker: "Narrative · Short Film",
    year: "2026",
    runtime: "0:27",
    featured: true,
    logline:
      "A young woman in a Lagos State tee, head down in a warm-lit library — twenty-seven seconds of quiet focus that say more than dialogue ever could.",
    objective:
      "Prove that AI-generated film can carry intimacy. No effects, no motion graphics — just a character, a setting, and enough cinematic craft to make the viewer feel like they walked into someone's real afternoon.",
    concept:
      "Warm and still. Shallow depth of field dissolves the library shelves into bokeh; the only sharpness is her face, her braids, the faded college print on her shirt. The palette leans amber and brown, the lighting feels like late afternoon through dusty windows. Every choice says: this is a person, not a render.",
    role: "Director · Cinematography · Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Character", d: "Locked the look first — braids, Lagos State tee, small hoop earring — so she reads as specific, not generic." },
      { t: "Setting", d: "Built the library as a lived-in space: warm wood, soft shelves, natural light that wraps around her." },
      { t: "Mood", d: "Kept the camera close and the edit slow — every frame earns its stillness." },
      { t: "Grade", d: "Pushed the grade warm and low-contrast so the image feels analogue, not digital." },
    ],
    poster: "/images/Lagos-State.jpg",
    video: "/videos/Lagos-State_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "claude-motion-reel",
    title: "Claude Motion Reel",
    kicker: "Motion Design · Showreel",
    year: "2026",
    runtime: "0:15",
    featured: true,
    logline:
      "Easing, kinetic type, depth, fluid sim — fifteen seconds, one take, zero cuts, every motion principle on a single burnt-orange stage.",
    objective:
      "Compress a motion designer's toolkit into a reel short enough to autoplay in a feed. Each technique gets its own labelled chapter so a client can see the range at a glance — then the whole thing resolves into a title card that doubles as a calling card.",
    concept:
      "Broadcast-monitor framing. A timecode HUD, frame counter and chapter labels sit around the edges like a viewfinder, while oversized ghost type — EASE, DATA, DEPTH, FLUID — anchors each section. A single orange dot travels through everything, then floods the frame for the final CLAUDE. card.",
    role: "Motion Design · Direction",
    tools: ["Claude", "Hyperframes", "After Effects"],
    process: [
      { t: "Structure", d: "Split the reel into labelled chapters — easing, kinetic type, 3D, fluid sim, transitions." },
      { t: "System", d: "Locked one palette (black, bone, burnt orange) and one moving dot as the thread through every section." },
      { t: "Build", d: "Generated the frames programmatically so every chapter lands on an exact frame count — 450 frames, one take." },
      { t: "Resolve", d: "Ended on a full-bleed orange title card with the skill tags, so the last frame works as a poster." },
    ],
    poster: "/images/Claude-Motion-Reel.jpg",
    video: "/videos/Claude-Motion-Reel_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "black-clover-edit",
    title: "Black Clover — Anime Edit",
    kicker: "Anime Edit · AI Workflow",
    year: "2026",
    runtime: "0:22",
    featured: true,
    logline:
      "From timeline to screen — an AI agent cuts a Black Clover fight into a hype edit, and the film shows you exactly how it was made.",
    objective:
      "Show that an AI editing agent can handle the fast, beat-driven cutting anime edits demand. The piece opens on the actual edit session, then hands over to the finished cut so the viewer sees process and payoff in one clip.",
    concept:
      "Behind-the-scenes to full-screen. The first beat is the editor itself — timeline, clips, prompt panel — then it smashes into Asta's sword strike in blazing red, grimoire pages exploding in neon, and a cold blue close-up to close. Colour does the storytelling: red for impact, green for magic, blue for the calm before the next hit.",
    role: "Editor · Motion",
    tools: ["invideo Agent", "CapCut"],
    process: [
      { t: "Source", d: "Pulled the key Black Clover moments — the sword swing, the grimoire burst, the quiet close-up." },
      { t: "Direct", d: "Briefed the AI agent on pacing and beat markers, then refined the cut inside the timeline." },
      { t: "Reveal", d: "Opened on the screen recording so the audience sees the workflow before the result." },
      { t: "Cut", d: "Snapped every hit to the music — flashes, speed ramps and glitch frames on the downbeats." },
    ],
    poster: "/images/Black-Clover-Edit.jpg",
    video: "/videos/Black-Clover-Edit_1920x1080.mp4",
    aspect: "video",
  },
  {
    slug: "vegas-nights",
    title: "Vegas Nights",
    kicker: "Retro · Lifestyle Promo",
    year: "2026",
    runtime: "0:23",
    featured: true,
    logline:
      "Casino chips in slow motion, a neon pool party, a mustachioed high roller on a camel at sunset — a pink-soaked retro Vegas fever dream.",
    objective:
      "Build a lifestyle promo that sells a mood, not a product. The brief was pure energy: every shot should feel like the best night of someone's life, with enough absurd humour to make people rewatch and share.",
    concept:
      "Sixties Vegas through a candy filter. Hot pink and teal neon, vintage swimwear, flying chips and popping champagne. The recurring high roller — gold chain, big moustache, zero shirt — turns up at the tables and in the desert, giving the montage a character to follow and a running joke to land.",
    role: "Director · Editor",
    tools: ["invideo Agent", "Minimax", "CapCut"],
    process: [
      { t: "Mood", d: "Built a palette board first — flamingo pink, pool teal, sunset gold — and held every shot to it." },
      { t: "Character", d: "Kept the high roller consistent across casino, pool and desert so he carries the montage." },
      { t: "Generate", d: "Generated slow-motion hero moments: chips mid-air, the champagne pop, the camel ride." },
      { t: "Cut", d: "Delivered square for the feed and paced the edit like a party — fast, loud, no dead frames." },
    ],
    poster: "/images/Vegas-Nights.jpg",
    video: "/videos/Vegas-Nights_720x720.mp4",
    aspect: "square",
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
