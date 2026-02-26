'use client';
import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// 💈 TEMPLATE 03 — URBAN
// Bold colors, street culture, high energy
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SHOP_NAME: "Fresh Cutz ATL",
  SHOP_TAGLINE: "Stay Fresh. Stay Sharp.",
  SHOP_ADDRESS: "2156 Campbellton Rd SW",
  SHOP_CITY: "Atlanta",
  SHOP_STATE: "GA",
  SHOP_ZIP: "30311",
  SHOP_PHONE: "(404) 555-0183",
  SHOP_RATING: "4.7",
  SHOP_REVIEW_COUNT: "89",
  SHOP_GOOGLE_MAPS_URL: "https://maps.google.com",
  SHOP_HOURS: {
    Monday: "10:00 AM – 7:00 PM",
    Tuesday: "10:00 AM – 7:00 PM",
    Wednesday: "10:00 AM – 7:00 PM",
    Thursday: "10:00 AM – 8:00 PM",
    Friday: "10:00 AM – 9:00 PM",
    Saturday: "9:00 AM – 8:00 PM",
    Sunday: "11:00 AM – 5:00 PM",
  },
  SHOP_SERVICES: [
    { name: "Fresh Cut", price: "$28", duration: "30 min" },
    { name: "Skin Fade", price: "$35", duration: "35 min" },
    { name: "Beard Lineup", price: "$15", duration: "15 min" },
    { name: "Cut + Beard", price: "$40", duration: "45 min" },
    { name: "Designs / Freestyle", price: "$45+", duration: "45 min" },
    { name: "Kids Fresh", price: "$20", duration: "25 min" },
  ],
  SHOP_TOP_REVIEWS: [
    { author: "DeAndre J.", rating: 5, text: "Hardest cuts in Atlanta no cap. My barber knows exactly what I want every time.", time: "5 days ago" },
    { author: "Malik B.", rating: 5, text: "Great vibes, great music, great cuts. This is THE spot on the south side.", time: "2 weeks ago" },
    { author: "Terrence H.", rating: 5, text: "Been going here since they opened. Consistent quality and they always get my designs right.", time: "1 month ago" },
  ],
};

const StarFilled = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF3D00" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function UrbanBarbershop() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = CONFIG.SHOP_HOURS[today] || "Closed";

  return (
    <div style={{ fontFamily: "'Archivo', sans-serif", background: "#111", color: "#FFF", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800;900&family=Archivo+Black&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        :root {
          --red: #FF3D00;
          --red-dark: #CC3000;
          --bg: #111;
          --bg-card: #1A1A1A;
          --gray: #666;
        }

        @keyframes popIn { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }

        .urb-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          font-weight: 500;
        }
        .urb-heading {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(40px, 8vw, 80px);
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: -2px;
        }
        .urb-heading-sm {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          text-transform: uppercase;
          letter-spacing: -1px;
          line-height: 1;
        }
        .urb-btn {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 18px 40px;
          background: var(--red);
          color: #FFF;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .urb-btn:hover { background: #FFF; color: #111; }
        .urb-btn-outline {
          background: transparent;
          border: 2px solid #FFF;
        }
        .urb-btn-outline:hover {
          background: #FFF;
          color: #111;
        }
        .urb-nav-link {
          font-family: 'Archivo', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #888;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .urb-nav-link:hover { color: var(--red); }

        .urb-service-card {
          background: var(--bg-card);
          padding: 28px;
          border-left: 3px solid transparent;
          transition: all 0.3s;
          cursor: default;
        }
        .urb-service-card:hover {
          border-left-color: var(--red);
          transform: translateX(4px);
        }

        .urb-open-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 61, 0, 0.15);
          border: 1px solid var(--red);
          padding: 6px 14px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--red);
        }
        .urb-open-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--red);
          animation: pulse 2s infinite;
        }

        @media (max-width: 768px) {
          .urb-desktop { display: none !important; }
          .urb-mobile-toggle { display: flex !important; }
        }
      `}</style>

      {/* ─── NAV ──────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 32px",
        background: scrolled ? "rgba(17,17,17,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "18px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          cursor: "pointer",
        }} onClick={() => scrollTo("home")}>
          <span style={{ color: "var(--red)" }}>{CONFIG.SHOP_NAME.split(" ")[0]}</span>{" "}
          {CONFIG.SHOP_NAME.split(" ").slice(1).join(" ")}
        </span>

        <div className="urb-desktop" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="urb-nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="urb-btn" style={{ padding: "12px 28px", fontSize: "11px" }}>Book Now</a>
        </div>

        <div className="urb-mobile-toggle" style={{ display: "none", cursor: "pointer", padding: "8px" }} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ height: "2px", background: "var(--red)", width: "100%" }} />
            <span style={{ height: "2px", background: "#FFF", width: "60%" }} />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(17,17,17,0.98)", zIndex: 1000,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px",
        }} onClick={() => setMenuOpen(false)}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="urb-nav-link" style={{ fontSize: "16px", color: "#FFF" }} onClick={() => scrollTo(s)}>{s}</span>
          ))}
        </div>
      )}

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Big background text */}
        <div style={{
          position: "absolute", right: "-5%", top: "50%", transform: "translateY(-50%)",
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(120px, 25vw, 300px)",
          color: "rgba(255,61,0,0.04)",
          lineHeight: 0.85,
          textTransform: "uppercase",
          pointerEvents: "none",
          userSelect: "none",
        }}>
          FRESH
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="urb-open-badge" style={{ marginBottom: "24px", animation: "popIn 0.5s ease forwards" }}>
            <span className="urb-open-dot" />
            Open Today — {todayHours}
          </div>

          <h1 className="urb-heading" style={{ animation: "slideRight 0.6s ease 0.1s forwards", opacity: 0 }}>
            {CONFIG.SHOP_NAME.split(" ").map((w, i) => (
              <span key={i} style={{ display: "block", color: i === 0 ? "var(--red)" : "#FFF" }}>{w}</span>
            ))}
          </h1>

          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "13px",
            letterSpacing: "3px",
            color: "var(--gray)",
            marginTop: "20px",
            textTransform: "uppercase",
            animation: "slideRight 0.6s ease 0.3s forwards", opacity: 0,
          }}>
            {CONFIG.SHOP_TAGLINE}
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "40px", flexWrap: "wrap", animation: "slideRight 0.6s ease 0.4s forwards", opacity: 0 }}>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} className="urb-btn">Book Now</a>
            <span className="urb-btn urb-btn-outline" onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Services ↓</span>
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: "10px", marginTop: "48px",
            animation: "slideRight 0.6s ease 0.5s forwards", opacity: 0,
          }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1,2,3,4,5].map(i => <StarFilled key={i} />)}
            </div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "var(--gray)" }}>
              {CONFIG.SHOP_RATING} · {CONFIG.SHOP_REVIEW_COUNT} reviews
            </span>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" style={{ padding: "100px 32px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "800px" }}>
          <p className="urb-label">What We Do</p>
          <h2 className="urb-heading-sm" style={{ marginTop: "8px", marginBottom: "48px" }}>Services</h2>

          <div style={{ display: "grid", gap: "8px" }}>
            {CONFIG.SHOP_SERVICES.map((s, i) => (
              <div key={i} className="urb-service-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "16px" }}>{s.name}</span>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "10px",
                      color: "var(--gray)",
                      marginLeft: "12px",
                      letterSpacing: "1px",
                    }}>{s.duration}</span>
                  </div>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "20px",
                    color: "var(--red)",
                  }}>{s.price}</span>
                </div>
              </div>
            ))}
          </div>

          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="urb-btn" style={{ marginTop: "40px" }}>
            Call — {CONFIG.SHOP_PHONE}
          </a>
        </div>
      </section>

      {/* ─── HOURS ────────────────────────────────────────── */}
      <section id="hours" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "500px" }}>
          <p className="urb-label">Pull Up</p>
          <h2 className="urb-heading-sm" style={{ marginTop: "8px", marginBottom: "48px" }}>Hours</h2>

          {Object.entries(CONFIG.SHOP_HOURS).map(([day, hours]) => (
            <div key={day} style={{
              display: "flex", justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid #222",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              letterSpacing: "1px",
              color: day === today ? "var(--red)" : "#777",
              fontWeight: day === today ? 700 : 400,
            }}>
              <span style={{ textTransform: "uppercase" }}>{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────────────── */}
      <section id="reviews" style={{ padding: "100px 32px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "900px" }}>
          <p className="urb-label">Real Talk</p>
          <h2 className="urb-heading-sm" style={{ marginTop: "8px", marginBottom: "48px" }}>Reviews</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {CONFIG.SHOP_TOP_REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: "var(--bg-card)",
                padding: "28px",
                borderTop: "3px solid var(--red)",
              }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
                  {[1,2,3,4,5].map(s => <StarFilled key={s} />)}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#AAA", marginBottom: "16px" }}>
                  "{r.text}"
                </p>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--red)",
                }}>{r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section id="contact" style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "600px" }}>
          <p className="urb-label">Slide Through</p>
          <h2 className="urb-heading-sm" style={{ marginTop: "8px", marginBottom: "48px" }}>Location</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#AAA" }}>
              {CONFIG.SHOP_ADDRESS}<br />{CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE} {CONFIG.SHOP_ZIP}
            </p>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} style={{ fontSize: "24px", fontFamily: "'Archivo Black', sans-serif", color: "var(--red)", textDecoration: "none" }}>
              {CONFIG.SHOP_PHONE}
            </a>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "40px", flexWrap: "wrap" }}>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} className="urb-btn">Book Now</a>
            <a href={CONFIG.SHOP_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="urb-btn urb-btn-outline">Directions →</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer style={{
        padding: "32px", borderTop: "1px solid #222",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",
      }}>
        <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "14px", textTransform: "uppercase" }}>
          <span style={{ color: "var(--red)" }}>{CONFIG.SHOP_NAME.split(" ")[0]}</span> {CONFIG.SHOP_NAME.split(" ").slice(1).join(" ")}
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", color: "#444" }}>
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
