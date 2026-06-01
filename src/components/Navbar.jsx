import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const Navbar = () => {
    const { cartCount } = useCart()

    return (
        <nav className="navbar glass-morphism">
            <div className="nav-container">
                <Link to="/" className="logo">STELLAR</Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="nav-actions">
                    <button className="icon-btn"><Search size={20} /></button>
                    <button className="icon-btn"><User size={20} /></button>
                    <Link to="/cart" className="cart-btn">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <button className="menu-btn mobile-only"><Menu size={20} /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
