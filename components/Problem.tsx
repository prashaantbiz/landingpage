import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section id="challenge" className="px-5 py-16 sm:py-28">
      <Reveal className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:grid-cols-[.8fr_1.2fr] sm:p-12">
        <div><p className="eyebrow">The challenge</p><h2 className="section-title mt-5">Your marketing should feel <span>clear.</span></h2></div>
        <p className="max-w-2xl self-end text-lg leading-8 text-zinc-300">If your clinic is relying on referrals, posting content without a strategy, or unsure how to use Meta Ads effectively, this consultation will help you identify growth opportunities and the next steps for attracting more qualified patient leads.</p>
      </Reveal>
    </section>
  );
}
