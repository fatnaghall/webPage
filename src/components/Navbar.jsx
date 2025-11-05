import React from 'react'
import './Navbar.css'

export default function Navbar({onAbout,onActivities,onEvents,onContact}){
  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__brand">
          <span className="logo">✳</span>
          <span>QUARKS <b>CLUB</b></span>
        </div>
        <nav className="nav__links">
          <button className="nav__link" onClick={onAbout}>About</button>
          <button className="nav__link" onClick={onActivities}>Activities</button>
          <button className="nav__link" onClick={onEvents}>Events</button>
          <button className="nav__link nav__contact" onClick={onContact}>Contact</button>
        </nav>
      </div>
    </header>
  )
}
