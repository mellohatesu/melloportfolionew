"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

type MediaItem = { type: "image" | "video" | "text"; src?: string; caption?: string; text?: string };

const caseStudies: {
  id: string;
  title: string;
  year?: string;
  description?: string;
  media: MediaItem[];
}[] = [
  {
    id: "kapital",
    title: "Kapital Reel",
    year: "2025",
    description: "A short reel showcasing motion design and logo animations for Kapital. Role: Director / Motion Designer.",
    media: [
      { type: "video", src: "/projects/Kapital_FINISHED.mp4", caption: "Full Video" },
,
    ],
  },
    {
    id: "project4",
    title: "Goshi Animated Bumper",
    year: "2025",
    description: "Paid media for Goshi, a Japanese self-care company. All illustration done by Ricky Pacas.",
    media: [
      { type: "video", src: "/projects/project4.mp4", caption: "Full Video" },
      { type: "image", src: "/images/goshi-process.gif", caption: "Storyboard" },
      { type: "image", src: "/images/goshi-process1.png", caption: "Ricky passes me this, I comp it." },
      { type: "image", src: "/images/goshi-process2.png", caption: "Breakdown of layers" },
    ],
  },
  {
    id: "project2",
    title: "CFCF Promotional Bumper",
    year: "Spring 2025",
    description: "Animated mobile teaser for CFCF's Memoryland",
    media: [
       { type: "video", src: "/projects/project2.mp4", caption: "Full Video" }
    ],
  },
  {
    id: "project3",
    title: "Project Three",
    year: "Summer 2025",
    description: "Audio visual exploration",
    media: [
      { type: "video", src: "/projects/project3.mp4", caption: "Full Video" },
      { type: "image", src: "/images/project1-recording.gif", caption: "Keyframe breakdown" },
    ],
  },
];

const motionProjects = [
  // you can map these to caseStudies by id
  { id: "kapital", src: "/projects/Kapital_FINISHED.mp4", title: "Kapital Reel", year: "Spring 2025", description: "Short description of project one." },
  { id: "project4", src: "/projects/project4.mp4", title: "Goshi Animated Bumper", year: "Fall 2024", description: "Paid media for Goshi, a Japanese self-care company" },
  { id: "project2", src: "/projects/project2.mp4", title: "CFCF Memoryland Teaser", year: "Spring 2025", description: "" },
  { id: "project3", src: "/projects/project3.mp4", title: "Elastic", year: "Summer 2025", description: "Audio visual exploration" },
];

const titles = ["Designer", "Animator", "Musician"];
const typeSpeed = 140;
const backspaceSpeed = 50;
const pauseAfterTyping = 1000;


