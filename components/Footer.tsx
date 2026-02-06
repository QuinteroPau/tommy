"use client";

const SOY_SOUL_URL = "https://www.soyandsoul.com";
const HANDELSZENTRUM_URL = "https://www.handelszentrum16.at";

// Deine E-Mail hier eintragen, damit der Chef dich für die Webpräsenz kontaktieren kann
const DEMO_AUTHOR_EMAIL = "mailto:deine-email@beispiel.at";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 bg-white border-t border-stone/20">
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-carbon-muted text-sm font-sans">
          <span>Tommy Eder</span>
          <span className="text-stone/40">·</span>
          <a
            href={SOY_SOUL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors"
          >
            SOY & SOUL
          </a>
          <span className="text-stone/40">·</span>
          <a
            href={HANDELSZENTRUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-carbon-soft hover:text-gold transition-colors"
          >
            Handelszentrum 16
          </a>
        </div>
        <p className="text-carbon-muted/80 text-xs font-sans">
          <a
            href={DEMO_AUTHOR_EMAIL}
            className="text-stone hover:text-gold transition-colors"
          >
            Demo · Konzept für Tommy Eder — Eine Idee für Ihre Webpräsenz
          </a>
        </p>
      </div>
    </footer>
  );
}
