import Navbar from '../../components/Navbar'
import '../../styles/about.css'
import '../../styles/showcase.css'

// Import assets
import dungeonVideo from '../../assets/dungeon.mp4'
import guardVideo from '../../assets/dungeon_guard.mp4'
import prisonerVideo from '../../assets/dungeon_prisoner.mp4'

function Dungeon() {
  return (
    <>
      <Navbar />
      
      <div className="title">
        <h1>The Dungeon</h1>
      </div>

      <div className="container">
        {/* Video Container */}
        <div className="video-container">
          <video 
            className="animation-video" 
            src={dungeonVideo} 
            controls
          />
        </div>

        {/* Content Container */}
        <div className="content-container">
          <div className="credit">
            <p>Environment Design, Lighting, Monster/Guard/Prisoner Animation Cleanup by Catherine Azelby</p>
            <p>Environment Setup, Rig Retargeting, MoCap Acting, Compositing, Sound Editing by Josh Goldman</p>
            <p>Made using Unreal Engine 5.2.1, Blender 4.3, MetaHuman Creator 5.2, and After Effects 2025</p>
            <p>
              Find List of assets used here{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1WXwHY1XtRPrkzhIBEw2n-uVD_cIP1eFXgrpJG49pj3c/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                The Dungeon Asset List
              </a>
            </p>
          </div>

          <div className="project-info-container">
            <h1>Project Description</h1>
            <div className="project-info-text">
              <p>
                This project was created for the Animation Club's Spring 2025 Animation Jam by Josh Goldman and myself. Under a strict one-week deadline, we strategically leveraged free assets from Fab and advanced motion capture technology to streamline our production process. I adapted a pre-existing monster rig's crawl animation to seamlessly integrate it into our scene, taking care to prevent clipping while enhancing the facial and mouth movements for added effect.
              </p>
            </div>

            <h4>Prison Guard MoCap</h4>
            <video className="project-info-animatic" src={guardVideo} controls muted />

            <h4>Prisoner MoCap</h4>
            <video className="project-info-animatic" src={prisonerVideo} controls muted />

            <div className="project-info-text">
              <p>
                With the MoCap motion data captured, we now just had to import those animations onto the characters for our project. For the prisoner character, I utilized Unreal Engine's MetaHuman Creator, incorporating a control rig to refine the animations and ensuring that the wrists remained accurately aligned with the prison shackles. Concurrently, Josh retargeted and modified the Viking character from Fab to embody a medieval prison guard, while I fine-tuned the guard animations to manage dynamic lighting from the torch without compromising visibility.
              </p>
              <p>
                This project significantly expanded my technical expertise in several areas. I honed my skills in motion capture integration, rigging, and animation editing, while also deepening my understanding of lighting techniques and dynamic scene composition. These experiences enhanced my ability to tell compelling stories visually and improved my overall workflow efficiency in a high-pressure, production-oriented environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dungeon