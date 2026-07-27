import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { removeProduct } from '../store/product'

function CartPage() {

    const products = useAppSelector((state) => state.product.products)
    const dispatch = useAppDispatch()

    const total_items = products.reduce((sum, item) => sum + item.quantity, 0)

    const total_price = products.reduce((sum, item) => sum + item.price * item.quantity, 0)


    return (
        <div>
            <div className='flex flex-row items-center justify-between '>
                <h2>Your Cart</h2>
                <span>{total_items}</span>
            </div>
            <hr />

            {products.map((product) => {
                return (
                    <div className="flex items-center justify-between gap-3 py-3">
                        <div>
                            <h2 className="text-sm font-medium text-slate-800">
                                {product.name}
                            </h2>
                            <p className="text-xs text-slate-500">
                                Size {product.size} · Rs. {product.price} × {product.quantity}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Rs. {product.price * product.quantity}
                            </h3>
                            {/* UI only — no handler wired yet. */}
                            <button
                                type="button"
                                className="shrink-0 text-xs font-medium text-red-600 hover:underline"
                                onClick={() => dispatch(removeProduct(product.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                )
            })}

            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                <h2 className="text-base font-semibold text-slate-900">Total</h2>
                <h2 className="text-base font-bold text-slate-900">
                    Rs. {total_price}
                </h2>
            </div>

            <button className="mt-4 w-full bg-green-600"

            >
                Checkout
            </button>
        </div>
    )
}

export default CartPage