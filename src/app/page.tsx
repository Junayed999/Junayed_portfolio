import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Junayed.JS — recreation of the reference portfolio.
 * Narrow white column on a light grey page, in the reference's section order:
 * hero, projects slider, about, work experience, services, contact, footer.
 */
export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[700px] border-x border-line bg-column">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
