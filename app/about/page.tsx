"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const galleryImages = Array.from({ length: 6 }, (_, i) => `/gallery/photo-${i + 1}.jpg`);
const kaomojis = ["(*^‿^*)","(╯°□°）╯︵ ┻━┻","(≧◡≦)","(•_•)","(>_<)","(^_~)","(✿◠‿◠)","(¬_¬)"];
const greetings = ["Hi", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "Hallo", "Olá"];

interface KaomojiParticle {
  id: number;
  x: number;
  y: number;
  char: string;
  size: number;
  bounceHeight: number;
  phase: number;
  offsetX?: number;
  offsetY?: number;
}

export default function AboutPage() {
  const [particles, setParticles] = useState<KaomojiParticle[]>([]);
  const requestRef = useRef<number | null>(null);
  const [greetIndex, setGreetIndex] = useState(0);
  const [animateGreeting, setAnimateGreeting] = useState(false);
  const [showKaomojis, setShowKaomojis] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  // Initialize Kaomojis
  useEffect(() => {
    const initParticles: KaomojiParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 10, // left side
      y: Math.random() * 70 + 5,
      char: kaomojis[Math.floor(Math.random() * kaomojis.length)],
      size: 16 + Math.random() * 12,
      bounceHeight: 2 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
    })).concat(
      Array.from({ length: 12 }, (_, i) => ({
        id: i + 12,
        x: 90 + Math.random() * 10, // right side
        y: Math.random() * 70 + 5,
        char: kaomojis[Math.floor(Math.random() * kaomojis.length)],
        size: 16 + Math.random() * 12,
        bounceHeight: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
      }))
    );
    setParticles(initParticles);
  }, []);

  // Animate greeting
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateGreeting(true);
      setTimeout(() => { 
        setGreetIndex((prev) => (prev + 1) % greetings.length); 
        setAnimateGreeting(false); 
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Randomize Kaomojis periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.map((p) => ({ ...p, char: kaomojis[Math.floor(Math.random() * kaomojis.length)] })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Kaomoji subtle bounce & horizontal wiggle
  useEffect(() => {
    const animate = (time: number) => {
      setParticles((prev) =>
        prev.map((p) => {
          const bounce = Math.sin(time / 300 + p.phase) * p.bounceHeight;
          const offsetX = Math.sin(time / 1000 + p.phase) * 2; // subtle horizontal wiggle
          return { ...p, offsetX, bounce };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  // Responsive Kaomoji toggle
  useEffect(() => {
    const handleResize = () => setShowKaomojis(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (href: string) => {
    setIsExiting(true);
    setTimeout(() => router.push(href), 500);
  };

  return (
    <motion.main
      key="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-screen min-h-screen bg-[#f1f1f1] text-[#212121] overflow-x-hidden"
      style={{ pointerEvents: isExiting ? "none" : "auto" }}
    >
      {/* Navigation */}
      <nav className="fixed top-6 left-6 z-50 text-sm uppercase tracking-wide text-[#212121]">
        <a
          onClick={() => handleNavigate("/")}
          className="hover:opacity-70 transition cursor-pointer"
        >
          ← Home
        </a>
      </nav>

      {/* Hero & Kaomojis */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24">
        {showKaomojis && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {particles.map((p) => (
              <div
                key={p.id + p.char}
                style={{
                  position: "absolute",
                  left: `${p.x + (p.offsetX || 0)}%`,
                  top: `${p.y}%`,
                  fontSize: `clamp(14px, ${p.size}px, 28px)`,
                  color: "#212121",
                  pointerEvents: "none",
                }}
              >
                {p.char}
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-6 md:px-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-transform duration-500 ease-in-out text-center"
            style={{ transform: animateGreeting ? "translateY(-20px)" : "translateY(0)" }}
          >
            {greetings[greetIndex]}, I’m Mello ദ്ദി ˉ͈̀꒳ˉ͈́ ✧
          </h1>

          <div className="flex flex-col md:flex-row items-start gap-12 py-6 w-full">
            <div className="w-full md:w-1/2">
              <img src="/about/header.gif" alt="Animated portrait" className="w-full h-auto rounded-2xl object-cover" />
            </div>
            <div className="w-full md:w-1/2 text-base leading-relaxed space-y-6">
              <p>I’m a multidisciplinary designer, developer, motion artist, and composer specializing in After Effects, Illustrator, and FL Studio. I create visually engaging experiences that blend design, animation, and music.</p>
              <p>Currently pursuing my undergraduate degree at the School of the Art Institute of Chicago, I’ve been self-teaching design since age 16, inspired by video games and anime. I specialize in post-production and have a particular strength in logo animation. I thrive on projects that challenge me to think outside the box and combine multiple mediums.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-lg tracking-wide uppercase mb-6">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Motion Designer – Quill", description: "Created animated assets and edited social media content, 2025" },
            { title: "Assistant Writer – The Art Institute of Chicago", description: "Oversaw website copy and content, 2024" },
            { title: "Student – School of the Art Institute of Chicago", description: "Undergraduate, Design & Motion, 2022–2026" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm opacity-70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-lg tracking-wide uppercase mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((_, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-xl">
  <img
    src={galleryImages[i]}
    alt={`Gallery photo ${i + 1}`}
    className="w-full h-full object-cover"
  />
</div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
