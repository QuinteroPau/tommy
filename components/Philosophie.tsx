"use client";

const principles = [
  {
    title: "Handwerk & Qualität",
    description: "Jedes Gericht erzählt eine Geschichte. Mit jahrelanger Erfahrung in der Spitzengastronomie steht handwerkliche Perfektion im Mittelpunkt.",
  },
  {
    title: "Saisonal & Regional",
    description: "Das Beste der Saison, direkt von lokalen Produzenten. Frische, Qualität und Nachhaltigkeit bestimmen die Auswahl der Zutaten.",
  },
  {
    title: "Erlebnis & Gemeinschaft",
    description: "Kochen verbindet — ob im Kurs oder beim Dinner. Jedes Event wird zu einem unvergesslichen Moment der Begegnung und des Genusses.",
  },
  {
    title: "Innovation & Tradition",
    description: "Klassische Techniken, moderne Interpretationen. Die Balance zwischen Bewährtem und Neuem schafft unverwechselbare Geschmackserlebnisse.",
  },
];

export default function Philosophie() {
  return (
    <section
      id="philosophie"
      className="py-section bg-[#F8F7F5]"
      aria-labelledby="philosophie-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="philosophie-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-carbon text-center mb-8 sm:mb-12"
        >
          Philosophie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-carbon mb-3">
                {principle.title}
              </h3>
              <p className="text-carbon-soft text-sm sm:text-base font-sans leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
