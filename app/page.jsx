import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return (
   <main>
    <Hero />
    {/* <Services /> */}
    {/* <Work /> */}
    <Projects />
    {/* <Reviews /> */}
    {/* <Cta /> */}
    <Contact />
   </main>
  );
}
