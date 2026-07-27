import { NavLink } from "react-router";
import { useAppSelector } from "../../store/hook";
import { NAV_LINKS } from "../../lib/nav";

export default function Navbar() {


    const products = useAppSelector((state) => state.product.products)

    return (
        <nav className="flex flex-row gap-3 justify-between items-center mb-4 px-10 pt-4">
            <div>
                <h1>Tshirt Farm</h1>
            </div>
            <div className="flex flex-row gap-2 items-center">
                {NAV_LINKS.map((link) => {
                    return <NavLink to={link.url} key={link.url}

                        className={"hover:bg-slate-200 hover:text-violet-500 px-1 py-1 rounded"}
                    >

                        {link.name}

                        {link.url === "/cart" && <span className="ml-2 rounded-xl bg-amber-400 px-1">{products.length}</span>}
                    </NavLink>
                })}
            </div>
        </nav>
    )
}