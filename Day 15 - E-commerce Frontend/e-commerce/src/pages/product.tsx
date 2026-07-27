import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetProductById, type ProductSchema } from '../lib/product'
import ProductCard from '../components/product-card'
import { useAppDispatch } from '../store/hook'
import { addProduct } from '../store/product'

function Product() {


    const dispatch = useAppDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState<ProductSchema>()
    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        if (!id) return
        GetProductById(id).then((data) => {
            setProduct(data)
            console.log(data)
        }).catch(() => console.error("server error occured!"))
    }, [])



    function handleAddtoCart() {
        if (!product) return
        dispatch(addProduct({
            id: product?.id!,
            name: product?.name,
            price: product?.price,
            size: product?.size,
            quantity: quantity
        }))

        alert("Added to the card")

    }



    return (
        <div className='mt-6 flex flex-col gap-4'>
            <div className='bg-yellow-200 p-2 rounded-lg'>
                <h2 className='text-lg font-semibold text-slate-900'>
                    {product?.name}
                </h2>
                <div className='flex flex-row justify-between items-center'>
                    <span>{product?.size}</span>
                    <span>
                        Rs.{product?.price}
                    </span>
                </div>


            </div>

            select quantity

            <select value={quantity} onChange={(e) => {
                setQuantity(Number(e.target.value))
            }}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>

            <button
                onClick={() => handleAddtoCart()}
                className='bg-green-400 p-2 rounded-2xl cursor-pointer'>
                Add to cart
            </button>
        </div>
    )
}

export default Product