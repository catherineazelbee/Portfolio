import Navbar from '../../components/Navbar'
import '../../styles/about.css'
import '../../styles/showcase.css'

// Import assets
import scytheVideo from '../../assets/scytheAnim.mp4'

function ScytheAnim() {
  return (
    <>
      <Navbar />
      
      <div className="title">
        <h1>Scythe Two-Hit Combo</h1>
      </div>

      <div className="container">
        {/* Video Container */}
        <div className="video-container">
          <video 
            className="animation-video" 
            src={scytheVideo} 
            controls
            autoPlay
          />
        </div>

        {/* Content Container */}
        <div className="content-container">
          <div className="credit">
            <p>Animation/Lighting/Environment Design by Catherine Azelby</p>
            <p>Made using Autodesk Maya 2025</p>
            <p>Character Model/Rig by Jonathan Cooper</p>
            <p>Background Assets by JustCreate</p>
          </div>

          <div className="project-info-container">
            <h1>Project Description</h1>
            <div className="project-info-text">
              <p>
                This is a two-hit combo attack created for Blizzard's World of Warcraft 2025 Student Art Competition! I'm competing in the animation track with a two-hit combo attack. For my animation, I wanted to convey movement of an initial powerful attack, followed by a fake-out, leading into a final pull-back to take an enemy's head off. I chose the Azri rig, which posed some challenges with the characters long flowing hair and poncho, and even more with trying to not have the back of her scythe puncture herself. Navigating the problems taught me valuable lessons, such as secondary animation and emphasis with her hair and attention to detail with her clothes and scythe. In the end, this project was a great exercise in game attack animation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScytheAnim