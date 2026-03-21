/*
  ╔════════════════════════════════════════════════════════════╗
  ║  MELLO IGE — PROJECT DATA                                 ║
  ║  Edit this file to update projects, bio, links            ║
  ╠════════════════════════════════════════════════════════════╣
  ║  CARD THUMBNAIL (shown in the project grid):              ║
  ║    cover  — path to a still image, shown on load          ║
  ║             e.g. 'img/cs2-cover.jpg'                      ║
  ║    loop   — path to a short silent mp4, plays on hover    ║
  ║             e.g. 'img/cs2-loop.mp4'                       ║
  ║    Leave as '' until you have the files ready.            ║
  ║                                                           ║
  ║  MODAL MEDIA (shown inside the case study):               ║
  ║    { type: 'vimeo',       id: '123456789' }               ║
  ║    { type: 'image',       src: 'img/photo.jpg',           ║
  ║                           thumb: 'img/photo-sm.jpg' }     ║
  ║    { type: 'placeholder', label: 'PROCESS 01' }           ║
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
    cover:   'img/party-cover.jpg',
    loop:    'img/party-loop.mp4',
    body:    `A music video made for <strong>Xaviersobased</strong> — a freelance motion project blending 2D animation and illustration to bring the track to life. Built in After Effects and Illustrator.`,
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
    title:   "Elektron",
    year:    "2025",
    role:    "MOTION DESIGNER — ELEKTRON",
    tags:    ["UI MOTION", "CORPORATE"],
    cover:   'img/elektron-cover.jpg',
    loop:    'img/elektron.mp4',
    body:    `Animated social media assets and product content for <strong>Elektron</strong>. Motion-forward work built to match the brand's precise, technical aesthetic — delivered in After Effects and Premiere.`,
    details: [
      { l: "CLIENT", v: "Elektron"                },
      { l: "ROLE",   v: "Motion Designer"          },
      { l: "TOOLS",  v: "After Effects + Premiere" },
      { l: "YEAR",   v: "2025"                     },
    ],
    media: [
      { type: 'vimeo',       id: '1160322961'     },
      { type: 'placeholder', label: 'CAMPAIGN 01' },
      { type: 'placeholder', label: 'CAMPAIGN 02' },
    ],
  },
  {
    title:   "Goshi Animated Ad",
    year:    "2024",
    role:    "MOTION DESIGNER — FREELANCE",
    tags:    ["MOTION", "2D", "FREELANCE"],
    cover:   'img/goshi-cover.jpg',
    loop:    'img/goshi-loop.mp4',
    body:    `A freelance animated ad for <strong>Goshi</strong> — designed to grab attention and communicate the product quickly. <strong>Clean 2D motion, tight timing</strong>, built entirely in After Effects.`,
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
    title:   "Goshi Dashboard",
    year:    "2025",
    role:    "UI CONCEPT — GOSHI",
    tags:    ["PIXEL", "UI", "CONCEPT"],
    cover:   'img/goshi-dash-cover.jpg',
    loop:    'img/goshi-dash-loop.mp4',
    body:    `A UI motion study for Goshi — <strong>blending retro pixel aesthetics with modern UX</strong>. Animated character widgets, pixel-style transitions, and a dashboard that actually feels fun to interact with.`,
    details: [
      { l: "CLIENT", v: "Study"               },
      { l: "ROLE",   v: "Motion + UI Concept"  },
      { l: "TOOLS",  v: "AE + Figma"           },
      { l: "YEAR",   v: "2025"                 },
    ],
    media: [
      { type: 'vimeo', id: '1160322882' },
    ],
  },
];