import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import '../styles/about.css'
import '../styles/animation.css'
import '../styles/reel.css'

// Import assets
import thumbnail from '../assets/thumbnail.png'

// Import videos
const animReel = 'https://media.catherineazelby.com/demoReel.mp4'
const chasmCallVideo = 'https://media.catherineazelby.com/chasmCallFinal.mp4'
import dungeonVideo from '../assets/dungeon.mp4'
const mindysRoomVideo = 'https://media.catherineazelby.com/mindysRoomLoop.mp4'
const dreamSequenceVideo = 'https://media.catherineazelby.com/Animation/DreamSequence/DreamSequence_FINAL_CatherineAzelby.mp4'

function Animation() {
  const projects = [
    {
      title: "Chasm's Call: Challenge Submission",
      skills: "Unreal Engine · Blender · Niagara · After Effects",
      videoSrc: chasmCallVideo,
      linkTo: "/animation/chasms-call"
    },
    {
      title: "Dream Sequence",
      skills: "Blender · Substance Painter · Photoshop · After Effects",
      videoSrc: dreamSequenceVideo,
      linkTo: "/animation/dream-sequence"
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
    }
  ]

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Animation</h1>

        <div className="page-reel">
          <video
            className="page-reel-video"
            src={animReel}
            poster={thumbnail}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
          />
        </div>

        <h2 className="section-lead">Browse Projects</h2>

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