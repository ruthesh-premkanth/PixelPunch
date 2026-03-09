import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionBadge } from './SectionBadge';

const STUDIO_PHOTO =
  'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMHRlYW18ZW58MXx8fHwxNzcyNzkzMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080';

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5',   label: 'Team Members' },
  { value: '6',   label: 'Years in Business' },
];

interface AboutPageProps {
  isDarkMode: boolean;
  onGoContact: () => void;
}

export function AboutPage({ isDarkMode: _isDarkMode, onGoContact }: AboutPageProps) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="px-6 lg:px-10 pt-32 pb-20 text-center"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionBadge text="Who We Are" />
          <h1
            className="font-[Plus_Jakarta_Sans] mb-5"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(38px, 6vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            We Are{' '}
            <span style={{ color: '#DC2680' }}>PixelPunch</span>
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A boutique digital studio where sales strategy meets craft-level design and
            engineering. We build products that look remarkable, convert brilliantly, and
            grow the businesses behind them.
          </p>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <SectionBadge text="Our Story" />
            <h2
              className="font-[Plus_Jakarta_Sans] mb-6"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Built from a belief that{' '}
              <span style={{ color: '#DC2680' }}>design drives revenue</span>
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <p className="text-sm leading-relaxed">
                PixelPunch was founded in 2018 by a small team tired of watching beautiful
                products fail because of poor conversion strategy — and watching strong
                funnels underperform because of forgettable design. We knew there was a
                better way.
              </p>
              <p className="text-sm leading-relaxed">
                We set out to build a studio that thinks in both languages: the language of
                aesthetics and the language of growth. Six years later, we've shipped over
                50 products for startups, scale-ups, and established brands across Europe
                and North America.
              </p>
              <p className="text-sm leading-relaxed">
                Every project starts with understanding the business goal behind the brief.
                Every pixel is considered. Every line of code is clean. That's the
                PixelPunch standard.
              </p>
            </div>
          </div>

          {/* Right — photo with accent border */}
          <div className="relative">
            {/* Purple accent block — top-left offset */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl z-0"
              style={{ backgroundColor: '#5B21B6', opacity: 0.18 }}
            />
            {/* Solid border accent strip */}
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-2xl z-0"
              style={{
                border: '3px solid #5B21B6',
                borderRadius: '16px',
              }}
            />
            <div className="relative z-10 rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(91,33,182,0.18)' }}>
              <ImageWithFallback
                src={STUDIO_PHOTO}
                alt="PixelPunch studio"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <p
                  className="font-[Plus_Jakarta_Sans] mb-1"
                  style={{
                    color: '#DC2680',
                    fontSize: 'clamp(36px, 5vw, 52px)',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────── */}
      <section className="px-6 lg:px-10 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div
          className="max-w-6xl mx-auto rounded-2xl px-8 lg:px-16 py-16 text-center relative overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: '#DC2680', opacity: 0.12 }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: '#5B21B6', opacity: 0.12 }}
          />

          <div className="relative z-10">
            <SectionBadge text="Let's Build Together" />
            <h2
              className="font-[Plus_Jakarta_Sans] mb-4 max-w-2xl mx-auto"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(28px, 4vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Ready to work{' '}
              <span style={{ color: '#DC2680' }}>with us?</span>
            </h2>
            <p
              className="text-sm leading-relaxed max-w-md mx-auto mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tell us what you're building and we'll come back with a proposal within
              48 hours. No fluff, just results.
            </p>
            <button
              onClick={onGoContact}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ backgroundColor: '#DC2680', color: '#fff' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#5B21B6';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(91,33,182,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#DC2680';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              Start a Project
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
