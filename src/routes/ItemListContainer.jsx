import ItemList from "../components/ItemListContainer/ItemList"
import '../styles/itemListContainer.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestore } from "../firebase/client"

 const ItemListContainer = ({ greeting }) => {

    const [isloading, setIsLoading] = useState (true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [title, setTitle] = useState ('Willow Aromatic - Tienda Online')
 
    useEffect(()=>{

        setIsLoading(true)

        const collectionRef = categoryId
            ? query(collection(firestore, 'productos'), where('category', '==', categoryId))
            : collection(firestore, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setTimeout(()=>{
                    setIsLoading(false)
                },2000)
                
                if (categoryId != undefined){
                    setTitle('Willow Aromatic - ' + categoryId)
                }
                else{
                    setTitle('Willow Aromatic - Tienda Online')
                }
            })
        },[categoryId]
    )

    return (
        <>
        <title>{title}</title>
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
        </>
    )
 }

export default ItemListContainer