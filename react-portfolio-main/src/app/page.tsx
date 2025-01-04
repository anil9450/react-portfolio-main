import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="overflow-x-hidden text-neutral-300 antialiased bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full"></div>
      </div>
      <div
        className="top-0 z-[-2] w-screen bg-nuetral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
      rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}