import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import '../../styles/Cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {    
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0){
        return (
            <div className='cartQuantityZero'>
                <h1>No hay items en el carrito</h1>
                <Link to={'/'} className='cartCheckout'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cart'>
        <title>Willow Aromatic - Carrito</title>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className='cartTotal'>
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()} className='btnAgregar'>Limpiar carrito</button>
            <Link to={'/checkout'} className='cartCheckout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart