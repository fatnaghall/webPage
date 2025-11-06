import React, { useEffect, useCallback } from "react";
import "./ContactModal.css";

export default function ContactModal({ open, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose?.();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    // اقفل تمرير الصفحة أثناء فتح المودال
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = overflow || "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div className="cm-backdrop" onClick={onClose} role="presentation">
      <div
        className="cm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-title"
        onClick={stop}
      >
        <div className="cm-header">
          <h3 id="cm-title">Contact</h3>
          <button className="cm-x" aria-label="Close" onClick={onClose}>✕</button>
        </div>

        <div className="cm-body">
          {/* عدّلي النصوص أدناه كما تحبين */}
          <p className="cm-lead">
            Have a question about <strong>QUARKS CLUB</strong> or want to collaborate?
          </p>

          <div className="cm-grid">
            <div className="cm-card">
              <div className="cm-card-title">Email</div>
              <a className="cm-link" href="mailto:your.email@example.com">
                quarks1234@gmail.com
              </a>
            </div>

            <div className="cm-card">
              <div className="cm-card-title">Instagram</div>
              <a className="cm-link" href="#" target="_blank" rel="noreferrer">
                @quarks.club
              </a>
            </div>

            <div className="cm-card">
              <div className="cm-card-title">Location</div>
              <div>
                ENSTA – CS Department (
                <a
                  href="https://maps.app.goo.gl/wfe5Kw2LWJCFhde7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#66aaff", textDecoration: "underline" }}
                >
                  View on Google Maps
                </a>
                )
              </div>
            </div>
          </div> {/* ← إغلاق شبكة البطاقات هنا */}

          <p className="cm-note">
            we going to help you any time!
          </p>
        </div>

        <div className="cm-footer">
          <button className="cm-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
