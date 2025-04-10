import React from 'react'
import ProductCard from './ProductCard'
import { useAppCOntext } from '../context/AppContext'

const BestSeller = () => {

    const { products } = useAppCOntext();
    return (
        <div className='mt-10'>
            <h2 className='text-2xl md:text-3xl font-medium'>Best Sellers</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 mt-6 gap-3'>
                {/* Replace with actual product cards */}
                {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}

            </div>
        </div>
    )
}

export default BestSeller
