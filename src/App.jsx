import { AboutMe } from "./components/Sections/AboutMeSection/AboutMe"
import { BannerSection } from "./components/Sections/BannerSection/BannerSection"
import { ProjectSection } from "./components/Sections/ProjectsSection/ProjectsSection"
import { TechSection } from "./components/Sections/TechnologiesSection/TechSection"
import { MainTemplate } from "./components/Templates/MainTemplate/MainTemplate"
function App() {
  return (
    <MainTemplate>
        <BannerSection />
        <AboutMe />
        <TechSection />
        <ProjectSection />
    </MainTemplate>
  )
}

export default App
