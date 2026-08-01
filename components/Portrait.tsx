"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function Portrait() { const reducedMotion = useReducedMotion(); return <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, ease: [0.16, 1, .3, 1] }} className="hero-portrait-mobile absolute inset-x-0 bottom-0 z-[2] h-[72%]"><Image src="/06. Folded Arms for thumbnails.png" alt="Prashaant Biz consultant" fill priority sizes="(max-width: 760px) 95vw, 760px" className="object-contain object-bottom" /></motion.div>; }
