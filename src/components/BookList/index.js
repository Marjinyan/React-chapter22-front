import axios from 'axios'
import { useEffect, useState} from 'react'
import BookItem from "../BookItem"
import {API_BASE_URL} from '../../constants'
import styles from './style.module.css'

const BookList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios
            .get(API_BASE_URL)
            .then(result => {
                console.log(result.data) //{items:[...]}
                setBooks(result.data.items)
            })
    }, [])

    return <div className={styles.content}>
        <h3>Book List</h3>
        <div className={styles.books}>
            {
                books.map(elm => <BookItem key={elm.id} {...elm} />)
            }
        </div>
    </div>
}

export default BookList