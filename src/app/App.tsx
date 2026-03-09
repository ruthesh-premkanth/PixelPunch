import { useState, useEffect, useRef } from 'react';
import { ServicesPage } from './components/ServicesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { SharedNav } from './components/SharedNav';
import { 
  ArrowRight, 
  Target, 
  Palette, 
  Code, 
  Megaphone, 
  TrendingUp, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  ArrowUpRight,
  Play
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { LogoWordmark } from './components/LogoWordmark';
import { OurStory } from './components/OurStory';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { OurWork } from './components/OurWork';
import { TeamPage } from './components/TeamPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { SectionBadge } from './components/SectionBadge';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'projects' | 'team' | 'blog' | 'contact'>('home');
  
  // Stats count-up animation
  const [statsVisible, setStatsVisible] = useState(false);
  const [statValues, setStatValues] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const goToAbout = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('about');
  };
  const goToServices = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('services');
  };
  const goToHome = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('home');
  };
  const goToProjects = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('projects');
  };
  const goToTeam = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('team');
  };
  const goToBlog = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('blog');
  };
  const goToContact = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };
  
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1547027072-332f09bd6bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTM1NDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "UI/UX design workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcxMzQyNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern office workspace design"
    },
    {
      src: "https://images.unsplash.com/photo-1769034432267-0fd4a01d839f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwZGVzaWdufGVufDF8fHx8MTc3MTQxNjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Creative team meeting design"
    },
    {
      src: "https://images.unsplash.com/photo-1702609342206-c37562b99740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NzEzNTgxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Digital product design"
    },
    {
      src: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NzE0MTYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "User interface design process"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-slide every 4 seconds

    // Clear interval on component unmount
    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]); // Re-create interval when currentSlide changes

  // Stats count-up animation with IntersectionObserver
  useEffect(() => {
    if (currentPage !== 'home') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            
            // Easing function for ease-out
            const easeOutQuad = (t: number) => t * (2 - t);
            
            const duration = 2000; // 2 seconds
            const startTime = Date.now();
            
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = easeOutQuad(progress);
              
              setStatValues({
                stat1: Math.floor(easedProgress * 98),
                stat2: Math.floor(easedProgress * 50),
                stat3: Math.floor(easedProgress * 25),
                stat4: Math.floor(easedProgress * 150),
              });
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [currentPage, statsVisible]);

  // Reset stats when leaving home page
  useEffect(() => {
    if (currentPage !== 'home') {
      setStatsVisible(false);
      setStatValues({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
    }
  }, [currentPage]);

  /* ── Slide transition variants ── */
  return (
    <>
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      {/* SharedNav appears on every page */}
      <SharedNav
        isDarkMode={isDarkMode}
        onToggleDark={() => setIsDarkMode(!isDarkMode)}
        currentPage={currentPage}
        onGoHome={goToHome}
        onGoAbout={goToAbout}
        onGoServices={goToServices}
        onGoProjects={goToProjects}
        onGoTeam={goToTeam}
        onGoBlog={goToBlog}
        onGoContact={goToContact}
      />
      <div key={currentPage} className="page-push-enter" style={{ overflow: 'hidden' }}>
      {currentPage === 'about' ? (
        <AboutPage isDarkMode={isDarkMode} onGoContact={goToContact} />
      ) : currentPage === 'services' ? (
        <ServicesPage isDarkMode={isDarkMode} onBack={goToHome} onGoProjects={goToProjects} onGoContact={goToContact} />
      ) : currentPage === 'projects' ? (
        <ProjectsPage onBack={goToHome} />
      ) : currentPage === 'team' ? (
        <TeamPage isDarkMode={isDarkMode} onGetInTouch={goToContact} />
      ) : currentPage === 'blog' ? (
        <BlogPage isDarkMode={isDarkMode} />
      ) : currentPage === 'contact' ? (
        <ContactPage isDarkMode={isDarkMode} />
      ) : (
    <div 
      className="min-h-screen transition-all duration-400"
      data-theme={isDarkMode ? 'dark' : 'light'}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >

      {/* Hero Section - Redesigned */}
      <section
        id="hero"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          paddingTop: '80px',
          paddingBottom: '80px',
          minHeight: '100vh'
        }}
      >
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ImageWithFallback 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Darker gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.75) 100%)'
            }}
          ></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            {/* Badge with glowing animation */}
            <div 
              className="inline-block px-5 py-2 backdrop-blur-sm rounded-full text-xs tracking-widest uppercase shadow-sm transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: '2px solid rgba(124, 58, 237, 0.6)',
                animation: 'pulse-glow 2s ease-in-out infinite'
              }}
            >
              Sales & UI/UX Team
            </div>
            
            {/* Headline with responsive font sizing and text shadow */}
            <h1 
              className="leading-[1.1] tracking-tight text-white mt-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: '800',
                textShadow: '0px 2px 20px rgba(0,0,0,0.4)'
              }}
            >
              Crafting Experiences That <span style={{ color: 'var(--color-impact)', filter: 'brightness(1.3)' }}>Convert</span>
            </h1>
            
            {/* Subline */}
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-3"
              style={{ 
                color: 'rgba(255, 255, 255, 0.92)'
              }}
            >
              We're a specialized team combining sales strategy with exceptional UI/UX design 
              to create digital products that engage users and drive results.
            </p>
            
            {/* Buttons with enhanced hover animations */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button 
                className="group px-10 py-5 rounded-full inline-flex items-center gap-3 text-base font-medium card-hover"
                onClick={goToProjects}
                style={{
                  backgroundColor: 'var(--color-ownership)',
                  color: '#ffffff'
                }}
              >
                View Our Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={goToContact}
                className="group px-10 py-5 rounded-full inline-flex items-center gap-3 text-base font-medium cursor-pointer card-hover btn-outline-impact"
                style={{
                  color: '#ffffff'
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots - Positioned absolutely at bottom */}
        <div 
          className="flex items-center justify-center gap-2"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20
          }}
        >
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="transition-all rounded-full"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: index === currentSlide ? '#7C3AED' : '#DDD6FE'
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = '#C4B5FD';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = '#DDD6FE';
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Our Story Section - Bloom Palette */}
      <div id="about"><OurStory isDarkMode={isDarkMode} onGoAbout={goToAbout} /></div>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-14 px-6 lg:px-8 transition-all duration-400"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 space-y-3">
            <SectionBadge text="Our Services" />
            <h2 
              className="text-4xl transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              What We Specialize In
            </h2>
            <p 
              className="max-w-2xl mx-auto transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              Combining sales expertise with design excellence to deliver solutions that drive growth and delight users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div 
              className="p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--color-ownership)',
                boxShadow: 'var(--shadow-sm)',
                backgroundImage: `radial-gradient(circle, var(--text-muted) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.borderTop = '3px solid var(--color-ownership)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.borderTop = '3px solid var(--color-ownership)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: '0.75rem',
                  zIndex: 0,
                  opacity: 0.95
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'var(--hover-bg)' }}
                >
                  <Target size={24} style={{ color: 'var(--color-ownership)' }} />
                </div>
                <h3 
                  className="text-xl mb-2 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Sales Strategy
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Data-driven sales funnels and conversion optimization strategies that turn visitors into customers.
                </p>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--color-impact)',
                boxShadow: 'var(--shadow-sm)',
                backgroundImage: `radial-gradient(circle, var(--text-muted) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.borderTop = '3px solid var(--color-impact)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.borderTop = '3px solid var(--color-impact)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: '0.75rem',
                  zIndex: 0,
                  opacity: 0.95
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'var(--hover-bg)' }}
                >
                  <Palette size={24} style={{ color: 'var(--color-ownership)' }} />
                </div>
                <h3 
                  className="text-xl mb-2 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  UI/UX Design
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Beautiful, intuitive interfaces that create seamless experiences and guide users naturally to action.
                </p>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--color-synergy)',
                boxShadow: 'var(--shadow-sm)',
                backgroundImage: `radial-gradient(circle, var(--text-muted) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.borderTop = '3px solid var(--color-synergy)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.borderTop = '3px solid var(--color-synergy)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: '0.75rem',
                  zIndex: 0,
                  opacity: 0.95
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'var(--hover-bg)' }}
                >
                  <Megaphone size={24} style={{ color: 'var(--color-ownership)' }} />
                </div>
                <h3 
                  className="text-xl mb-2 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Conversion Design
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Strategic design patterns and sales psychology that maximize engagement and conversions.
                </p>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center">
            <button 
              onClick={goToServices}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                backgroundColor: 'var(--color-ownership)',
                color: '#ffffff',
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-impact)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(91, 33, 182, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-ownership)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View All Services
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <div id="work"><OurWork onViewAll={goToProjects} /></div>

      {/* Clients Logos - Auto-scrolling Carousel */}
      <section 
        className="py-14 px-6 lg:px-8 overflow-hidden transition-all duration-300"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 
              className="text-2xl mb-3 transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              Trusted by Leading Companies
            </h2>
          </div>
          
          {/* Scrolling Container */}
          <div className="relative">
            {/* Scrolling Track — right-to-left, direction locked to ltr */}
            <div className="flex items-center gap-16 animate-scroll" style={{ direction: 'ltr' }}>
              {/* First Set of Logos */}
              <div className="flex items-center gap-16 flex-shrink-0">
                <LogoWordmark name="Google" />
                <LogoWordmark name="Microsoft" />
                <LogoWordmark name="Apple" />
                <LogoWordmark name="Amazon" />
                <LogoWordmark name="Netflix" />
                <LogoWordmark name="Adobe" />
                <LogoWordmark name="X (Twitter)" />
                <LogoWordmark name="Meta" />
              </div>
              
              {/* Duplicate Set for Seamless Loop */}
              <div className="flex items-center gap-16 flex-shrink-0">
                <LogoWordmark name="Google" />
                <LogoWordmark name="Microsoft" />
                <LogoWordmark name="Apple" />
                <LogoWordmark name="Amazon" />
                <LogoWordmark name="Netflix" />
                <LogoWordmark name="Adobe" />
                <LogoWordmark name="X (Twitter)" />
                <LogoWordmark name="Meta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section 
        ref={statsRef}
        className="py-14 px-6 lg:px-8 text-white"
        style={{ backgroundColor: 'var(--color-ownership)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <TrendingUp 
                size={40} 
                className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
              />
              <div 
                className="text-5xl mb-2 transition-all duration-300"
                style={{
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(220, 38, 128, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {statValues.stat1}%
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Client Satisfaction</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '14px', marginTop: '4px' }}>across 200+ projects</div>
            </div>
            <div className="text-center group cursor-pointer">
              <Users 
                size={40} 
                className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
              />
              <div 
                className="text-5xl mb-2 transition-all duration-300"
                style={{
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(220, 38, 128, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {statValues.stat2}{statsVisible && statValues.stat2 === 50 ? '+' : ''}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Team Members</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '14px', marginTop: '4px' }}>in 8 countries</div>
            </div>
            <div className="text-center group cursor-pointer">
              <Award 
                size={40} 
                className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
              />
              <div 
                className="text-5xl mb-2 transition-all duration-300"
                style={{
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(220, 38, 128, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {statValues.stat3}{statsVisible && statValues.stat3 === 25 ? '+' : ''}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Awards Won</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '14px', marginTop: '4px' }}>internationally recognized</div>
            </div>
            <div className="text-center group cursor-pointer">
              <Target 
                size={40} 
                className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
              />
              <div 
                className="text-5xl mb-2 transition-all duration-300"
                style={{
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(220, 38, 128, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {statValues.stat4}{statsVisible && statValues.stat4 === 150 ? '+' : ''}
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Projects Completed</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '14px', marginTop: '4px' }}>delivered on time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section 
        id="team" 
        className="py-14 px-6 lg:px-8 transition-all duration-300"
        style={{ backgroundColor: isDarkMode ? 'var(--bg-primary)' : 'var(--bg-surface)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <SectionBadge text="Our Team" />
            <h2 
              className="text-4xl transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              Meet Our Specialists
            </h2>
            <p 
              className="max-w-2xl mx-auto transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              A diverse team of UI/UX designers and sales strategists dedicated to creating impactful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Team Member 1 - Sarah Chen */}
            <div 
              className="group cursor-pointer lift-hover"
            >
              <div 
                className="overflow-hidden mb-3 relative glow-hover"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzYzNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sarah Chen"
                    className="group-hover:scale-105 transition-transform duration-300"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 100%)',
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 
                  className="text-base mb-1 transition-all duration-300"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-ownership)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  Sarah Chen
                </h3>
                <p 
                  className="text-sm mb-2 transition-colors duration-300"
                  style={{ 
                    color: 'var(--color-ownership)',
                    fontSize: '14px'
                  }}
                >
                  Lead UX Designer
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  User research & design strategy
                </p>
              </div>
            </div>

            {/* Team Member 2 - Michael Rodriguez */}
            <div 
              className="group cursor-pointer lift-hover"
            >
              <div 
                className="overflow-hidden mb-3 relative glow-hover"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI5MjcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Michael Rodriguez"
                    className="group-hover:scale-105 transition-transform duration-300"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 100%)',
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 
                  className="text-base mb-1 transition-all duration-300"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-ownership)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  Michael Rodriguez
                </h3>
                <p 
                  className="text-sm mb-2 transition-colors duration-300"
                  style={{ 
                    color: 'var(--color-ownership)',
                    fontSize: '14px'
                  }}
                >
                  Sales Strategist
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  Conversion optimization expert
                </p>
              </div>
            </div>

            {/* Team Member 3 - Emily Park */}
            <div 
              className="group cursor-pointer lift-hover"
            >
              <div 
                className="overflow-hidden mb-3 relative glow-hover"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761243892035-c3e13829115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxMjk0NjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Emily Park"
                    className="group-hover:scale-105 transition-transform duration-300"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 100%)',
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 
                  className="text-base mb-1 transition-all duration-300"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-ownership)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  Emily Park
                </h3>
                <p 
                  className="text-sm mb-2 transition-colors duration-300"
                  style={{ 
                    color: 'var(--color-ownership)',
                    fontSize: '14px'
                  }}
                >
                  Senior UI Designer
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  Interface design specialist
                </p>
              </div>
            </div>

            {/* Team Member 4 - David Thompson */}
            <div 
              className="group cursor-pointer lift-hover"
            >
              <div 
                className="overflow-hidden mb-3 relative glow-hover"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBibGFjayUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTM2MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="David Thompson"
                    className="group-hover:scale-105 transition-transform duration-300"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 100%)',
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 
                  className="text-base mb-1 transition-all duration-300"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-ownership)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  David Thompson
                </h3>
                <p 
                  className="text-sm mb-2 transition-colors duration-300"
                  style={{ 
                    color: 'var(--color-ownership)',
                    fontSize: '14px'
                  }}
                >
                  Sales Director
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  Growth & revenue optimization
                </p>
              </div>
            </div>

            {/* Team Member 5 - Lucas Mendes */}
            <div 
              className="group cursor-pointer lift-hover"
            >
              <div 
                className="overflow-hidden mb-3 relative glow-hover"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div 
                  className="overflow-hidden relative"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                    paddingBottom: '100%',
                    position: 'relative'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1617746652908-91e66c07499a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMG1hbGUlMjBtb3Rpb24lMjBkZXNpZ25lciUyMGNyZWF0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzg0NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lucas Mendes"
                    className="group-hover:scale-105 transition-transform duration-300"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.2) 100%)',
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 
                  className="text-base mb-1 transition-all duration-300"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-ownership)';
                    e.currentTarget.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  Lucas Mendes
                </h3>
                <p 
                  className="text-sm mb-2 transition-colors duration-300"
                  style={{ 
                    color: 'var(--color-ownership)',
                    fontSize: '14px'
                  }}
                >
                  Motion Designer
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  Animation & visual storytelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section 
        id="blog" 
        className="py-14 px-6 lg:px-8 transition-all duration-300"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <SectionBadge text="Latest Insights" />
            <h2 
              className="text-4xl transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              Design & Sales Insights
            </h2>
            <p 
              className="max-w-2xl mx-auto transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              Expert tips on UI/UX design, sales optimization, and creating digital experiences that convert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article 
              className="rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <div className="overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTQwNTQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design thinking workshop"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div 
                  className="flex items-center gap-2 text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Calendar size={16} />
                  <span>Feb 15, 2026</span>
                </div>
                <h3 
                  className="text-xl transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-ownership)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  Design Thinking for Better Conversions
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  How to apply design thinking principles to create user experiences that naturally drive conversions.
                </p>
                <button 
                  className="text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: 'var(--color-ownership)' }}
                >
                  Read More
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>

            <article 
              className="rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <div className="overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwc2tldGNoaW5nfGVufDF8fHx8MTc3MTQxMTU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Product design sketches"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div 
                  className="flex items-center gap-2 text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Calendar size={16} />
                  <span>Feb 12, 2026</span>
                </div>
                <h3 
                  className="text-xl transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-ownership)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  UI Patterns That Drive Sales
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Discover the most effective UI patterns and design elements that increase engagement and sales.
                </p>
                <button 
                  className="text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: 'var(--color-ownership)' }}
                >
                  Read More
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>

            <article 
              className="rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <div className="overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc3MTMzNTYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="UX research session"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div 
                  className="flex items-center gap-2 text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Calendar size={16} />
                  <span>Feb 8, 2026</span>
                </div>
                <h3 
                  className="text-xl transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-ownership)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  User Research for Sales Success
                </h3>
                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Learn how to conduct user research that informs both design decisions and sales strategies.
                </p>
                <button 
                  className="text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: 'var(--color-ownership)' }}
                >
                  Read More
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact"><ContactSection /></div>

      {/* Footer */}
      <Footer />
    </div>
      )}
      </div>
    </div>
    <BackToTop />
    </>
  );
}