import Navbar from "@/components/homepage/Navbar";
import Hero from "@/components/homepage/Hero";
import AboutSection from "@/components/homepage/AboutSection";
import Skills from "@/components/homepage/SkillsSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import ContactSection from "@/components/homepage/ContactSection";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
