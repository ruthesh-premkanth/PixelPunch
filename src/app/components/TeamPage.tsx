import { useState } from "react";
import {
  Linkedin,
  Lightbulb,
  Telescope,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionBadge } from "./SectionBadge";

interface TeamPageProps {
  isDarkMode: boolean;
  onGetInTouch: () => void;
}

const MEMBERS = [
  {
    name: "Sairam Tanniru",
    role: "CEO & Founder",
    bio: "leads the charge in transforming enterprise digital landscapes through AI-powered low-code solutions, empowering businesses to build faster and smarter.",
    photo: "./images/Sairam.jpg",
    linkedin: "https://www.linkedin.com/in/stlcl/",
  },
  {
    name: "Ruthesh Chintham",
    role: "UI/UX Designer",
    bio: "Translates complex user needs into elegant, pixel-perfect interfaces.",
    photo: "./images/Ruthesh.jpg",
    linkedin: "https://www.linkedin.com/in/ruthesh-prem-kanth-963a5323a/",
  },
  {
    name: "Anuja Kasari",
    role: "UI/UX Designer",
    bio: "Brings designs to life with clean, performant, accessible code.",
    photo: "./images/AnujaKasari.jpg",
    linkedin: "https://www.linkedin.com/in/anuja-patil-9b15a2352/",
  },
  {
    name: "Purneswari Raparthi",
    role: "UI/UX Designer",
    bio: "Builds brands that resonate, converting audiences into loyal advocates.",
    photo: "./images/Purneswari.png",
    linkedin: "https://www.linkedin.com/in/raparthi-purneswari-6a3a55308/",
  },
  {
    name: "Yeswitha Pirakala",
    role: "Junior UI/UX Designer",
    bio: "Gives brands life through fluid motion that delights and communicates.",
    photo: "./images/yeswith.jpg",
    linkedin: "https://www.linkedin.com/in/yeswitha-pirakala-9b15a2352/",
  },
];

const VALUES = [
  {
    icon: Lightbulb,
    title: "Creative First",
    description:
      "Every solution starts with a bold idea. We never settle for average when exceptional is possible.",
  },
  {
    icon: Telescope,
    title: "Always Curious",
    description:
      "We chase the new — new tools, new thinking, new ways to surprise clients and audiences alike.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Trust",
    description:
      "Transparent timelines, honest feedback, and work that speaks for itself. Every single time.",
  },
];

export function TeamPage({ isDarkMode, onGetInTouch }: TeamPageProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      style={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#0A0A0A" : "#FAFAF8",
        color: "var(--text-primary)",
        paddingTop: "88px",
      }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px 72px",
          textAlign: "center",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: "28px" }}>
          <SectionBadge text="Our People" />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "20px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Meet the <span style={{ color: "#DC2680" }}>Minds</span> Behind the
          Magic
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          A tight-knit crew of designers, builders, and thinkers united by one
          belief — that great work comes from genuine passion, not just process.
        </p>
      </section>

      {/* ── TEAM MEMBERS ──────────────────────────────────────── */}
      <section
        style={{
          padding: "0 24px 96px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
          }}
          className="team-grid"
        >
          {MEMBERS.map((member, i) => {
            const isHovered = hoveredMember === i;
            return (
              <div
                key={member.name}
                onMouseEnter={() => setHoveredMember(i)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: isDarkMode ? "#111111" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isDarkMode ? "rgba(91,33,182,0.2)" : "#EDE9FF",
                  boxShadow: isHovered
                    ? "0 16px 48px rgba(91,33,182,0.18)"
                    : isDarkMode
                      ? "0 4px 20px rgba(0,0,0,0.4)"
                      : "0 4px 20px rgba(91,33,182,0.07)",
                  cursor: "default",
                  position: "relative",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                  }}
                >
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                  {/* Gradient overlay on photo */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.72) 100%)",
                    }}
                  />
                  {/* Name + Role overlaid on photo */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      right: "16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1.2,
                        marginBottom: "4px",
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#aaa",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "16px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      marginBottom: "16px",
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "34px",
                      height: "34px",
                      borderRadius: "10px",
                      backgroundColor: isHovered
                        ? "rgba(220,38,128,0.1)"
                        : isDarkMode
                          ? "rgba(91,33,182,0.15)"
                          : "#EDE9FF",
                      color: isHovered ? "#DC2680" : "#5B21B6",
                      textDecoration: "none",
                    }}
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── VALUES / CULTURE ──────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: isDarkMode ? "#0D0D0D" : "#F5F2EE",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ marginBottom: "20px" }}>
              <SectionBadge text="How We Work" />
            </div>
            <h2
              style={{
                fontSize: "38px",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.15,
              }}
            >
              Values That Drive Us
            </h2>
          </div>

          {/* Values row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="values-grid"
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  style={{
                    borderRadius: "20px",
                    padding: "36px 32px",
                    backgroundColor: isDarkMode ? "#111111" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isDarkMode
                      ? "rgba(91,33,182,0.18)"
                      : "#EDE9FF",
                    boxShadow: isDarkMode
                      ? "0 4px 20px rgba(0,0,0,0.4)"
                      : "0 4px 20px rgba(91,33,182,0.06)",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      backgroundColor: isDarkMode
                        ? "rgba(91,33,182,0.18)"
                        : "#EDE9FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <Icon size={24} color="#5B21B6" />
                  </div>

                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: "12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          backgroundColor: isDarkMode ? "#0A0A0A" : "#FAFAF8",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          {/* Decorative line accent */}
          <div
            style={{
              display: "inline-block",
              width: "48px",
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#DC2680",
              marginBottom: "32px",
            }}
          />

          <h2
            style={{
              fontSize: "44px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "20px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Want to build something{" "}
            <span style={{ color: "#DC2680" }}>great</span> with us?
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              marginBottom: "40px",
            }}
          >
            We're always looking for exciting new projects and brilliant people
            to collaborate with. Let's start a conversation.
          </p>

          <button
            onClick={onGetInTouch}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 40px",
              borderRadius: "999px",
              backgroundColor: "#DC2680",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(220,38,128,0.35)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#b81e68";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 12px 40px rgba(220,38,128,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#DC2680";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 32px rgba(220,38,128,0.35)";
            }}
          >
            <Mail size={16} />
            Get in Touch
          </button>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
