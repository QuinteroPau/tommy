"use client";

import Image from "next/image";

const recipes = [
  {
    id: 1,
    title: "Lachs in Gewürzkruste",
    description:
      "Premium-Schnitt, knusprige Haut, saftiges Inneres. Mit Saisongemüse.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    wide: true,
    tag: "Signature",
  },
  {
    id: 2,
    title: "Risotto mit Pilzen und Trüffel",
    description:
      "Cremiger Reis, Waldpilze, Abrieb von schwarzer Trüffel.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    wide: false,
    tag: "Saisonal",
  },
  {
    id: 3,
    title: "Thunfisch-Tataki",
    description:
      "Außen angebraten, innen kühl. Soja, Ingwer.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
    wide: false,
    tag: "Fisch",
  },
  {
    id: 4,
    title: "Lamm mit Rosmarin",
    description:
      "Langsam gegart, provenzalische Kräuter, Reduktion.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    wide: false,
    tag: "Fleisch",
  },
  {
    id: 5,
    title: "Schokoladen-Soufflé",
    description:
      "Klassiker mit flüssigem Kern, Bourbon-Vanilleeis.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80",
    wide: false,
    tag: "Dessert",
  },
  {
    id: 6,
    title: "Ceviche von Seehecht",
    description:
      "In Tigermilch und Limette mariniert.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
    wide: false,
    tag: "Fisch",
  },
  {
    id: 7,
    title: "Rote Beete Carpaccio",
    description:
      "Dünn geschnitten, mit Ziegenkäse und Walnüssen. Vegetarisch.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    wide: false,
    tag: "Vegetarisch",
  },
  {
    id: 8,
    title: "Wagyu-Beef Tartar",
    description:
      "Premium-Rindfleisch, handgeschnitten, mit Eigelb und Kapern.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
    wide: false,
    tag: "Signature",
  },
  {
    id: 9,
    title: "Tiramisu Reinterpretiert",
    description:
      "Klassiker neu interpretiert mit Espresso-Gel und Mascarpone-Creme.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    wide: false,
    tag: "Dessert",
  },
];

export default function RecipeGrid() {
  return (
    <section
      id="kreationen"
      className="py-section bg-[#F8F7F5]"
      aria-labelledby="kreationen-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="kreationen-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-carbon text-center mb-4"
        >
          Kreationen
        </h2>
        <p className="text-carbon-muted text-center max-w-3xl mx-auto mb-12 sm:mb-14 font-sans text-base sm:text-lg">
          Eine Auswahl meiner Signature Dishes — jedes Gericht spiegelt meine
          Philosophie wider.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
          {recipes.map((item) => (
            <li
              key={item.id}
              className={item.wide ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <article className="group h-full flex flex-col bg-white rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {item.tag && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm">
                      <span className="text-carbon text-xs font-medium font-sans">
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-carbon mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-carbon-soft text-sm sm:text-base font-sans leading-relaxed"
                    style={{ maxWidth: "70ch" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
