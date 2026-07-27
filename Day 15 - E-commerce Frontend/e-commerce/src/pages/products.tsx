import React, { useEffect, useState } from 'react'
import { GetProducts, type ProductSchema } from '../lib/product'
import ProductCard from '../components/product-card'

function Products() {

    const [products, setProducts] = useState<ProductSchema[]>([])

    useEffect(() => {
        GetProducts().then((data) => {
            setProducts(data)
        }).catch(() => console.error("server error occured!"))
    }, [])

    return (
        <section>
            <h1>All Products</h1>

            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                {products.map((product) => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </section>
    )
}

export default Products