import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetailContainer/ItemDetail"
import {getProductById} from "../components/Products/Products"
import { useParams } from "react-router-dom"
import '../styles/itemDetailContainer.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
         
    const [isloading, setIsLoading] = useState (true)

    const {itemId} = useParams()
 
    useEffect(()=>{
            getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setIsLoading(false)
            })
    },[itemId])

    return (
        <div className="text-center itemDetailContainer">
        {isloading ? (
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>) 
            : <ItemDetail {...product}/>
        }
        </div>
    )
}

export default ItemDetailContainer

