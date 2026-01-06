import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
