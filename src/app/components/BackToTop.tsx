import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[9999] w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
      style={{ backgroundColor: '#5B21B6' }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#DC2680')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5B21B6')}
    >
      <ArrowUp size={18} color="#ffffff" strokeWidth={2.5} />
    </button>
  );
}
