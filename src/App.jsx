import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          {/* We pass location to Outlet context or handle it in the Router wrapper, 
              but AnimatePresence needs a key to detect changes if wrapping the Outlet directly.
              However, since we wrapped individual route elements in Router.jsx, 
              we can just render the Outlet here. 
              Ideally, AnimatePresence wraps the routing switch. 
              In v6 with createBrowserRouter, the Outlet handles the render. 
              Let's wrap the Outlet with AnimatePresence key.
          */}
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
