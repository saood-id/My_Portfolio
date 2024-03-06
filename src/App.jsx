
import styles from './App.module.css'
import { About } from './component/About/About'
import { Hero } from './component/Hero/Hero'
import { Navbar } from './component/Navbar/Navbar'
import { Projects } from './component/Projects/Projects'
import { Contact } from './component/Contact/Contact'
import { Skills } from './component/Skills/Skills'

function App() {

  return (
   <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
  )
}

export default App
