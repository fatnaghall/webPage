import React from 'react'
import './InfoCard.css'

export default function InfoCard({title, desc, icon, onClick, wide}){
  return (
    <button className={`info ${wide?'info--wide':''}`} onClick={onClick}>
      <div className="info__icon" aria-hidden>{icon}</div>
      <div>
        <h3 className="info__title">{title}</h3>
        <p className="info__desc">{desc}</p>
      </div>
    </button>
  )
}
