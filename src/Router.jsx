import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';

// Wrapper to apply transition to each page
const AnimatedPage = ({ element }) => (
    <PageTransition>{element}</PageTransition>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <AnimatedPage element={<Hero />} />,
            },
            {
                path: '/services',
                element: <AnimatedPage element={<Services />} />,
            },
            {
                path: '/projects',
                element: <AnimatedPage element={<Projects />} />,
            },
            {
                path: '/education',
                element: <AnimatedPage element={<Education />} />,
            },
            {
                path: '/blog',
                element: <AnimatedPage element={<Blog />} />,
            },
            {
                path: '/contact',
                element: <AnimatedPage element={<Contact />} />,
            }
        ]
    }
]);
