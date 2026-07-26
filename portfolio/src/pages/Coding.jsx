import Navbar from '../components/Navbar'
import CodingCard from '../components/CodingCard'
import '../styles/about.css'
import '../styles/animation.css'
import '../styles/coding.css'

// Import videos
const easyBlinkVideo = 'https://media.catherineazelby.com/easyBlink_demo.mp4'
const layoutLinkVideo = 'https://media.catherineazelby.com/Coding/layoutLink_demo.mp4'
const cameraLink = 'https://media.catherineazelby.com/Coding/CameraLinkDemo.mp4'
const renderStack = 'https://media.catherineazelby.com/Coding/Renderstack_Demo.mp4'

function Coding() {
  const projects = [
    {
      title: "CameraLink: USD Maya/Unreal Plugin",
      skills: "Python · C++ · USD · Maya · Unreal Engine",
      description: "Plugin for a streamlined pipeline for transferring animated cameras from Maya to Unreal Engine using USD format.",
      videoSrc: cameraLink,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/CameraLink"
    },
    {
      title: "EasyBlink: Maya Plugin",
      skills: "Python · MEL · Maya",
      description: "Plugin for quickly animating blinks for multiple character rigs in Autodesk Maya.",
      videoSrc: easyBlinkVideo,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/EasyBlink"
    },
    {
      title: "LayoutLink: USD Maya/Unreal Plugin",
      skills: "Python · C++ · USD · Maya · Unreal Engine",
      description: "Enables scene data exchange using industry-standard USD composition between Maya and Unreal Engine 5. Work-in-progress senior capstone project.",
      videoSrc: layoutLinkVideo,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/LayoutLink"
    },
    {
      title: "RenderStack",
      skills: "Typescript · React · Three.js",
      description: "Supports a native 3D model viewport that lets users upload and interact with 3D GLB assets in browser. Project by Catherine Azelby, Natasha Mishra Daas, Erika Ding, & Meredith Scott.",
      videoSrc: renderStack,
      buttonText: "GitHub",
      buttonLink: "https://github.com/neu-cs4530/fall25-project-group-201"
    }
  ]

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Code</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <CodingCard
              key={index}
              title={project.title}
              skills={project.skills}
              description={project.description}
              videoSrc={project.videoSrc}
              buttonText={project.buttonText}
              buttonLink={project.buttonLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Coding