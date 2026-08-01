"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const expoEase = [0.16, 1, 0.3, 1] as const;
const pageVariants = {
  hidden: { opacity: 0, scale: 0.985, y: 20, filter: "blur(18px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } },
};

export function IntroLoader({ children }: Readonly<{ children: React.ReactNode }>) {
  const reducedMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reducedMotion || sessionStorage.getItem("introPlayed") === "true") {
      setShowIntro(false); setReady(true); return;
    }
    const done = window.setTimeout(() => { sessionStorage.setItem("introPlayed", "true"); setShowIntro(false); setReady(true); }, 2200);
    return () => window.clearTimeout(done);
  }, [reducedMotion]);

  return <><motion.div variants={pageVariants} initial={ready ? "visible" : "hidden"} animate={ready ? "visible" : "hidden"}>{children}</motion.div><AnimatePresence>{showIntro && <motion.div exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)", transition: { duration: 0.45, ease: expoEase } }} className="intro-loader fixed inset-0 z-50 grid place-items-center bg-[#050505]"><motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.12, scale: 1.3 }} transition={{ duration: 1.2, ease: expoEase }} className="intro-glow absolute h-56 w-56 rounded-full" /><motion.div initial={{ opacity: 0, scale: 0.65, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.9, ease: expoEase }} className="relative flex flex-col items-center"><Image src="/logo.png" alt="Prashaant Biz" width={430} height={84} priority className="h-auto w-64 sm:w-80" /><p className="mt-5 font-display text-base font-medium tracking-[-.02em] text-white">wait a <span className="text-[#d3fe00]">seconds</span></p></motion.div></motion.div>}</AnimatePresence></>;
}
