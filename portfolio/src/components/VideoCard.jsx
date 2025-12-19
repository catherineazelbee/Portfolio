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
          observer.disconnect() // Stop observing once visible
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Start loading slightly before visible
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
      <Link to={linkTo}>
        <h1 className="project-title">{title}</h1>
        
        {isVisible ? (
          <video
            ref={videoRef}
            className="animation-video"
            src={videoSrc}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
          />
        ) : (
          // Placeholder while not visible - maintains layout
          <div 
            className="animation-video" 
            style={{ backgroundColor: '#dcd7f8' }}
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