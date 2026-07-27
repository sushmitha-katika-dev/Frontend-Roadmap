import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter"
import productReducer from "./product"



function loadCounter() {
    try {
        const saved = localStorage.getItem("data")
        return saved ? (JSON.parse(saved)) : undefined
    } catch {
        return undefined
    }
}


const preload = loadCounter()

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer
    },
    preloadedState: preload ? { counter: preload.counter, product: preload.product } : undefined
});


store.subscribe(() => {
    localStorage.setItem("data", JSON.stringify(store.getState()));
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;