import './App.css';
import { useEffect } from 'react';
import { Home } from './components/Home';
import NavBar from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects"
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Juan's Portfolio";
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      {/* TODO: fix counter in Footer */}
    </div>
  );
}

export default App;
