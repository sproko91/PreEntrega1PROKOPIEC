import ItemCount from "../ItemCount/ItemCount"
import '../../styles/ItemDetail.css'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, img, capacity, stock, price, }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const [aroma, setAroma] = useState('Coco y Vainilla')
    
    const {addItem} = useContext(CartContext)

    const handleSelectChange = (event) => {
        setAroma(event.target.value);
    }

    const handleOnAdd = (quantity) => {
        
        setQuantityAdded(quantity)
        const date = Date.now()

        const item ={
            id, name, price, img, aroma, date
        }

        addItem(item, quantity)

    }

    return(
        <>
        <article className="detailArticle">
            <div className="detailImgContainer">
                <picture>
                    <img src={img} alt={name} className="detailImg"></img>
                </picture>
            </div>
            <div className="detailText text-left">
                <header className="textLeft">
                    <h2>{name}</h2>
                </header>
                <section className="detailSection textLeft">
                    <div>
                        <p>
                            Precio: $ {price}
                        </p>
                        <p>
                            Capacidad: {capacity}
                        </p>
                        <p>
                            Stock: {stock}
                        </p>
                        <select name="select" onChange={handleSelectChange}>
                            <option value="Coco y Vanilla" selected>Coco y Vanilla</option>
                            <option value="Flores de la India" >Flores de la India</option>
                            <option value="Lavanda">Lavanda</option>
                            <option value="Naranja y Canela">Naranja y Canela</option>
                            <option value="Naranja y Pimienta">Naranja y Pimienta</option>
                            <option value="Sandia y Pepino">Sandia y Pepino</option>
                            <option value="Mix de Citricos">Mix de Citricos</option>
                        </select>
                    </div>
                </section>
                <footer>
                    {
                       quantityAdded > 0 ? (
                            <div className="renderCondicional">
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            <Link to={'/cart'} className="btnAgregar borde">Finalizar compra</Link>
                            <Link to={'/'} className="btnAgregar borde">Ver productos</Link>
                            </div>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
                </div>  
        </article>
        </>
    )
}

export default ItemDetail