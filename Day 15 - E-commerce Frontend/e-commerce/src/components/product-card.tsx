import React from 'react'
import type { ProductSchema } from '../lib/product'
import { Link } from 'react-router'



function ProductCard({ product, islisting = false }: { product: ProductSchema; islisting?: boolean }) {
    return (
        <Link to={`/product/${product.id}`}>
            <div className='bg-yellow-200 p-2 rounded-lg'>
                <h2 className='text-lg font-semibold text-slate-900'>
                    {product.name}
                </h2>
                <div className='flex flex-row justify-between items-center'>
                    <span>{product.size}</span>
                    <span>
                        Rs.{product.price}
                    </span>
                </div>
            </div>

        </Link>
    )
}

export default ProductCard