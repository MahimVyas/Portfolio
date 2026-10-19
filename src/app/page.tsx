import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import RightSideNav from "@/components/RightSideNav";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Interests />
      <Contact />
      <RightSideNav />
    </>
  );
}
