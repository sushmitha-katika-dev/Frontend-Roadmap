import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    id: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
}

const initialState = {
    products: [] as ProductState[]
}



const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductState>) => {


            // Check if the product already exists in the cart

            const existingProduct = state.products.find(product => product.id === action.payload.id);

            if (existingProduct) {
                const otherProdcts = state.products.filter(product => product.id !== action.payload.id);
                console.log("product already exists in the cart, updating quantity")
                const updatedProduct = {
                    id: existingProduct.id,
                    name: existingProduct.name,
                    size: existingProduct.size,
                    price: existingProduct.price,
                    quantity: existingProduct.quantity + action.payload.quantity
                }
                state.products = [...otherProdcts, updatedProduct];
            } else {
                state.products.push(action.payload)
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },

        clearCart: (state) => {
            state.products = []
        }
    }
})


export const { addProduct, removeProduct, clearCart } = productSlice.actions;
export default productSlice.reducer