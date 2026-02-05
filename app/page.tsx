import Hero from "@/components/Hero";
import RecipeGrid from "@/components/RecipeGrid";
import Projekte from "@/components/Projekte";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecipeGrid />
      <Projekte />
      <Contact />
      <Footer />
    </main>
  );
}
