import { useState } from "react"
import { z } from "zod";
import { addProductSchema, CreateProduct, type ProductSchema } from "../lib/product";


// sm , md , lg, xl, 2xl , 3xl



export default function AddProductPage() {


    const [formdata, setFormdata] = useState<ProductSchema>({
        name: "abhishek",
        price: 300,
        size: "md"
    })
    const [error, setError] = useState<Record<string, string[] | undefined>>({})


    async function handleSubmit() {
        setError({})
        const result = addProductSchema.safeParse(formdata)
        if (!result.success) {
            setError(z.flattenError(result.error).fieldErrors);
            return;
        }
        console.log(formdata)
        // backend logic api request
        const saved = await CreateProduct(formdata)
        if (saved) alert("Product saved")

    }

    return (
        <div className="h-full flex flex-col mb-10">
            <h2 className="text-center">Add Product</h2>

            <form className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                <label htmlFor="">Name</label>
                <input
                    value={formdata?.name}
                    onChange={(e) => {
                        setFormdata({
                            ...formdata,
                            name: e.target.value || ""
                        })
                    }}
                    className="caret-pink-500 bg-yellow-200 outline-none"
                />
                {error.name && <span className="text-red-600">{error.name[0]}</span>}

                <label htmlFor="">price</label>
                <input type="number"
                    value={formdata?.price}
                    onChange={(e) => {
                        setFormdata({
                            ...formdata,
                            price: Number(e.target.value)
                        })
                    }}

                    className="caret-pink-500 bg-yellow-200 outline-none" />

                {error.price && <span className="text-red-600">{error.price[0]}</span>}


                <label htmlFor="">size</label>
                <select
                    className="caret-pink-500 bg-yellow-200 outline-none"
                    value={formdata?.size}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setFormdata({
                            ...formdata,
                            size: e.target.value as "md" | "lg" | "2xl" | "3xl" | "sm"
                        })
                    }}

                >
                    <option value="">--Please choose an option--</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                    <option value="2xl">2xl</option>
                    <option value="3xl">3xl</option>
                    <option value="4xl">4xl</option>
                </select>

                {error.size && <span className="text-red-600">{error.size[0]}</span>}


                <button className="bg-green-400 rounded">
                    Submit
                </button>
            </form>
        </div>
    )
}