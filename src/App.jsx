// src/App.jsx
import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import InfoCard from "./components/InfoCard.jsx";
import BlueOverlay from "./components/BlueOverlay.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/mobile-fixes.css";

export default function App() {
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const eventsRef = useRef(null);

  const [overlay, setOverlay] = useState({ show: false, title: "", text: "" });
  const openOverlay = (title, text) =>
    setOverlay({ show: true, title, text });
  const closeOverlay = () =>
    setOverlay({ show: false, title: "", text: "" });

  const [contactOpen, setContactOpen] = useState(false);

  // ========= نصوص المودالات (من البينوم) =========
  const TEXT_PURPOSE = `Our mission excites, inspires, and enables students for exploration of science and technology outside the classroom.

Our Science Club QUARKS believes in learning through doing. QUARKS is a place where students learn, make, share, ask questions, fail boldly and succeed proudly.

We aim to:
• Hands-on projects advance scientific thinking and digital literacy.
• Encourage students in leading, in cooperating, and in taking initiative.
• Connect university learning with professional practice.
• Ease knowledge exchange between Algerian universities and other countries.

We’re moving one step closer each time with every idea, experiment, and discussion.`;

  const TEXT_INTRODUCTION = `Welcome to QUARKS Club — a finely crafted experience at ENSTA; a vibrant society network for students who are passionate, full-time enthusiasts with high dreams of changing the world through innovation!

Our prestigious club is a portal into worlds of insight — knowledge, not fantasy! This portal, a poetic juxtaposition that leads to the epiphany of existence and being; necessitates a world with more dangerous realms…. The explicit sensibilities go without saying but better always when said.

We bring together a wide range of learners interested in undertaking the challenge of design, building, and exploration — whether it's via the cool world of artificial intelligence or leading-edge robotics or cutting-edge environmental technology.

Through careful planning of a set of hands-on workshops, interactive activities and collaborative projects, we are giving each student an amazing experience as they become “agents of change,” turning their wild ideas into concrete solutions and helping our campus move forward with smarter technologies and a more connected community.`;

  const TEXT_ADVICE = `Advices to Build a Website:

Building a website is like constructing a digital home — every element matters.
Here’s a set of professional, creative, and friendly tips to guide your journey.

Do’s:
• Prior to the start of coding, create a map of your site's organization and a flowchart showing user navigation.
• What does your site do for users? What problem does it solve? What is the story?
• Employ a color scheme and typography choices that remain consistent and create readability.
• It must look good on any device to be mobile friendly.
• Test fully for broken links, performance, and accessibility.
• Update regularly — a good site grows with its community.

Don’ts:
• Do not overload your page with animations or dense text.
• Avoid the use of low-contrast colors with hard-to-read fonts.
• Don’t ignore user feedback.
• Do not borrow ideas for this: try to be original.

This is your website. Make it simple, make it functional, make it your own!`;

  const TEXT_ABOUT = `Science club QUARKS is an academic and social project, conceived and run by a group of Computer Science students, convinced that science must not be just studied, but shared, discussed and lived.

Through collaboration and mentorship, we combine theoretical and practical knowledge to prepare students for a successful career in research or industry, and connect with other clubs across universities in Algeria.`;

  const TEXT_ACTIVITIES = `Our activities are designed to combine learning, creativity, and teamwork. Whether online or on campus, our members engage in workshops, projects, and scientific outreach programs led by our mentors Fatna Gabani and Maryem Hakkoum.

Here are some of our upcoming and past activities:

• AI Workshop: “Intro to Artificial Intelligence” — Online, November 12, 2025.
  Learn how machines can think and make decisions, guided by practical coding labs.

• Workshop: “Git & GitHub for Beginners” — November 15, 2025, ENSTA Lab 3.
  A hands-on session on teamwork, version control, and open-source collaboration.

• Workshop: “Web Design Basics” — November 18, 2025, in partnership with the Department of Computer Science.
  Students explore UI/UX design and create their first responsive web page.

• Project Series: “Science in Action” — ongoing.
  Members design small research projects combining physics, biology, and data analysis.

• Community Outreach: “Coding for Everyone” — December 2025.
  Students volunteer to teach programming basics to local high-school pupils.`;

  const TEXT_EVENTS = `Our events celebrate science, creativity, and community. They bring together students, teachers, and professionals who share a passion for innovation.

Upcoming Events:
• Talk: “The Future of Computing” — 22 November 2025, Main Lecture Hall.
  Discussion of how AI and cloud technology are reshaping industries.

• Competition: “Smart Campus Hackathon” — 5 December 2025, ENSTA Labs.
  Teams compete to create digital solutions improving university student life.

• Guest Session: “Cybersecurity Trends 2025” — 12 December 2025 (Online).
  A session on how to secure computer systems considering the arrival of AI.

• Science Day Exhibition: “Technology and Sustainability” — 19 December 2025.
  Student projects combine environmental science and computing, presenting innovation.`;

  return (
    <>
      <Navbar
        onAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onActivities={() =>
          activitiesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onEvents={() =>
          eventsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onContact={() => setContactOpen(true)}
      />

      <Hero />

      {/* بطاقات Purpose / Introduction / Advice */}
      <div className="container section">
        <div className="grid grid-2">
          <InfoCard
            title="Purpose"
            icon="💡"
            desc="Inspire curiosity and foster collaborative science projects across campus."
            onClick={() => openOverlay("Purpose", TEXT_PURPOSE)}
          />

          <InfoCard
            title="Introduction"
            icon="ℹ️"
            desc="We’re a student-led club hosting talks, experiments, and community events."
            onClick={() => openOverlay("Introduction", TEXT_INTRODUCTION)}
          />
        </div>

        <div style={{ marginTop: 22 }}>
          <InfoCard
            title="Advice to build a website"
            icon="🛠️"
            wide
            desc="Learn more about our recommendations for planning, design, and launch."
            onClick={() => openOverlay("Advice to build a website", TEXT_ADVICE)}
          />
        </div>
      </div>

      {/* About Us */}
      <Section
        id="about"
        title="About Us"
        innerRef={aboutRef}
        onCardOpen={() => openOverlay("About Us", TEXT_ABOUT)}
      >
        Learn more about our mission and members.
      </Section>

      {/* Activities */}
      <Section
        id="activities"
        title="Activities"
        innerRef={activitiesRef}
        onCardOpen={() => openOverlay("Activities", TEXT_ACTIVITIES)}
      >
        Discover our hands-on workshops and projects.
      </Section>

      {/* Events */}
      <Section
        id="events"
        title="Events"
        innerRef={eventsRef}
        onCardOpen={() => openOverlay("Events", TEXT_EVENTS)}
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

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

