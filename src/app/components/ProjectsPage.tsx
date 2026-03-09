import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionBadge } from './SectionBadge';

/* ─── Data ───────────────────────────────────────────── */
type Category = 'All' | 'Branding' | 'UI/UX' | 'Web Dev' | 'Motion' | 'Strategy';
const TABS: Category[] = ['All', 'Branding', 'UI/UX', 'Web Dev', 'Motion', 'Strategy'];

interface Project {
  id: number;
  client: string;
  title: string;
  desc: string;
  category: Category;
  image: string;
  height: 'tall' | 'medium' | 'short';
}

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    client: 'Luminary Health',
    title: 'Patient Portal Redesign',
    desc: 'A complete UX overhaul for 200k users — 64% drop-off reduction and 3× daily sessions.',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1682971829405-42b40b5f0895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHdpcmVmcmFtZSUyMHVzZXIlMjByZXNlYXJjaCUyMHByb3RvdHlwZXxlbnwxfHx8fDE3NzI3ODIzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'tall',
  },
  {
    id: 2,
    client: 'Vortex Studio',
    title: 'Global Brand Identity',
    desc: 'Logo, motion guidelines, and full design system rolled out across 14 markets.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1649000809102-61d0fe6759b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwc3lzdGVtJTIwYm9sZHxlbnwxfHx8fDE3NzI3ODIyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'short',
  },
  {
    id: 3,
    client: 'Noma Commerce',
    title: 'E-Commerce Experience',
    desc: '12-week sprint from discovery to launch — 41% uplift in checkout completion rate.',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMHJlZGVzaWduJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzI3ODIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'medium',
  },
  {
    id: 4,
    client: 'Solaris Energy',
    title: 'Motion Brand System',
    desc: 'Cinematic brand film and micro-interaction library for a clean-tech IPO launch.',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1740174459694-4da6669ef2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMHZpc3VhbCUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NzI3ODIyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'short',
  },
  {
    id: 5,
    client: 'Arcana Capital',
    title: 'Growth Strategy & CRO',
    desc: 'Data-driven funnel rebuild that tripled qualified leads in Q2.',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1744854185466-cf95c3064cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwc3RyYXRlZ3klMjBidXNpbmVzcyUyMGdyb3d0aCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI3ODIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'tall',
  },
  {
    id: 6,
    client: 'Pulse Mobile',
    title: 'Fitness App UI Design',
    desc: 'Zero-to-one product design for an iOS fitness platform — shipped in 8 weeks.',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NDg2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'medium',
  },
  {
    id: 7,
    client: 'Foundry Labs',
    title: 'SaaS Web Platform',
    desc: 'Full-stack Next.js build with real-time dashboards and role-based access control.',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMG1vZGVybiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI3ODIyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'short',
  },
  {
    id: 8,
    client: 'Halo Print Co.',
    title: 'Print & Packaging Identity',
    desc: 'Tactile branding from packaging to point-of-sale across 6 retail product lines.',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1580746171752-696bf78660fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHByaW50JTIwZGVzaWduJTIwdHlwb2dyYXBoeSUyMHBvc3RlcnxlbnwxfHx8fDE3NzI3ODIzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'tall',
  },
  {
    id: 9,
    client: 'Meridian Travel',
    title: 'Destination Campaign Site',
    desc: 'Campaign microsite with immersive visuals and a 98 Lighthouse performance score.',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1609941535028-83e3b0291aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbGFuZGluZyUyMHBhZ2UlMjB3ZWJzaXRlJTIwY2xlYW4lMjBtaW5pbWFsfGVufDF8fHx8MTc3Mjc4MjMwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    height: 'medium',
  },
];

const FEATURED = {
  client: 'Noma Commerce',
  title: 'Conversion-First E-Commerce Platform',
  desc: 'A 12-week ground-up redesign and rebuild of Noma\'s flagship store. We unified their brand, rearchitected the information hierarchy, and introduced a checkout flow that cut abandonment by 41% — generating $2.4M in incremental annual revenue.',
  image: 'https://images.unsplash.com/photo-1656078260271-5c0b07707325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZWNvbW1lcmNlJTIwc3RvcmUlMjBVSSUyMGRhc2hib2FyZCUyMHByb2R1Y3QlMjBncmlkJTIwbW9kZXJufGVufDF8fHx8MTc3Mjc4NjYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
};

