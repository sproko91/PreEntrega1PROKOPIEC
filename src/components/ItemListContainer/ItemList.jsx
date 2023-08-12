import Item from "./Item"
import '../../styles/itemList.css'

const ItemList = ({products}) => {

    return(
        <>
        <article>
            {products.map(prod =><Item key={prod.id}{...prod} />)}
        </article>
        </>
    )
}

export default ItemList