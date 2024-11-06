import { Contacts } from "@/components/Contacts";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="px-4 pb-8">
      <Hero />
      <FAQ />
      <Reviews />
      <Contacts />
    </main>
  );
}
