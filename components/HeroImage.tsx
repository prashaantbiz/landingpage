"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroImage({ tilt }: { tilt: { x: number; y: number } }) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={reducedMotion ? false : { opacity: 0, scale: 0.82, filter: "blur(12px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: tilt.y * 2, y: tilt.x * -2 }} transition={{ opacity: { delay: reducedMotion ? 0 : 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }, scale: { delay: reducedMotion ? 0 : 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }, filter: { delay: reducedMotion ? 0 : 0.6, duration: 0.9 }, x: { duration: 0.8 }, y: { duration: 0.8 } }} className="hero-portrait absolute inset-0"><Image src="/06. Folded Arms for thumbnails.png" alt="Prashaant Biz consultant" fill priority sizes="(max-width: 640px) 100vw, 1430px" className="object-cover object-[52%_center]" /></motion.div>;
}
