import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'
import '../styles/illustration.css'

// Import images
import phoneCallImg from '../assets/illust_phoneCall.gif'
import comicImg from '../assets/illust_Comic.png'
import maxBlaireImg from '../assets/illust_MaxBlaire.png'
import mindysFriendsImg from '../assets/illust_mindysFriends.png'
import princessImg from '../assets/illust_princess.gif'
import knightImg from '../assets/illust_knight.gif'

function Illustration() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const illustrations = [
    {
      title: "Who's on the Phone?",
      src: phoneCallImg,
      description: "Animated GIF illustration. Created using Adobe Photoshop 2025."
    },
    {
      title: "A Day in My Life: Comic Strip",
      src: comicImg,
      description: "Comic strip created for Color and Composition final project. Created using Adobe Photoshop 2023."
    },
    {
      title: "Max & Blair: Original Characters",
      src: maxBlaireImg,
      description: "Illustration of original characters Max and Blair. Created in Adobe Photoshop 2025."
    },
    {
      title: "Mindy's Friends",
      src: mindysFriendsImg,
      description: "Illustration of original characters (from left: Jacob, Mindy, Alia). Created in Adobe Photoshop 2025."
    },
    {
      title: "Princess Flora",
      src: princessImg,
      description: "Princess Flora character design and illustration created for Game Jam: Slice of Jam 2025. Created using Adobe Photoshop 2025."
    },
    {
      title: "Knight Mars",
      src: knightImg,
      description: "Knight Mars character design and illustration created for Game Jam: Slice of Jam 2025. Created using Adobe Photoshop 2025."
    }
  ]

  const openModal = (illustration) => {
    setSelectedImage(illustration)
    setModalOpen(true)
  }

  const closeModal = (e) => {
    // Close when clicking overlay background
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
            <img src={item.src} alt={item.title} />
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
          <img src={selectedImage.src} alt={selectedImage.title} />
        </div>
      </div>
    )}
  </>
  )
}

export default Illustration