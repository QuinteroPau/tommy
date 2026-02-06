"use client";

import Image from "next/image";

const SOY_SOUL_URL = "https://www.soyandsoul.com";

const soyImages = [
  {
    id: 1,
    title: "Shōyu",
    image: "/shoyu.jpg",
  },
  {
    id: 2,
    title: "Launch",
    image: "/lauch.jpg",
  },
  {
    id: 3,
    title: "Sesam",
    image: "/sesam.jpg",
  },
  {
    id: 4,
    title: "Original",
    image: "/original.jpg",
  },
];

export default function Projekte() {
  return (
    <section
      id="projekte"
      className="py-section bg-[#2A2A28] border-t border-stone/20"
      aria-labelledby="projekte-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="projekte-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-white text-center mb-4"
        >
          SOY & SOUL
        </h2>
        <p className="text-white/85 text-center max-w-2xl mx-auto mb-10 sm:mb-12 font-sans text-base sm:text-lg leading-relaxed">
          Mit SOY & SOUL macht Tommy Eder seine Erfahrung aus der
          Spitzengastronomie für alle zugänglich. Handwerklich hergestellt, mit
          Fokus auf Qualität und Geschmack.
        </p>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 max-w-4xl mx-auto">
          {soyImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#1F1F1D]/60 border border-stone/30 hover:border-gold/50 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={`SOY & SOUL ${item.title}`}
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1F1F1D]/0 group-hover:bg-[#1F1F1D]/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#1F1F1D]/85 backdrop-blur-md border-t border-stone/30">
                <p className="text-white text-xs font-medium font-sans text-center tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/75 text-center max-w-xl mx-auto mb-8 font-sans text-sm sm:text-base">
          Erfahren Sie mehr über die Produktlinie und Bestellmöglichkeiten.
        </p>

        <div className="text-center">
          <a
            href={SOY_SOUL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-10 py-3 bg-gold text-carbon font-medium rounded-sm hover:bg-gold-light hover:text-carbon transition-all duration-300 shadow-[0_2px_8px_rgba(184,134,11,0.3)] hover:shadow-[0_4px_16px_rgba(184,134,11,0.4)]"
          >
            Zur SOY & SOUL Website
          </a>
        </div>
      </div>
    </section>
  );
}
