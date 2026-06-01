import React from 'react'
import { useCart } from '../context/CartContext'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <ShoppingBag size={64} className="empty-icon" />
                <h2>Your cart is empty</h2>
                <p>Explore our products and find something you love.</p>
                <Link to="/" className="primary-btn">Start Shopping</Link>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Shopping Bag</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item glass-morphism">
                            <img src={item.image} alt={item.name} className="item-img" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">${item.price.toFixed(2)}</p>
                                <div className="item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary glass-morphism">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn primary-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
