import React from 'react'
import './Section.css'

export default function Section({id, title, children, innerRef, onCardOpen}){
  return (
    <section className="section" id={id} ref={innerRef}>
      <div className="container">
        <h2 className="sec__title">{title}</h2>
        <p className="sec__desc">{children}</p>
        <button className="sec__open btn" onClick={onCardOpen}>
          Open details
        </button>
      </div>
    </section>
  )
}
