import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ScrollToTopOnMount } from './components/ui/ScrollToTopOnMount';

function PortfolioHome() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
