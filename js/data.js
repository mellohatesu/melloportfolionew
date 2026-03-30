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
    role:    "ART DIRECTION · 3D · ANIMATION — PERSONAL",
    tags:    ["3D", "GAMING", "MOTION"],
    cover:   'img/cs2-cover.jpg',
    loop:    'img/cs2-loop.mp4',
    body:    `A work-in-progress weapon skin concept for Counter-Strike 2 — fully self-directed from concept to execution. <strong>Art direction, 3D modeling, texturing, and animation all done from scratch</strong> in Cinema 4D and After Effects.`,
    process: [
      {
        label: 'THE ASK',
        body:  `A self-directed concept: design a CS2 weapon skin that feels native to the game's visual language while bringing something fresh — <strong>character-driven, expressive, and technically believable</strong>.`,
      },
      {
        label: 'APPROACH',
        body:  `Started with reference pulls from anime and tactical gear, then built the geometry from the ground up in Cinema 4D. The challenge was balancing the mechanical accuracy of the weapon with the painterly, illustrative qualities of the skin art.`,
      },
      {
        label: 'EXECUTION',
        body:  `Modeled and UV-unwrapped in C4D, textured in Substance Painter, then brought into After Effects for the animated reveal. <strong>Still a WIP</strong> — next step is refining the material shading and adding wear maps.`,
      },
    ],
    details: [
      { l: "TYPE",   v: "Personal Concept"        },
      { l: "TOOLS",  v: "C4D + Substance + AE"    },
      { l: "YEAR",   v: "2026"                    },
      { l: "STATUS", v: "WIP"                     },
    ],
    media: [
      { type: 'vimeo', id: '1174608858' },
    ],
  },
  {
    title:   "Party at my Place",
    year:    "2026",
    role:    "ART DIRECTION · ILLUSTRATION · ANIMATION — FREELANCE",
    tags:    ["MUSIC VIDEO", "MOTION", "2D"],
    cover:   'img/party-cover.png',
    loop:    'img/party-loop.mp4',
    body:    `A fully hand-crafted music video for <strong>Xaviersobased</strong>. Every visual element was built from scratch — custom sprite work, character illustration, and iMessage UI mockups, all designed and animated by hand in Figma and Bannedstory.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Xaviersobased needed a music video that matched the energy of the track — <strong>fun, loose, and visually alive</strong>. The direction was mine to own completely, from concept through delivery.`,
      },
      {
        label: 'APPROACH',
        body:  `Built a visual world around custom pixel sprites and iMessage UI mockups, designed entirely in Figma and Bannedstory. Leaned into a handmade quality — frame-by-frame moments that felt personal rather than polished.`,
      },
      {
        label: 'EXECUTION',
        body:  `All sprite work, UI design, illustration, and animation done from scratch in After Effects. <strong>Cuts and motion were synced to specific moments in the track</strong> to make the video feel reactive to the music, not just running alongside it.`,
      },
    ],
    details: [
      { l: "CLIENT",  v: "Xaviersobased"              },
      { l: "TOOLS",   v: "AE + Figma + Bannedstory"   },
      { l: "YEAR",    v: "2026"                        },
      { l: "CREDITS", v: "All assets self-made"        },
    ],
    media: [
      { type: 'vimeo', id: '1167972742' },
    ],
  },
  {
    title:   "Elektron Bumper",
    year:    "2025",
    role:    "ART DIRECTION · PIXEL ART · UI ANIMATION · SOUND DESIGN — FREELANCE",
    tags:    ["PIXEL ART", "UI MOTION", "SOUND DESIGN"],
    cover:   'img/elektron-cover.jpg',
    loop:    'img/elektron-loop.mp4',
    body:    `A fully self-produced bumper for <strong>Elektron</strong> — every pixel, frame, and sound built from scratch. Original pixel art, UI animation, and a complete sound design score composed in FL Studio.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Elektron makes synthesizers and drum machines for serious musicians. The bumper needed to feel as <strong>precise and intentional as their hardware</strong> — nothing wasted, everything deliberate.`,
      },
      {
        label: 'APPROACH',
        body:  `Drew all pixel art from scratch, taking inspiration from the physical interface of their machines — grids, knobs, sequencer lights. The sound design was composed in FL Studio to mirror that same systematic, rhythmic quality.`,
      },
      {
        label: 'EXECUTION',
        body:  `UI animation built in After Effects, sound design produced entirely in FL Studio. <strong>Every frame cut was tied to a sound event</strong> — the audio and visual were designed together, not layered on top of each other afterward.`,
      },
    ],
    details: [
      { l: "CLIENT",  v: "Elektron"                       },
      { l: "TOOLS",   v: "AE + FL Studio"                 },
      { l: "YEAR",    v: "2025"                           },
      { l: "CREDITS", v: "All assets + sound self-made"   },
    ],
    media: [
      { type: 'vimeo', id: '1160322961' },
    ],
  },
  {
    title:   "Goshi",
    year:    "2024",
    role:    "ART DIRECTION · ANIMATION · MUSIC — FREELANCE",
    tags:    ["MOTION", "2D", "ORIGINAL MUSIC"],
    cover:   'img/goshi-cover.jpg',
    loop:    'img/goshi-loop.mp4',
    body:    `A fully self-produced animated bumper for <strong>Goshi</strong> — original music composed in FL Studio, particle and camera animation built entirely from scratch in After Effects.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Goshi needed a short animated piece that could live across social and digital placements. <strong>Fast, clear, and on-brand</strong> — communicating what the product does before someone scrolls past.`,
      },
      {
        label: 'APPROACH',
        body:  `Wrote and produced the original score in FL Studio first — letting the music set the pace and energy before a single frame was animated. The motion was built to serve the music, not the other way around.`,
      },
      {
        label: 'EXECUTION',
        body:  `Particle animation and camera work built entirely in After Effects. Delivered multiple aspect ratio cuts — <strong>square, vertical, and horizontal</strong> — all from the same master comp, with the original track mixed to match each format.`,
      },
    ],
    details: [
      { l: "CLIENT",  v: "Goshi (Freelance)"              },
      { l: "TOOLS",   v: "AE + FL Studio"                 },
      { l: "YEAR",    v: "2024"                           },
      { l: "CREDITS", v: "Illustrations by Ricky Pacas + music self-made"    },
    ],
    media: [
      { type: 'vimeo', id: '1160322890' },
      { type: 'vimeo', id: '1178289573' },
      { type: 'image', src: 'img/goshi-process1.png'  },
      { type: 'image', src: 'img/goshi-process2.png' }
    ],
  },
  {
    title:   "Elastic.",
    year:    "2025",
    role:    "ART DIRECTION · ANIMATION · SOUND DESIGN — PERSONAL",
    tags:    ["MOTION", "GRAPHIC DESIGN", "SOUND DESIGN"],
    cover:   'img/elastic-cover.jpg',
    loop:    'img/elastic-loop.mp4',
    body:    `A fully self-directed motion study — original graphic design, custom elastic expressions built from scratch, and a complete sound design score produced in FL Studio. <strong>Every element made by hand.</strong>`,
    process: [
      {
        label: 'THE ASK',
        body:  `Self-directed. Wanted to <strong>push my understanding of secondary motion</strong> — specifically how elastic and spring-based easing can make animation feel physical and alive. And to design a complete audiovisual piece, not just moving graphics.`,
      },
      {
        label: 'APPROACH',
        body:  `Designed all graphic elements from scratch, then built custom bounce and elastic expressions in After Effects — no plugins, expressions only. Sound design was composed in FL Studio in parallel, so audio and motion informed each other throughout.`,
      },
      {
        label: 'EXECUTION',
        body:  `Iterated through a series of object interactions, each testing a different easing scenario. <strong>The study became a reference library</strong> I now pull from on client work — and a proof that sound design and motion are the same discipline approached from different angles.`,
      },
    ],
    details: [
      { l: "TYPE",    v: "Personal Study"                     },
      { l: "TOOLS",   v: "AE + FL Studio"                     },
      { l: "YEAR",    v: "2025"                               },
      { l: "CREDITS", v: "All design + sound self-made"       },
    ],
    media: [
      { type: 'vimeo', id: '1160322882' },
    ],
  },
  {
    title:   "Kapital.",
    year:    "2025",
    role:    "ART DIRECTION · DESIGN · ANIMATION — PERSONAL",
    tags:    ["BRAND", "TEXTURE", "PRINT"],
    cover:   'img/kapital-cover.jpg',
    loop:    'img/kapital-loop.mp4',
    body:    `A personal motion study exploring <strong>editorial print aesthetics in motion</strong> — heavy textures, tight typography, and the kind of tactile grain you'd find flipping through a magazine. All design and animation self-directed from scratch.`,
    process: [
      {
        label: 'THE ASK',
        body:  `Self-directed. Wanted to push into territory I don't usually work in — <strong>print and editorial design translated into motion</strong>. The goal was to make something that felt like it existed on paper first.`,
      },
      {
        label: 'APPROACH',
        body:  `Pulled reference from editorial brands and print magazines — studying how they use <strong>texture, negative space, and typographic hierarchy</strong> to create weight and mood. Then asked: how does that feel when it moves?`,
      },
      {
        label: 'EXECUTION',
        body:  `Built entirely in After Effects. Layered paper grain, ink textures, and halftone elements — all designed from scratch — to give the motion a <strong>physical, analog quality</strong>. Typography was treated as a design element first, communication second.`,
      },
    ],
    details: [
      { l: "TYPE",    v: "Personal Study"         },
      { l: "TOOLS",   v: "AE + Photoshop"         },
      { l: "YEAR",    v: "2025"                   },
      { l: "CREDITS", v: "All assets self-made"   },
    ],
    media: [
      { type: 'vimeo', id: '1160322849'              },
      { type: 'image', src: 'img/kapital-process.jpg'  },
      { type: 'image', src: 'img/kapital-process2.jpg' },
    ],
  },
];