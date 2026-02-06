"use client";

export default function UeberTommy() {
  return (
    <section
      id="uber-tommy"
      className="py-section bg-white"
      aria-labelledby="uber-tommy-title"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <h2
          id="uber-tommy-title"
          className="font-serif text-3xl sm:text-4xl font-medium text-carbon text-center mb-8 sm:mb-12"
        >
          Über Tommy
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <p className="text-carbon-muted text-base sm:text-lg font-sans leading-relaxed text-center">
            Bekannt aus dem Hangar 7, hat Tommy Eder seinen Weg ins Handelszentrum
            16 gefunden und bringt seine Leidenschaft für das Kochen in Form von
            Private Cooking und exklusiven Kochkursen ein.
          </p>

          <p className="text-carbon-muted text-base sm:text-lg font-sans leading-relaxed text-center">
            Jetzt im Handelszentrum 16 gestaltet er jedes Event individuell —
            ob exklusives Dinner für kleine bis große Gruppen oder lehrreiche
            Kochkurse, bei denen Teilnehmer nicht nur genießen, sondern auch
            selbst aktiv werden können.
          </p>

          <p className="text-carbon-muted text-base sm:text-lg font-sans leading-relaxed text-center">
            Seine Expertise und sein kreativer Ansatz machen jedes Event zu
            einem besonderen Anlass, bei dem Kreativität, Spaß und Genuss im
            Vordergrund stehen. Mit SOY & SOUL macht er seine Erfahrung aus der
            Spitzengastronomie für alle zugänglich — Gourmetküche für jedermann.
          </p>
        </div>

        {/* Decorative line */}
        <div
          className="mt-10 sm:mt-12 h-px w-24 sm:w-32 mx-auto bg-stone/30"
          style={{ height: "1px" }}
          aria-hidden
        />
      </div>
    </section>
  );
}
