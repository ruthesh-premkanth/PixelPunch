import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'projects' | 'team' | 'blog' | 'contact';

interface SharedNavProps {
  isDarkMode: boolean;
  onToggleDark: () => void;
  currentPage: Page;
  onGoHome: () => void;
  onGoAbout: () => void;
  onGoServices: () => void;
  onGoProjects: () => void;
  onGoTeam: () => void;
  onGoBlog: () => void;
  onGoContact: () => void;
}

// Maps each nav label to the section ID it corresponds to on the home page
const LINK_SECTION_MAP: Record<string, string> = {
  Home:        'hero',
  About:       'about',
  Services:    'services',
  Projects:    'work',
  Team:        'team',
  Blog:        'blog',
  'Contact Us':'contact',
};

// Ordered list of section IDs — top to bottom on the page
const SECTION_ORDER = ['hero', 'about', 'services', 'work', 'team', 'blog', 'contact'];

export function SharedNav({
  isDarkMode,
  onToggleDark,
  currentPage,
  onGoHome,
  onGoAbout,
  onGoServices,
  onGoProjects,
  onGoTeam,
  onGoBlog,
  onGoContact,
}: SharedNavProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visibleSections = useRef<Set<string>>(new Set(['hero']));

  // IntersectionObserver — only active on the home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const observers: IntersectionObserver[] = [];

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.current.add(id);
          } else {
            visibleSections.current.delete(id);
          }
          // Pick the topmost visible section
          const topmost = SECTION_ORDER.find((s) => visibleSections.current.has(s));
          if (topmost) setActiveSection(topmost);
        },
        {
          root: null,
          // Fire when section occupies ≥20% of the viewport
          threshold: 0.20,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [currentPage]);

  // Reset to hero when navigating back to home
  useEffect(() => {
    if (currentPage === 'home') {
      visibleSections.current = new Set(['hero']);
      setActiveSection('hero');
    }
  }, [currentPage]);

  const links: { label: string; action: () => void; href?: string }[] = [
    {
      label: 'Home',
      action: onGoHome,
    },
    {
      label: 'About',
      action: onGoAbout,
    },
    {
      label: 'Services',
      action: onGoServices,
    },
    {
      label: 'Projects',
      action: onGoProjects,
    },
    {
      label: 'Team',
      action: onGoTeam,
    },
    {
      label: 'Blog',
      action: onGoBlog,
    },
    {
      label: 'Contact Us',
      action: onGoContact,
    },
  ];

  const ACTIVE_COLOR = '#DC2680';

  const getLinkColor = (label: string, isPageActive: boolean) => {
    if (isPageActive) return ACTIVE_COLOR;
    if (currentPage === 'home') {
      const sectionId = LINK_SECTION_MAP[label];
      if (sectionId && activeSection === sectionId) return ACTIVE_COLOR;
    }
    return isDarkMode ? '#ffffff' : 'var(--text-primary)';
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          padding: '8px 24px',
          backgroundColor: isDarkMode ? 'rgba(10, 10, 10, 0.88)' : 'rgba(255, 255, 255, 0.88)',
          border: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          minHeight: '56px',
        }}
      >
        {/* Left — Logo + dark toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onGoHome}
            className="font-bold text-lg transition-colors duration-300"
            style={{ color: 'var(--color-ownership)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Pixel Punch
          </button>
          <button
            onClick={onToggleDark}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              color: isDarkMode ? 'var(--color-synergy)' : 'var(--color-ownership)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Centre — Links */}
        <div className="hidden md:flex items-center gap-5">
          {links.map(({ label, action, href }) => {
            const isPageActive =
              (label === 'About' && currentPage === 'about') ||
              (label === 'Services' && currentPage === 'services') ||
              (label === 'Projects' && currentPage === 'projects') ||
              (label === 'Team' && currentPage === 'team') ||
              (label === 'Blog' && currentPage === 'blog') ||
              (label === 'Contact Us' && currentPage === 'contact');

            const color = getLinkColor(label, isPageActive);

            const sharedStyle: React.CSSProperties = {
              color,
              fontWeight: isPageActive || (currentPage === 'home' && activeSection === LINK_SECTION_MAP[label]) ? 600 : 400,
              textDecoration: 'none',
            };

            const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.color = ACTIVE_COLOR;
            };
            const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.color = getLinkColor(label, isPageActive);
            };

            return href ? (
              <a
                key={label}
                href={href}
                className="text-sm transition-colors duration-200"
                style={sharedStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {label}
              </a>
            ) : (
              <button
                key={label}
                onClick={action}
                className="text-sm transition-colors duration-200"
                style={{
                  ...sharedStyle,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Right — CTA */}
        <div className="hidden md:block">
          <button
            onClick={onGoContact}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{ backgroundColor: 'var(--color-ownership)', color: '#ffffff', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-impact)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-ownership)')}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              color: isDarkMode ? 'var(--color-synergy)' : 'var(--color-ownership)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-2"
          style={{
            backgroundColor: isDarkMode ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            border: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-lg)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '20px',
            maxWidth: '7xl',
            margin: '0 auto',
          }}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-subtle)',
                color: isDarkMode ? 'var(--color-synergy)' : 'var(--color-ownership)',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4">
            {links.map(({ label, action, href }) => {
              const isPageActive =
                (label === 'About' && currentPage === 'about') ||
                (label === 'Services' && currentPage === 'services') ||
                (label === 'Projects' && currentPage === 'projects') ||
                (label === 'Team' && currentPage === 'team') ||
                (label === 'Blog' && currentPage === 'blog') ||
                (label === 'Contact Us' && currentPage === 'contact');

              const color = getLinkColor(label, isPageActive);

              const sharedStyle: React.CSSProperties = {
                color,
                fontWeight: isPageActive || (currentPage === 'home' && activeSection === LINK_SECTION_MAP[label]) ? 600 : 400,
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              };

              const handleClick = () => {
                action();
                setMobileMenuOpen(false);
              };

              const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = ACTIVE_COLOR;
                e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
              };
              const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = getLinkColor(label, isPageActive);
                e.currentTarget.style.backgroundColor = 'transparent';
              };

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="text-base transition-all duration-200 block"
                  style={sharedStyle}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {label}
                </a>
              ) : (
                <button
                  key={label}
                  onClick={handleClick}
                  className="text-base transition-all duration-200 block text-left"
                  style={{
                    ...sharedStyle,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-6 pt-4" style={{ borderTop: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border)' }}>
            <button
              onClick={() => {
                onGoContact();
                setMobileMenuOpen(false);
              }}
              className="w-full px-5 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{ backgroundColor: 'var(--color-ownership)', color: '#ffffff', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-impact)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-ownership)')}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}