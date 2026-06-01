import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './styles/index.css'

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/shop" element={<Home />} /> {/* For now, shop is same as home */}
                            <Route path="/about" element={<div style={{ padding: '10rem 5%' }}><h1>About Stellar</h1><p>We redefine premium tech shopping.</p></div>} />
                        </Routes>
                    </main>
                    <footer className="footer glass-morphism">
                        <div className="footer-content">
                            <p>&copy; 2026 Stellar Tech Inc. All rights reserved.</p>
                            <div className="footer-links">
                                <a href="#">Privacy</a>
                                <a href="#">Terms</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        </CartProvider>
    )
}

export default App
