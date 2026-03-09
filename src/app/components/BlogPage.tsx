import { useState, useRef } from 'react';
import { ArrowRight, Calendar, User, Mail, ChevronUp, LayoutGrid } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionBadge } from './SectionBadge';

interface BlogPageProps {
  isDarkMode: boolean;
}

const FEATURED = {
  id: 'f1',
  category: 'UI/UX',
  title: 'How We Approach Every Creative Brief: From Chaos to Clarity',
  excerpt:
    'Every great project starts with a messy brief. We walk you through the exact framework we use to untangle complexity, align stakeholders, and emerge with a single, powerful creative direction.',
  author: 'Sofia Marchetti',
  date: 'Feb 28, 2026',
  readTime: '7 min read',
  image:
    'https://images.unsplash.com/photo-1761746395622-5f7e0e7b4ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMGNyZWF0aXZlJTIwcHJvY2VzcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI3OTE2NTN8MA&ixlib=rb-4.1.0&q=80&w=1200',
};

const LATEST_POSTS = [
  {
    id: 'l1',
    category: 'Sales Strategy',
    title: 'The Typography Rules We Break on Purpose',
    excerpt:
      'Rules exist to be understood. We explore why intentional rule-breaking in type can elevate a brand from forgettable to iconic.',
    author: 'James Okafor',
    date: 'Feb 19, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1633796212691-0cfba2ab1dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwdHlwb2dyYXBoeSUyMG1vZGVybnxlbnwxfHx8fDE3NzI3OTE2NTN8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 'l2',
    category: 'User Research',
    title: 'Designing for Delight: Micro-interactions That Matter',
    excerpt:
      'The smallest details leave the biggest impressions. A deep dive into the micro-interactions that make users smile and keep them coming back.',
    author: 'Priya Nair',
    date: 'Feb 11, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1730817403280-1b0b8a01efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWduJTIwcHJvdG90eXBlfGVufDF8fHx8MTc3Mjc5MTY1NHww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 'l3',
    category: 'UI/UX',
    title: 'When Animation Speaks Louder Than Words',
    excerpt:
      'We make the case for motion as a primary design language — not decoration — and share the principles we live by in every project.',
    author: 'Lucas Mendes',
    date: 'Jan 30, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1657625947315-03727763fa19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBkZXNpZ24lMjBhbmltYXRpb24lMjBhYnN0cmFjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3Mjc5MTY1NHww&ixlib=rb-4.1.0&q=80&w=600',
  },
];

