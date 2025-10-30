import React, { useEffect } from 'react'
import './BlueOverlay.css'

export default function BlueOverlay({open, title, text, onClose}){
  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : ''
    return ()=>{ document.body.style.overflow='' }
  },[open])

  if(!open) return null
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay__panel" onClick={e=>e.stopPropagation()}>
        <h2>{title}</h2>
        <p className="overlay__text">{text}</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
