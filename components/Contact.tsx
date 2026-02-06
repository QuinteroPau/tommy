"use client";

const CONTACT_EMAIL = "mailto:office@handelszentrum16.at";
const CONTACT_PHONE = "tel:+43662434336";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-section bg-white border-t border-stone/20"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <h2
          id="contacto-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-carbon mb-4"
        >
          Kontakt
        </h2>
        <p className="text-carbon-muted max-w-xl mx-auto mb-6 font-sans">
          Für Anfragen zu Events, Kochkursen oder Kooperationen.
        </p>
        <p className="text-carbon-muted/80 text-sm font-sans mb-8 sm:mb-10">
          Handelszentrum 16, 5101 Bergheim, Österreich
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONTACT_EMAIL}
            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-gold text-white font-medium rounded-sm hover:bg-gold-light focus:bg-gold-light transition-colors"
          >
            Anfrage senden
          </a>
          <a
            href={CONTACT_PHONE}
            className="text-carbon-soft text-sm font-medium hover:text-gold transition-colors min-h-[44px] inline-flex items-center"
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
