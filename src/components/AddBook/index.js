import {useState} from 'react'
import styles from './style.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {API_BASE_URL} from '../../constants'

const FormGroup = ({ title, onChange, value }) => {
    return <div className={styles.group}>
        <label>{title}</label>
        <input 
            type="text"
            value={value}
            onChange={onChange}
        />
    </div>
}

const AddBook = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        pages: "",
        aboutAuthor: "",
        description: "",
        price: "",
        photo: "",
        authorPhoto: ""
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        for(let key in book){
            if (!book[key]) {
                return setError(`${key} is required.`)
            }
            if (key === "price" || key === "pages") {
                if(!Number.isInteger(+book[key])){
                    return setError(`${key} should be numeric`)
                }
            }
        }
        setError("")

        axios
            .post(API_BASE_URL, book)
            .then(response => {
                console.log(response.data) //{success: "OK", book:{...}}
                setBook({
                    title: "",
                    author: "",
                    pages: "",
                    aboutAuthor: "",
                    description: "",
                    price: "",
                    photo: "",
                    authorPhoto: ""
                })
                navigate("/books")
            })
    }

    const [error, setError] = useState("")

    return <div>
        <h3>Add Book</h3>
        {error && <p style={{color:"red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            {
                Object.keys(book).map((elm, index) => {
                    return <FormGroup 
                        key={index}
                        title={elm}
                        value={book[elm]}
                        onChange={e => setBook({...book, [elm]: e.target.value})}
                    />
                })
            }
            <button className={styles.button}>save</button>
        </form>
    </div>
}

export default AddBook