import Navbar from '../components/Navbar'
import CodingCard from '../components/CodingCard'
import '../styles/about.css'
import '../styles/animation.css'
import '../styles/coding.css'

// Import videos
import easyBlinkVideo from '../assets/easyBlink_thumbnail.mp4'
import layoutLinkVideo from '../assets/layoutLink_demo.mp4'
import vrftVideo from '../assets/VRFT_highlightReel.mp4'
import portfolioVideo from '../assets/portfolio_thumbnail.mp4'

function Coding() {
  const projects = [
    {
      title: "EasyBlink Maya Plugin",
      description: "Plugin for quickly animating blinks for multiple character rigs in Autodesk Maya. Built in Visual Studio Code using Python and MEL.",
      videoSrc: easyBlinkVideo,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/EasyBlink"
    },
    {
      title: "LayoutLink: USD Maya/Unreal Plugin",
      description: "Enables scene data exchange using industry-standard USD composition between Maya and Unreal Engine 5. Work-in-progress senior capstone project. Built in Visual Studio Code using Python, MEL, and C++.",
      videoSrc: layoutLinkVideo,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/LayoutLink"
    },
    {
      title: "VR Field Trips",
      description: "Virtual reality playable prototype focusing on immersive STEM education. Simulates the role of a car crash test engineer to reinforce critical physics concepts through experiential learning. Created with Unreal Engine blueprint scripting and Fab assets.",
      videoSrc: vrftVideo,
      buttonText: "Lab Website",
      buttonLink: "https://xred.sites.northeastern.edu/2025/03/26/lab-project-2/"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website developed in React to showcase animation and development work.",
      videoSrc: portfolioVideo,
      buttonText: "GitHub",
      buttonLink: "https://github.com/catherineazelbee/Portfolio"
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