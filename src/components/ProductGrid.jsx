import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './ProductGrid.css'

const ProductGrid = () => {
    return (
        <section className="product-grid-section">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductGrid
