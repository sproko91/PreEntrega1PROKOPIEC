import ItemList from "../components/ItemListContainer/ItemList"
import '../styles/itemListContainer.css'
import { useEffect, useState } from "react"
import {getProducts, getProductByCategory} from '../components/Products/Products'
import { useParams } from "react-router-dom"

 const ItemListContainer = ({ greeting }) => {

    const [isloading, setIsLoading] = useState (true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
 
    useEffect(()=>{

        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setIsLoading(false)
            })
        },[categoryId]
    )

    return (
        <div className="bodyArticulos">
            {isloading ? (
            <>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
            </>
            ) 
            : <>
            {categoryId ? (
                    <h1 className="greeting">{categoryId}</h1>)
                :<h1 className="greeting">{greeting}</h1> 
            }
            <ItemList products={products}/>
            </>
            }
        </div>
    )
 }

export default ItemListContainer