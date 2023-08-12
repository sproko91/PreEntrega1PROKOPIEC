import ItemCount from "../ItemCount/ItemCount"
import '../../styles/ItemDetail.css'

const ItemDetail = ({id, name, img, category, capacity, stock, price }) => {

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
                            Precio: {price}
                        </p>
                        <p>
                            Capacidad: {capacity}
                        </p>
                        <p>
                            Stock: {stock}
                        </p>
                        <select name="select">
                            <option value="value1" selected>Coco y Vanilla</option>
                            <option value="value2" >Flores de la India</option>
                            <option value="value3">Lavanda</option>
                            <option value="value4">Naranja y Canela</option>
                            <option value="value5">Naranja y Pimienta</option>
                            <option value="value6">Sandia y Pepino</option>
                            <option value="value7">Mix de Citricos</option>
                        </select>
                    </div>
                </section>
                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(count) => console.log(`Agregaste ${count} al carrito`)} />
                </footer>
                </div>  
        </article>
        </>
    )
}

export default ItemDetail