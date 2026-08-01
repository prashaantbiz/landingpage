export function Hero() {
  return (
    <section className="relative mx-auto h-[500px] w-full max-w-[760px] overflow-hidden rounded-2xl bg-black md:h-[550px]">
      <img src="/06. Folded Arms for thumbnails.png" alt="Clinic consultation" className="absolute inset-0 h-full w-full object-contain object-bottom" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end gap-4 px-6 pb-12 text-center">
        <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 0.94 }} className="max-w-3xl text-3xl text-white md:text-5xl">
          Let&apos;s diagnose what&apos;s <span className="text-[#cafb01]">blocking growth</span>
        </h1>
        <p className="max-w-lg font-display text-sm text-gray-200 md:text-base">
          Book a Free 1:1 Patient Acquisition Strategy Consultation and receive a customized digital growth roadmap for your clinic.
        </p>
        <a href="#consultation-form" className="mt-2 rounded-full bg-[#cafb01] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#d3fe00]">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
