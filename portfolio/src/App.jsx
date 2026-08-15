import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Animation from './pages/Animation'
import Coding from './pages/Coding'
import Illustration from './pages/Illustration'
import Contact from './pages/Contact'

// Project detail pages
import ChasmsCall from './pages/projects/ChasmsCall'
import Dungeon from './pages/projects/Dungeon'
import MindysRoom from './pages/projects/MindysRoom'
import DreamSequence from './pages/projects/DreamSequence'

// Jump to the top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project detail pages */}
        <Route path="/animation/chasms-call" element={<ChasmsCall />} />
        <Route path="/animation/dungeon" element={<Dungeon />} />
        <Route path="/animation/mindys-room" element={<MindysRoom />} />
        <Route path="/animation/dream-sequence" element={<DreamSequence />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App