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
            <p className="home-role">3D Generalist — Technical Director</p>
            <p className="home-bio">
              Hi, I'm Cat! I'm a 3D artist, animator, and developer. I have
              experience in various creative programs such as Maya, Unreal
              Engine, and Adobe Creative Suite. I am a passionate learner and
              collaborator, currently serving as Northeastern's Animation Club's
              President and participating in various hackathons, jams, and
              competitions.
            </p>
            <p className="home-bio">
              I am always looking for new opportunities to learn and grow in the
              CG industry. I am currently working as the Lucasfilm ILM Advanced Development
              Group's Virtual Production Content Pipeline Intern.
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
            blurb="Pipeline tools, plugins, and USD workflows"
            videoSrc={techReel}
          />
          <ReelPanel
            to="/animation"
            label="Animation"
            blurb="Shorts, lighting, and real-time environments"
            videoSrc={animReel}
            poster={thumbnail}
          />
        </div>
      </section>
    </>
  )
}

export default Home
