import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionBadge } from './SectionBadge';

export function OurWork({ onViewAll }: { onViewAll?: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState<'left' | 'right' | null>(null);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzQwNjE5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "E-Commerce Dashboard Redesign",
      tag: "40% Conversion Increase • Analytics Platform"
    },
    {
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwdGFibGV0JTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc0MDYxOTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "SaaS Tablet Interface",
      tag: "Mobile-First Design • Cross-Platform Solution"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGhlYXRtYXAlMjB1c2VyJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzQwNjE5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "UX Heatmap Analysis",
      tag: "User Behavior Analytics • Data-Driven Insights"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzQwNjE5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Marketing Analytics Platform",
      tag: "Real-time Data • Performance Tracking"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    
    return [
      { ...projects[prevIndex], position: 'left', index: prevIndex },
      { ...projects[currentIndex], position: 'center', index: currentIndex },
      { ...projects[nextIndex], position: 'right', index: nextIndex }
    ];
  };

  return (
    <section 
      id="ourwork" 
      className="py-8 px-6 lg:px-12 transition-all duration-300"
      style={{ backgroundColor: 'var(--ourwork-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Tightly Aligned */}
        <div className="text-center mb-6 space-y-3" style={{ paddingTop: '10px' }}>
          <SectionBadge text="Our Work" />
          <h2 
            className="text-4xl transition-colors duration-300"
            style={{ color: 'var(--ourwork-headline)' }}
          >
            Featured Projects
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto transition-colors duration-300"
            style={{ color: 'var(--ourwork-subline)' }}
          >
            Discover how we've helped brands achieve their goals.
          </p>
        </div>

        {/* Carousel Container with 3 Cards */}
        <div className="relative mb-2" style={{ marginTop: '-25px' }}>
          <div className="flex items-center justify-center gap-4 min-h-[500px] perspective-1000">
            {getVisibleCards().map((card, idx) => {
              const isCenter = card.position === 'center';
              const isLeft = card.position === 'left';
              const isRight = card.position === 'right';

              return (
                <div
                  key={`${card.index}-${idx}`}
                  className="relative transition-all duration-500 ease-out cursor-pointer"
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                  style={{
                    width: '400px',
                    height: '400px',
                    zIndex: isCenter ? 30 : 10,
                    transform: isCenter ? 'translateY(0)' : 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    if (isCenter) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className="relative w-full h-full overflow-hidden group"
                    style={{
                      borderRadius: '12px',
                      boxShadow: isCenter ? 'var(--ourwork-card-shadow-hover)' : 'var(--ourwork-card-shadow)'
                    }}
                  >
                    {/* Card Image - Full Cover */}
                    <ImageWithFallback 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Text Content Over Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                      <h3 className="text-xl mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {card.tag}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Left and Right Sides */}
          <button 
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200"
            style={{
              left: '-16px',
              transform: 'translate(-100%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              backgroundColor: hoveredArrow === 'left' ? '#5B21B6' : '#FFFFFF',
              border: hoveredArrow === 'left' ? 'none' : '1px solid #E5E7EB',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer'
            }}
            onClick={prevSlide}
            onMouseEnter={() => setHoveredArrow('left')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Previous project"
          >
            <ChevronLeft 
              size={20} 
              strokeWidth={2}
              color={hoveredArrow === 'left' ? '#FFFFFF' : '#5B21B6'} 
            />
          </button>

          <button 
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200"
            style={{
              right: '-16px',
              transform: 'translate(100%, -50%)',
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              backgroundColor: hoveredArrow === 'right' ? '#5B21B6' : '#FFFFFF',
              border: hoveredArrow === 'right' ? 'none' : '1px solid #E5E7EB',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer'
            }}
            onClick={nextSlide}
            onMouseEnter={() => setHoveredArrow('right')}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Next project"
          >
            <ChevronRight 
              size={20} 
              strokeWidth={2}
              color={hoveredArrow === 'right' ? '#FFFFFF' : '#5B21B6'} 
            />
          </button>
        </div>

        {/* Dot Indicators - Centered */}
        <div 
          className="flex items-center justify-center mb-4" 
          style={{ 
            gap: '6px',
            marginTop: '24px'
          }}
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                backgroundColor: index === currentIndex 
                  ? '#5B21B6' 
                  : '#D1D5DB',
                cursor: 'pointer',
                border: 'none',
                padding: 0
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center" style={{ marginTop: '20px' }}>
          <button 
            onClick={onViewAll}
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
            View All Projects
            <span style={{ fontSize: '16px' }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}