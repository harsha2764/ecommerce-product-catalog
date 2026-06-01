import React from 'react'
import { Plus, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()

    return (
        <div className="product-card glass-morphism">
            <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <button className="add-btn" onClick={() => addToCart(product)}>
                    <Plus size={20} />
                </button>
            </div>
            <div className="product-info">
                <div className="category">{product.category}</div>
                <h3 className="name">{product.name}</h3>
                <div className="rating">
                    <Star size={14} fill="currentColor" />
                    <span>{product.rating}</span>
                    <span className="reviews">({product.reviews})</span>
                </div>
                <div className="price">${product.price.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default ProductCard
