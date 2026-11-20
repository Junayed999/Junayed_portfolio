import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Junayed.JS — Simplefolio-style portfolio.
 * Section order: hero, projects carousel, about, work experience,
 * how can I help, meet who are around, contact, footer.
 * (No "Here's What I've Been Up To" section — the carousel above the
 * About section already shows the work.)
 */
export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1024px] border-x border-line bg-column">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
