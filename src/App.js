import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Solutions />
      <UseCases />
      <Features />
      <Pricing />
      <FAQ />
      <News />
      <Footer />
    </div>
  );
}

export default App;
