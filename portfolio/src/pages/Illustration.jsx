import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'
import '../styles/illustration.css'

// Import media
const phoneCallVideo = 'https://media.catherineazelby.com/illust_phoneCall.gif'
const mindysFriends = 'https://media.catherineazelby.com/Illustrations/mindys_all_ref.png'
const spamtonae = 'https://media.catherineazelby.com/Illustrations/spamton_anim.mp4'
const roxyImg = 'https://media.catherineazelby.com/Illustrations/roxy.jpg'
const deltarunech3 = 'https://media.catherineazelby.com/Illustrations/deltarune_ch3_PRINT_FINAL.png'

function Illustration() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const illustrations = [
    {
      title: "Who's on the Phone?",
      src: phoneCallVideo,
      type: "image",
      description: "Animated illustration. Created using Adobe Photoshop and Adobe After Effects 2025."
    },
    {
      title: "Deltarune Chapter 3",
      src: deltarunech3,
      type: "image",
      description: "Fanart of Deltarune Chapter 3. Created in Adobe Photoshop 2025."
    },
    {
      title: "Mindy's Friends",
      src: mindysFriends,
      type: "image",
      description: "Illustration of original characters (from left: Mindy, Alia, Jacob, Simone, Xander). Created in Adobe Photoshop 2025."
    },
    {
      title: "Deltarune Chapter 2",
      src: spamtonae,
      type: "video",
      description: "Fanart of Deltarune Chapter 2. Created in Photoshop and tweened in Adobe After Effects."
    },
    {
      title: "Roxy",
      src: roxyImg,
      type: "image",
      description: "Risograph fanart print of Roxy Lalonde. Created in Adobe Photoshop 2025."
    }
  ]

  const openModal = (illustration) => {
    setSelectedImage(illustration)
    setModalOpen(true)
  }

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setModalOpen(false)
      setSelectedImage(null)
    }
  }

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Illustration</h1>

        <div className="illustration-gallery">
          {illustrations.map((item, index) => (
            <div
              key={index}
              className="content-container"
              onClick={() => openModal(item)}
            >
              <h3>{item.title}</h3>
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={item.src} alt={item.title} />
              )}
              <div className="hover-overlay"></div>
              <div className="see-project-btn">See the Project</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{selectedImage.title}</h2>
              <p className="modal-subtitle">{selectedImage.description}</p>
            </div>
            {selectedImage.type === "video" ? (
              <video
                src={selectedImage.src}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            ) : (
              <img src={selectedImage.src} alt={selectedImage.title} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Illustration