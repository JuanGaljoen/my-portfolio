import './App.css';
import { useEffect } from 'react';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects"
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Juan's Portfolio";
  }, []);
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
