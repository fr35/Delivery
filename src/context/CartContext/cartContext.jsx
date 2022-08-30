import { createContext, useState } from 'react'

export const cartContext = createContext()
export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])
    let copyCart = [...cart]

    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === id ))
    }
    
    function findItem(id) {
        return (copyCart.find(item => item.id === id))
    }

    function addToCart(item, cantidad) {
        if (isInCart(item.id)) {
            const itemId = findItem(item.id)
            if (item.stock > 0){
                itemId.cantidad += cantidad;
                item.stock -= cantidad
                setCart(copyCart)
            }
        }
        else {
            copyCart.push({ ...item, cantidad });
            item.stock-= cantidad
            setCart(copyCart)
        }
    }
    
    function removeItemInCart(id) {
        const itemId = findItem(id)
        const itemRemove = copyCart.indexOf(itemId)
        copyCart.splice(itemRemove, 1)
        setCart(copyCart)
    }
    
    function removeAll() {
        copyCart = []
        setCart(copyCart)
    }
    
    function cantidadTotal() {
        let cantidadEnCarito = 0;
        copyCart.map(item => cantidadEnCarito += item.cantidad);
        return cantidadEnCarito;
    }
    
    function precioTotalEnCarrito(){
        let precioTotalEnCarrito = 0;
        copyCart.map ((item) => precioTotalEnCarrito += item.precio * item.cantidad);
        return precioTotalEnCarrito;
    }
    
    return (
        <cartContext.Provider value={{cart, addToCart, removeItemInCart, removeAll, cantidadTotal, precioTotalEnCarrito}}>
            {children}
        </cartContext.Provider>
    )
    
}