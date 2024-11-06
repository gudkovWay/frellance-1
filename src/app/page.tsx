import { Contacts } from "@/components/Contacts";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ParticlesComponent } from "@/components/ParticlesComponent";

export default function Home() {
  return (
    <main className="pb-8">
      <Hero />
      <ParticlesComponent />
      <FAQ />
      <Contacts />
    </main>
  );
}
