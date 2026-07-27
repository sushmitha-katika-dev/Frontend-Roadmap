import { NavLink } from "react-router";
import { useAppDispatch } from "../../store/hook";
import { increment, incrementByAmount } from "../../store/counter";


export default function Footer() {
    const dispatch = useAppDispatch();
    return (
        <footer className="flex flex-col gap-4 justify-center items-center bg-slate-800 py-10 min-h-37.5 mt-auto h-full text-white">
            <div className="flex flex-row gap-4">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/login"} >Login</NavLink>
                <NavLink to={"/add-product"} >Add Product</NavLink>
            </div>

            <div className="flex flex-row gap-2">
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
            </div>
        </footer>
    )
}