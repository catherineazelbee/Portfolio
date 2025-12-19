import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function VideoCard({ title, videoSrc, linkTo, poster }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Intersection Observer - only load video when card is in viewport
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

  // Play on hover
  const handleMouseEnter = () => {
    if (videoRef.current && isLoaded) {
      videoRef.current.play()
    }
  }

  // Pause when not hovering
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0  // Reset to beginning
    }
  }

  return (
    <div
      className="project-container"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={linkTo}>
        <h1 className="project-title">{title}</h1>
        
        {isVisible ? (
          <video
            ref={videoRef}
            className="animation-video"
            src={videoSrc}
            poster={poster}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
          />
        ) : (
          <div 
            className="animation-video" 
            style={{ backgroundColor: '#dcd7f8', aspectRatio: '16/9' }}
          />
        )}
        
        <div className="middle-button">
          <div className="middle-button-text">See the Project</div>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard