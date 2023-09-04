import {createContext, useState} from 'react'

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
    }

    const removeItem = (itemDate) => { 
        const productToRemove = cart.find(product => product.date === itemDate);
        if (productToRemove) {
            const cartUpdated = cart.filter(product => product.date !== itemDate);
        
        setCart(cartUpdated)
        setTotalQuantity(prevQuantity => prevQuantity - productToRemove.quantity)
        }
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total: calculateTotal(), totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}