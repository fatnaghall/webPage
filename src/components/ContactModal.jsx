import React, { useEffect } from 'react'
import './ContactModal.css'

export default function ContactModal({open, onClose}){
  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : ''
    return ()=>{ document.body.style.overflow='' }
  },[open])

  if(!open) return null
  return (
    <div className="cmodal" onClick={onClose}>
      <div className="cmodal__panel" onClick={e=>e.stopPropagation()}>
        <h3>Contact</h3>
        <div className="cmodal__row">
          <span className="ico">✉️</span> 
          <a href="mailto:sienceclub@gmail.com"> email: scienceclub@gmail.com</a>
        </div>
        <div className="cmodal__row">
          <span className="ico">📘</span>
          <a href="#" title="Science Club Algeria on Facebook">Facebook: science club Algeria</a>
        </div>
        <div className="cmodal__row">
          <span className="ico">📸</span>
          <a href="#" title="ScienceClub on Instagram"> instagram: scienceclub</a>
        </div>
        <div className="cmodal__actions">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
