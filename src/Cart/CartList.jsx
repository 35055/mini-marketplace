import { useEffect } from "react";
import { useState } from "react"
import { CartItem } from "./CartItem";
import "../../public/styles.css"

export const CartList = () => {
    const [products, setProducts] = useState([]);
    const totalSum = Number(
        products.reduce((sum, product) => sum + product.price * product.quantity, 0)
            .toFixed(2)
    );

    useEffect(() => {
        const loadCart = () => {
            const data = JSON.parse(localStorage.getItem("cart")) || [];
            setProducts(data);
        };
        loadCart();
        window.addEventListener("cartUpdated", loadCart)

        return () => {
            window.removeEventListener("cartUpdated", loadCart)
        }
    }, [])


    if (products.length === 0) {
        return <div className="cart-empty">Not Products</div>
    }


    return <>
        <h3 className="cart-title">Cart</h3>
        <div className="cart-list">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
        <p className="cart-total">Total: ${totalSum}</p>
    </>
}