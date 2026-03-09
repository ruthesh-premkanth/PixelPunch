import { useEffect, useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionBadge } from './SectionBadge';

/* ─── Data ───────────────────────────────────────────── */
const SERVICES = [
  {
    title: 'Sales Strategy',
    tag: 'Strategy',
    description:
      'Data-driven funnels and conversion optimisation strategies that turn visitors into loyal customers. We audit your existing pipeline and build scalable growth systems.',
    highlights: ['Funnel Mapping', 'A/B Testing', 'CRO Audits', 'Pipeline Automation'],
    img: 'https://images.unsplash.com/photo-1638281269990-8fbe0db9375e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzaW9uJTIwcmF0ZSUyMG9wdGltaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI3NzkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'UI / UX Design',
    tag: 'Design',
    description:
      'Beautiful, intuitive interfaces crafted with rigorous user research. We design experiences that guide users naturally toward action — from wireframe to pixel-perfect delivery.',
    highlights: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    img: 'https://images.unsplash.com/photo-1633381573179-d3cadd62970a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVWCUyMGRlc2lnbiUyMHBvcnRvdHlwZXxlbnwxfHx8fDE3NzI3NzkzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Conversion Design',
    tag: 'Growth',
    description:
      'Strategic design patterns rooted in sales psychology that maximise engagement. Every layout decision is backed by data to drive measurable business outcomes.',
    highlights: ['Persuasion Design', 'Landing Pages', 'Email Flows', 'CTA Optimisation'],
    img: 'https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjY5MTA4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Development',
    tag: 'Build',
    description:
      'Clean, performant code that brings your designs to life. React, TypeScript, and modern tooling ensure your product is fast, accessible, and maintainable from day one.',
    highlights: ['React / Next.js', 'TypeScript', 'API Integration', 'Performance Tuning'],
    img: 'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzI3MTQ3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Growth Marketing',
    tag: 'Marketing',
    description:
      'Full-funnel marketing strategy combining content, paid, and organic to grow your audience. We deliver campaigns that scale and stories that resonate.',
    highlights: ['Content Strategy', 'Paid Social', 'SEO', 'Retention Flows'],
    img: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWElMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI3NzkzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Brand & Research',
    tag: 'Branding',
    description:
      'Deep brand discovery workshops and competitor research that sharpen your positioning. From visual identity to tone of voice, we make your brand impossible to ignore.',
    highlights: ['Brand Identity', 'Competitor Analysis', 'Positioning', 'Style Guides'],
    img: 'https://images.unsplash.com/photo-1649000809102-61d0fe6759b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwc3lzdGVtJTIwYm9sZHxlbnwxfHx8fDE3NzI3ODIyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Deep-dive workshops to understand your goals, users, and market context.' },
  { step: '02', title: 'Define',   desc: 'A clear plan — scope, milestones, success metrics, and creative direction.' },
  { step: '03', title: 'Design',   desc: 'Wireframes, prototypes, and high-fidelity visuals through tight feedback loops.' },
  { step: '04', title: 'Deliver',  desc: 'Production-ready delivery with full documentation and post-launch support.' },
];

const FAQS = [
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A brand + website is typically 3–4 weeks. Larger projects run 8–12 weeks. Enterprise engagements are scoped during discovery.' },
  { q: 'Do you work with early-stage startups?', a: 'Absolutely. Some of our best work has been for founders going from zero to launch. We offer flexible milestone-based payment to suit early-stage budgets.' },
  { q: 'What do you need from us to get started?', a: "A brief, a budget range, and a deadline. We'll handle the rest — from the discovery workshop to the final handoff." },
  { q: 'Can we hire you for design only (no development)?', a: 'Yes. We frequently deliver Figma-ready design systems, brand guidelines, and prototypes to in-house engineering teams.' },
  { q: 'Do you offer ongoing retainers after launch?', a: 'Yes — we offer monthly design retainers for teams that need continuous creative partnership beyond the initial project.' },
];

/* ─── Main component ─────────────────────────────────── */
interface ServicesPageProps {
  isDarkMode: boolean;
  onBack: () => void;
  onGoProjects?: () => void;
  onGoContact?: () => void;
}

export function ServicesPage({ isDarkMode: _isDarkMode, onBack, onGoProjects, onGoContact }: ServicesPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="px-6 lg:px-10 pt-28 pb-16 text-center"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionBadge text="What We Do" />
          <h1
            className="mb-4 font-[Plus_Jakarta_Sans]"
            style={{
              color: 'var(--text-primary)',
              fontSize: '40px',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Services Built for{' '}
            <span style={{ color: 'var(--color-impact)' }}>Real Results</span>
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            We combine sales strategy with craft-level design and engineering to build products that grow businesses.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: 'var(--color-ownership)', color: '#fff' }}
            onClick={onGoProjects}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ownership)'; }}
          >
            View Our Work
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────── */}
      <section className="px-6 lg:px-10 py-14" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <SectionBadge text="Our Services" />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800 }}>
              What We Specialise In
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Combining sales expertise with design excellence to deliver solutions that drive growth and delight users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ title, tag, description, highlights, img }) => (
              <div
                key={title}
                className="rounded-xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                }}
              >
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--color-ownership)' }}
                  >
                    {tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base mb-2" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {highlights.map(h => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--hover-bg)', color: 'var(--color-ownership)' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={onGoContact}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              style={{ backgroundColor: 'var(--color-ownership)', color: '#ffffff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ownership)'; }}
            >
              Start a Project
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <SectionBadge text="How We Work" />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800 }}>
              Our Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                
                <h4 className="mb-2" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 15 }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <SectionBadge text="FAQ" />
            <h2 className="font-[Plus_Jakarta_Sans]" style={{ color: 'var(--text-primary)', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800 }}>
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: `1px solid ${openFaq === i ? 'var(--border-strong)' : 'var(--border)'}`,
                  boxShadow: 'var(--shadow-sm)',
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between px-6 py-4 gap-4">
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{q}</span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: openFaq === i ? 'var(--color-impact)' : 'var(--active-bg)' }}
                  >
                    {openFaq === i
                      ? <Minus size={13} color="#fff" strokeWidth={2.5} />
                      : <Plus  size={13} style={{ color: 'var(--color-impact)' }} strokeWidth={2.5} />
                    }
                  </div>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────── */}
      <section className="px-6 lg:px-10 py-14" style={{ backgroundColor: 'var(--services-cta-section-bg)' }}>
        <div
          className="max-w-6xl mx-auto rounded-2xl px-8 lg:px-16 py-14 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--services-cta-card-bg)', border: '1px solid var(--border)' }}
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--color-impact)' }} />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--color-ownership)' }} />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-impact)', letterSpacing: '0.12em' }}>
              Ready to build?
            </p>
            <h2
              className="mb-5 max-w-2xl mx-auto font-[Plus_Jakarta_Sans]"
              style={{ color: 'var(--services-cta-text)', fontSize: '40px', fontWeight: 800, lineHeight: 1.1 }}
            >
              Where bold ideas meet bulletproof execution
            </h2>
            <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--services-cta-subtext)' }}>
              Tell us what you're building and we'll put together a proposal within 48 hours.
            </p>
            <button
              onClick={onGoContact}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ backgroundColor: 'var(--color-ownership)', color: '#fff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-impact)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-ownership)'; }}
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