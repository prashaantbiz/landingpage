"use client";

export function CTAForm() {
  return (
    <section
      id="consultation-form"
      className="scroll-mt-8 px-5 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-accent/30 bg-gradient-to-b from-accent/[.11] to-white/[.035] p-6 shadow-glow sm:p-10">

        <div className="text-center">
          <p className="eyebrow">
            Fill out the form below
          </p>

          <h2 className="section-title mt-5">
            Free 1:1 <span>Strategy Call.</span>
          </h2>

          <p className="mt-4 text-zinc-300">
            Limited Seats
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <iframe
            src="https://7f6523a8.sibforms.com/v2/serve/MUIFAH2wv7x1aMFXO1zS5ABFL8z6mp5f98gRwfIy7nUjygac_XA-HHaKx27s6rBsMbBEaSFDuiZWdPyONeiyhrOO0wlc5C0f-DflSa-i-ChILseI5kVxa8-pUE8NyiBLDEKS8DTWWntHmyU6lwGjNqRChnbPEjCuCQ4xvfNHhd6P4U3jKxgdtL5nXsd2s7uG-eLdfiHko6j4ID9IMQ=="
            title="Book Your Free Consultation"
            className="w-full max-w-xl rounded-2xl"
            style={{
              border: "none",
              height: "560px",
              backgroundColor: "transparent",
            }}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}