import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Home = () => {
    return <div>
        <h3 className={styles.title}>Best books of all time</h3>
        <div className={styles.links}>
            <Link to="/books">All books</Link>
            <Link to="/books/add">Add a book</Link>
        </div>
        <img className={styles.photo} src={require("../../photos/cover.jpeg")} />
    </div>
}

export default Home