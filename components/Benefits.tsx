import { Reveal } from "./Reveal";
const benefits = [
  "Identify what's preventing your clinic from generating more qualified patient leads.",
  "Receive a customized patient acquisition strategy based on your business goals.",
  "Learn how Meta Ads and content marketing can work together to support your clinic's growth.",
  "Understand the highest-impact opportunities to improve your digital presence.",
  "Walk away with a clear action plan you can confidently follow.",
];

export function Benefits() {
  return <section className="px-5 py-16 sm:py-28"><div className="mx-auto max-w-6xl"><Reveal className="text-center"><p className="eyebrow">Your roadmap</p><h2 className="section-title mt-5">How you <span>benefit</span> from this consultation</h2></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((benefit, index) => <Reveal delay={index * 0.07} key={benefit}><article className="benefit-card h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6"><span className="mb-8 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-black">0{index + 1}</span><p className="text-base leading-7 text-zinc-200">{benefit}</p></article></Reveal>)}</div></div></section>;
}
