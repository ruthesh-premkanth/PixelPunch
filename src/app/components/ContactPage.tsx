import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import emailjs from "@emailjs/browser";

interface ContactPageProps {
  isDarkMode: boolean;
}

export function ContactPage({ isDarkMode }: ContactPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [btnHov, setBtnHov] = useState(false);

  const isValid =
    name.trim() && email.trim() && subject.trim() && message.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: name,
          fullName: name,
          subject: subject,
          email: email,
          message: message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        console.log("Email sent successfully");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  };

  /* ── Design tokens ── */
  const surface = isDarkMode ? "#111111" : "#FFFFFF";
  const pageBg = isDarkMode ? "#0A0A0A" : "#FAFAF8";
  const border = isDarkMode ? "rgba(91,33,182,0.28)" : "#DDD6FE";
  const subtleBg = isDarkMode ? "rgba(91,33,182,0.14)" : "#EDE9FF";
  const inputBg = isDarkMode ? "#181818" : "#FFFFFF";
  const divider = isDarkMode ? "rgba(255,255,255,0.07)" : "#EDE9FF";

  function fieldStyle(name: string): React.CSSProperties {
    const isFoc = focused === name;
    const isHov = hovered === name && !isFoc;
    return {
      width: "100%",
      padding: "13px 16px",
      borderRadius: "12px",
      backgroundColor: inputBg,
      border: `1.5px solid ${isFoc ? "#5B21B6" : isHov ? "rgba(91,33,182,0.55)" : border}`,
      outline: "none",
      fontSize: "14px",
      color: "var(--text-primary)",
      boxShadow: isFoc ? "0 0 0 3px rgba(91,33,182,0.13)" : "none",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      boxSizing: "border-box" as const,
    };
  }

  const infoItems = [
    {
      icon: <MapPin size={18} color="#5B21B6" />,
      label: "OUR LOCATION",
      value:
        "4th floor, Cyber Hub, Street Number 16, Janardhana Hills, Gachibowli, Hyderabad, Telangana 500032",
      sub: "Come visit us anytime",
    },
    {
      icon: <Phone size={18} color="#5B21B6" />,
      label: "PHONE NUMBER",
      value: "+91 8978938945",
      sub: "Mon–Fri, 10.30 am – 7.30 pm PST",
    },
    {
      icon: <Mail size={18} color="#5B21B6" />,
      label: "EMAIL ADDRESS",
      value: "pixelpunch@lowcodelabs.in",
      sub: "We reply within 24 hours",
    },
    {
      icon: <Clock size={18} color="#5B21B6" />,
      label: "WORKING HOURS",
      value: "Mon – Fri, 10:30 – 19:30",
      sub: "Pacific Standard Time",
    },
  ];

  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      style={{
        minHeight: "100vh",
        backgroundColor: pageBg,
        paddingTop: "88px",
      }}
    >
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(64px, 9vw, 108px) 24px clamp(56px, 7vw, 88px)",
          textAlign: "center",
          maxWidth: "680px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: "28px" }}>
          <SectionBadge text="Contact Us" />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.028em",
            color: "var(--text-primary)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#DC2680" }}>Together,</span> Get In Touch
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: "440px",
            margin: "0 auto",
          }}
        >
          Got a project in mind? We'd love to hear from you.
        </p>
      </section>

      {/* ── TWO-COLUMN LAYOUT ───────────────────────────────────── */}
      <section
        style={{
          padding: "0 clamp(20px, 5vw, 48px) 100px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
          gap: "clamp(24px, 4vw, 56px)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* ── LEFT: FORM ─────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: surface,
            borderRadius: "24px",
            padding: "clamp(28px, 4vw, 48px)",
            border: `1.5px solid ${border}`,
            boxShadow: isDarkMode
              ? "0 8px 48px rgba(0,0,0,0.5)"
              : "0 8px 48px rgba(91,33,182,0.09)",
            position: "relative",
          }}
        >
          {/* Success overlay */}
          {showSuccess && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                backgroundColor: surface,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#5B21B6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(91,33,182,0.38)",
                }}
              >
                <CheckCircle size={30} color="#FFFFFF" />
              </div>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  Message Sent!
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  Thanks for reaching out — we'll be in touch soon.
                </p>
              </div>
            </div>
          )}

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--text-primary)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.015em",
              marginBottom: "6px",
            }}
          >
            Send Us a Message
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              marginBottom: "32px",
              lineHeight: 1.55,
            }}
          >
            Fill in the details below and our team will get back to you within
            24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {/* to avoid spam bots */}
            <input type="text" name="botcheck" style={{ display: "none" }} />
            {/* Name + Email row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
              className="form-row"
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "7px",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  onMouseEnter={() => setHovered("name")}
                  onMouseLeave={() => setHovered(null)}
                  style={fieldStyle("name")}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "7px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onMouseEnter={() => setHovered("email")}
                  onMouseLeave={() => setHovered(null)}
                  style={fieldStyle("email")}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "7px",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Brand identity for a new product launch…"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                onMouseEnter={() => setHovered("subject")}
                onMouseLeave={() => setHovered(null)}
                style={fieldStyle("subject")}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "7px",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell us about your project, timeline, and any specific goals…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                onMouseEnter={() => setHovered("message")}
                onMouseLeave={() => setHovered(null)}
                rows={6}
                style={{
                  ...fieldStyle("message"),
                  resize: "vertical",
                  minHeight: "140px",
                  lineHeight: 1.6,
                }}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              onMouseEnter={() => setBtnHov(true)}
              onMouseLeave={() => setBtnHov(false)}
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
                padding: "14px 32px",
                borderRadius: "999px",
                backgroundColor: isValid
                  ? btnHov
                    ? "#4a1a9e"
                    : "#5B21B6"
                  : isDarkMode
                    ? "#2a2a2a"
                    : "#E5E7EB",
                color: isValid ? "#FFFFFF" : isDarkMode ? "#555" : "#9CA3AF",
                fontSize: "15px",
                fontWeight: 700,
                border: "none",
                cursor: isValid ? "pointer" : "not-allowed",
                boxShadow: isValid
                  ? btnHov
                    ? "0 10px 36px rgba(91,33,182,0.48)"
                    : "0 6px 24px rgba(91,33,182,0.32)"
                  : "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "-0.005em",
              }}
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>

        {/* ── RIGHT: INFO ────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Info cards */}
          {infoItems.map((item, i) => (
            <InfoCard
              key={i}
              icon={item.icon}
              label={item.label}
              value={item.value}
              sub={item.sub}
              surface={surface}
              border={border}
              subtleBg={subtleBg}
              isDarkMode={isDarkMode}
            />
          ))}

          {/* Social row */}
          <div
            style={{
              backgroundColor: surface,
              borderRadius: "20px",
              padding: "28px",
              border: `1.5px solid ${border}`,
              boxShadow: isDarkMode
                ? "0 4px 24px rgba(0,0,0,0.4)"
                : "0 4px 24px rgba(91,33,182,0.07)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "14px",
              }}
            >
              Follow Our Work
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Twitter", "Dribbble", "LinkedIn", "Behance"].map((s) => (
                <SocialChip
                  key={s}
                  label={s}
                  border={border}
                  subtleBg={subtleBg}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE CSS ──────────────────────────────────────── */}
      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function InfoCard({
  icon,
  label,
  value,
  sub,
  surface,
  border,
  subtleBg,
  isDarkMode,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  surface: string;
  border: string;
  subtleBg: string;
  isDarkMode: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: surface,
        borderRadius: "18px",
        padding: "22px 24px",
        border: `1.5px solid ${hov ? "#5B21B6" : border}`,
        boxShadow: hov
          ? "0 8px 32px rgba(91,33,182,0.18)"
          : isDarkMode
            ? "0 4px 20px rgba(0,0,0,0.35)"
            : "0 4px 20px rgba(91,33,182,0.06)",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        cursor: "default",
      }}
    >
      {/* Icon pill */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          backgroundColor: subtleBg,
          border: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "3px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--text-primary)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.01em",
            marginBottom: "2px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            lineHeight: 1.4,
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

function SocialChip({
  label,
  border,
  subtleBg,
  isDarkMode,
}: {
  label: string;
  border: string;
  subtleBg: string;
  isDarkMode: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "7px 14px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        backgroundColor: hov ? subtleBg : "transparent",
        border: `1.5px solid ${hov ? "#5B21B6" : border}`,
        color: hov ? "#5B21B6" : "var(--text-secondary)",
        cursor: "pointer",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {label}
      <ArrowUpRight size={11} />
    </button>
  );
}
