"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
const line: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: [0.25, 1, .5, 1] as [number,number,number,number] } } };
export function Headline() { const reducedMotion = useReducedMotion(); return <motion.h1 variants={{ hidden: {}, visible: { transition: { staggerChildren: .12, delayChildren: reducedMotion ? 0 : .58 } } }} initial={reducedMotion ? "visible" : "hidden"} animate="visible" className="hero-headline"><motion.span variants={line}>Let&apos;s diagnose what&apos;s</motion.span><motion.span variants={line}>blocking your clinic&apos;s</motion.span><motion.span variants={line}><em>growth.</em></motion.span></motion.h1>; }
