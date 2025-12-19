import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import '../styles/about.css'
import '../styles/animation.css'

// Import videos
import chasmCallVideo from '../assets/chasmCallFinal.mp4'
import dungeonVideo from '../assets/dungeon.mp4'
import mindysRoomVideo from '../assets/mindysRoomLoop.mp4'
import scytheVideo from '../assets/scytheAnim.mp4'

function Animation() {
  const projects = [
    {
      title: "Chasm's Call: Challenge Submission",
      videoSrc: chasmCallVideo,
      linkTo: "/animation/chasms-call"
    },
    {
      title: "The Dungeon",
      videoSrc: dungeonVideo,
      linkTo: "/animation/dungeon"
    },
    {
      title: "Mindy's Room",
      videoSrc: mindysRoomVideo,
      linkTo: "/animation/mindys-room"
    },
    {
      title: "Scythe Two Hit Combo Attack",
      videoSrc: scytheVideo,
      linkTo: "/animation/scythe-anim"
    }
  ]

  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <h1 className="page-title">Animation</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <VideoCard
              key={index}
              title={project.title}
              videoSrc={project.videoSrc}
              linkTo={project.linkTo}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Animation