export default function Page() {
  const router = useRouter();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // modal state
  const [caseStudy, setCaseStudy] = useState<typeof caseStudies[number] | null>(null);

  // typewriter
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleType = () => {
      const currentTitle = titles[titleIndex];
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
          timeout = setTimeout(handleType, typeSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
          timeout = setTimeout(handleType, backspaceSpeed);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          timeout = setTimeout(handleType, typeSpeed);
        }
      }
    };
    timeout = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  // custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // hover detection for links to enlarge the cursor
  useEffect(() => {
    const links = document.querySelectorAll("a");
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    links.forEach((l) => {
      l.addEventListener("mouseenter", enter);
      l.addEventListener("mouseleave", leave);
    });
    return () => {
      links.forEach((l) => {
        l.removeEventListener("mouseenter", enter);
        l.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  // open case study by project id
  const openCaseStudyFromProject = (projId: string) => {
    const found = caseStudies.find((c) => c.id === projId);
    if (found) setCaseStudy(found);
    else {
      // fallback: create a simple caseStudy from project if not found
      const proj = motionProjects.find((p) => p.id === projId);
      if (proj) {
        setCaseStudy({
          id: proj.id,
          title: proj.title,
          year: proj.year,
          description: proj.description,
          media: proj.src ? [{ type: "video", src: proj.src }] : [],
        });
      }
    }
  };

  // prevent background scroll and escape to close
  useEffect(() => {
    if (!caseStudy) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCaseStudy(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [caseStudy]);

  // helper: media refs & intersection observer for autoplay & lazy load
  const mediaRefs = useRef<Array<HTMLVideoElement | null>>([]);
  useEffect(() => {
    if (!caseStudy) return;

    mediaRefs.current = mediaRefs.current.slice(0, caseStudy.media.length);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (!el) return;
          if (entry.isIntersecting) {
            // autoplay when sufficiently visible
            if (el.dataset.lazySrc && !el.getAttribute("src")) {
              el.setAttribute("src", el.dataset.lazySrc);
            }
            el.play().catch(() => {
              /* autoplay might be blocked; user can press play */
            });
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.6, root: document.querySelector("[data-modal-root]") ?? null }
    );

    mediaRefs.current.forEach((v) => {
      if (v) io.observe(v);
    });

    return () => io.disconnect();
  }, [caseStudy]);

  // render media items
  const renderMedia = (m: MediaItem, i: number) => {
    if (m.type === "text") {
      return (
        <div key={i} className="w-full max-w-[1200px] mx-auto my-8">
          <div className="prose prose-invert max-w-none text-base leading-relaxed">
            <p>{m.text}</p>
          </div>
        </div>
      );
    }
    if (m.type === "image") {
      return (
        <div key={i} className="w-full max-w-[1200px] mx-auto my-8">
          <img
            src={m.src}
            alt={m.caption ?? `image-${i}`}
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-2xl"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
          />
          {m.caption && <p className="mt-2 text-sm opacity-80">{m.caption}</p>}
        </div>
      );
    }
    // video
return (
  <div key={i} className="w-full max-w-[1200px] mx-auto my-8">
    <video
      // lazy src: data-lazy-src will be swapped into src when intersecting
      ref={(el) => {
        if (!mediaRefs.current) mediaRefs.current = [];
        mediaRefs.current[i] = el;
      }}
      data-lazy-src={m.src}
      // don't set src initially to keep network idle; set when observer hits
      preload="metadata"
      controls
      playsInline
      className="w-full h-auto rounded-xl shadow-2xl"
    />
    {m.caption && <p className="mt-2 text-sm opacity-80">{m.caption}</p>}
  </div>
);
  };

  return (
    <motion.main
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative min-h-screen bg-[#111111] text-white"
    >
      {/* cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 rounded-full mix-blend-difference transition-all duration-150 ease-out ${hovering ? "w-8 h-8" : "w-4 h-4"}`}
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      />

      {/* hero */}
      <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#212121] text-white">
        {/* background video */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="/hero.mp4" autoPlay loop muted playsInline />

        <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Mello Ige</h1>

        <h2 className="relative z-10 text-3xl md:text-4xl font-semibold flex">
          {displayText.split("").map((char, idx) => (
            <motion.span key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.03 }}>
              {char}
            </motion.span>
          ))}
          <motion.span className="inline-block w-1" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
            |
          </motion.span>
        </h2>
      </section>

      {/* nav */}
      <nav className="fixed top-6 right-6 z-50 text-sm uppercase tracking-wide flex gap-6 text-white">
        {["motion", "writing"].map((sec) => (
          <a key={sec} onClick={() => document.getElementById(sec) && document.getElementById(sec)!.scrollIntoView({ behavior: "smooth", block: "start" })} className="transition-transform duration-300 hover:scale-110 cursor-pointer relative">
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
        <Link href="/about" className="transition-transform duration-300 hover:scale-110 cursor-pointer relative">About</Link>
      </nav>

      {/* projects grid */}
      <section id="motion" className="p-10">
        <h2 className="text-2xl sm:text-3xl mb-6 text-center">Selected Motion Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {motionProjects.map((proj) => (
            <div key={proj.id} onClick={() => openCaseStudyFromProject(proj.id)} className="relative aspect-video overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <video className="w-full h-full object-cover" src={proj.src} autoPlay loop muted playsInline />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                  <p className="text-sm">{proj.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {caseStudy && (
          <motion.div
            key="case-study-modal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            data-modal-root
          >
            {/* soft frosted backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setCaseStudy(null)} />

            {/* fullscreen modal content */}
            <div className="relative z-60 w-full h-full overflow-hidden">
              {/* sticky close */}
              <button
                onClick={() => setCaseStudy(null)}
                className="fixed top-6 right-6 z-70 rounded-full bg-white/10 backdrop-blur-md text-white p-3 shadow-lg hover:bg-white/40 transition"
                aria-label="Close case study"
              >
                ×
              </button>

              {/* scrollable content */}
              <div className="absolute inset-0 overflow-y-auto">
                <div className="mx-auto max-w-[1200px] px-6 py-10">
                  {/* header */}
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold">{caseStudy.title}</h2>
                    {caseStudy.year && <p className="mt-1 text-sm opacity-70">{caseStudy.year}</p>}
                    {caseStudy.description && <p className="mt-4 text-base leading-relaxed opacity-90">{caseStudy.description}</p>}
                  </div>

                  {/* media stack */}
                  <div>
                    {caseStudy.media.map((m, i) => (
                      <div key={i}>{renderMedia(m, i)}</div>
                    ))}
                  </div>

                  {/* footer */}
                  <div className="mt-12 pb-24 text-sm opacity-70">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
