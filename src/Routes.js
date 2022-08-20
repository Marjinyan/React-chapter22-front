import { useRoutes } from 'react-router-dom'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'
import BookList from './components/BookList'
import Home from './components/Home'
import Navbar from './components/Navbar'

export const MyRoutes = () => {
    const routing = useRoutes([
        {
            element: <Home/>,
            path:""
        },
        {
            path:"books",
            element:<Navbar/>,
            children:[
                { path:"", element:<BookList/> },
                { path:"add", element:<AddBook/> },
                { path:"item/:id", element:<BookDetails/> },
            ]
        },
        {
            path:"*",
            element:<h1>PAGE NOT FOUND!</h1>
        }
    ])
    return routing
}