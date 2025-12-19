import Navbar from '../../components/Navbar'
import '../../styles/about.css'
import '../../styles/showcase.css'

// Import assets
import chasmCallVideo from '../../assets/chasmCallFinal.mp4'
import iconImg from '../../assets/iconChasmsCall.png'
import batmanAlleyImg from '../../assets/chasm_BatmanBeyondAlley.jpg'
import batmanCityImg from '../../assets/chasm_BatmanBeyondCity.jpg'
import spiderverseCityImg from '../../assets/chasm_SpiderverseCity.webp'
import compositeTutVideo from '../../assets/chasm_compositeTut.mp4'
import rainFinalVideo from '../../assets/chasm_RainFinalVersion.mp4'
import shadowAltVideo from '../../assets/chasm_ShadowAltAngle.mp4'

function ChasmsCall() {
  return (
    <>
      <Navbar />
      
      <div className="title">
        <h1>Chasm's Call: Challenge Submission</h1>
      </div>

      <div className="container">
        {/* Video Container */}
        <div className="video-container">
          <video 
            className="animation-video" 
            src={chasmCallVideo} 
            autoPlay 
            controls
          />
        </div>

        {/* Content Container */}
        <div className="content-container">
          <div className="credit">
            <p>Environment Design, Lighting, Character Animation, & Compositing by Catherine Azelby</p>
            <p>Environment created in Unreal Engine 5.3.2, Rain effects in Niagara, Animation in Blender 4.3, Compositing/Editing in After Effects 2025</p>
            <p>Character Shadow the Hedgehog Model/Rig by Dokatzo</p>
            <p>
              Find List of assets used here{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/12O9n_mmimZBMZrtFK1ufusOD_5spd4Xxb06ms8DYLkI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Chasm's Call Asset List
              </a>
            </p>
          </div>

          <div className="project-info-container">
            <h1>Project Description</h1>
            <div className="project-info-text">
              <p>
                This project was my submission to the{' '}
                <a
                  href="https://createwithclint.com/community-challenges/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  Chasm's Call Community Challenge
                </a>
                . I spent around 100 hours creating this project, and learned new skills like 3D compositing and animation in Blender. Through this project, I also created my own workflow for combining Unreal Engine environments and particle systems with Blender character animation in After Effects.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={iconImg} alt="Chasm's Call Icon" />
              </div>
            </div>

            {/* Concept Development */}
            <h1>Concept Development</h1>
            <div className="project-info-text">
              <p>
                For this project, I took a lot of inspiration from Into the Spiderverse and Batman Beyond. These pieces of concept art served as the main style inspiration, a night city lit by bright blues and reds. I especially was inspired by the Spiderverse art of the city, and the bright lights emitting from below the buildings giving off a great sense of depth.
              </p>
            </div>
            <div className="small-title">
              <h4>Reference Images</h4>
              <div className="project-info-img-container">
                <img className="project-info-img" src={batmanAlleyImg} alt="Batman Beyond Alley Reference" />
                <img className="project-info-img" src={batmanCityImg} alt="Batman Beyond City Reference" />
                <img className="project-info-img" src={spiderverseCityImg} alt="Spiderverse City Reference" />
              </div>
            </div>

            {/* Creating the Scene */}
            <h1>Creating the Scene</h1>
            <div className="project-info-text">
              <p>
                A big challenge I had when creating this project was my desire to use two different animation programs. While wanting to utilize the faster rendering and Lumen capabilities of Unreal Engine, I found an awesome rig that was only compatible with Blender. While it would've been ideal to directly import my rig and animation directly into Unreal, the Blender-specific constraints of the rig I found did not make this possible. Therefore, I had to find a way to combine my Unreal Scene with my character animation.
              </p>
              <video className="project-info-animatic" src={compositeTutVideo} autoPlay loop muted playsInline />
              <p>
                To create a believable final render, I utilized the 360 camera in Unreal Engine, or Scene Capture Cube, to get an HDRI of my environment. I then imported that HDRI into Blender, allowing it to light my scene. I added additional lighting to create a more believable render, specifically adding a strong blue light to reflect the intense glow of the city. I then rendered with a shadow map, and used my EXR render in After Effects to composite the character animation believably into the environment.
              </p>
            </div>

            {/* Rain Version */}
            <h1>Rain Version</h1>
            <div className="project-info-text">
              <p>
                Initially, I had wanted my scene to be accompanied by a torrential downpour of rain. While I axed this detail in the final version due to time constraints, I added it in this alternative version. To create the rain effect, I used two Unreal Engine particle systems, one for the rain itself and the second for ground splash. I rendered out these two particle systems as individual EXR sequences, allowing me to make specific edits and color correction within After Effects to have them best fit the scene.
              </p>
            </div>
            <video className="project-info-animatic" src={rainFinalVideo} controls autoPlay loop muted playsInline />

            {/* Character Animation */}
            <h1>Character Animation</h1>
            <div className="project-info-text">
              <p>
                To use the rig, I had to take on the new task of learning how to animate in Blender. Although I struggled with the UI and Blender-specific features, I eventually got the hang of this new animation program and became comfortable with the program. This challenge, with the set camera movement given to participants, allowed me to really push the character animation by cheating the camera.
              </p>
            </div>
            <video className="project-info-animatic" src={shadowAltVideo} autoPlay loop muted playsInline />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChasmsCall