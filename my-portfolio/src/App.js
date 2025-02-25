import './App.css';
import { About } from './components/About/About';
import { Certificates } from './components/Certificates/Certificates';
import { Experience } from './components/Experience/Experience';
import { useEffect } from 'react';
import { Home } from './components/Home/Home';
import { Skills } from './components/Skills/Skills';
import { Projects } from "./components/Projects/Projects"
import { Footer } from './components/Footer/Footer';


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
