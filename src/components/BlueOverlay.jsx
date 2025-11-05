/* src/components/BlueOverlay.jsx */
import React from 'react'
import './BlueOverlay.css'

export default function BlueOverlay({ open, title, onClose, children }) {
  if (!open) return null

  const stop = (e) => e.stopPropagation()

  return (
    <div className="overlay-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="overlay-card" onClick={stop}>
        <div className="overlay-header">
          <h3 className="overlay-title">{title}</h3>
          <button className="overlay-x" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="overlay-body">
          {children}
        </div>

        <div className="overlay-actions">
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
