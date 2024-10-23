import './App.css';
import { useEffect } from 'react';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects"
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';

function App() {
  useEffect(() => {
    document.title = "Juan Viljoen";
  }, []);
  return (
    <div className="App">
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
