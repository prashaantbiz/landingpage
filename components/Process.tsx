import { Reveal } from "./Reveal";
const steps = [
  "Fill out the form to book your free consultation.",
  "We'll discuss your clinic, your current marketing efforts, your business goals, and the challenges you're facing.",
  "You'll receive a customized digital growth roadmap with practical next steps to help your clinic attract more qualified patient leads.",
];

export function Process() {
  return <section className="px-5 py-16 sm:py-28"><div className="mx-auto max-w-6xl"><Reveal><p className="eyebrow text-center">Simple and focused</p><h2 className="section-title mx-auto mt-5 max-w-3xl text-center">Your consultation <span>process</span></h2></Reveal><div className="mt-14 grid gap-7 md:grid-cols-3">{steps.map((step, index) => <Reveal key={step} delay={index * 0.1}><article className="process-card relative border-t border-white/20 pt-6"><p className="font-display text-5xl font-semibold tracking-tighter text-accent">0{index + 1}</p><h3 className="mt-5 font-display text-xl font-semibold text-white">Step {index + 1}</h3><p className="mt-3 leading-7 text-zinc-300">{step}</p></article></Reveal>)}</div></div></section>;
}
