"use client";
import { motion, useReducedMotion } from "framer-motion";
export function ScrollIndicator() { const reducedMotion = useReducedMotion(); return <motion.a initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reducedMotion ? 0 : 1.5, duration: .45 }} href="#challenge" aria-label="Scroll down" className="hero-scroll-indicator"><motion.span animate={reducedMotion ? undefined : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>↓</motion.span></motion.a>; }
