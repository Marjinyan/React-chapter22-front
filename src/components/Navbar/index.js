import {NavLink, Outlet} from 'react-router-dom'
import styles from './style.module.css'

const Navbar = () => {
    return <div>
        <nav className={styles.navbar}>
            <li><NavLink to="/books">All Books</NavLink></li>
            <li><NavLink to="/books/add">Add Book</NavLink></li>
            <li></li>
        </nav>
        <Outlet />
    </div>
}

export default Navbar