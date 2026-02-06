"use client";

const services = [
  {
    title: "Private Cooking",
    description:
      "Exklusive Dinners für kleine bis große Gruppen. Ideal für Firmenfeiern, Geburtstage oder private Anlässe. Jedes Menü wird individuell auf Ihre Wünsche abgestimmt.",
    cta: "Anfrage senden",
  },
  {
    title: "Exklusive Kochkurse",
    description:
      "Hands-on Kochkurse in kleinen Gruppen. Lernen Sie klassische Techniken und moderne Interpretationen. Lehrreich, unterhaltsam und kulinarisch auf höchstem Niveau.",
    cta: "Mehr erfahren",
  },
  {
    title: "Catering & Events",
    description:
      "Für B2B-Events, größere Gruppen oder besondere Anlässe. Von Fingerfood bis zum mehrgängigen Menü — professionelle Umsetzung für jeden Rahmen.",
    cta: "Anfrage senden",
  },
  {
    title: "Menüdesign & Beratung",
    description:
      "Für Restaurants: Konzeptentwicklung, Menüdesign und kulinarische Beratung. Von der Idee bis zur Umsetzung — mit jahrelanger Erfahrung aus der Spitzengastronomie.",
    cta: "Kontakt aufnehmen",
  },
];

const CONTACT_EMAIL = "mailto:office@handelszentrum16.at";

export default function EventsAngebote() {
  return (
    <section
      id="events-angebote"
      className="py-section bg-white border-t border-stone/20"
      aria-labelledby="events-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="events-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-carbon text-center mb-8 sm:mb-12"
        >
          Events & Angebote
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F8F7F5] p-6 sm:p-8 rounded-sm border border-stone/10 hover:border-stone/20 transition-colors"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-carbon mb-3">
                {service.title}
              </h3>
              <p className="text-carbon-soft text-sm sm:text-base font-sans leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href={CONTACT_EMAIL}
                className="inline-block text-gold text-sm font-medium hover:text-gold-light transition-colors underline underline-offset-2"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
