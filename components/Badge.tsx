"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Badge() { const reducedMotion = useReducedMotion(); return <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : .48, duration: .45 }} className="hero-badge-mobile"><span aria-hidden /> <small>Created for</small><strong>Healthcare Clinic Owners</strong></motion.div>; }
