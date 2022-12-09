import {NavLink} from 'react-router-dom';

function NavTrending() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/trending/all'>All</NavLink>
            </li>

            <li>
                <NavLink to='/trending/tv'>T.V.</NavLink>
            </li>

            <li>
                <NavLink to='/trending/movies'>Movies</NavLink>
            </li>

            <li>
                <NavLink to='/trending/person'>Cast</NavLink>
            </li>

        </ul>
    </nav>
  )
}
export default NavTrending