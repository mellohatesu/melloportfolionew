/*
  ╔════════════════════════════════════════════════════════════╗
  ║  MELLO IGE — PROJECT DATA                                 ║
  ║  Edit this file to update projects, bio, links            ║
  ╠════════════════════════════════════════════════════════════╣
  ║  CARD THUMBNAIL (shown in the project grid):              ║
  ║    cover  — path to a still image, shown on load          ║
  ║    loop   — path to a short silent mp4, plays on hover    ║
  ║                                                           ║
  ║  MODAL MEDIA:                                             ║
  ║    { type: 'vimeo',       id: '123456789' }               ║
  ║    { type: 'image',       src: 'img/photo.jpg',           ║
  ║                           thumb: 'img/photo-sm.jpg' }     ║
  ║    { type: 'placeholder', label: 'PROCESS 01' }           ║
  ║                                                           ║
  ║  PROCESS SECTIONS (shown below the video in modal):       ║
  ║    Each item has a label and body. body can include        ║
  ║    <strong> tags for emphasis.                            ║
  ╚════════════════════════════════════════════════════════════╝
*/

const PROJECTS = [
  {
    title:   "CS2 Weapon Skin",
    year:    "2026",
    role:    "CONCEPT — PERSONAL",
    tags:    ["3D", "GAMING", "MOTION"],
    cover:   'img/cs2-cover.jpg',
    loop:    'img/cs2-loop.mp4',
    body:    `A work-in-progress weapon skin concept for Counter-Strike 2. <strong>The goal: blend clean mechanical surfaces with expressive character art</strong> — built in Cinema 4D and After Effects. Still cooking.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Design a CS2 weapon skin that feels at home in the game's visual language while bringing something fresh — <strong>character-driven, expressive, and technically believable</strong>.`,
      },
      {
        label: 'APPROACH',
        body:  `Started with reference pulls from anime and tactical gear, then built the geometry in Cinema 4D. The challenge was balancing the mechanical accuracy of the weapon with the painterly, illustrative qualities of the skin art.`,
      },
      {
        label: 'EXECUTION',
        body:  `Modeled and UV-unwrapped in C4D, textured in Substance Painter, then brought into After Effects for the animated reveal. <strong>Still a WIP</strong> — next step is refining the material shading and adding wear maps.`,
      },
    ],
    details: [
      { l: "TYPE",   v: "Personal Concept" },
      { l: "TOOLS",  v: "C4D + AE"         },
      { l: "YEAR",   v: "2026"             },
      { l: "STATUS", v: "WIP"              },
    ],
    media: [
      { type: 'vimeo', id: '1174608858' },
    ],
  },
  {
    title:   "Party at my Place",
    year:    "2026",
    role:    "MV — FREELANCE",
    tags:    ["MUSIC VIDEO", "MOTION", "2D"],
    cover:   'img/party-cover.png',
    loop:    'img/party-loop.mp4',
    body:    `A music video made for <strong>Xaviersobased</strong> — a freelance motion project blending 2D animation and illustration to bring the track to life.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Xaviersobased needed a music video that matched the energy and vibe of the track — <strong>fun, loose, and visually alive</strong> without feeling overproduced.`,
      },
      {
        label: 'APPROACH',
        body:  `Leaned into 2D illustration with frame-by-frame moments to give it a handmade quality. Built a visual world that felt like a party you'd actually want to be at — bright, chaotic, warm.`,
      },
      {
        label: 'EXECUTION',
        body:  `Illustrated and animated entirely in After Effects and Illustrator. Synced cuts and motion to specific moments in the track to make the video feel reactive to the music rather than just playing alongside it.`,
      },
    ],
    details: [
      { l: "CLIENT", v: "Xaviersobased"    },
      { l: "ROLE",   v: "Motion"           },
      { l: "TOOLS",  v: "AE + Illustrator" },
      { l: "YEAR",   v: "2026"             },
    ],
    media: [
      { type: 'vimeo', id: '1167972742' },
    ],
  },
  {
    title:   "Elektron Bumper",
    year:    "2025",
    role:    "MOTION DESIGNER — ELEKTRON",
    tags:    ["UI MOTION", "SOUND DESIGN"],
    cover:   'img/elektron-cover.jpg',
    loop:    'img/elektron-loop.mp4',
    body:    `Animated bumper for <strong>Elektron</strong> — motion-forward work built to match the brand's precise, technical aesthetic.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Elektron makes synthesizers and drum machines for serious musicians. The bumper needed to feel as <strong>precise and intentional as their hardware</strong> — nothing wasted, everything deliberate.`,
      },
      {
        label: 'APPROACH',
        body:  `Took inspiration from the physical interface of their machines — grids, knobs, sequencer lights. Translated that tactile, systematic quality into motion. Tight timing, no excess.`,
      },
      {
        label: 'EXECUTION',
        body:  `Built in After Effects with custom sound design layered in Premiere. <strong>Every frame cut was tied to a sound event</strong> to give it that locked-in, rhythmic feel that matches how Elektron's instruments actually work.`,
      },
    ],
    details: [
      { l: "CLIENT", v: "Elektron"                },
      { l: "ROLE",   v: "Motion Designer"          },
      { l: "TOOLS",  v: "After Effects + Premiere" },
      { l: "YEAR",   v: "2025"                     },
    ],
    media: [
      { type: 'vimeo', id: '1160322961' },
    ],
  },
  {
    title:   "Goshi",
    year:    "2024",
    role:    "MOTION DESIGNER — FREELANCE",
    tags:    ["MOTION", "2D"],
    cover:   'img/goshi-cover.jpg',
    loop:    'img/goshi-loop.mp4',
    body:    `A freelance animated bumper for <strong>Goshi</strong> — designed to grab attention and communicate the product quickly.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Goshi needed a short animated piece that could live across social and digital placements. <strong>Fast, clear, and on-brand</strong> — communicating what the product does before someone scrolls past.`,
      },
      {
        label: 'APPROACH',
        body:  `Kept it tight. Focused on one clear visual idea and built the motion around it rather than trying to show everything. Clean 2D with snappy timing to hold attention in the first two seconds.`,
      },
      {
        label: 'EXECUTION',
        body:  `Animated entirely in After Effects. Delivered multiple aspect ratio cuts for different placements — <strong>square, vertical, and horizontal</strong> — all from the same master comp.`,
      },
    ],
    details: [
      { l: "TYPE",   v: "Freelance Work" },
      { l: "TOOLS",  v: "After Effects"  },
      { l: "YEAR",   v: "2024"           },
      { l: "STATUS", v: "Completed"      },
    ],
    media: [
      { type: 'vimeo', id: '1160322890' },
    ],
  },
  {
    title:   "Elastic.",
    year:    "2025",
    role:    "MOTION STUDY — PERSONAL",
    tags:    ["MOTION", "AE"],
    cover:   'img/elastic-cover.jpg',
    loop:    'img/elastic-loop.mp4',
    body:    `A personal motion study exploring <strong>elastic easing and organic spring physics</strong> in After Effects.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Self-directed. Wanted to <strong>push my understanding of secondary motion</strong> — specifically how elastic and spring-based easing can make animation feel physical and alive rather than mechanical.`,
      },
      {
        label: 'APPROACH',
        body:  `Set constraints: no plugins, expressions only. Built custom bounce and elastic expressions from scratch to understand the math behind the motion rather than relying on presets.`,
      },
      {
        label: 'EXECUTION',
        body:  `Iterated through a series of object interactions — each one testing a different easing scenario. <strong>The study became a reference library</strong> I now pull from on client work.`,
      },
    ],
    details: [
      { l: "TYPE",   v: "Personal Study" },
      { l: "TOOLS",  v: "After Effects"  },
      { l: "YEAR",   v: "2025"           },
      { l: "STATUS", v: "Completed"      },
    ],
    media: [
      { type: 'vimeo', id: '1160322882' },
    ],
  },
];