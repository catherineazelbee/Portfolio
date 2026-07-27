import { useEffect, useRef, useState } from 'react'

function CodingCard({ title, skills, description, videoSrc, buttonText, buttonLink }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setModalOpen(false)
    }
  }

  return (
    <>
      {/* Coding Card */}
      <div
        className="project-container"
        ref={containerRef}
        onClick={openModal}
      >
        <h1 className="project-title">{title}</h1>

        {skills && (
          <p className="project-skills">{skills}</p>
        )}

        <p className="project-description">
          {description}
        </p>

        {isVisible ? (
          <video
            className="project-media"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <div
            className="project-media"
            style={{
              backgroundColor: '#dcd7f8',
              aspectRatio: '16/9'
            }}
          />
        )}

        <div className="button-container">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            onClick={(e) => e.stopPropagation()}
          >
            {buttonText}
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div className="modal-content">

            <div className="modal-header">
              <h2 className="modal-title">
                {title}
              </h2>

              <p className="coding-modal-skills">
                {skills}
              </p>

              <p className="coding-modal-description">
                {description}
              </p>
            </div>

            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              controls
            />

            <div className="button-container">
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                {buttonText}
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default CodingCard