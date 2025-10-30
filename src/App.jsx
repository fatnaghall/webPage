// src/App.jsx
import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import InfoCard from './components/InfoCard.jsx'
import BlueOverlay from './components/BlueOverlay.jsx'
import ContactModal from './components/ContactModal.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  const aboutRef = useRef(null)
  const activitiesRef = useRef(null)
  const eventsRef = useRef(null)

  const [overlay, setOverlay] = useState({show:false, title:'', text:''})
  const openOverlay = (title, text) => setOverlay({show:true, title, text})
  const closeOverlay = () => setOverlay({show:false, title:'', text:''})

  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Navbar
        onAbout={()=>aboutRef.current?.scrollIntoView({behavior:'smooth'})}
        onActivities={()=>activitiesRef.current?.scrollIntoView({behavior:'smooth'})}
        onEvents={()=>eventsRef.current?.scrollIntoView({behavior:'smooth'})}
        onContact={()=>setContactOpen(true)}
      />

      <Hero />

      {/* بطاقات Purpose / Introduction / Advice */}
      <div className="container section">
        <div className="grid grid-2">
          <InfoCard
            title="Purpose"
            icon="💡"
            desc="Inspire curiosity and foster collaborative science projects across campus."
            onClick={()=>openOverlay('Purpose','wait from binom the text about purpose')}
          />
          <InfoCard
            title="Introduction"
            icon="ℹ️"
            desc="We’re a student-led club hosting talks, experiments, and community events."
            onClick={()=>openOverlay('Introduction','wait text from binom about introduction')}
          />
        </div>

        <div style={{marginTop:22}}>
          <InfoCard
            title="Advice to build a website"
            icon="🛠️"
            wide
            desc="Learn more about our recommendations for planning, design, and launch."
            onClick={()=>openOverlay('Advice to build a website','wait from binom: text about advice to build a website')}
          />
        </div>
      </div>

      {/* About Us */}
      <Section
        id="about"
        title="About Us"
        innerRef={aboutRef}
        onCardOpen={()=>openOverlay('About Us','wait from binom the text about about us')}
      >
        Learn more about our mission and members.
      </Section>

      {/* Activities */}
      <Section
        id="activities"
        title="Activities"
        innerRef={activitiesRef}
        onCardOpen={()=>openOverlay('Activities','wait from binom the text about activities')}
      >
        Discover our hands-on workshops and projects.
      </Section>

      {/* Events */}
      <Section
        id="events"
        title="Events"
        innerRef={eventsRef}
        onCardOpen={()=>openOverlay('Events','wait from binom the text about events')}
      >
        Stay updated on upcoming talks and competitions.
      </Section>

      <Footer />

      <BlueOverlay
        open={overlay.show}
        title={overlay.title}
        text={overlay.text}
        onClose={closeOverlay}
      />

      <ContactModal open={contactOpen} onClose={()=>setContactOpen(false)} />
    </>
  )
}
