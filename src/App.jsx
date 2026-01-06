import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      {/* Fallback height to simulate scrollable content for now */}
      <div className="h-[200vh]"></div>
    </div>
  );
}

export default App;
