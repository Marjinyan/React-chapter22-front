import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import BookItem from "../BookItem"
import styles from './style.module.css'
import {API_BASE_URL} from '../../constants'

const BookDetails = () => {
    const [book, setBook] = useState(null)
    const [otherBooks, setOtherBooks] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/${id}`)
            .then(result => {
                if("error" in result.data){
                    navigate("/books")
                } else {
                    setBook({...result.data.book})
                    setOtherBooks([...result.data.others])
                }
            })
    }, [id])
    return !book ? <p>Loading...</p> : <div className={styles.content}>
        <div className={styles.row}>
            <div className={styles.book}>
                <img src={book.photo}/>
            <div>
            <h2 className={styles.title}>{book.title}</h2>
            <p><b>{book.pages} pages</b></p>
            <p className={styles.price}>{book.price} AMD</p>
            <p>{book.description}</p>
        </div>
        </div>
            <div className={styles.author}>
                <img src={book.authorPhoto}/>
                <h3>{book.author}</h3>
                <p >{book.aboutAuthor}</p>
                <div className={styles.other}>
                    <h4>OTHER BOOKS</h4>
                    <div className={styles.row}>
                    {
                        otherBooks.map(elm => {
                            return <BookItem key={elm.id} {...elm} />
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BookDetails