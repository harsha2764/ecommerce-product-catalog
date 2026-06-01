import React from 'react'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Experience the <span className="gradient-text">Future</span> of Tech</h1>
                <p className="hero-subtitle">Curated collection of premium gadgets designed for the modern lifestyle. Aesthetic meets performance.</p>
                <div className="hero-actions">
                    <button className="primary-btn">Shop Now <ArrowRight size={18} /></button>
                    <button className="secondary-btn">View Collections</button>
                </div>
            </div>
            <div className="hero-visual">
                <div className="glow-sphere"></div>
            </div>
        </section>
    )
}

export default Hero
