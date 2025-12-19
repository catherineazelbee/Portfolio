import { NavLink } from 'react-router-dom'
import '../styles/about.css'

function Navbar() {
  return (
    <nav className="tabs">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/animation" className={({ isActive }) => isActive ? 'active' : ''}>
            Animation
          </NavLink>
        </li>
        <li>
          <NavLink to="/coding" className={({ isActive }) => isActive ? 'active' : ''}>
            Code
          </NavLink>
        </li>
        <li>
          <NavLink to="/illustration" className={({ isActive }) => isActive ? 'active' : ''}>
            Illustration
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar