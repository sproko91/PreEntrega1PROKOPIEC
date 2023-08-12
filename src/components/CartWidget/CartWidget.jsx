
import cart from './assets/cart.svg';


const CartWidget = () => {

    return(
        <div>
            <img src={cart} alt="cart-widget"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget