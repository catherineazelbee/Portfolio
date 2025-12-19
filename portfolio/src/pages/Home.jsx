import Navbar from '../components/Navbar'
import '../styles/about.css'

// Import assets
import headshotImg from '../assets/headshot-img.jpg'
import demoReel from '../assets/demoReel.mp4'
import thumbnail from '../assets/thumbnail.png'
import resumePdf from '../assets/resume.pdf'

function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Catherine Azelby</h1>
          <p className="hero-subtitle">3D Generalist — Technical Director</p>
          <div className="hero-buttons">
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="hero-button">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/catherineazelby/" target="_blank" rel="noopener noreferrer" className="hero-button">
              LinkedIn
            </a>
            <a href="https://github.com/catherineazelbee" target="_blank" rel="noopener noreferrer" className="hero-button">
              GitHub
            </a>
          </div>
        </div>
        
        {/* Demo Reel in Hero */}
        <video
          className="hero-demo-video"
          src={demoReel}
          poster={thumbnail}
          autoPlay
          loop
          controls
        />
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <img src={headshotImg} alt="Catherine Azelby" className="about-headshot" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Cat! I'm a 3D generalist and technical director with experience in Maya, Unreal Engine, and Adobe Creative Suite, plus coding languages like Python and C++. 
            </p>
            <p>
              I'm currently serving as Northeastern's Animation Club President and working as a 3D Visual Designer at hyLite Studio, creating 3D models for Meta Horizon Worlds. I love participating in hackathons, jams, and competitions and am always looking for new opportunities to learn and grow!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home