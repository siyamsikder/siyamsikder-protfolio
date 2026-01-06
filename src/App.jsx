import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      {/* Fallback height to simulate scrollable content for now */}
      <div className="h-[200vh]"></div>
    </div>
  );
}

export default App;
