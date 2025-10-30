import React from 'react'
import './Hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <div className="badge">UNIVERSITY SCIENCE CLUB</div>
        <h1 className="hero__title">Welcome, Future Scientists!</h1>
        <p className="hero__subtitle">
          A community for students passionate about science and discovery.
        </p>
      </div>
    </section>
  )
}
