export const CartItem = (props) => {
    const { product, onIncrease, onDecrease, onRemove } = props;


    return <div className="cart-item">
        <div className="cart-item-content">
            <img className="cart-item-image" src={product.image} alt={product.title} />
            <p className="cart-item-title">{product.title}</p>
        </div>
        <div className="cart-item-controls">
            <div className="cart-item-actions">
                <button onClick={() => onDecrease(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => onIncrease(product.id)}>+</button>
            </div>
            <div className="cart-item-info">
                <p className="cart-item-price">${product.price}</p>
                <button onClick={() => onRemove(product.id)} className="cart-item-remove">Remove</button>
            </div>
        </div>
    </div>
}