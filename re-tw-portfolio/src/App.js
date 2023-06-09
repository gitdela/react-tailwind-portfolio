import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
