import { useAppDispatch, useAppSelector } from "../store/hook"
import { increment, decrement, incrementByAmount, reset, decrementByAmount } from "../store/counter"
import { useState } from "react";
export default function CounterPage() {

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    const [count1, setCount1] = useState(0)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-2 justify-center items-center">
                <button className="bg-green-500 px-2 py-1 rounded"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button className="bg-green-500 px-2 py-1 rounded"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Increment by 10
                </button>


                <span className="bg-yellow-500 p-6 rounded-xl">{count}</span>


                <button className="bg-red-500 px-2 py-1 rounded"

                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button className="bg-red-500 px-2 py-1 rounded"
                    onClick={() => dispatch(decrementByAmount(10))}
                >
                    Decrement by 10
                </button>
            </div>

            <button className="bg-red-600 text-black rounded-3xl h-10"
                onClick={() => dispatch(reset())}

            >
                Reset
            </button>

            <hr />

            <span>{count1}</span>
            <button className="bg-green-500 px-2 py-1 rounded"
                onClick={() => setCount1((value) => value + 1)}
            >
                Increment
            </button>
        </div >
    )
}