import watchImg from '../assets/watch.png'
import budsImg from '../assets/buds.png'
import keyboardImg from '../assets/keyboard.png'

export const products = [
    {
        id: 1,
        name: 'Stellar Chrono X',
        price: 299.99,
        category: 'Wearables',
        description: 'Precision engineered smartwatch with a vibrant OLED display and 14-day battery life.',
        image: watchImg,
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: 'Acoustix Pro Buds',
        price: 159.00,
        category: 'Audio',
        description: 'Immersive noise-cancelling earbuds with high-fidelity spatial audio.',
        image: budsImg,
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        name: 'Tactile Matrix K2',
        price: 189.50,
        category: 'Computing',
        description: 'Premium mechanical keyboard with customizable RGB and tactile switches.',
        image: keyboardImg,
        rating: 4.7,
        reviews: 215
    }
]
