import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import About from "@/components/about";
import Capabilities from "@/components/capabilities";
import Education from "@/components/education";
import IntroSection from "@/components/intro-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
      <IntroSection />
      <About />
      <Projects />
      <Capabilities />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
