import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import emailjs from "@emailjs/browser";
// import.meta.env.VITE_EMAIL_SERVICE_ID;

/* ─── Purple-only palette (hardcoded, no pink) ─── */
const P = {
  bg: "#EEE9FB", // light lavender section bg
  card: "#FFFFFF", // white card
  border: "#D6CEEF", // default input border
  borderHov: "#B5A8E0", // hovered input border
  borderFoc: "#7c5cbf", // focused input border  ← spec
  glow: "rgba(124, 92, 191, 0.22)", // focus box-shadow glow
  glowHov: "rgba(124, 92, 191, 0.10)",
  btnBg: "#ddd8f8", // pill bg  ← spec
  btnText: "#5b3fa8", // pill text
  btnHovBg: "#7c5cbf", // pill hover fill  ← spec
  btnHovText: "#ffffff",
  icon: "#7c5cbf",
  iconBg: "#EEE9FB",
  label: "#8B7EC8",
  muted: "#A99FCC",
  heading: "#2D1B6B",
  sub: "#6B5DA8",
  badge: "#F0EDFD",
  badgeDot: "#7c5cbf",
  badgeText: "#5b3fa8",
  divider: "#DDD8F4",
  cardBorder: "#E4DFFA",
  cardShadow: "0 4px 24px rgba(124, 92, 191, 0.10)",
};

const PROJECT_TYPES = [
  { value: "", label: "Select a type…" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App" },
  { value: "design", label: "Design" },
  { value: "consulting", label: "Consulting" },
];

const contactItems = [
  {
    Icon: MapPin,
    label: "Location",
    value:
      "4th floor, Cyber Hub, Street Number 16, Janardhana Hills, Gachibowli, Hyderabad, Telangana 500032",
  },
  { Icon: Phone, label: "Phone", value: "+91 8978938945" },
  { Icon: Mail, label: "Email", value: "pixelpunch@lowcodelabs.in" },
];

export function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [btnHov, setBtnHov] = useState(false);

  const isFormValid =
    fullName.trim() !== "" &&
    subject.trim() !== "" &&
    emailAddress.trim() !== "" &&
    message.trim() !== "";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      // .sendForm(
      //   import.meta.env.VITE_EMAIL_SERVICE_ID,
      //   import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      //   e.currentTarget,
      //   import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      // )
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: fullName,
          fullName: fullName,
          subject: subject,
          email: emailAddress,
          message: message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        console.log("Email sent successfully");
        setFullName("");
        setSubject("");
        setEmailAddress("");
        setMessage("");
        setShowSuccess(true);
      })
      .catch((error) => {
        console.error("Email failed", error);
      });
  };

  function inputStyle(name: string): React.CSSProperties {
    const isFoc = focused === name;
    const isHov = hovered === name && !isFoc;
    return {
      width: "100%",
      padding: "11px 14px",
      borderRadius: "10px",
      backgroundColor: "#FDFCFF",
      border: `1.5px solid ${isFoc ? P.borderFoc : isHov ? P.borderHov : P.border}`,
      boxShadow: isFoc
        ? `0 0 0 3.5px ${P.glow}`
        : isHov
          ? `0 0 0 2px ${P.glowHov}`
          : "none",
      color: P.heading,
      outline: "none",
      fontSize: "14px",
      transition: "border-color 0.18s ease, box-shadow 0.18s ease",
      fontFamily: "'DM Sans', sans-serif",
    };
  }

  return (
    <section
      id="contact"
      className="relative py-16 px-6 lg:px-8"
      style={{ backgroundColor: P.bg }}
    >
      {/* ── Success toast ── */}
      {showSuccess && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold"
          style={{
            backgroundColor: P.btnHovBg,
            color: "#fff",
            boxShadow: `0 8px 32px ${P.glow}`,
            animation: "contactToastIn 0.3s cubic-bezier(.22,1,.36,1) forwards",
          }}
        >
          <CheckCircle size={16} strokeWidth={2.5} />
          Message sent — we'll be in touch soon!
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <SectionBadge text="Get In Touch" />
          <h2
            className="mb-2"
            style={{
              color: P.heading,
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Let's Build Something{" "}
            <span style={{ color: P.icon }}>Together</span>
          </h2>
          <p
            className="text-base max-w-md mx-auto leading-relaxed"
            style={{ color: P.sub }}
          >
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </div>

        {/* ── Divider ── */}
        <div
          className="mb-10"
          style={{ height: "1px", backgroundColor: P.divider }}
        />

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* ── Left: Form card ── */}
          <div
            className="rounded-2xl p-7"
            style={{
              backgroundColor: P.card,
              border: `1px solid ${P.cardBorder}`,
              boxShadow: P.cardShadow,
            }}
          >
            <h3
              className="mb-6"
              style={{ color: P.heading, fontSize: "17px", fontWeight: 600 }}
            >
              Send a Message
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              <input type="text" name="botcheck" style={{ display: "none" }} />
              {/* Full Name */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: P.label }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  onMouseEnter={() => setHovered("Full Name")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setFocused("Full Name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("Full Name")}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: P.label }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  onMouseEnter={() => setHovered("Subject")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setFocused("Subject")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("Subject")}
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: P.label }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={emailAddress}
                  placeholder="Email Address"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  onMouseEnter={() => setHovered("email")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle("type"),
                    cursor: "pointer",
                    appearance: "auto",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: P.label }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  name="message"
                  placeholder="Goals, timeline, requirements…"
                  onChange={(e) => setMessage(e.target.value)}
                  onMouseEnter={() => setHovered("message")}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                    lineHeight: 1.6,
                  }}
                />
              </div>

              {/* Submit — pill button */}
              <button
                type="submit"
                disabled={!isFormValid}
                onMouseEnter={() => setBtnHov(true)}
                onMouseLeave={() => setBtnHov(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: !isFormValid
                    ? "#E8E4F8"
                    : btnHov
                      ? P.btnHovBg
                      : P.btnBg,
                  color: !isFormValid
                    ? P.muted
                    : btnHov
                      ? P.btnHovText
                      : P.btnText,
                  border: "none",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                  boxShadow:
                    isFormValid && btnHov ? `0 6px 20px ${P.glow}` : "none",
                  transition:
                    "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <Send size={14} strokeWidth={2.5} />
                Send Message
              </button>
            </form>
          </div>

          {/* ── Right: Contact info ── */}
          <div className="flex flex-col gap-5">
            {/* Info card */}
            <div
              className="rounded-2xl p-7"
              style={{
                backgroundColor: P.card,
                border: `1px solid ${P.cardBorder}`,
                boxShadow: P.cardShadow,
              }}
            >
              <h3
                className="mb-6"
                style={{ color: P.heading, fontSize: "17px", fontWeight: 600 }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col gap-5">
                {contactItems.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: P.iconBg }}
                    >
                      <Icon
                        size={18}
                        style={{ color: P.icon }}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-wider mb-0.5 font-semibold"
                        style={{ color: P.muted }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: P.sub }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="rounded-2xl px-6 py-4 flex items-center gap-4"
              style={{
                backgroundColor: "#F5F2FF",
                border: `1px solid ${P.cardBorder}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "#7c5cbf",
                  boxShadow: `0 0 0 3px rgba(124,92,191,0.20)`,
                }}
              />
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: P.heading }}
                >
                  Currently accepting new projects
                </p>
                <p className="text-xs mt-0.5" style={{ color: P.muted }}>
                  Typical response time: within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contactToastIn {
          from { opacity: 0; transform: translate(-50%, -12px) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, 0)    scale(1);    }
        }
      `}</style>
    </section>
  );
}
