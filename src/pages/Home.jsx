import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"

const Home = () => {
  return (
    <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection/>
    </main>
  )
}

export default Home
