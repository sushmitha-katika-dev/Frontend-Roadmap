import z from "zod";



export const API_URL = "http://localhost:3000"
const PRODUCTS_URL = `${API_URL}/products`

export const addProductSchema = z.object({
    name: z.string().min(2, "Name is required").max(25, "Name is too long! Max 25 characters allowed"),
    price: z.number().min(100, "Price should be atleast Rs. 100").max(1000, "Price should be atmax Rs. 1000"),
    size: z.enum(["sm", "md", "lg", "2xl", "3xl"]),
    id: z.string().optional(),
})

export type ProductSchema = z.infer<typeof addProductSchema>;




// create a product
export async function CreateProduct(product: ProductSchema) {
    const res = await fetch(PRODUCTS_URL, {
        method: "POST",
        body: JSON.stringify(product),
    })


    if (!res.ok) throw new Error("Failed to create product")
    return res.json()
}


// get all products

export async function GetProducts(): Promise<ProductSchema[]> {
    const res = await fetch(PRODUCTS_URL, {
        method: "GET",
    })
    if (!res.ok) throw new Error("Failed to fetch products")
    return res.json()
}


// get ONE product BY ITS ID

export async function GetProductById(id: string): Promise<ProductSchema> {
    const res = await fetch(`${PRODUCTS_URL}/${id}`, {
        method: "GET",
    })
    if (!res.ok) throw new Error("Failed to fetch product")
    return res.json()
}