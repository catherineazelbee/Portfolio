import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import ScytheAnim from './pages/projects/ScytheAnim'

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/animation/scythe-anim" element={<ScytheAnim />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App