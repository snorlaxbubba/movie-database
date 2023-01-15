import {NavLink} from 'react-router-dom';

function NavTrending() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to='/trending/all' className="favorites-button">All</NavLink>
            </li>

            <li>
                <NavLink to='/trending/tv' className="favorites-button">T.V.</NavLink>
            </li>

            <li>
                <NavLink to='/trending/movies' className="favorites-button">Movies</NavLink>
            </li>

            <li>
                <NavLink to='/trending/person' className="favorites-button">Cast</NavLink>
            </li>

        </ul>
    </nav>
  )
}
export default NavTrending