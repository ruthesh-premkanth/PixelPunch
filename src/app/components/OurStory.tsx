import { Play } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoModal } from './VideoModal';
import { SectionBadge } from './SectionBadge';

interface OurStoryProps {
  isDarkMode: boolean;
  onGoAbout?: () => void;
}

export function OurStory({ isDarkMode, onGoAbout }: OurStoryProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { number: '120+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years of Mastery' },
    { number: '30+', label: 'Global Clients' }
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1664099565733-0bed629b2274?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  ];

  return (
    <section 
      id="about"
      className="py-24 px-6 lg:px-8 transition-all duration-400"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      {/* Dark mode radial glow */}
      {isDarkMode && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 800px 400px at 50% 20%, rgba(124, 58, 237, 0.1), transparent)',
            opacity: 0.8
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading — centered above grid, matches Our Services */}
        <div className="text-center mb-10 space-y-3">
          <SectionBadge text="OUR STORY" />
          <h2
            className="text-4xl transition-colors duration-300"
            style={{
              color: 'var(--text-primary)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800
            }}
          >
            Where Pixels Meet Pipeline
          </h2>
          <p
            className="max-w-2xl mx-auto transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            Combining creative design with strategic thinking to deliver experiences that captivate users and drive measurable business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Main Image with Gradient Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwYWdlbmN5JTIwdGVhbSUyMHdvcmtpbmclMjBjb21wdXRlcnN8ZW58MXx8fHwxNzcyMTc2MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UI/UX design agency team working on computers"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay at bottom */}
              <div 
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(to top, var(--color-ownership), transparent)'
                    : 'linear-gradient(to top, rgba(91, 33, 182, 0.15), transparent)'
                }}
              />
            </div>

            {/* Content block below left image */}
            <div className="space-y-2 pt-2">
              <p
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px'
                }}
              >
                Built Different. By Design.
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
              >
                We started with a simple belief — great design should do more than look good. It should work hard, convert fast, and leave a lasting impression.
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
              >
                From branding to development, every solution we craft is rooted in strategy and brought to life through bold, purposeful design.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Two Photo Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* UI/UX Card */}
              <div 
                className="relative rounded-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-surface)',
                  overflow: 'hidden'
                }}
              >
                <div className="relative h-64">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
                    alt="UI/UX Design"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark mode bottom fade */}
                  {isDarkMode && (
                    <div 
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background: 'linear-gradient(to top, rgba(9, 8, 15, 0.4), transparent)'
                      }}
                    />
                  )}
                  {/* Badge */}
                  <div 
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--color-synergy)',
                      color: '#ffffff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    UI/UX
                  </div>
                </div>
              </div>

              {/* Sales Card */}
              <div 
                className="relative rounded-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--bg-surface)',
                  overflow: 'hidden'
                }}
              >
                <div className="relative h-64">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1758691736764-2a88e313b1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE4NDMwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sales Strategy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark mode bottom fade */}
                  {isDarkMode && (
                    <div 
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background: 'linear-gradient(to top, rgba(9, 8, 15, 0.4), transparent)'
                      }}
                    />
                  )}
                  {/* Badge */}
                  <div 
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--color-impact)',
                      color: '#ffffff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    Sales
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-base leading-relaxed transition-colors duration-300"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              At the intersection of design and strategy, we build digital
              products that don't just look great — they perform. Our UI/UX
              team shapes every pixel with purpose, while our sales minds
              ensure every interaction drives results. We don't separate
              creativity from conversion. We treat them as one.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div 
                    className="text-3xl font-bold mb-1 transition-colors duration-300 group-hover:opacity-80"
                    style={{
                      color: 'var(--color-ownership)',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-impact)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-ownership)';
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-xs leading-tight transition-colors duration-300"
                    style={{
                      color: 'var(--text-muted)',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Avatars + Play Button */}
            <div className="flex items-center gap-4 pt-4">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full overflow-hidden transition-all duration-300"
                    style={{
                      border: `2px solid ${index % 2 === 0 ? 'var(--color-ownership)' : 'var(--color-synergy)'}`,
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <ImageWithFallback 
                      src={avatar}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Play Button */}
              <button 
                className="group flex items-center gap-3 hover:gap-4 transition-all duration-300"
                aria-label="Watch intro video"
                onClick={() => setVideoOpen(true)}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center relative transition-colors duration-300"
                  style={{
                    border: '2px solid var(--color-synergy)',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: 'var(--color-synergy)' }}
                  />
                  <Play 
                    size={18} 
                    fill="var(--color-impact)" 
                    stroke="var(--color-impact)"
                    className="relative z-10"
                  />
                </div>
                <span 
                  className="text-sm font-semibold tracking-wider transition-colors duration-300"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                >
                  WATCH INTRO
                </span>
              </button>

              {/* Know More Button */}
              {onGoAbout && (
                <button
                  onClick={onGoAbout}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #5B21B6',
                    color: '#5B21B6',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = '#DC2680';
                    el.style.borderColor = '#DC2680';
                    el.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = 'transparent';
                    el.style.borderColor = '#5B21B6';
                    el.style.color = '#5B21B6';
                  }}
                >
                  Know More
                </button>
              )}
            </div>

            {/* Bottom Divider Gradient */}
            <div 
              className="h-1 rounded-full mt-8"
              style={{
                background: 'linear-gradient(to right, var(--color-ownership), var(--color-synergy), var(--color-impact))'
              }}
            />
          </div>

        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/6SoB0I1X7EM?autoplay=1&rel=0&modestbranding=1" // Replace with your video URL
      />
    </section>
  );
}