import { NavLink } from 'react-router-dom';

function NavSort() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to='/sort/popular' className="favorites-button">Popular</NavLink>
            </li>

            <li>
                <NavLink to='/sort/top-rated' className="favorites-button">Top Rated</NavLink>
            </li>

            <li>
                <NavLink to='/sort/now-playing' className="favorites-button">Now Playing</NavLink>
            </li>

            <li>
                <NavLink to='/sort/upcoming' className="favorites-button">Upcoming</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default NavSort