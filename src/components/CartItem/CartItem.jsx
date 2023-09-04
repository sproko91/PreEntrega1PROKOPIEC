import { useContext } from "react";
import {CartContext} from '../../context/CartContext'
import '../../styles/CartItem.css';

const CartItem = ({ id, name, img, price, quantity, subtotal, aroma, date}) => {
    const { removeItem } = useContext(CartContext)

    console.log({id})

    return (
        <div className="CartItem">
            <img src={img} alt={name} className="ItemImgCart"/>
            <h3>{name}</h3>
            <p>{aroma}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio x unidad: $ {price}</p>
            <p><strong>Subtotal: $ {subtotal}</strong></p>
            <button onClick={() => removeItem(date)} className="btnAgregar">Eliminar</button>
       </div>
    );
};

export default CartItem;