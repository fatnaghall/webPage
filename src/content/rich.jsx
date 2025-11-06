/* src/content/rich.jsx */
import React from 'react'

/* عناصر مساعدة للكتابة النظيفة */
export const Lead   = ({children}) => <p className="lead">{children}</p>
export const P      = ({children}) => <p>{children}</p>
export const Em     = ({children}) => <em className="em">{children}</em>
export const H2     = ({children}) => <h3 className="h2">{children}</h3>
export const Badge  = ({children}) => <span className="badge">{children}</span>
export const Bullets= ({children}) => <ul className="bullets">{children}</ul>
export const Item   = ({children}) => <li className="bullet">{children}</li>
import flow1 from '../assets/flowcharts/flow1.jpg';
import flow2 from '../assets/flowcharts/flow2.jpg';

/* النصوص النهائية */
export const purpose = (
  <>
    <Lead>
      Our mission excites, inspires, and enables students to explore science and technology beyond the classroom.
    </Lead>
    <P>
      Our Science Club <Em>QUARKS</Em> believes in learning through doing. It’s a place where students learn,
      make, share, ask questions, fail boldly and succeed proudly.
    </P>
    <H2>We aim to:</H2>
    <Bullets>
      <Item>Advance scientific thinking and digital literacy through hands-on projects.</Item>
      <Item>Encourage leadership, cooperation, and initiative.</Item>
      <Item>Connect university learning with professional practice.</Item>
      <Item>Ease knowledge exchange between Algerian universities and other countries.</Item>
      <Item>Move one step closer with every idea, experiment, and discussion.</Item>
    </Bullets>
  </>
)

export const introduction = (
  <>
    <Lead>
      Welcome to <Em>QUARKS Club</Em> a vibrant community at ENSTA for curious students who want to build, explore,
      and share knowledge together.
    </Lead>
    <P>
      We bring together a wide range of learners to tackle the challenge of design, building, and exploration
      from AI and robotics to environmental tech. With workshops, interactive activities, and collaborative projects,
      each student gets an opportunity to become an “agent of change”.
    </P>
  </>
)

/* ✅ قسم Advice مع زر عرض الصور */
/* ✅ قسم Advice مع الصور داخل نفس الصفحة */
export const advice = (
  <>
    <Lead>
      Building a website is like constructing a digital home — every element matters. Here are creative, friendly tips:
    </Lead>

    <H2>Do:</H2>
    <Bullets>
      <Item>Create a site map and a simple flowchart before coding.</Item>
      <Item>Ask: What does the site do for users? What problem does it solve? What’s the story?</Item>
      <Item>Use a consistent color scheme and readable typography.</Item>
      <Item>Make it responsive,it must look good on phones.</Item>
      <Item>Test for broken links, performance, and accessibility.</Item>
      <Item>Update regularly a good site grows with its community.</Item>
    </Bullets>

    <H2>Don’t:</H2>
    <Bullets>
      <Item>Don’t overload pages with animations or dense text.</Item>
      <Item>Don’t use low-contrast colors with hard to read fonts.</Item>
      <Item>Don’t ignore user feedback.</Item>
      <Item>Don’t copy ideas,be original. Make it yours.</Item>
    </Bullets>

    {/* ✅ العنوان والزر الاختياري */}
    <div style={{ marginTop: '25px', textAlign: 'center' }}>
      <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '12px' }}>Website Flowcharts</h3>
      <p style={{ opacity: 0.85, marginBottom: '16px' }}>
        Visual maps that help you plan the structure and navigation before coding.
      </p>
    </div>

    {/* ✅ الصور تظهر مباشرة داخل نفس الـOverlay */}
    <div
      className="flow-gallery"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px',
        justifyItems: 'center',
        marginTop: '10px',
      }}
    >
      <figure
        className="flow-figure"
        style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '10px',
          borderRadius: '12px',
          maxWidth: '600px',
        }}
      >
        <img
          src={flow1}
          alt="Website design flowchart 1"
          style={{
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
          }}
        />
        <figcaption
          style={{
            textAlign: 'center',
            marginTop: '6px',
            fontSize: '0.9rem',
            opacity: '0.8',
          }}
        >
          Flowchart 1 — Overview
        </figcaption>
      </figure>

      <figure
        className="flow-figure"
        style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '10px',
          borderRadius: '12px',
          maxWidth: '600px',
        }}
      >
        <img
          src={flow2}
          alt="Website design flowchart 2"
          style={{
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
          }}
        />
        <figcaption
          style={{
            textAlign: 'center',
            marginTop: '6px',
            fontSize: '0.9rem',
            opacity: '0.8',
          }}
        >
          Flowchart 2 — Design Process
        </figcaption>
      </figure>
    </div>
  </>
);



export const activities = (
  <>
    <Lead>
      Our activities combine learning, creativity, and teamwork on campus and online led by our mentors
      Fatna Gabani and Maryem Hakkoum.
    </Lead>
    <ul className="list">
      <li><Badge>AI Workshop</Badge> “Intro to Artificial Intelligence” — <Em>Online, 12 Nov 2025</Em>. Learn how machines
        can think and make decisions via practical labs.</li>
      <li><Badge>Workshop</Badge> “Git &amp; GitHub for Beginners” — <Em>15 Nov 2025, ENSTA Lab 3</Em>.
        Teamwork, version control, and open-source collaboration.</li>
      <li><Badge>Workshop</Badge> “Web Design Basics” — <Em>18 Nov 2025</Em>, with the Dept. of Computer Science.
        Build your first responsive web page.</li>
      <li><Badge>Project Series</Badge> “Science in Action” — ongoing. Small research projects combining physics, biology, and data analysis.</li>
      <li><Badge>Community</Badge> “Coding for Everyone” — <Em>Dec 2025</Em>. Students teach programming basics to local high-school pupils.</li>
    </ul>
  </>
)

export const events = (
  <>
    <Lead>
      Our events celebrate science, creativity, and community by bringing together students, teachers, and professionals who share a passion for innovation.
    </Lead>
    <H2>Upcoming events</H2>
    <ul className="list">
      <li><Badge>Talk</Badge> “The Future of Computing” — <Em>22 Nov 2025, Main Lecture Hall</Em>. How AI and cloud are reshaping industries.</li>
      <li><Badge>Competition</Badge> “Smart Campus Hackathon” — <Em>5 Dec 2025, ENSTA Labs</Em>. Teams build digital solutions for student life.</li>
      <li><Badge>Guest Session</Badge> “Cybersecurity Trends 2025” — <Em>12 Dec 2025 (Online)</Em>. Securing systems with the arrival of AI.</li>
      <li><Badge>Science Day Exhibition</Badge> “Technology &amp; Sustainability” — <Em>19 Dec 2025</Em>. Projects combining environmental science and computing.</li>
    </ul>
  </>
)

export const about = (
  <>
    <H2>About Us</H2>
    <P>
      Science Club <Em>QUARKS</Em> is an academic and social project led by Computer Science students convinced that science
      must not be just studied, but shared, discussed, and lived. We connect theory with practice and link clubs across Algeria.
    </P>
  </>
)
