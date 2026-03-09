import { Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';

const socialLinks = [
  { icon: Twitter,   label: 'Twitter',   href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { icon: Dribbble,  label: 'Dribbble',  href: '#' },
];

const companyLinks  = ['About Us', 'Services', 'Team', 'Contact'];
const serviceLinks  = ['Web Design', 'Development', 'Branding', 'Marketing'];

const BG          = '#1A0A2E';
const LOGO_COLOR  = '#5B21B6';
const WHITE_MUTED = 'rgba(255,255,255,0.50)';
const WHITE_FULL  = '#FFFFFF';
const BORDER_ICON = 'rgba(255,255,255,0.20)';

export function Footer() {
  return (
    <footer style={{ backgroundColor: BG }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* ── Column 1: Brand ── */}
          <div>
            <div
              className="font-bold text-lg mb-3"
              style={{
                color: LOGO_COLOR,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: '-0.01em',
              }}
            >
              Pixel Punch
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: WHITE_MUTED, fontFamily: "'DM Sans', sans-serif", maxWidth: '240px' }}
            >
              Building digital experiences that inspire and transform businesses worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ border: `1px solid ${BORDER_ICON}`, color: WHITE_MUTED }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = WHITE_FULL;
                    el.style.borderColor = 'rgba(255,255,255,0.55)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = WHITE_MUTED;
                    el.style.borderColor = BORDER_ICON;
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Company ── */}
          <div>
            <h4
              className="text-sm font-semibold mb-5"
              style={{ color: WHITE_FULL, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm inline-block transition-colors duration-200"
                    style={{ color: WHITE_MUTED, fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = WHITE_FULL; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = WHITE_MUTED; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <h4
              className="text-sm font-semibold mb-5"
              style={{ color: WHITE_FULL, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm inline-block transition-colors duration-200"
                    style={{ color: WHITE_MUTED, fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = WHITE_FULL; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = WHITE_MUTED; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Copyright ── */}
        <div className="mt-14">
          <p
            className="text-sm"
            style={{ color: WHITE_MUTED, fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 Pixel Punch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
