"use client";

// Platzhalter: echte SOY & SOUL Homepage-URL eintragen, sobald bekannt
const SOY_SOUL_URL = "https://www.soyandsoul.com";

export default function Projekte() {
  return (
    <section
      id="projekte"
      className="py-section bg-[#F8F7F5] border-t border-stone/10"
      aria-labelledby="projekte-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="projekte-title"
          className="font-serif text-2xl sm:text-3xl font-medium text-carbon text-center mb-2"
        >
          Projekte
        </h2>
        <p className="text-carbon-muted text-center max-w-lg mx-auto mb-6 font-sans text-sm sm:text-base">
          Mit SOY & SOUL macht Tommy Eder seine Erfahrung aus der
          Spitzengastronomie für alle zugänglich.
        </p>
        <p className="text-center">
          <a
            href={SOY_SOUL_URL}
            className="text-gold font-medium hover:text-gold-light transition-colors underline underline-offset-2"
          >
            Mehr erfahren
          </a>
        </p>
      </div>
    </section>
  );
}