const HEIGHT_MAP = { tall: 320, medium: 240, short: 180 };

/* ─── Masonry grid ───────────────────────────────────── */
function MasonryGrid({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  // Distribute into 3 columns
  const cols: Project[][] = [[], [], []];
  projects.forEach((p, i) => cols[i % 3].push(p));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-6">
          {col.map(project => {
            const isHov = hovered === project.id;
            return (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden cursor-pointer group"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: isHov ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
                  borderColor: isHov ? 'var(--border-strong)' : 'var(--border)',
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: HEIGHT_MAP[project.height] }}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isHov ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 flex items-start justify-between gap-3">
                  <div>
                    <span
                      className="block text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: 'var(--color-impact)' }}
                    >
                      {project.client}
                    </span>
                    <h3 className="text-sm" style={{ color: 'var(--text-primary)', fontWeight: 700, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold mt-0.5"
                    style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--color-ownership)', whiteSpace: 'nowrap' }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────── */
interface ProjectsPageProps {
  onBack: () => void;
}

export function ProjectsPage({ onBack: _onBack }: ProjectsPageProps) {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeTab === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeTab);
  const visible  = filtered.slice(0, visibleCount);
  const hasMore  = visibleCount < filtered.length;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ── Hero banner ─────────���───────────────── */}
      <section
        className="px-6 lg:px-10 pt-28 pb-12 text-center"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionBadge text="All Projects" />
          <h1
            className="mb-4"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1 }}
          >
            Work that{' '}
            <span style={{ color: 'var(--color-impact)' }}>speaks</span> for itself
          </h1>
          <p className="max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Explore our full portfolio — branding, interfaces, and digital experiences built for growth.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Featured project ─────────────────────── */}
        <section className="py-10">
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
          >
            <div className="relative" style={{ height: 'clamp(260px, 38vw, 460px)' }}>
              <ImageWithFallback
                src={FEATURED.image}
                alt={FEATURED.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-end p-10 lg:p-14">
                <div className="max-w-lg">
                  <span
                    className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-impact)' }}
                  >
                    {FEATURED.client} · Featured Project
                  </span>
                  <h2
                    className="mb-3"
                    style={{ color: '#FFFFFF', fontSize: 'clamp(20px, 3vw, 34px)', fontWeight: 800, lineHeight: 1.15 }}
                  >
                    {FEATURED.title}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {FEATURED.desc}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-ownership)', color: '#fff' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ownership)'; }}
                  >
                    View Case Study
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Filter tabs ─────────────────────────── */}
        <section className="pb-8">
          <div className="flex flex-wrap gap-2">
            {TABS.map(tab => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setVisibleCount(9); }}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? 'var(--color-ownership)' : 'var(--bg-surface)',
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    border: isActive ? '1.5px solid var(--color-ownership)' : '1px solid var(--border)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    } else {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-impact)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    } else {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ownership)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ownership)';
                    }
                  }}
                >
                  {tab}
                  {tab !== 'All' && (
                    <span
                      className="ml-1.5 text-xs"
                      style={{ color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}
                    >
                      {ALL_PROJECTS.filter(p => p.category === tab).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Masonry grid ─────────────────────────── */}
        <section className="pb-10">
          {visible.length > 0 ? (
            <MasonryGrid projects={visible} />
          ) : (
            <div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
              No projects in this category yet.
            </div>
          )}
        </section>

        {/* ── Load more ────────────────────────────── */}
        {hasMore && (
          <div className="flex justify-center pb-16">
            <button
              onClick={() => setVisibleCount(c => c + 6)}
              className="px-10 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-ownership)',
                border: '1.5px solid var(--color-ownership)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-impact)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-ownership)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ownership)';
              }}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}