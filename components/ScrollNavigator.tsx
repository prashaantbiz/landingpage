"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollNavigator() {
  const [bookingVisible, setBookingVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById("consultation-form");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  const scroll = () => window.scrollTo({ top: bookingVisible ? 0 : Math.min(window.scrollY + window.innerHeight * 0.82, document.documentElement.scrollHeight), behavior: "smooth" });
  return <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.15 }} onClick={scroll} className="scroll-navigator" aria-label={bookingVisible ? "Back to top" : "Scroll down"}><span className={bookingVisible ? "arrow-up" : "arrow-down"} aria-hidden /></motion.button>;
}
