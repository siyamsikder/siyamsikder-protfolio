import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Education />
      {/* Fallback height to simulate scrollable content for now */}
      <div className="h-[200vh]"></div>
    </div>
  );
}

export default App;
