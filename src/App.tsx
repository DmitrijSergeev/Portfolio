import { AboutMe } from '@/components/aboutMe/aboutMe'
import { Contacts } from '@/components/contacts/contacts'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Main } from '@/components/main/main'
import { Projects } from '@/components/projects/propjects'
import { Skills } from '@/components/skills/skills'

export function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}
