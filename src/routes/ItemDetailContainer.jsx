import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetailContainer/ItemDetail"
import { useParams } from "react-router-dom"
import '../styles/itemDetailContainer.css'
import { getDoc, doc } from "firebase/firestore"
import { firestore } from "../firebase/client"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [isloading, setIsLoading] = useState (true)

    const {itemId} = useParams()
 
    useEffect(()=>{
        setIsLoading(true)

        const docRef = doc(firestore, "productos", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            
            .finally(()=> {
                setTimeout(()=>{
                    setIsLoading(false)
                },2000)
            })
    },[itemId])

    return (
        <div className="text-center itemDetailContainer">
        <title>Willow Aromatic - Producto</title>
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

