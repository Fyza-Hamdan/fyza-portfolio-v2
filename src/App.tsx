import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Projects />
        <MarqueeStrip />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
