import Navbar from '../../components/Navbar'
import '../../styles/about.css'
import '../../styles/showcase.css'

// Import assets
const dreamSequenceVideo = 'https://media.catherineazelby.com/Animation/DreamSequence/DreamSequence_FINAL_CatherineAzelby.mp4'
import iconImg from '../../assets/DreamSequence_Logo.png'
const lukaLukaRefGif = 'https://media.catherineazelby.com/Animation/DreamSequence/LukaLukaNightFever.gif'
const intenseSingingRefGif = 'https://media.catherineazelby.com/Animation/DreamSequence/Hatsune_Miku_Project_DIVA_Future_Tone_PV_The_Intense_Voice_of_Hatsune_Miku_Rom_Eng_Esp_Subs.gif'
const loadingScreen1Gif = 'https://media.catherineazelby.com/Animation/DreamSequence/LoadingScreen1.gif'
const loadingScreen2Gif = 'https://media.catherineazelby.com/Animation/DreamSequence/LoadingScreen 2.gif'
const loadingScreen3Gif = 'https://media.catherineazelby.com/Animation/DreamSequence/LoadingScreen3.gif'
const loadingScreen4Gif = 'https://media.catherineazelby.com/Animation/DreamSequence/LoadingScreen4.gif'
const compositeTutVideo = 'https://media.catherineazelby.com/Animation/DreamSequence/DreamSequence_CompositeTut.mp4'

// OLD
import batmanAlleyImg from '../../assets/chasm_BatmanBeyondAlley.jpg'
import batmanCityImg from '../../assets/chasm_BatmanBeyondCity.jpg'
import spiderverseCityImg from '../../assets/chasm_SpiderverseCity.webp'

const rainFinalVideo = 'https://media.catherineazelby.com/chasm_RainFinalVersion.mp4'


function DreamSequence() {
  return (
    <>
      <Navbar />

      <div className="title">
        <h1>Dream Sequence: Challenge Submission</h1>
      </div>

      <div className="container">
        {/* Video Container */}
        <div className="video-container">
          <video
            className="animation-video"
            src={dreamSequenceVideo}
            autoPlay
            controls
            loop
          />
        </div>

        {/* Content Container */}
        <div className="content-container">
          <div className="credit">
            <p>Environment Modeling/Texturing/Lighting/MoCap Animation Cleanup in Blender, Additional texturing done in Substance Painter, Compositing/Editing in After Effects 2025</p>
            <p>Miku character Model by Ichi, MoCap Animation by mobiusP</p>
            <p>
              Find List of assets used here:{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1Z3PdnRjBRH_f-yH5CwZYr0LPIWwaqWx0ukuvvSDvEsw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Dream Sequence Asset List
              </a>
            </p>
          </div>
          <div className="project-info-container">
            <h1>Project Description</h1>
            <div className="project-info-text">
              <p>
                This project was my submission to the{' '}
                <a
                  href="https://createwithclint.com/community-challenges/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link"
                >
                  Dream Sequence Community Challenge
                </a>
                I spent around 100 hours creating this project, and learned new skills like 3D compositing and animation in Blender. Through this project, I also created my own workflow for combining Unreal Engine environments and particle systems with Blender character animation in After Effects.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={iconImg} alt="Dream Sequence Icon" />
              </div>
            </div>

            {/* Concept Development */}
            <h1>Concept Development</h1>
            <div className="project-info-text">
              <p>
                For this project, I took a lot of inspiration from <em>Hatsune Miku Project Diva</em>, a rhythm game series.
                Since this animation challenge was based around music, I was motivateed to create a Hatsune Miku inspired project.
                Two Project Diva levels I specifically refereced  and took inspiration from were <em>Luka Luka Night Fever</em> and 
                <em>The Intense Voice of Hatsune Miku</em>.
              </p>

              <div className="small-title">
                <h4>References</h4>
                <div className="project-info-img-container">
                  <img className="project-info-img" src={lukaLukaRefGif} alt="Luka Luka Night Fever Reference" />
                  <img className="project-info-img" src={intenseSingingRefGif} alt="Intense Singing Reference" />
                </div>
              </div>
              <p>
                To recreate the pop-up screens in <em>The Intense Voice of Hatsune Miku</em>, I manually created the screen designs in Photoshop and animated them in After Effects.
              </p>
              <div className="small-title">
                <h4>Custom Made Loading Screens</h4>
                <div className="project-info-img-container">
                  <img className="project-info-img" src={loadingScreen1Gif} alt="Loading Screen 1 Reference" />
                  <img className="project-info-img" src={loadingScreen2Gif} alt="Loading Screen 2 Reference" />
                  <br/>
                  <img className="project-info-img" src={loadingScreen3Gif} alt="Loading Screen 3 Reference" />
                  <img className="project-info-img" src={loadingScreen4Gif} alt="Loading Screen 4 Reference" />
                </div>
              </div>
            </div>

            {/* TODO: Add the stage render turnaround here */}

            {/* Compositing */}
            <h1>Compositing</h1>
            <div className="project-info-text">
              <p>
                Out of all my animation projects, I definitely spent the most time on compositing and color correction for this project. 
                I utilized three different layers of EXR renders, one of the environment, one of the character, and one of the emission. 
                This way, I could easily adjust the Miku to stand out from the environment, as well as adjust the emphasize the glow of the 
                different lights.
                 
              </p>
              <video className="project-info-animatic" src={compositeTutVideo} autoPlay loop muted playsInline />
            </div>

            {/* MoCap Cleanup */}
            <h1>MoCap Cleanup</h1>
            <div className="project-info-text">
              <p>
                I was able to save a lot of time on this project by using pre-existing motion capture data for the character animation. 
                However, I still had to clean up the animation to make it more believable and fit the scene better. 
                I used Blender's NLA animation editor to adjust the character's movements, adjusting the timing and spacing of my sourced mocap 
                data to better fit the timing of the camera. I also had to hand keyframe most of the facial animations myself, as it was usually 
                not present in the mocap data. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DreamSequence