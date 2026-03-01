import { useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";

interface EmailCard {
  seal: string;
  department: string;
  email: string;
  description: string;
}

const emailCards: EmailCard[] = [
  {
    seal: "VT",
    department: "GENERAL TALENT",
    email: "info@VENICEtalent.com",
    description:
      "General talent inquiries, representation questions, and roster information",
  },
  {
    seal: "VB",
    department: "BEAUTY EDITORIAL",
    email: "info@VENICEbeauty.com",
    description:
      "Beauty editorial submissions, tip contributions, and press inquiries",
  },
  {
    seal: "VF",
    department: "FASHION EDITORIAL",
    email: "info@VENICEfashion.com",
    description:
      "Fashion editorial collaborations, feature proposals, and press",
  },
  {
    seal: "BK",
    department: "TALENT BOOKINGS",
    email: "bookings@VENICEtalent.com",
    description:
      "Casting, booking, and scheduling for represented VENICE talent",
  },
  {
    seal: "FE",
    department: "FASHION EDITOR",
    email: "editor@VENICEfashion.com",
    description:
      "Direct correspondence with the VENICE Fashion Editor-in-Chief",
  },
  {
    seal: "BT",
    department: "BEAUTY TIPS",
    email: "tips@VENICEbeauty.com",
    description:
      "Submit beauty wisdom, historical techniques, and timeless tips",
  },
];

const subjectOptions = [
  { value: "", label: "Select Department" },
  { value: "talent-general", label: "General Talent Inquiry" },
  { value: "talent-booking", label: "Talent Booking" },
  { value: "beauty-editorial", label: "Beauty Editorial" },
  { value: "beauty-tips", label: "Beauty Tips Submission" },
  { value: "fashion-editorial", label: "Fashion Editorial" },
  { value: "fashion-editor", label: "Fashion Editor Direct" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Other Correspondence" },
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main
      className="pt-[160px]"
      style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
    >
      {/* ── MASTHEAD ────────────────────────────────────────── */}
      <header
        className="relative py-16 px-6 overflow-hidden vintage-texture"
        style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
      >
        {/* Decorative border */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <EraBadge
            text="Correspondence Office"
            variant="burgundy"
            className="mb-4"
          />
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              color: "oklch(0.35 0.12 15)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            THE VENICE
            <br />
            CORRESPONDENCE OFFICE
          </h1>
          <ArtDecoDivider
            color="oklch(0.72 0.12 75)"
            size="md"
            className="my-6"
          />
          <p
            className="font-body italic"
            style={{
              fontSize: "1.1rem",
              color: "oklch(0.5 0.04 60)",
              lineHeight: 1.7,
            }}
          >
            We welcome correspondence from artists, editors, beauty
            connoisseurs, and lovers of the timeless. Please select the
            appropriate department for your inquiry below.
          </p>
        </div>
      </header>

      {/* ── EMAIL DEPARTMENT CARDS ───────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <EraBadge text="Our Departments" variant="gold" className="mb-4" />
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              color: "oklch(0.35 0.12 15)",
            }}
          >
            Write to the Right Department
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {emailCards.map((card) => (
            <a
              key={card.email}
              href={`mailto:${card.email}`}
              className="block group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="p-6 transition-all duration-300"
                style={{
                  backgroundColor: "oklch(0.94 0.025 80)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.72 0.12 75)";
                  el.style.boxShadow =
                    "0 8px 32px oklch(0.18 0.03 50 / 0.15), 0 0 0 1px oklch(0.72 0.12 75 / 0.3)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.72 0.12 75 / 0.3)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Inner decorative border */}
                <div
                  className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ border: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
                  aria-hidden="true"
                />

                {/* Wax seal */}
                <div className="flex justify-center mb-4">
                  <div className="wax-seal">{card.seal}</div>
                </div>

                {/* Postal stamp decoration */}
                <div className="flex justify-center mb-3">
                  <div
                    className="flex items-center gap-1 px-2 py-0.5"
                    style={{
                      border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                      backgroundColor: "oklch(0.72 0.12 75 / 0.05)",
                    }}
                  >
                    <span
                      className="font-heading text-[0.5rem] tracking-[0.2em] uppercase"
                      style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}
                    >
                      VENICE ✦
                    </span>
                  </div>
                </div>

                <h3
                  className="font-heading text-[0.7rem] tracking-[0.2em] uppercase text-center mb-3"
                  style={{ color: "oklch(0.35 0.12 15)" }}
                >
                  {card.department}
                </h3>

                <div
                  className="h-px w-full mb-3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.4), transparent)",
                  }}
                />

                <p
                  className="font-body italic text-xs leading-relaxed text-center mb-4"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  {card.description}
                </p>

                <div className="text-center">
                  <span
                    className="font-heading text-[0.65rem] tracking-wide break-all"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  >
                    {card.email}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Etiquette note */}
        <div
          className="mt-10 p-6 text-center"
          style={{
            backgroundColor: "oklch(0.91 0.03 78)",
            border: "1px solid oklch(0.72 0.12 75 / 0.3)",
          }}
        >
          <p
            className="font-body italic"
            style={{
              color: "oklch(0.5 0.04 60)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            We endeavour to respond to all correspondence within 3–5 business
            days. For urgent bookings, please telephone your VENICE
            representative directly.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────── */}
      <section
        className="py-14 px-6 vintage-texture"
        style={{ backgroundColor: "oklch(0.94 0.025 80)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <EraBadge text="Write to Us" variant="burgundy" className="mb-4" />
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                color: "oklch(0.35 0.12 15)",
              }}
            >
              Send a Letter
            </h2>
            <ArtDecoDivider
              color="oklch(0.72 0.12 75)"
              size="sm"
              className="mt-4"
            />
          </div>

          {submitted && (
            <div
              className="mb-6 p-4 text-center"
              style={{
                backgroundColor: "oklch(0.72 0.12 75 / 0.1)",
                border: "1px solid oklch(0.72 0.12 75 / 0.5)",
              }}
            >
              <p
                className="font-body italic"
                style={{ color: "oklch(0.35 0.12 15)" }}
              >
                ✦ Your letter has been received. We shall correspond with you
                presently. ✦
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            style={{
              backgroundColor: "oklch(0.97 0.02 85)",
              border: "1px solid oklch(0.72 0.12 75 / 0.3)",
              padding: "2.5rem",
              position: "relative",
            }}
          >
            {/* Inner border */}
            <div
              className="absolute inset-3 pointer-events-none"
              style={{ border: "1px solid oklch(0.72 0.12 75 / 0.15)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.94 0.025 80)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    color: "oklch(0.25 0.05 45)",
                  }}
                  placeholder="Your full name"
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.3)";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "oklch(0.94 0.025 80)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    color: "oklch(0.25 0.05 45)",
                  }}
                  placeholder="your@email.com"
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.3)";
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  Department
                </label>
                <select
                  id="contact-subject"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all appearance-none"
                  style={{
                    backgroundColor: "oklch(0.94 0.025 80)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    color: "oklch(0.25 0.05 45)",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.3)";
                  }}
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-2"
                  style={{ color: "oklch(0.5 0.04 60)" }}
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 font-body text-base outline-none transition-all resize-none"
                  style={{
                    backgroundColor: "oklch(0.94 0.025 80)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                    color: "oklch(0.25 0.05 45)",
                  }}
                  placeholder="Write your correspondence here..."
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.3)";
                  }}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="font-heading text-xs tracking-[0.25em] uppercase px-12 py-4 transition-all"
                  style={{
                    backgroundColor: "oklch(0.35 0.12 15)",
                    color: "oklch(0.72 0.12 75)",
                    border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "oklch(0.45 0.12 15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "oklch(0.35 0.12 15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.72 0.12 75 / 0.5)";
                  }}
                >
                  Dispatch Letter ✦
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="flex justify-center py-10 px-6">
        <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
      </div>
    </main>
  );
}
