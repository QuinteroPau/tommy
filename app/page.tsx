import Hero from "@/components/Hero";
import UeberTommy from "@/components/UeberTommy";
import Philosophie from "@/components/Philosophie";
import RecipeGrid from "@/components/RecipeGrid";
import EventsAngebote from "@/components/EventsAngebote";
import Projekte from "@/components/Projekte";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <UeberTommy />
      <Philosophie />
      <RecipeGrid />
      <EventsAngebote />
      <Projekte />
      <Contact />
      <Footer />
    </main>
  );
}
