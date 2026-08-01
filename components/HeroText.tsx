"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const line: Variants = { hidden: { opacity: 0, y: 35, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } } };

export function HeroText() {
  const reducedMotion = useReducedMotion();
  return <div className="max-w-4xl"><motion.p initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : 0.9, duration: 0.5 }} className="hero-badge"><span /> Created for <strong>Healthcare Clinic Owners</strong></motion.p><motion.h1 variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: reducedMotion ? 0 : 1 } } }} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="mt-6 font-display text-[clamp(2.35rem,5vw,4.7rem)] font-semibold leading-[.98] tracking-[-.065em] text-white"><motion.span variants={line} className="block">Let&apos;s diagnose what&apos;s</motion.span><motion.span variants={line} className="block">blocking your clinic&apos;s <em>growth.</em></motion.span></motion.h1><motion.p initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : 1.3, duration: 0.5 }} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-100 sm:text-lg sm:leading-7">Book a Free 1:1 Patient Acquisition Strategy Consultation and receive a customized digital growth roadmap for your clinic.</motion.p></div>;
}
