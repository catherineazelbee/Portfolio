import { useEffect, useRef, useState } from 'react'

function CodingCard({ title, description, videoSrc, buttonText, buttonLink }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
    <div
      className="project-container"
      ref={containerRef}
    >
      <h1 className="project-title">{title}</h1>
      <p className="project-description">{description}</p>
      
      {isVisible ? (
        <video
          ref={videoRef}
          className="project-media"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <div 
          className="project-media" 
          style={{ backgroundColor: '#dcd7f8', aspectRatio: '16/9' }}
        />
      )}
      
      <div className="button-container">
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="contact-button">
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default CodingCard