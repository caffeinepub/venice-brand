import { useCallback, useEffect, useRef, useState } from "react";
import { ArtDecoDivider } from "../components/ArtDecoDivider";
import { EraBadge } from "../components/EraBadge";
import { VerifiedBadge } from "../components/VerifiedBadge";
import { type Message, useAuth } from "../hooks/useAuth";

type Page =
  | "home"
  | "beauty"
  | "fashion"
  | "talent"
  | "contact"
  | "signup"
  | "signin"
  | "inbox";

interface InboxPageProps {
  onNavigate: (page: Page) => void;
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ── Compose Modal ─────────────────────────────────────────────────────────────

interface ComposeModalProps {
  currentUserEmail: string;
  onSend: (
    to: string,
    subject: string,
    body: string,
  ) => { success: boolean; error?: string };
  onClose: () => void;
}

function ComposeModal({
  currentUserEmail,
  onSend,
  onClose,
}: ComposeModalProps) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!to.trim()) {
      setError("Please enter a recipient email.");
      return;
    }
    if (!subject.trim()) {
      setError("Please enter a subject.");
      return;
    }
    if (!body.trim()) {
      setError("Please enter a message.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = onSend(to.trim(), subject.trim(), body.trim());
      setLoading(false);
      if (result.success) {
        setSent(true);
      } else {
        setError(result.error ?? "Failed to send. Please try again.");
      }
    }, 400);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "oklch(0.18 0.03 50 / 0.7)",
        backdropFilter: "blur(4px)",
      }}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      aria-label="Compose message"
    >
      <div
        className="relative w-full max-w-xl p-0 overflow-hidden"
        style={{
          backgroundColor: "oklch(0.94 0.025 80)",
          border: "1px solid oklch(0.72 0.12 75 / 0.5)",
          boxShadow: "0 20px 60px oklch(0.18 0.03 50 / 0.4)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Inner border */}
        <div
          className="absolute inset-2 pointer-events-none"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.15)", zIndex: 0 }}
          aria-hidden="true"
        />

        {/* Header */}
        <div
          className="relative z-10 flex items-center justify-between px-8 py-5"
          style={{
            backgroundColor: "oklch(0.35 0.12 15)",
            borderBottom: "1px solid oklch(0.72 0.12 75 / 0.35)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-serif text-lg font-bold"
              style={{ color: "oklch(0.72 0.12 75)" }}
            >
              New Correspondence
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              color: "oklch(0.72 0.12 75 / 0.7)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.4rem",
              lineHeight: 1,
            }}
            aria-label="Close compose modal"
          >
            ×
          </button>
        </div>

        {sent ? (
          <div
            className="relative z-10 flex flex-col items-center justify-center gap-6 p-12 text-center"
            style={{ flex: 1 }}
          >
            <div
              className="wax-seal"
              style={{ width: "70px", height: "70px", fontSize: "1.5rem" }}
              aria-hidden="true"
            >
              ✓
            </div>
            <h3
              className="font-serif text-xl font-bold"
              style={{ color: "oklch(0.35 0.12 15)" }}
            >
              Sent!
            </h3>
            <p
              className="font-body italic text-sm"
              style={{ color: "oklch(0.5 0.04 60)" }}
            >
              Your correspondence has been delivered to{" "}
              <strong style={{ fontStyle: "normal" }}>{to}</strong>
            </p>
            <button
              type="button"
              onClick={onClose}
              className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all"
              style={{
                backgroundColor: "oklch(0.35 0.12 15)",
                color: "oklch(0.72 0.12 75)",
                border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                cursor: "pointer",
              }}
            >
              Close ✦
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col"
            style={{ flex: 1, overflow: "auto" }}
          >
            <div className="px-8 pt-6 pb-4 space-y-4" style={{ flex: 1 }}>
              {/* From (read-only) */}
              <div
                className="flex items-center gap-3 py-2"
                style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
              >
                <span
                  className="font-heading text-[0.6rem] tracking-[0.2em] uppercase w-16 flex-shrink-0"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  From
                </span>
                <span
                  className="font-body text-sm flex items-center gap-1.5"
                  style={{ color: "oklch(0.35 0.12 15)" }}
                >
                  {currentUserEmail}
                  <VerifiedBadge email={currentUserEmail} size="sm" />
                </span>
              </div>

              {/* To */}
              <div
                className="flex items-center gap-3"
                style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
              >
                <label
                  htmlFor="compose-to"
                  className="font-heading text-[0.6rem] tracking-[0.2em] uppercase w-16 flex-shrink-0"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  To
                </label>
                <input
                  id="compose-to"
                  type="email"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="flex-1 py-2 font-body text-sm outline-none"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "oklch(0.25 0.05 45)",
                  }}
                  placeholder="recipient@email.com"
                />
              </div>

              {/* Subject */}
              <div
                className="flex items-center gap-3"
                style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
              >
                <label
                  htmlFor="compose-subject"
                  className="font-heading text-[0.6rem] tracking-[0.2em] uppercase w-16 flex-shrink-0"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  Subject
                </label>
                <input
                  id="compose-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="flex-1 py-2 font-body text-sm outline-none"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "oklch(0.25 0.05 45)",
                  }}
                  placeholder="Subject"
                />
              </div>

              {/* Body */}
              <div>
                <textarea
                  id="compose-body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={7}
                  className="w-full font-body text-sm outline-none resize-none pt-4"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "oklch(0.25 0.05 45)",
                    lineHeight: 1.8,
                  }}
                  placeholder="Write your message here…"
                  aria-label="Message body"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  className="px-4 py-3 font-body text-sm"
                  style={{
                    backgroundColor: "oklch(0.96 0.03 25 / 0.3)",
                    border: "1px solid oklch(0.55 0.22 25 / 0.4)",
                    color: "oklch(0.45 0.18 20)",
                  }}
                  role="alert"
                >
                  ✦ {error}
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div
              className="flex items-center justify-between px-8 py-5"
              style={{
                borderTop: "1px solid oklch(0.72 0.12 75 / 0.25)",
                backgroundColor: "oklch(0.91 0.03 78)",
              }}
            >
              <button
                type="button"
                onClick={onClose}
                className="font-heading text-[0.6rem] tracking-[0.2em] uppercase px-5 py-2.5 transition-all"
                style={{
                  color: "oklch(0.5 0.04 60)",
                  background: "none",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  cursor: "pointer",
                }}
              >
                Discard
              </button>
              <button
                type="submit"
                disabled={loading}
                className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-2.5 transition-all"
                style={{
                  backgroundColor: "oklch(0.35 0.12 15)",
                  color: "oklch(0.72 0.12 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                  fontWeight: 700,
                  cursor: loading ? "wait" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Sending…" : "Send ✦"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// ── Message Detail ────────────────────────────────────────────────────────────

interface MessageDetailProps {
  message: Message;
  onBack: () => void;
  onReply: (toEmail: string, subject: string) => void;
}

function MessageDetail({ message, onBack, onReply }: MessageDetailProps) {
  return (
    <article>
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 font-heading text-[0.65rem] tracking-[0.15em] uppercase mb-6 transition-opacity hover:opacity-70"
        style={{
          color: "oklch(0.5 0.04 60)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to Inbox
      </button>

      <div
        className="relative p-8"
        style={{
          backgroundColor: "oklch(0.94 0.025 80)",
          border: "1px solid oklch(0.72 0.12 75 / 0.4)",
        }}
      >
        <div
          className="absolute inset-2 pointer-events-none"
          style={{ border: "1px solid oklch(0.72 0.12 75 / 0.12)" }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* Subject */}
          <h2
            className="font-serif text-2xl font-bold mb-5"
            style={{ color: "oklch(0.35 0.12 15)" }}
          >
            {message.subject}
          </h2>

          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 pb-5 mb-5"
            style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
          >
            <div>
              <p
                className="font-heading text-[0.6rem] tracking-[0.15em] uppercase mb-1"
                style={{ color: "oklch(0.6 0.04 60)" }}
              >
                From
              </p>
              <p
                className="font-body text-sm flex items-center gap-1.5"
                style={{ color: "oklch(0.35 0.12 15)" }}
              >
                {message.fromEmail}
                <VerifiedBadge email={message.fromEmail} size="sm" />
              </p>
            </div>
            <div>
              <p
                className="font-heading text-[0.6rem] tracking-[0.15em] uppercase mb-1"
                style={{ color: "oklch(0.6 0.04 60)" }}
              >
                To
              </p>
              <p
                className="font-body text-sm flex items-center gap-1.5"
                style={{ color: "oklch(0.35 0.12 15)" }}
              >
                {message.toEmail}
                <VerifiedBadge email={message.toEmail} size="sm" />
              </p>
            </div>
            <div className="sm:ml-auto">
              <p
                className="font-heading text-[0.6rem] tracking-[0.15em] uppercase mb-1"
                style={{ color: "oklch(0.6 0.04 60)" }}
              >
                Received
              </p>
              <p
                className="font-body text-sm"
                style={{ color: "oklch(0.5 0.04 60)" }}
              >
                {new Date(message.timestamp).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          {/* Body */}
          <div
            className="font-body text-base leading-relaxed whitespace-pre-wrap"
            style={{ color: "oklch(0.28 0.04 50)", lineHeight: 1.9 }}
          >
            {message.body}
          </div>

          {/* Reply button */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() =>
                onReply(
                  message.fromEmail,
                  message.subject.startsWith("Re: ")
                    ? message.subject
                    : `Re: ${message.subject}`,
                )
              }
              className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all"
              style={{
                backgroundColor: "oklch(0.35 0.12 15)",
                color: "oklch(0.72 0.12 75)",
                border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "oklch(0.45 0.12 15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "oklch(0.35 0.12 15)";
              }}
            >
              Reply ✦
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Inbox Page ────────────────────────────────────────────────────────────────

export function InboxPage({ onNavigate }: InboxPageProps) {
  const {
    currentUserEmail,
    isLoggedIn,
    sendMessage,
    markRead,
    refreshInbox,
    refreshSent,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<"inbox" | "sent">("inbox");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showCompose, setShowCompose] = useState(false);
  const [_composeDefaults, setComposeDefaults] = useState<{
    to?: string;
    subject?: string;
  }>({});
  const [, setRefreshKey] = useState(0);

  const forceRefresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  const inbox = refreshInbox();
  const sent = refreshSent();
  const unreadCount = inbox.filter((m) => !m.read).length;

  useEffect(() => {
    if (!isLoggedIn) {
      onNavigate("signin");
    }
  }, [isLoggedIn, onNavigate]);

  if (!isLoggedIn || !currentUserEmail) return null;

  const handleMessageClick = (msg: Message) => {
    if (!msg.read && activeTab === "inbox") {
      markRead(msg.id);
      forceRefresh();
    }
    setSelectedMessage(msg);
  };

  const handleBack = () => setSelectedMessage(null);

  const handleCompose = (defaults: { to?: string; subject?: string } = {}) => {
    setComposeDefaults(defaults);
    setShowCompose(true);
  };

  const handleSend = (to: string, subject: string, body: string) => {
    const result = sendMessage(to, subject, body);
    if (result.success) forceRefresh();
    return result;
  };

  const displayMessages = activeTab === "inbox" ? inbox : sent;

  return (
    <>
      {showCompose && (
        <ComposeModal
          currentUserEmail={currentUserEmail}
          onSend={handleSend}
          onClose={() => {
            setShowCompose(false);
            setComposeDefaults({});
          }}
        />
      )}

      <main
        className="pt-[160px] pb-20"
        style={{ backgroundColor: "oklch(0.97 0.02 85)" }}
      >
        {/* ── MASTHEAD ── */}
        <header
          className="relative py-10 px-6 overflow-hidden vintage-texture"
          style={{ backgroundColor: "oklch(0.91 0.03 78)" }}
        >
          <div
            className="absolute inset-4 pointer-events-none"
            style={{ border: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
            aria-hidden="true"
          />
          <span
            className="absolute text-lg pointer-events-none"
            style={{
              top: "1.5rem",
              left: "1.5rem",
              color: "oklch(0.72 0.12 75 / 0.4)",
            }}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="absolute text-lg pointer-events-none"
            style={{
              top: "1.5rem",
              right: "1.5rem",
              color: "oklch(0.72 0.12 75 / 0.4)",
            }}
            aria-hidden="true"
          >
            ✦
          </span>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <EraBadge
                  text="Private Correspondence"
                  variant="gold"
                  className="mb-3"
                />
                <h1
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                    color: "oklch(0.35 0.12 15)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                  }}
                >
                  Your VENICE Inbox
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className="font-body italic text-sm"
                    style={{ color: "oklch(0.5 0.04 60)" }}
                  >
                    {currentUserEmail}
                  </span>
                  <VerifiedBadge email={currentUserEmail} size="sm" showLabel />
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCompose()}
                className="flex-shrink-0 font-heading text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all"
                style={{
                  backgroundColor: "oklch(0.35 0.12 15)",
                  color: "oklch(0.72 0.12 75)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                  cursor: "pointer",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px oklch(0.18 0.03 50 / 0.2)",
                  alignSelf: "flex-start",
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
                ✦ Compose
              </button>
            </div>
          </div>
        </header>

        {/* ── CONTENT ── */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          {/* Tabs */}
          <div
            className="flex items-center gap-0 mb-8"
            style={{ borderBottom: "2px solid oklch(0.72 0.12 75 / 0.2)" }}
          >
            {(["inbox", "sent"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedMessage(null);
                }}
                className="font-heading text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all relative"
                style={{
                  color:
                    activeTab === tab
                      ? "oklch(0.35 0.12 15)"
                      : "oklch(0.6 0.04 60)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: activeTab === tab ? 700 : 400,
                  borderBottom:
                    activeTab === tab
                      ? "2px solid oklch(0.72 0.12 75)"
                      : "2px solid transparent",
                  marginBottom: "-2px",
                }}
              >
                {tab === "inbox" ? "Inbox" : "Sent"}
                {tab === "inbox" && unreadCount > 0 && (
                  <span
                    className="ml-2 inline-flex items-center justify-center rounded-full font-heading text-[0.55rem]"
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: "oklch(0.55 0.22 25)",
                      color: "oklch(0.97 0.01 30)",
                      fontWeight: 900,
                    }}
                  >
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {selectedMessage ? (
            <MessageDetail
              message={selectedMessage}
              onBack={handleBack}
              onReply={(to, subject) => {
                setSelectedMessage(null);
                handleCompose({ to, subject });
              }}
            />
          ) : displayMessages.length === 0 ? (
            // Empty state
            <div
              className="text-center py-20 relative"
              style={{
                backgroundColor: "oklch(0.94 0.025 80)",
                border: "1px solid oklch(0.72 0.12 75 / 0.3)",
              }}
            >
              <div
                className="absolute inset-3 pointer-events-none"
                style={{ border: "1px solid oklch(0.72 0.12 75 / 0.12)" }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div
                  className="wax-seal mx-auto mb-6"
                  style={{ width: "64px", height: "64px", fontSize: "1.4rem" }}
                  aria-hidden="true"
                >
                  ✉
                </div>
                <h3
                  className="font-serif text-xl mb-3"
                  style={{ color: "oklch(0.35 0.12 15)", fontWeight: 700 }}
                >
                  {activeTab === "inbox"
                    ? "No correspondence yet"
                    : "Nothing sent yet"}
                </h3>
                <p
                  className="font-body italic text-sm"
                  style={{
                    color: "oklch(0.5 0.04 60)",
                    maxWidth: "320px",
                    margin: "0 auto 2rem",
                  }}
                >
                  {activeTab === "inbox"
                    ? "When someone sends you a message, it will appear here."
                    : "Messages you send to other VENICE members will appear here."}
                </p>
                {activeTab === "inbox" && (
                  <button
                    type="button"
                    onClick={() => handleCompose()}
                    className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all"
                    style={{
                      backgroundColor: "oklch(0.35 0.12 15)",
                      color: "oklch(0.72 0.12 75)",
                      border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                      cursor: "pointer",
                    }}
                  >
                    Send Your First Message ✦
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Message list
            <ul
              className="space-y-0"
              aria-label={
                activeTab === "inbox" ? "Inbox messages" : "Sent messages"
              }
            >
              {[...displayMessages].reverse().map((msg, idx) => {
                const isUnread = !msg.read && activeTab === "inbox";
                return (
                  <li key={msg.id} style={{ listStyle: "none" }}>
                    <button
                      type="button"
                      onClick={() => handleMessageClick(msg)}
                      className="w-full text-left transition-all"
                      style={{
                        backgroundColor: isUnread
                          ? "oklch(0.96 0.025 80)"
                          : idx % 2 === 0
                            ? "oklch(0.94 0.025 80)"
                            : "oklch(0.92 0.025 78)",
                        border: "none",
                        borderBottom: "1px solid oklch(0.72 0.12 75 / 0.2)",
                        cursor: "pointer",
                        display: "block",
                        padding: "0",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "oklch(0.91 0.03 78)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          isUnread
                            ? "oklch(0.96 0.025 80)"
                            : idx % 2 === 0
                              ? "oklch(0.94 0.025 80)"
                              : "oklch(0.92 0.025 78)";
                      }}
                      aria-label={`${isUnread ? "Unread: " : ""}${msg.subject} from ${msg.fromEmail}`}
                    >
                      <div className="flex items-start gap-4 px-6 py-4">
                        {/* Unread indicator */}
                        <div
                          className="flex-shrink-0 mt-2"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: isUnread
                              ? "oklch(0.55 0.22 25)"
                              : "transparent",
                          }}
                          aria-hidden="true"
                        />

                        {/* Wax seal mini */}
                        <div
                          className="flex-shrink-0 hidden sm:flex items-center justify-center rounded-full"
                          style={{
                            width: 36,
                            height: 36,
                            background:
                              "radial-gradient(circle at 35% 35%, oklch(0.50 0.14 15), oklch(0.30 0.12 15))",
                            color: "oklch(0.72 0.12 75)",
                            fontSize: "0.7rem",
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                          }}
                          aria-hidden="true"
                        >
                          {(activeTab === "inbox" ? msg.fromEmail : msg.toEmail)
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <span
                              className="font-heading text-xs tracking-wide truncate"
                              style={{
                                color: "oklch(0.35 0.12 15)",
                                fontWeight: isUnread ? 700 : 500,
                              }}
                            >
                              {activeTab === "inbox" ? (
                                <span className="flex items-center gap-1.5">
                                  {msg.fromEmail}
                                  <VerifiedBadge
                                    email={msg.fromEmail}
                                    size="sm"
                                  />
                                </span>
                              ) : (
                                <span className="flex items-center gap-1.5">
                                  To: {msg.toEmail}
                                  <VerifiedBadge
                                    email={msg.toEmail}
                                    size="sm"
                                  />
                                </span>
                              )}
                            </span>
                            <span
                              className="font-heading text-[0.6rem] tracking-wide flex-shrink-0"
                              style={{ color: "oklch(0.6 0.04 60)" }}
                            >
                              {formatTime(msg.timestamp)}
                            </span>
                          </div>
                          <p
                            className="font-serif text-sm font-semibold truncate mb-1"
                            style={{ color: "oklch(0.28 0.04 50)" }}
                          >
                            {msg.subject}
                          </p>
                          <p
                            className="font-body text-xs truncate"
                            style={{ color: "oklch(0.55 0.04 60)" }}
                          >
                            {msg.body.slice(0, 100)}
                            {msg.body.length > 100 ? "…" : ""}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* User info card */}
        {!selectedMessage && (
          <section className="max-w-5xl mx-auto px-6 pb-6">
            <div
              className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              style={{
                backgroundColor: "oklch(0.91 0.03 78)",
                border: "1px solid oklch(0.72 0.12 75 / 0.3)",
              }}
            >
              <div>
                <p
                  className="font-heading text-[0.6rem] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "oklch(0.6 0.04 60)" }}
                >
                  Signed in as
                </p>
                <p
                  className="font-body text-sm flex items-center gap-2"
                  style={{ color: "oklch(0.35 0.12 15)" }}
                >
                  {currentUserEmail}
                  <VerifiedBadge email={currentUserEmail} size="sm" showLabel />
                </p>
              </div>
              <div
                className="flex items-center gap-2 text-sm font-body italic"
                style={{ color: "oklch(0.5 0.04 60)" }}
              >
                <span>{inbox.length} received</span>
                <span style={{ color: "oklch(0.72 0.12 75 / 0.5)" }}>·</span>
                <span>{sent.length} sent</span>
              </div>
            </div>
          </section>
        )}

        <div className="flex justify-center py-6 px-6">
          <ArtDecoDivider color="oklch(0.72 0.12 75)" size="lg" />
        </div>
      </main>
    </>
  );
}
