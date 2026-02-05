"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video: hero.mp4 in /public */}
      <div className="absolute inset-0 bg-carbon">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-carbon/80 to-carbon/60"
          aria-hidden
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        aria-hidden
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight">
          Tommy Eder
        </h1>
        <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-white/90 font-sans font-normal max-w-xl mx-auto">
          Private Cooking & exklusive Kochkurse. Vom Hangar 7 ins Handelszentrum 16 — Gourmetküche für jedermann.
        </p>
        <div
          className="mt-6 sm:mt-8 h-px w-24 sm:w-32 mx-auto bg-gold-light"
          style={{ height: "2px" }}
          aria-hidden
        />
      </div>
    </section>
  );
}