const MORE_POSTS = [
  {
    id: 'm1',
    category: 'Sales Strategy',
    title: 'The Secret Language of Colour in Brand Design',
    excerpt:
      'Colour is never arbitrary. We unpack the psychology behind the palettes we choose and why the right hue can shift perception entirely.',
    author: 'Sofia Marchetti',
    date: 'Jan 22, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1716471330459-063b3baf247e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHBzeWNob2xvZ3klMjB2aXN1YWwlMjBkZXNpZ24lMjBwYWxldHRlfGVufDF8fHx8MTc3Mjc5MjAwMHww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 'm2',
    category: 'User Research',
    title: 'Why Clean Code Is a Design Problem Too',
    excerpt:
      "The gap between design and engineering is closing. Here's how we write code that reads like good design — legible, purposeful, and built to last.",
    author: 'Priya Nair',
    date: 'Jan 14, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmslMjBzY3JlZW58ZW58MXx8fHwxNzcyNzgxMjgwfDA&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    id: 'm3',
    category: 'UI/UX',
    title: "Launching a Product? Here's What Most Teams Miss",
    excerpt:
      "A great launch isn't just about the day. We walk through the pre-launch alignment process that separates forgettable releases from cultural moments.",
    author: 'Rafael Díaz',
    date: 'Jan 6, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbGF1bmNoJTIwc3RyYXRlZ3klMjB0ZWFtJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NzI3OTIwMDF8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
];

// ─── Reusable Post Card ───────────────────────────────────────────────────────
function PostCard({
  post,
  isHov,
  onEnter,
  onLeave,
  surface,
  subtleBorder,
  isDarkMode,
  revealIndex,
}: {
  post: typeof LATEST_POSTS[0];
  isHov: boolean;
  onEnter: () => void;
  onLeave: () => void;
  surface: string;
  subtleBorder: string;
  isDarkMode: boolean;
  revealIndex?: number; // stagger delay index for "more" cards
}) {
  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: surface,
        border: `1.5px solid ${isHov ? '#DC2680' : subtleBorder}`,
        boxShadow: isHov
          ? '0 12px 40px rgba(220,38,128,0.14)'
          : isDarkMode
          ? '0 4px 20px rgba(0,0,0,0.4)'
          : '0 4px 20px rgba(91,33,182,0.07)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        // Staggered reveal for "more" cards
        ...(revealIndex !== undefined
          ? {
              opacity: 1,
              transform: 'translateY(0)',
            }
          : {}),
      }}
    >
      {/* Cover */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '4px 12px',
            borderRadius: '999px',
            backgroundColor: isDarkMode ? 'rgba(10,10,10,0.82)' : 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${subtleBorder}`,
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: '#5B21B6',
          }}
        >
          {post.category}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Category Pill Badge */}
        <div style={{ marginBottom: '12px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '5px 12px',
              borderRadius: '999px',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase' as const,
              backgroundColor: 'rgba(var(--color-impact-rgb), 0.15)',
              color: 'var(--color-impact)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {post.category}
          </span>
        </div>

        <h3
          style={{
            fontSize: '17px',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: '10px',
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            flex: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: `1px solid ${subtleBorder}`,
          }}
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {post.author}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <Calendar size={10} />
              {post.date}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: 600,
              color: isHov ? '#DC2680' : '#5B21B6',
            }}
          >
            Read
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Main BlogPage ────────────────────────────────────────────────────────────
export function BlogPage({ isDarkMode }: BlogPageProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const morePanelRef = useRef<HTMLDivElement>(null);

  const surface = isDarkMode ? '#111111' : '#FFFFFF';
  const subtleBg = isDarkMode ? 'rgba(91,33,182,0.15)' : '#EDE9FF';
  const subtleBorder = isDarkMode ? 'rgba(91,33,182,0.30)' : '#DDD6FE';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const handleViewAll = () => {
    if (showMore) {
      // Collapse — scroll back up to the section header smoothly
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };

  return (
    <div
      data-theme={isDarkMode ? 'dark' : 'light'}
      style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#0A0A0A' : '#FAFAF8',
        color: 'var(--text-primary)',
        paddingTop: '88px',
      }}
    >
      {/* CSS for the more-panel reveal */}
      <style>{`
        .more-panel {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .more-panel.open {
          grid-template-rows: 1fr;
        }
        .more-panel-inner {
          overflow: hidden;
          min-height: 0;
        }
        .more-panel-inner > .posts-grid > article {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .more-panel.open .more-panel-inner > .posts-grid > article:nth-child(1) {
          opacity: 1; transform: translateY(0); transition-delay: 0.10s;
        }
        .more-panel.open .more-panel-inner > .posts-grid > article:nth-child(2) {
          opacity: 1; transform: translateY(0); transition-delay: 0.18s;
        }
        .more-panel.open .more-panel-inner > .posts-grid > article:nth-child(3) {
          opacity: 1; transform: translateY(0); transition-delay: 0.26s;
        }
        @media (max-width: 900px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:first-child { min-height: 260px !important; }
        }
        @media (max-width: 720px) {
          .posts-grid { grid-template-columns: 1fr !important; }
          .newsletter-form { flex-direction: column !important; }
        }
      `}</style>

      {/* ── HERO ───────────────────────────��───────────────────── */}
      <section style={{ padding: '80px 24px 64px', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{ marginBottom: '28px' }}>
          <SectionBadge text="The PixelPunch Journal" />
        </div>

        <h1
          style={{
            fontSize: 'clamp(38px, 6vw, 58px)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Ideas,{' '}
          <span style={{ color: '#DC2680' }}>Insights</span>
          {' '}& Inspiration
        </h1>

        <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
          Stories, strategies, and sharp thinking from the team that lives and breathes design.
        </p>
      </section>

      {/* ── FEATURED POST ──────────────────────────────────────── */}
      <section style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="featured-card"
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: surface,
            border: `1px solid ${subtleBorder}`,
            boxShadow: isDarkMode ? '0 8px 40px rgba(0,0,0,0.5)' : '0 8px 40px rgba(91,33,182,0.09)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
            <ImageWithFallback
              src={FEATURED.image}
              alt={FEATURED.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: isDarkMode
                  ? 'linear-gradient(135deg, rgba(91,33,182,0.25) 0%, transparent 60%)'
                  : 'linear-gradient(135deg, rgba(91,33,182,0.10) 0%, transparent 60%)',
              }}
            />
          </div>

          <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span
                style={{
                  padding: '5px 14px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backgroundColor: subtleBg,
                  color: '#5B21B6',
                  border: `1px solid ${subtleBorder}`,
                }}
              >
                {FEATURED.category}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{FEATURED.readTime}</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: '16px',
              }}
            >
              {FEATURED.title}
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '32px' }}>
              {FEATURED.excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
                paddingTop: '20px',
                borderTop: `1px solid ${subtleBorder}`,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: subtleBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <User size={16} color="#5B21B6" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>{FEATURED.author}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <Calendar size={11} />
                  {FEATURED.date}
                </div>
              </div>
            </div>

            <button
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '999px',
                backgroundColor: '#DC2680',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 6px 24px rgba(220,38,128,0.32)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#b81e68';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 32px rgba(220,38,128,0.42)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#DC2680';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(220,38,128,0.32)';
              }}
            >
              Read More
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── LATEST POSTS + EXPAND PANEL ────────────────────────── */}
      <section style={{ padding: '0 24px 96px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            Latest Posts
          </h2>

          {/* ── View All / Show Less swap button ── */}
          <button
            onClick={handleViewAll}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 22px',
              borderRadius: '999px',
              backgroundColor: showMore ? '#DC2680' : 'transparent',
              color: showMore ? '#FFFFFF' : '#DC2680',
              fontSize: '13px',
              fontWeight: 600,
              border: '1.5px solid #DC2680',
              cursor: 'pointer',
              boxShadow: showMore ? '0 4px 18px rgba(220,38,128,0.28)' : 'none',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget as HTMLButtonElement;
              if (!showMore) btn.style.backgroundColor = 'rgba(220,38,128,0.07)';
              else btn.style.backgroundColor = '#b81e68';
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = showMore ? '#DC2680' : 'transparent';
            }}
          >
            {showMore ? (
              <>
                <ChevronUp size={14} />
                View Less
              </>
            ) : (
              <>
                <LayoutGrid size={14} />
                View All
              </>
            )}
          </button>
        </div>

        {/* First 3 cards — always visible */}
        <div
          className="posts-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        >
          {LATEST_POSTS.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isHov={hoveredCard === post.id}
              onEnter={() => setHoveredCard(post.id)}
              onLeave={() => setHoveredCard(null)}
              surface={surface}
              subtleBorder={subtleBorder}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* ── More posts — animated reveal panel ── */}
        <div ref={morePanelRef} className={`more-panel${showMore ? ' open' : ''}`}>
          <div className="more-panel-inner">
            {/* Divider with label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '36px 0 32px',
              }}
            >
              <div style={{ flex: 1, height: '1px', backgroundColor: subtleBorder }} />
              <div style={{ flex: 1, height: '1px', backgroundColor: subtleBorder }} />
            </div>

            {/* 3 additional cards */}
            <div
              className="posts-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
            >
              {MORE_POSTS.map((post, i) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isHov={hoveredCard === post.id}
                  onEnter={() => setHoveredCard(post.id)}
                  onLeave={() => setHoveredCard(null)}
                  surface={surface}
                  subtleBorder={subtleBorder}
                  isDarkMode={isDarkMode}
                  revealIndex={i}
                />
              ))}
            </div>

            {/* Collapse footer */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
              <button
                onClick={() => setShowMore(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 22px',
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: `1.5px solid ${subtleBorder}`,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#DC2680';
                  (e.currentTarget as HTMLButtonElement).style.color = '#DC2680';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = subtleBorder;
                  (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
                }}
              >
                <ChevronUp size={14} />
                View Less
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER BANNER ──────────────────────────────────── */}
      <section style={{ padding: '0 24px 100px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            borderRadius: '28px',
            padding: 'clamp(48px, 6vw, 72px) clamp(32px, 6vw, 72px)',
            background: isDarkMode
              ? 'linear-gradient(135deg, #1a0a2e 0%, #0f0f1a 50%, #1a0f20 100%)'
              : 'linear-gradient(135deg, #EDE9FF 0%, #F5F2EE 50%, #FFE4F0 100%)',
            border: `1px solid ${subtleBorder}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '240px', height: '240px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: '-80px', left: '-40px',
              width: '280px', height: '280px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(220,38,128,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '6px 18px', borderRadius: '999px',
              backgroundColor: isDarkMode ? 'rgba(91,33,182,0.2)' : '#FFFFFF',
              border: `1px solid ${subtleBorder}`,
              marginBottom: '24px', position: 'relative',
            }}
          >
            <Mail size={12} color="#DC2680" style={{ marginRight: '6px' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#DC2680' }}>
              Newsletter
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: '14px',
              position: 'relative',
            }}
          >
            Get Fresh Ideas <span style={{ color: '#DC2680' }}>Weekly</span>
          </h2>

          <p
            style={{
              fontSize: '16px', lineHeight: 1.65,
              color: 'var(--text-secondary)', maxWidth: '440px',
              marginBottom: '36px', position: 'relative',
            }}
          >
            Design tips, creative case studies, and industry insights — straight to your inbox every Thursday.
          </p>

          {subscribed ? (
            <div
              style={{
                padding: '16px 32px', borderRadius: '999px',
                backgroundColor: isDarkMode ? 'rgba(91,33,182,0.2)' : '#EDE9FF',
                border: '1.5px solid #5B21B6',
                fontSize: '15px', fontWeight: 600, color: '#5B21B6',
                position: 'relative',
              }}
            >
              🎉 You're in! Check your inbox shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="newsletter-form"
              style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '480px', position: 'relative' }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                required
                style={{
                  flex: 1, padding: '14px 20px',
                  borderRadius: '999px', fontSize: '14px',
                  color: 'var(--text-primary)',
                  backgroundColor: isDarkMode ? '#1a1a1a' : '#FFFFFF',
                  border: `1.5px solid ${inputFocused ? '#5B21B6' : subtleBorder}`,
                  outline: 'none',
                  boxShadow: inputFocused ? '0 0 0 3px rgba(91,33,182,0.15)' : 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 28px', borderRadius: '999px',
                  backgroundColor: '#DC2680', color: '#FFFFFF',
                  fontSize: '14px', fontWeight: 600,
                  border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                  boxShadow: '0 6px 24px rgba(220,38,128,0.30)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#b81e68'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#DC2680'; }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p style={{ marginTop: '14px', fontSize: '12px', color: 'var(--text-muted)', position: 'relative' }}>
            No spam, ever. Unsubscribe in one click.
          </p>
        </div>
      </section>
    </div>
  );
}