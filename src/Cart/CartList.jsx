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

    const increase = (id) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    const decrease = (id) => {
        setProducts((prev) =>
            prev
                .map((p) =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                )
                .filter((p) => p.quantity > 0)
        );
    };

    const remove = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

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
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(products));
    }, [products])


    if (products.length === 0) {
        return <div className="">
            <h3 className="cart-title">Cart</h3>
            <div className="cart-empty">Not Products</div>
        </div>
    }


    return <>
        <h3 className="cart-title">Cart</h3>
        <div className="cart-list">
            {products.map((product) => (
                <CartItem
                    key={product.id}
                    product={product}
                    onIncrease={increase}
                    onDecrease={decrease}
                    onRemove={remove}
                />
            ))}
        </div>
        <p className="cart-total">Total: ${totalSum}</p>
    </>
}

