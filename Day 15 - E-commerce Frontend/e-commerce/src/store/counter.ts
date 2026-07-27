import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = { value: 200 }



const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        reset: (state) => { state.value = initialState.value }
    }
})


export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer