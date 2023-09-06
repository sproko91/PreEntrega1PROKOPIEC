import {createContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    total: 0,
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const[cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const addItem =(item, quantity) => {
            const subtotal= item.price * quantity
            setCart(prev => [...prev, {...item, quantity, subtotal }])
            setTotalQuantity(prevQuantity => prevQuantity + quantity)
            toast.success('Se agrego al carrito!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    }

    const removeItem = (itemDate) => { 
        const productToRemove = cart.find(product => product.date === itemDate);
        if (productToRemove) {
            const cartUpdated = cart.filter(product => product.date !== itemDate);
        
        setCart(cartUpdated)
        setTotalQuantity(prevQuantity => prevQuantity - productToRemove.quantity)
        toast.error('Se elimino del carrito!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        }
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total: calculateTotal(), totalQuantity }}>
            { children }
            <ToastContainer />
        </CartContext.Provider>
    )
}