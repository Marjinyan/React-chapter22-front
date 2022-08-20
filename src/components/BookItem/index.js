import { Link } from 'react-router-dom'
import styles from './style.module.css'

const BookItem = book => {
    return <div className={styles.book}>
        <img src={book.photo}/>
        <h3>{book.title}</h3>
        <p>By <b>{book.author}</b></p>
        <p>PRICE <b>{book.price} AMD</b></p>
        <Link to={"/books/item/"+book.id}>See Details </Link>
    </div>
}

export default BookItem