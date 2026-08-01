"use client";
import { motion, useReducedMotion } from "framer-motion";

export function HeroGlass({ children }: Readonly<{ children: React.ReactNode }>) {
  const reducedMotion = useReducedMotion();
  return <motion.div initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.97, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ delay: reducedMotion ? 0 : 0.4, type: "spring", stiffness: 90, damping: 20 }} className="hero-glass relative overflow-hidden rounded-[2rem] sm:rounded-[2.8rem]">{children}</motion.div>;
}
