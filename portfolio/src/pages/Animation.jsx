import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import '../styles/about.css'
import '../styles/animation.css'

// Import videos
const chasmCallVideo = 'https://media.catherineazelby.com/chasmCallFinal.mp4'
import dungeonVideo from '../assets/dungeon.mp4'
const mindysRoomVideo = 'https://media.catherineazelby.com/mindysRoomLoop.mp4'
// import scytheVideo from '../assets/scytheAnim.mp4'

function Animation() {
  const projects = [
    {
      title: "Chasm's Call: Challenge Submission",
      skills: "Unreal Engine · Blender · Nigara · After Effects",
      videoSrc: chasmCallVideo,
      linkTo: "/animation/chasms-call"
    },
    {
      title: "The Dungeon",
      skills: "Unreal Engine · Blender · MetaHuman Creator · After Effects",
      videoSrc: dungeonVideo,
      linkTo: "/animation/dungeon"
    },
    {
      title: "Mindy's Room",
      skills: "Maya · Arnold · Substance Painter · Substance Designer · Advanced Skeleton · Photoshop · Premiere Pro · After Effects",
      videoSrc: mindysRoomVideo,
      linkTo: "/animation/mindys-room"
    },
    // {
    //   title: "Scythe Two Hit Combo Attack",
    //   skills: "Maya",
    //   videoSrc: scytheVideo,
    //   linkTo: "/animation/scythe-anim"
    // }
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
              skills={project.skills}
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