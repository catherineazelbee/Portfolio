import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * A full-bleed panel on the homepage that plays a demo reel behind a
 * darkening overlay and links through to a work page.
 *
 * The video is only mounted once the panel scrolls into view, and it
 * pauses again when it leaves, so landing on the homepage never pulls
 * down two reels at once.
 */
function ReelPanel({ to, label, blurb, videoSrc, poster }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (videoRef.current) {
            const attempt = videoRef.current.play()
            if (attempt) attempt.catch(() => {})
          }
        } else if (videoRef.current) {
          videoRef.current.pause()
        }
      },
      { threshold: 0.25, rootMargin: '100px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Once the element mounts after becoming visible, kick playback off.
  useEffect(() => {
    if (isVisible && videoRef.current) {
      const attempt = videoRef.current.play()
      if (attempt) attempt.catch(() => {})
    }
  }, [isVisible])

  return (
    <Link to={to} className="reel-panel" ref={containerRef}>
      {isVisible ? (
        <video
          ref={videoRef}
          className="reel-panel-video"
          src={videoSrc}
          poster={poster}
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="reel-panel-video reel-panel-placeholder" />
      )}

      <div className="reel-panel-scrim" />

      <div className="reel-panel-content">
        <h3 className="reel-panel-label">{label}</h3>
        <p className="reel-panel-blurb">{blurb}</p>
        <span className="reel-panel-cta">View Reel</span>
      </div>
    </Link>
  )
}

export default ReelPanel
