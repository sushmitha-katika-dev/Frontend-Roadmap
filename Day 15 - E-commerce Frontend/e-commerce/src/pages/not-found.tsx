import { NavLink } from "react-router";


export default function NotFound() {

    return (
        <div>
            <h4>Not Found</h4>
            <NavLink to="/">Go to Home</NavLink>
        </div>
    )
}