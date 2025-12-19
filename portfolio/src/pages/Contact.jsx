import Navbar from '../components/Navbar'
import '../styles/about.css'
import '../styles/contact.css'

import siggraphImg from '../assets/siggraph.jpg'
import resumePdf from '../assets/resume.pdf'

function Contact() {
  return (
    <>
      <Navbar />
      
      <div className="page-container contact-page">
        <div className="contact-layout">
          <div className="contact-image-container">
            <img src={siggraphImg} alt="Catherine Azelby at SIGGRAPH" className="contact-photo" />
          </div>
          
          <div className="contact-content">
            <h1 className="contact-name">Catherine Azelby</h1>
            <p className="contact-role">3D Generalist · Technical Director</p>
            
            <p className="contact-subtitle">
              Seeking opportunities in animation, technical direction, and pipeline development.
            </p>
            
            <div className="contact-buttons">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="contact-btn">
                Resume
              </a>
              <a href="https://www.linkedin.com/in/catherineazelby/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                LinkedIn
              </a>
              <a href="mailto:azelbycatherine@gmail.com" className="contact-btn">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact