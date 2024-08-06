import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return <div className={styles.App}> 
  <Navbar/>
  <Hero/>
  <About/>
  <Experience/>
  <Skills/>
  <Education/>
  <Contact/>
  </div>
  
}

export default App
