"use client";
import { motion, useReducedMotion } from "framer-motion";
export function HeroBackground() { const reducedMotion = useReducedMotion(); return <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .8 }} animate={{ opacity: .18, scale: 1.3 }} transition={{ delay: .2, duration: 1.2, ease: [0.16, 1, .3, 1] }} className="hero-single-gradient" />; }
