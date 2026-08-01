"use client";
import { motion, useReducedMotion } from "framer-motion";

export function CTAButton() { const reducedMotion = useReducedMotion(); return <motion.a initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reducedMotion ? 0 : 1.1, duration: 0.45 }} whileHover={reducedMotion ? undefined : { scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#consultation-form" className="hero-cta">Book Free Consultation <b aria-hidden>→</b></motion.a>; }
