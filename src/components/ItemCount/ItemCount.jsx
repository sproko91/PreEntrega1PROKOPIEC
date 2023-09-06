import useCounter from '../Hooks/useCounter'
import '../../styles/ItemCount.css'


const ItemCount = ({stock, onAdd}) => {
    
    const {count, increase, decrease} = useCounter(1);
    
    return(
        <>
    <div className="counter">
        <button className='btnAgregar' disabled={count<=1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='btnAgregar' disabled={count>=stock} onClick={increase}>+</button>
    </div>
    <div className='agregarCarrito'>
        <button className='btnAgregar' disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
    </>
    )
}

export default ItemCount