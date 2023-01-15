import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/' className="favorites-button">Home</NavLink>
        </li>

        <li>
          <NavLink to='/trending' className="favorites-button">Trending</NavLink>
        </li>

        <li>
          <NavLink to='/about' className="favorites-button">About</NavLink>
        </li>

        <li>
          <NavLink to='/favorites' className="favorites-button">Favorites</NavLink>
        </li>

      </ul>
    </nav>
  )
}
export default Nav