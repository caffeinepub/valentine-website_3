import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);

  useEffect(() => {
    // Load music preference from localStorage
    const savedMusicPref = localStorage.getItem('valentine-music-enabled');
    if (savedMusicPref === 'true') {
      setIsMusicEnabled(true);
    }
  }, []);

  const toggleMusic = () => {
    const newState = !isMusicEnabled;
    setIsMusicEnabled(newState);
    localStorage.setItem('valentine-music-enabled', String(newState));
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 relative overflow-hidden">
        <FloatingHearts />
        <Header onToggleMusic={toggleMusic} isMusicEnabled={isMusicEnabled} />
        <main>
          <Hero />
          <MessageSection />
        </main>
        <Footer />
        <MusicPlayer isEnabled={isMusicEnabled} />
      </div>
    </ThemeProvider>
  );
}

export default App;
