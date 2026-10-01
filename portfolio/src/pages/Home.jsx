import Navbar from '../components/Navbar'
import ReelPanel from '../components/ReelPanel'
import '../styles/about.css'
import '../styles/home.css'
import '../styles/reel.css'

// Import assets
import headshotImg from '../assets/headshot-img.jpg'
import thumbnail from '../assets/thumbnail.png'
import resumePdf from '../assets/resume.pdf'

const techReel = 'https://media.catherineazelby.com/Coding/TECH_DEMO_REEL.mp4'
const animReel = 'https://media.catherineazelby.com/demoReel.mp4'

function Home() {
  return (
    <>
      <Navbar />

      {/* Intro: photo left, bio right */}
      <section className="home-intro">
        <div className="home-intro-inner">
          <img
            src={headshotImg}
            alt="Catherine Azelby"
            className="home-headshot"
          />

          <div className="home-intro-text">
            <h1 className="home-name">Catherine Azelby</h1>
            <p className="home-role">Pipeline TD — Tech Artist — 3D Generalist</p>
            <p className="home-bio">
              Hi, I'm Cat! I'm a developer and artist, with experience in VFX pipeline workflows, 
              game development, and immersive media. I can work in various DCCs as both an artist and
              developer, creating original animation projects and developing custom pipeline tools.
            </p>
            <p className="home-bio">
              I am always looking for new opportunities to learn and grow in the
              CG industry. I recently finished working as the Lucasfilm ILM Advanced Development
              Group's Virtual Production Content Pipeline Intern, and am looking for full-time opportunities
              starting January 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="home-links">
        <div className="hero-buttons">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/catherineazelby/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/catherineazelbee"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Two reels, two paths */}
      <section className="home-split">
        <h2 className="home-split-title">My Work</h2>
        <p className="home-split-sub">Check out my projects across tech and animation!</p>

        <div className="home-split-grid">
          <ReelPanel
            to="/coding"
            label="Tech"
            blurb="Pipeline tools, plugins, websites, and USD workflows"
            videoSrc={techReel}
          />
          <ReelPanel
            to="/animation"
            label="Animation"
            blurb="Cinematic shorts, lighting, compositing, and animation"
            videoSrc={animReel}
            poster={thumbnail}
          />
        </div>
      </section>
    </>
  )
}

export default Home
